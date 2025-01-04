"use client";

import React from "react";
import RowItem from "./RowItem";
import { RowData } from "../utils/types";
import styles from "@/app/page.module.css";

interface DatagridBodyProps {
  data: RowData[];
  selectedRows: RowData[];
  setSelectedRows: React.Dispatch<React.SetStateAction<RowData[]>>;
}

export default function DatagridBody({
  data,
  selectedRows,
  setSelectedRows,
}: DatagridBodyProps) {
  const handleRowSelect = (row: RowData) => {
    if (selectedRows.includes(row)) {
      setSelectedRows(selectedRows.filter((el) => el.name !== el.name));
    } else {
      setSelectedRows([...selectedRows, row]);
    }
  };

  return (
    <table className={styles["datagrid-table"]}>
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Device</th>
          <th>Path</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <RowItem
            key={row.name}
            row={row}
            isSelected={selectedRows.some((el) => el.name == row.name)}
            onRowSelect={handleRowSelect}
          />
        ))}
      </tbody>
    </table>
  );
}
