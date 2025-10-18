import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const data = [
  { date: "2025-01-01", visitors: 120 },
  { date: "2025-02-01", visitors: 150 },
  { date: "2025-03-01", visitors: 200 },
  { date: "2025-04-01", visitors: 180 },
  { date: "2025-05-01", visitors: 240 },
  { date: "2025-06-01", visitors: 300 }
];

export default function Analytics() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-12"
    >
      <h2 className="text-2xl font-semibold mb-4">Analytics Overview</h2>

      <div className="bg-slate-800 p-6 rounded">
        {/* Chart container with fixed height */}
        <div className="w-full" style={{ minHeight: "260px", height: "300px" }}>
          <ResponsiveContainer width="100%" height="100%" minWidth={200} minHeight={200}>
            <LineChart data={data}>
              <Line type="monotone" dataKey="visitors" stroke="#7c3aed" strokeWidth={2} />
              <CartesianGrid stroke="#2b2b2b" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 text-slate-300">
          <p>
            Quick stats: total visitors, conversion rate, bounce rate. Connect your Google Analytics.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
