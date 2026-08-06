"use client";

import { motion } from "framer-motion";
import { closingCta } from "@/config/copy";
import { WaitlistForm } from "./WaitlistForm";

export function ClosingCTA() {
  return (
    <section className="v-section v-section-dark">
      <div className="v-container">
        <motion.div className="v-content-block"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5 }}>
          <hr className="v-accent-rule" />
          <h2 className="v-section-heading v-heading-preline">
            {closingCta.headline}
          </h2>
          <p className="v-body-lg v-mt-sm">{closingCta.subheadline}</p>
          <div className="v-mt-md">
            <WaitlistForm variant="closing" />
          </div>
          <p className="v-body-sm v-mt-sm">{closingCta.finePrint}</p>
        </motion.div>
      </div>
    </section>
  );
}
