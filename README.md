# AI Reactive Maintenance for Big Pharma Machines

An AI-powered predictive maintenance dashboard for pharmaceutical bioreactors. It visualizes live sensor data and leverages **Google Gemini AI** to predict equipment failure probability, time to maintenance, and key quality metrics — helping pharma teams prevent costly downtime before it happens.

## Features

- 📊 **Live Sensor Dashboard** — Real-time visualisation of bioreactor metrics (temperature, pH, dissolved oxygen, agitation speed, pressure, and more) using interactive Recharts graphs
- 🤖 **AI-Powered Predictions** — Google Gemini AI analyses sensor trends and predicts equipment failure probability, estimated time to next maintenance, and batch quality score
- ⚠️ **Anomaly Detection** — Automatic flagging of out-of-range sensor readings with severity levels
- 🧪 **Maintenance Recommendations** — AI-generated, actionable maintenance suggestions based on current sensor state
- 📱 **Responsive UI** — Clean, dark-themed interface built with Tailwind CSS

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend Framework | React 19 + TypeScript |
| Build Tool | Vite |
| Charts | Recharts |
| AI / LLM | Google Gemini AI (`@google/genai`) |
| Styling | Tailwind CSS |
| Deployment | Vercel |

## Prerequisites

- **Node.js 18+**
- A **Google Gemini API key** — get one free at [Google AI Studio](https://aistudio.google.com/app/apikey)

## Local Development

1. **Clone the repository**

   ```bash
   git clone https://github.com/bainemmanuel86-hub/Emmanuel-Bain-Oduwo.git
   cd Emmanuel-Bain-Oduwo
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Copy the example env file and add your Gemini API key:

   ```bash
   cp .env.example .env.local
   ```

   Then edit `.env.local`:

   ```
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:3000`.

## Vercel Deployment

1. **Push to GitHub** (already done if you're reading this in the repo).

2. **Import the project on Vercel**
   - Go to [vercel.com/new](https://vercel.com/new) and import this repository.
   - Vercel will automatically detect the Vite framework settings via `vercel.json`.

3. **Set the environment variable**
   - In the Vercel dashboard, navigate to **Project Settings → Environment Variables**.
   - Add a new variable:
     - **Name**: `GEMINI_API_KEY`
     - **Value**: your Google Gemini API key
   - Apply to **Production**, **Preview**, and **Development** environments.

4. **Deploy** — click **Deploy** and your app will be live in seconds.

> **Tip**: Every push to `main` will trigger an automatic re-deployment on Vercel.

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `GEMINI_API_KEY` | ✅ Yes | Google Gemini API key for AI predictions |

See `.env.example` for a template.

## Project Structure

```
├── components/          # Reusable React UI components
├── services/
│   └── geminiService.ts # Google Gemini AI integration
├── App.tsx              # Root application component
├── index.tsx            # React entry point
├── types.ts             # Shared TypeScript types
├── constants.ts         # App-wide constants and sensor config
├── index.html           # HTML entry point
├── vite.config.ts       # Vite configuration
├── vercel.json          # Vercel deployment config
└── .env.example         # Environment variable template
```

## License

This project is provided for educational and demonstration purposes.

