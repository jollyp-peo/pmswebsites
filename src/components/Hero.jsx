import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="py-12">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold">
            PM's Website Development, Integration & Management
          </h1>
          <p className="mt-4 text-slate-300">
            From ideas to full-scale websites — we build it all. Affordable, scalable and professional.
          </p>
          <div className="mt-6 flex gap-4">
            <a href="#contact" className="px-5 py-3 bg-indigo-600 rounded-md shadow">Get Started</a>
            <a href="#packages" className="px-5 py-3 border border-slate-600 rounded-md">See Packages</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/3"
        >
          <div className="bg-slate-800 p-4 rounded-lg">
            {/* Simple laptop mockup */}
            <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-600 rounded-md flex items-center justify-center">
              <div className="text-slate-200">Design Preview</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
