import { motion } from "framer-motion";

export default function PackageCard({ pkg }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="bg-slate-800 p-6 rounded-lg shadow"
      layout
    >
      <div className="flex items-center justify-between">
        <h4 className="text-xl font-semibold">{pkg.title}</h4>
        <div className="text-indigo-400 font-bold">{pkg.price}</div>
      </div>
      <p className="mt-3 text-slate-300">{pkg.description}</p>

      <ul className="mt-4 space-y-1 text-slate-300">
        {pkg.features.map((f, i) => (
          <li key={i} className="flex gap-2 items-start">
            <span className="text-indigo-400">•</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex gap-3">
        <a href="#contact" className="px-4 py-2 bg-indigo-600 rounded">Book Now</a>
        <a className="px-4 py-2 border rounded border-slate-600">View details</a>
      </div>
    </motion.article>
  );
}
