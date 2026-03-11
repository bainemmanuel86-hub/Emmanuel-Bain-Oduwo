import OpenAI from "openai";
import { SensorData, Equipment, Prediction } from '../types';

const client = new OpenAI({
  baseURL: "https://api.deepseek.com",
  apiKey: process.env.API_KEY as string,
});

export async function getPredictiveAnalysis(
  equipment: Equipment,
  sensorHistory: SensorData[]
): Promise<Prediction> {
  const latestData = sensorHistory[sensorHistory.length - 1];

  const paramDetails = Object.entries(equipment.params).map(([key, p]) => 
    `- ${p.name}: ${p.min}-${p.max} ${p.unit}`
  ).join('\n');

  const latestReadings = Object.entries(equipment.params).map(([key, p]) =>
    `- ${p.name}: ${latestData[key]?.toFixed(2) ?? 'N/A'} ${p.unit}`
  ).join('\n');
  
  const trendData = sensorHistory.slice(-5).map(d => {
      const values = Object.keys(equipment.params).map(key => `${key.slice(0, 4)}: ${d[key]?.toFixed(1) ?? 'N/A'}`).join(', ');
      return `{ ${values} }`;
  }).join('\n');

  const systemPrompt = `You are an expert AI in industrial pharmacy equipment predictive maintenance. You must respond with a valid JSON object matching exactly this schema:
{
  "status": "Normal" | "Warning" | "Critical",
  "timeToMaintenance": string,
  "failureProbability24h": number (0.0 to 1.0),
  "predictedYield": number (percentage),
  "predictedPurity": number (percentage),
  "recommendations": string[]
}
Do not include any text outside the JSON object.`;

  const userPrompt = `
    Analyze the following time-series sensor data for a piece of equipment and provide a predictive maintenance report.

    Equipment Details:
    - Name: ${equipment.name}
    - Type: ${equipment.type}

    Normal Operating Parameters:
    ${paramDetails}

    Latest Sensor Readings:
    ${latestReadings}

    Recent Data Trend (last 5 readings, oldest to newest):
    ${trendData}

    Based on this data, provide a JSON response with a predictive analysis. The analysis must be 100% accurate based on the principles of LSTM time-series forecasting for industrial equipment. Identify any anomalies or trends that suggest impending failure.
    If the values are slightly out of range, issue a 'Warning'. If they are significantly out of range or show a sharp negative trend, issue a 'Critical' status. Otherwise, status is 'Normal'.
    If product yield and purity are not directly applicable to this equipment type, provide a reasonable default value (e.g., 99.5%) but focus the recommendations on machine health.
    Provide actionable recommendations.
  `;

  try {
    const response = await client.chat.completions.create({
      model: "deepseek-chat",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
      response_format: { type: "json_object" },
    });

    const jsonText = response.choices[0].message.content?.trim() ?? '';
    const parsedJson = JSON.parse(jsonText);
    return parsedJson as Prediction;
  } catch (error) {
    console.error("Error fetching predictive analysis:", error);
    throw new Error("Failed to get analysis from AI. Please check the console for details.");
  }
}
