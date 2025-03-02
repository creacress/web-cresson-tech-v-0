"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import styles from "@styles/404.module.css";

export default function Custom404() {
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className={styles.title}>404</h1>
        <p className={styles.subtitle}>
          Oups ! La page que vous recherchez n'existe pas.
        </p>
        <motion.div
          className={styles.ghostContainer}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className={styles.ghost}>
            <div className={styles.ghostEyes}>
              <div className={styles.ghostEye}></div>
              <div className={styles.ghostEye}></div>
            </div>
          </div>
        </motion.div>
        <Link href="/">
          <motion.button
            className={styles.homeButton}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Retour à l'accueil
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}
