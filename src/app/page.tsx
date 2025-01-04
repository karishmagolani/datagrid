"use client";

import React, { useState } from "react";
import DatagridBody from "@/components/DatagridBody";
import DatagridHeader from "@/components/DatagridHeader";
import data from "@/utils/data.json" assert { type: "json" };
import styles from "./page.module.css";
import { RowData } from "@/utils/types";
const typedData = data as RowData[];

export default function DatagridPage() {
  const [selectedRows, setSelectedRows] = useState<RowData[]>([]);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Datagrid</h1>
        <div className={styles["datagrid-container"]}>
          <DatagridHeader
            data={typedData}
            selectedRows={selectedRows}
            setSelectedRows={setSelectedRows}
          />
          <DatagridBody
            data={typedData}
            selectedRows={selectedRows}
            setSelectedRows={setSelectedRows}
          />
        </div>
      </main>
    </div>
  );
}
