import React, { useState, useEffect, useCallback, useMemo, FC } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { EQUIPMENT_LIST } from '../constants';
import { getPredictiveAnalysis } from '../services/geminiService';
import { SensorData, Prediction, Equipment } from '../types';

const Header: FC = () => (
    <header className="bg-gray-800/50 backdrop-blur-sm p-4 sticky top-0 z-20 border-b border-gray-700">
        <h1 className="text-2xl font-bold text-cyan-400 text-center">AI Predictive Maintenance Dashboard</h1>
        <p className="text-center text-gray-400">Pharmaceutical Manufacturing Equipment Monitoring</p>
    </header>
);

const EquipmentSelector: FC<{ onSelect: (equipment: Equipment) => void; selectedId: string }> = ({ onSelect, selectedId }) => {
    const groupedEquipment = useMemo(() => {
        // Fix: Correctly type the accumulator for the reduce function by using a generic.
        // This ensures `groupedEquipment` is typed as Record<string, Equipment[]>,
        // which allows using array methods like `.some` and `.map` on its values.
        return EQUIPMENT_LIST.reduce<Record<string, Equipment[]>>((acc, eq) => {
            (acc[eq.type] = acc[eq.type] || []).push(eq);
            return acc;
        }, {});
    }, []);

    return (
        <div className="p-4 bg-gray-800 rounded-lg">
            <h2 className="text-lg font-semibold mb-3 text-gray-300">Select Equipment</h2>
            <div className="space-y-3">
                {Object.entries(groupedEquipment).map(([type, equipments]) => (
                    <details key={type} className="bg-gray-700/50 rounded-lg" open={equipments.some(e => e.id === selectedId)}>
                        <summary className="font-semibold p-3 cursor-pointer hover:bg-gray-600/50 rounded-t-lg">{type}</summary>
                        <div className="p-3 border-t border-gray-600 flex flex-wrap gap-2">
                            {equipments.map((eq) => (
                                <button
                                    key={eq.id}
                                    onClick={() => onSelect(eq)}
                                    className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200 ${
                                        selectedId === eq.id
                                            ? 'bg-cyan-500 text-white shadow-lg ring-2 ring-cyan-300'
                                            : 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                                    }`}
                                >
                                    {eq.name}
                                </button>
                            ))}
                        </div>
                    </details>
                ))}
            </div>
        </div>
    );
};

const SensorCard: FC<{ label: string; value: string; unit: string; isNormal: boolean }> = ({ label, value, unit, isNormal }) => (
    <div className={`p-4 rounded-lg shadow-md transition-all duration-300 ${isNormal ? 'bg-gray-700' : 'bg-red-800 animate-pulse'}`}>
        <div className="text-sm text-gray-400">{label}</div>
        <div className="text-2xl font-bold text-white">
            {value} <span className="text-lg text-gray-300">{unit}</span>
        </div>
    </div>
);

const SensorChart: FC<{ data: any[]; dataKey: string; name: string; unit: string; color: string; }> = ({ data, dataKey, name, unit, color }) => (
    <div className="bg-gray-700/50 p-4 rounded-lg">
        <h4 className="font-semibold text-gray-300 mb-2">{`${name} (${unit})`}</h4>
        <ResponsiveContainer width="100%" height={200}>
            <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#4A5568" />
                <XAxis dataKey="time" stroke="#A0AEC0" tick={{ fontSize: 12 }} />
                <YAxis stroke="#A0AEC0" tick={{ fontSize: 12 }} domain={['dataMin - 1', 'dataMax + 1']} />
                <Tooltip contentStyle={{ backgroundColor: '#1A202C', border: '1px solid #4A5568' }} />
                <Line type="monotone" dataKey={dataKey} name={name} stroke={color} dot={false} strokeWidth={2} />
            </LineChart>
        </ResponsiveContainer>
    </div>
);


const PredictionPanel: FC<{ prediction: Prediction | null, isLoading: boolean, error: string | null }> = ({ prediction, isLoading, error }) => {
    const statusColor = useMemo(() => {
        if (!prediction) return 'text-gray-400';
        switch (prediction.status) {
            case 'Normal': return 'text-green-400';
            case 'Warning': return 'text-yellow-400';
            case 'Critical': return 'text-red-500';
            default: return 'text-gray-400';
        }
    }, [prediction]);

    if (isLoading) return <div className="p-6 bg-gray-800 rounded-lg flex items-center justify-center min-h-[300px]"><div className="loader"></div><p className="ml-4">AI is analyzing data...</p></div>;
    if (error) return <div className="p-6 bg-red-900/50 text-red-300 rounded-lg min-h-[300px]">{error}</div>;
    if (!prediction) return <div className="p-6 bg-gray-800 rounded-lg flex items-center justify-center min-h-[300px]"><p className="text-gray-500">Click "Run AI Analysis" to get predictions.</p></div>;

    return (
        <div className="p-6 bg-gray-800 rounded-lg animate-fade-in">
            <h3 className="text-xl font-bold mb-4 text-cyan-400">AI Predictive Analysis</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                <div className="p-4 bg-gray-700 rounded-lg">
                    <p className="text-sm text-gray-400">Status</p>
                    <p className={`text-2xl font-bold ${statusColor}`}>{prediction.status}</p>
                </div>
                <div className="p-4 bg-gray-700 rounded-lg">
                    <p className="text-sm text-gray-400">Time to Maintenance</p>
                    <p className="text-xl font-bold">{prediction.timeToMaintenance}</p>
                </div>
                <div className="p-4 bg-gray-700 rounded-lg">
                    <p className="text-sm text-gray-400">Failure Probability (24h)</p>
                    <p className="text-xl font-bold">{(prediction.failureProbability24h * 100).toFixed(1)}%</p>
                </div>
                 <div className="p-4 bg-gray-700 rounded-lg">
                    <p className="text-sm text-gray-400">Predicted Quality/Yield</p>
                    <p className="text-xl font-bold">{prediction.predictedYield.toFixed(2)}%</p>
                </div>
                <div className="p-4 bg-gray-700 rounded-lg">
                    <p className="text-sm text-gray-400">Predicted Purity/Efficiency</p>
                    <p className="text-xl font-bold">{prediction.predictedPurity.toFixed(2)}%</p>
                </div>
            </div>
            <div>
                <h4 className="font-semibold text-lg mb-2 text-gray-300">Recommendations</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {prediction.recommendations.map((rec, i) => <li key={i}>{rec}</li>)}
                </ul>
            </div>
        </div>
    );
};


const Dashboard: FC = () => {
  const [selectedEquipment, setSelectedEquipment] = useState<Equipment>(EQUIPMENT_LIST[0]);
  const [sensorHistory, setSensorHistory] = useState<SensorData[]>([]);
  const [prediction, setPrediction] = useState<Prediction | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const currentSensorData = sensorHistory[sensorHistory.length - 1];

  const generateSensorData = useCallback((equipment: Equipment, previousData?: SensorData): SensorData => {
    const newData: SensorData = { timestamp: Date.now() };

    Object.entries(equipment.params).forEach(([key, param]) => {
      const mid = (param.min + param.max) / 2;
      const range = (param.max - param.min) / 2;
      
      const generateValue = (prev?: number) => {
        const anomalyChance = 0.05;
        if (Math.random() < anomalyChance) {
          const anomalyRange = range === 0 ? 1 : range;
          return mid + (Math.random() - 0.5) * anomalyRange * 3;
        }
        
        if (prev !== undefined) {
          const step = range === 0 ? 0.1 : range * 0.1;
          const safeMin = param.min - (range === 0 ? 0.5 : range * 0.5);
          const safeMax = param.max + (range === 0 ? 0.5 : range * 0.5);
          return Math.max(safeMin, Math.min(safeMax, prev + (Math.random() - 0.5) * step));
        }

        return mid + (Math.random() - 0.5) * (range === 0 ? 1 : range);
      };
      newData[key] = generateValue(previousData?.[key]);
    });

    return newData;
  }, []);

  useEffect(() => {
    const initialHistory: SensorData[] = [];
    let lastData: SensorData | undefined = undefined;
    for (let i = 0; i < 50; i++) {
        const newData = generateSensorData(selectedEquipment, lastData);
        initialHistory.push(newData);
        lastData = newData;
    }
    setSensorHistory(initialHistory);

    const intervalId = setInterval(() => {
      setSensorHistory((prevHistory) => {
        const newData = generateSensorData(selectedEquipment, prevHistory[prevHistory.length - 1]);
        return [...prevHistory.slice(-99), newData];
      });
    }, 2000);

    return () => clearInterval(intervalId);
  }, [selectedEquipment, generateSensorData]);

  const handleRunAnalysis = async () => {
    setIsLoading(true);
    setError(null);
    setPrediction(null);
    try {
      const result = await getPredictiveAnalysis(selectedEquipment, sensorHistory);
      setPrediction(result);
    } catch (e: any) {
      setError(e.message || "An unknown error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  const isValueNormal = (key: string, value: number) => {
      const param = selectedEquipment.params[key];
      if (!param) return true;
      if(param.min === param.max) return Math.abs(value - param.min) < param.min * 0.1;
      return value >= param.min && value <= param.max;
  }

  const chartData = useMemo(() => sensorHistory.map(d => ({
      ...d,
      time: new Date(d.timestamp).toLocaleTimeString()
  })), [sensorHistory]);

  const CHART_COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main className="p-4 lg:p-8 space-y-6">
        <EquipmentSelector onSelect={(eq) => { setSelectedEquipment(eq); setPrediction(null);}} selectedId={selectedEquipment.id} />

        {currentSensorData && (
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-300">Live Sensor Data</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {/* Fix: Use Object.keys to iterate over params. This is a robust way to ensure `param` is correctly typed as `Parameter` and avoid errors when accessing `param.name` and `param.unit`. */}
                {Object.keys(selectedEquipment.params).map((key) => {
                    const param = selectedEquipment.params[key];
                    return (
                        <SensorCard 
                            key={key} 
                            label={param.name} 
                            value={currentSensorData[key]?.toFixed(param.unit === 'RPM' || param.unit === 'mTorr' ? 0 : 2) ?? 'N/A'} 
                            unit={param.unit} 
                            isNormal={isValueNormal(key, currentSensorData[key])} 
                        />
                    );
                })}
            </div>
          </div>
        )}

        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-gray-300">Sensor Data History</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Fix: Use Object.keys to iterate over params. This ensures `param` is correctly typed, resolving errors on `param.name` and `param.unit`. */}
            {Object.keys(selectedEquipment.params).map((key, index) => {
                const param = selectedEquipment.params[key];
                return (
                    <SensorChart
                        key={key}
                        data={chartData}
                        dataKey={key}
                        name={param.name}
                        unit={param.unit}
                        color={CHART_COLORS[index % CHART_COLORS.length]}
                    />
                );
            })}
          </div>
        </div>

        <div>
            <button
                onClick={handleRunAnalysis}
                disabled={isLoading}
                className="w-full py-3 px-6 text-lg font-semibold rounded-lg bg-cyan-600 hover:bg-cyan-500 disabled:bg-gray-600 disabled:cursor-not-allowed transition-all duration-300 shadow-lg flex items-center justify-center"
            >
                {isLoading ? (
                    <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Analyzing...
                    </>
                ) : 'Run AI Analysis'}
            </button>
        </div>

        <PredictionPanel prediction={prediction} isLoading={isLoading} error={error} />
      </main>
      <style jsx global>{`
        .animate-fade-in {
            animation: fadeIn 0.5s ease-in-out;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        summary::marker {
            color: #63b3ed;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;