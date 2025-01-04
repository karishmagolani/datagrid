import React from "react";
import styles from "@/app/page.module.css";
import { STATUS_AVAILABLE } from "@/utils/constants";
import { StatusType } from "@/utils/types";

interface StatusIndicatorProps {
  status: StatusType;
}

export default function StatusIndicator({ status }: StatusIndicatorProps) {
  const isAvailable = status === STATUS_AVAILABLE;
  return (
    <div className={styles["status-indicator"]}>
      {isAvailable && <span className={styles["dot"]}></span>}
      <span>{status}</span>
    </div>
  );
}
