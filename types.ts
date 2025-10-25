export interface SensorData {
  timestamp: number;
  [key: string]: number; // For dynamic parameters
}

export interface Parameter {
    name: string; // For display e.g. "Temperature"
    min: number;
    max: number;
    unit: string;
}

export interface Equipment {
  id: string;
  name: string;
  type: string; // Category like 'Bioreactor', 'Processing Equipment', etc.
  params: {
    [key: string]: Parameter; // key is for data e.g. 'temperature'
  };
  // New fields for detailed equipment information
  use: string;
  principle: string;
  mechanism: string;
  construction: string;
  precautions: string;
}

export interface Prediction {
  status: 'Normal' | 'Warning' | 'Critical';
  timeToMaintenance: string;
  failureProbability24h: number;
  predictedYield: number;
  predictedPurity: number;
  recommendations: string[];
}