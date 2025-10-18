import { PACKAGES } from "../data/packages";
import PackageCard from "./PackageCard";
import { SERVICES } from "../data/servicesList";
import { motion } from "framer-motion";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useRef } from "react";

export default function Services() {
  const parentRef = useRef(null);

  const rowVirtualizer = useVirtualizer({
    count: SERVICES.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 56,
    overscan: 5,
  });

  return (
    <section id="packages" className="py-12">
      <h2 className="text-3xl font-semibold mb-6">Our Services</h2>

      {/* Packages */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PACKAGES.map((p) => (
          <PackageCard key={p.id} pkg={p} />
        ))}
      </div>

      {/* Virtualized services */}
      <div className="mt-10">
        <h3 className="text-xl mb-4">All offered services (virtualized)</h3>

        <div
          ref={parentRef}
          className="border rounded-md bg-slate-800 p-3 overflow-auto"
          style={{ height: 240 }}
        >
          <div
            style={{
              height: `${rowVirtualizer.getTotalSize()}px`,
              width: "100%",
              position: "relative",
            }}
          >
            {rowVirtualizer.getVirtualItems().map((virtualRow) => {
              const item = SERVICES[virtualRow.index];
              if (!item) return null; // 👈 Prevent undefined items
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    transform: `translateY(${virtualRow.start}px)`,
                  }}
                  className="flex items-center justify-between px-4 py-2"
                >
                  <div>
                    <div className="font-medium text-slate-100">
                      {item.title}
                    </div>
                    <div className="text-sm text-slate-400">
                      {item.subtitle}
                    </div>
                  </div>
                  <div className="text-sm text-slate-300">Learn more</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
