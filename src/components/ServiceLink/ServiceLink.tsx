// src/components/ServiceLink/ServiceLink.tsx
"use client";

import React from "react";
import Link from "next/link";
import styles from "@/styles/ServicePage.module.css";

interface ServiceLinkProps {
  href: string;
  title: string;
  icon: string;
  text: string;
}

export default function ServiceLink({ href, title, icon, text }: ServiceLinkProps) {
  
  const handleClick = () => {
    console.log(`Service cliqué : ${title}`);
    window?.gtag?.("event", "service_link_click", {
      event_category: "Navigation",
      event_label: title,
    });
  };

  return (
    <Link 
      href={href} 
      className={`${styles.serviceCard} ${styles.magicpattern}`} 
      onClick={handleClick}
    >
        <div className={styles.serviceHeader}>
          <i className={`fas ${icon} ${styles.serviceIcon}`} aria-hidden="true"></i>
          <h2 className={styles.serviceTitle}>{title}</h2>
        </div>
        <p className={styles.serviceText}>{text}</p>
        <span className={styles.cardButton}>En savoir plus</span>
    </Link>
  );
}
