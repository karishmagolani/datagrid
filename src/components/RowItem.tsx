import React from "react";
import StatusIndicator from "./StatusIndicator";
import { RowData } from "../utils/types";

interface RowItemProps {
  row: RowData;
  isSelected: boolean;
  onRowSelect: (id: RowData) => void;
}

export default function RowItem({
  row,
  isSelected,
  onRowSelect,
}: RowItemProps) {
  return (
    <tr>
      <td>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => onRowSelect(row)}
        />
      </td>
      <td>{row.name}</td>
      <td>{row.device}</td>
      <td>{row.path}</td>
      <td>
        <StatusIndicator status={row.status} />
      </td>
    </tr>
  );
}
