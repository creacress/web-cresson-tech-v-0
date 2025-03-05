"use client";

import React, { useState } from 'react';
import styles from '@/styles/home.module.css';

type ProblemSolutionCardProps = {
  problem: string;
  solution: string;
};

export default function ProblemSolutionCard({ problem, solution }: ProblemSolutionCardProps) {
  const [showSolution, setShowSolution] = useState(false);
  return (
    <div className={`${styles.problemSolutionCard} animate-slideIn`}>
      <h3>{problem}</h3>
      {showSolution ? (
        <p>{solution}</p>
      ) : (
        <button onClick={() => setShowSolution(true)} className={styles.ctaButton}>
          Voir la solution
        </button>
      )}
    </div>
  );
}
