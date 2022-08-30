import React, { useMemo } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import { COLUMNS } from "./columns";
import { GlobalFilter } from "./GlobalFilter";
import EntriesInfo from "./EntriesInfo";

export const Table = (props) => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => props.employees, []);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    setPageSize,
    prepareRow,
    state,
    setGlobalFilter,
  } = tableInstance;

  const { globalFilter, pageIndex, pageSize } = state;
  

  return (
    <>
      <div className="info-entries">
        <div className="show-entries">
          Show
          <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
          >
            {[10, 25, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
          entries
        </div>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      </div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps)}>
                  {column.render("Header")}{" "}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " ▼ "
                        : " ▲ "
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.length === 0 ? (
            <th scope="row" colspan="9" className="empty-table">
              No data avaible in table
            </th>
          ) : (
            page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })
          )}
        </tbody>
      </table>
      <div className="info-entries">
        <EntriesInfo
          pageIndex={pageIndex}
          pageSize={pageSize}
          page={page}
          rows={rows}
        />
        {rows.length > 0 && (
          <div>
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
              « Previous
            </button>
            <span className="page-index">
              Page{" "}
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>{" "}
            </span>
            <button onClick={() => nextPage()} disabled={!canNextPage}>
              Next »
            </button>
          </div>
        )}
      </div>
    </>
  );
};
