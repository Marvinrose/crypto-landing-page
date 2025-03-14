import React from "react";
import type { ColumnDef } from "@tanstack/react-table";
import { flexRender, getCoreRowModel, useReactTable, getSortedRowModel } from "@tanstack/react-table";

type ReactTableProps<D extends unknown> = {
  data: D[];
  columns: ColumnDef<D, any>[];
  headerProps?: {};
  headerCellProps?: {};
  bodyProps?: {};
  rowDataProps?: { className: string };
  cellProps?: { className: string };
  size?: keyof typeof sizes;
  variant?: keyof typeof variants;
  [x: string]: any;
};
const variants = {
  simple: "bg-gray-50_01",
} as const;
const sizes = {
  xs: "py-1.5",
} as const;

const ReactTable = <D extends unknown>({
  columns,
  data = [],
  headerProps = {},
  headerCellProps = {},
  bodyProps = {},
  className = "",
  rowDataProps = { className: "" },
  cellProps = { className: "" },
  size,
  variant,
  ...restConfig
}: ReactTableProps<D>) => {
  const tableConfig = {
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    ...restConfig,
  };

  const table = useReactTable(tableConfig);

  // Render the UI for your table
  return (
    <table className={className}>
      <thead {...headerProps}>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id} {...header.column.columnDef?.meta} {...headerCellProps}>
                {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...bodyProps}>
        {table.getRowModel().rows.map((row) => (
          <tr
            {...rowDataProps}
            className={`${variant ? variants[variant] : ""} ${rowDataProps?.className}`}
            key={row.id}
          >
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} className={`${size ? sizes[size] : ""} ${cellProps?.className}`}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { ReactTable };
