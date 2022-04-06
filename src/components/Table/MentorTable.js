import classes from "./Table.module.css";
import { useTable, useSortBy, useFilters, usePagination } from "react-table";
import React, { useState, useEffect } from "react";
import LoadingSpinner from "../UI/LoadingSpinner";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import Tooltip from "@mui/material/Tooltip/Tooltip";
import ProductSummary from "../UI/ProductSummary";
import MentorSummary from "../UI/MentorSummary";
// import Tooltip from "@mui/material/Tooltip";
const MentorTable = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.loginToken);
  const [userInfo, setUserInfo] = useState(null);
  const [show, setShow] = useState(false);
  const loadUserInfo = (data) => {
    setUserInfo(data);
    setShow(true);
  };
  const onClose = () => {
    setShow(false);
  };
  const [data, setData] = useState([
    {
      CompanyName: "",
      ContactEmail: "",
      WorkNature: "",
      Phone: "",
      FullName: "",
    },
  ]);
  const [loading, setLoading] = useState(true);

  // Default column
  const defaultColumn = React.useMemo(
    () => ({
      Filter: TextFilter,
    }),
    []
  );

  const columns = React.useMemo(
    () => [
      //   {
      //     Header: "User Info",
      //     columns: [

      {
        Header: "Full Name",
        accessor: "FullName",
        sortType: "alphanumeric",
      },
      {
        Header: "Email",
        accessor: "ContactEmail",
        sortType: "alphanumeric",
      },
      {
        Header: "Phone",
        accessor: "Phone",
        sortType: "alphanumeric",
      },

      {
        Header: "Expertise",
        accessor: "Expertise",
        sortType: "alphanumeric",
      },
      {
        Header: "Residence",
        accessor: "State",
        sortType: "alphanumeric",
      },

      //     ],
      //   },
    ],
    []
  );

  useEffect(() => {
    fetch("https://segsalerty-eoi.herokuapp.com/admin?type=mentor", {
      method: "GET",
      withCredentials: true,
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
        Accept: "*/*",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Failed to load";
            if (data && data.message) {
              errorMessage = data.message;
            }
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        setData(data.data);
        console.log(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("error");
        console.log(err);
        return err.message;
      });
  }, [setData, dispatch, token]);

  //   Table data
  const tableData = React.useMemo(() => data, [data]);

  // Instance of useTable hook
  const tableInstance = useTable(
    { columns, data: tableData, defaultColumn, initialState: { pageSize: 10 } },
    useFilters,
    useSortBy,
    usePagination
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    pageOptions,
    state: { pageIndex, pageSize },
    previousPage,
    nextPage,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    setPageSize,
  } = tableInstance;

  if (loading) {
    return (
      <div className="centered">
        <LoadingSpinner />;
      </div>
    );
  }
  return (
    <div className={classes.wrapper}>
      {show && <MentorSummary onClose={onClose} data={userInfo} />}
      <div className={classes.container}>
        <div className="desc">
          <div></div>
          <span>Mentors</span>
        </div>
        <div className={classes.tbody}>
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {
                    // Loop over the headers in each row
                    headerGroup.headers.map((column) => (
                      <th
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
                      >
                        {column.render("Header")}
                        <span>
                          {column.isSorted ? (
                            column.isSortedDesc ? (
                              <AiOutlineArrowDown />
                            ) : (
                              <AiOutlineArrowUp />
                            )
                          ) : (
                            ""
                          )}
                        </span>
                        <div>
                          {column.canFilter ? column.render("Filter") : null}
                        </div>
                      </th>
                    ))
                  }
                </tr>
              ))}
            </thead>
            {/* Apply the table body props */}
            <tbody {...getTableBodyProps()}>
              {
                // Loop over the table rows
                page.map((row) => {
                  // Prepare the row for display
                  prepareRow(row);
                  return (
                    // Apply the row props
                    <Tooltip key={row.id} title="View details">
                      <tr
                        {...row.getRowProps()}
                        onClick={() => loadUserInfo(row.original)}
                      >
                        {
                          // Loop over the rows cells
                          row.cells.map((cell) => {
                            // Apply the cell props
                            return (
                              <td {...cell.getCellProps()}>
                                {
                                  // Render the cell contents
                                  cell.render("Cell")
                                }
                              </td>
                            );
                          })
                        }
                      </tr>
                    </Tooltip>
                  );
                })
              }
            </tbody>
          </table>
        </div>
      </div>
      <div className={classes.pagination}>
        <span>
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            {"<<"}
          </button>{" "}
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            {"prev"}
          </button>{" "}
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            {"next"}
          </button>{" "}
          <button
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {">>"}
          </button>
        </span>
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <span>
          Go to page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: "100px" }}
          />
        </span>{" "}
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50, ""].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default MentorTable;

function TextFilter({ column: { filterValue, preFilteredRows, setFilter } }) {
  const count = preFilteredRows.length;

  return (
    <input
      value={filterValue || ""}
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}
      placeholder={`Search ${count} records...`}
    />
  );
}
