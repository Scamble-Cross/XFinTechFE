import {
  ArrowsSort,
  SortAscending,
  SortDescending
} from "/build/_shared/chunk-T44O2CY6.js";
import {
  star_default
} from "/build/_shared/chunk-PBHDBNLJ.js";
import {
  Col_default,
  Form_default,
  Pagination_default,
  Row_default,
  Table_default
} from "/build/_shared/chunk-VRR24KJX.js";
import {
  require_prop_types
} from "/build/_shared/chunk-HFWHD4VB.js";
import {
  require_classnames
} from "/build/_shared/chunk-CQ7UJNRQ.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-F4KNNEUR.js";
import {
  require_react
} from "/build/_shared/chunk-2Z2JGDFU.js";
import {
  createHotContext
} from "/build/_shared/chunk-KTLBVDTS.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/@hk-components/@hk-data-table/index.jsx
var import_react5 = __toESM(require_react(), 1);
var import_prop_types = __toESM(require_prop_types(), 1);

// app/@hk-components/@hk-data-table/hooks/useSortableData.js
var import_react = __toESM(require_react(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/@hk-components/@hk-data-table/hooks/useSortableData.js"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = import_react.default.useState(config);
  const sortedItems = import_react.default.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        } else if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return sortConfig.direction === "descending" ? 1 : -1;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);
  const requestSort = (sort, key) => {
    let direction = "ascending";
    if (sortConfig && sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    ;
    if (sort) {
      setSortConfig({ key, direction });
    }
  };
  return { items: sortedItems, requestSort, sortConfig };
};
var useSortableData_default = useSortableData;

// app/@hk-components/@hk-data-table/hooks/useTablePageSize.js
var import_react2 = __toESM(require_react(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/@hk-components/@hk-data-table/hooks/useTablePageSize.js"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var calculateRange = (data, rowsPerPage) => {
  const range = [];
  const num = Math.ceil(data.length / rowsPerPage);
  for (let i = 1; i <= num; i++) {
    range.push(i);
  }
  return range;
};
var sliceData = (data, page, rowsPerPage) => {
  return data.slice((page - 1) * rowsPerPage, page * rowsPerPage);
};
var useTablePageSize = (data, page, rowsPerPage) => {
  const [tableRange, setTableRange] = (0, import_react2.useState)([]);
  const [slice, setSlice] = (0, import_react2.useState)([]);
  (0, import_react2.useEffect)(() => {
    if (rowsPerPage) {
      const range = calculateRange(data, rowsPerPage);
      setTableRange([...range]);
      const slice2 = sliceData(data, page, rowsPerPage);
      setSlice([...slice2]);
    } else {
      setSlice(data);
    }
  }, [data, setTableRange, page, rowsPerPage, setSlice]);
  return { slice, range: tableRange };
};
var useTablePageSize_default = useTablePageSize;

// app/@hk-components/@hk-data-table/index.jsx
var import_classnames = __toESM(require_classnames(), 1);

// app/@hk-components/@hk-data-table/TableFooter.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/@hk-components/@hk-data-table/TableFooter.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/@hk-components/@hk-data-table/TableFooter.jsx"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var TableFooter = ({
  range,
  setPage,
  page,
  slice,
  totalRows,
  paginatorSize
}) => {
  const handleNext = () => {
    if (slice.length > 1 && page !== range.length) {
      setPage(page + 1);
    }
  };
  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row_default, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { children: [
      slice.length,
      " of ",
      totalRows.length
    ] }, void 0, true, {
      fileName: "app/@hk-components/@hk-data-table/TableFooter.jsx",
      lineNumber: 41,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pagination_default, { size: paginatorSize, className: "custom-pagination pagination-simple d-flex justify-content-end", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pagination_default.Prev, { onClick: handlePrev, disabled: page === 1, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "ri-arrow-left-s-line" }, void 0, false, {
        fileName: "app/@hk-components/@hk-data-table/TableFooter.jsx",
        lineNumber: 47,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/@hk-components/@hk-data-table/TableFooter.jsx",
        lineNumber: 46,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pagination_default.Item, { active: true, children: page }, void 0, false, {
        fileName: "app/@hk-components/@hk-data-table/TableFooter.jsx",
        lineNumber: 52,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pagination_default.Next, { onClick: handleNext, disabled: page === range.length, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "ri-arrow-right-s-line" }, void 0, false, {
        fileName: "app/@hk-components/@hk-data-table/TableFooter.jsx",
        lineNumber: 54,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/@hk-components/@hk-data-table/TableFooter.jsx",
        lineNumber: 53,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/@hk-components/@hk-data-table/TableFooter.jsx",
      lineNumber: 45,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/@hk-components/@hk-data-table/TableFooter.jsx",
      lineNumber: 44,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/@hk-components/@hk-data-table/TableFooter.jsx",
    lineNumber: 40,
    columnNumber: 10
  }, this);
};
_c = TableFooter;
var TableFooter_default = TableFooter;
var _c;
$RefreshReg$(_c, "TableFooter");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/@hk-components/@hk-data-table/hooks/useRowSelect.js
var import_react3 = __toESM(require_react(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/@hk-components/@hk-data-table/hooks/useRowSelect.js"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var useRowSelect = (slice, data) => {
  const [selectedRows, setSelectedRows] = import_react3.default.useState([]);
  const [selectAll, setSelectAll] = import_react3.default.useState(false);
  const handleRowSelection = (id) => {
    let updatedSelection = [...selectedRows];
    const allIds = slice.map((row, indx) => indx);
    if (updatedSelection.includes(id)) {
      updatedSelection = updatedSelection.filter((rowId) => rowId !== id);
    } else {
      updatedSelection.push(id);
    }
    ;
    setSelectedRows(updatedSelection);
    if (updatedSelection.length === allIds.length) {
      setSelectAll(true);
    }
    ;
    if (updatedSelection.length < allIds.length) {
      setSelectAll(false);
    }
  };
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedRows([]);
    } else {
      const allIds = slice.map((row, indx) => indx);
      setSelectedRows(allIds);
    }
    setSelectAll(!selectAll);
  };
  const isRowSelected = (id) => selectedRows.includes(id);
  return { selectAll, handleRowSelection, handleSelectAll, isRowSelected };
};
var useRowSelect_default = useRowSelect;

// app/@hk-components/@hk-data-table/hooks/useStarred.js
var import_react4 = __toESM(require_react(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/@hk-components/@hk-data-table/hooks/useStarred.js"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var useStarred = (data) => {
  const [favData, setFavData] = import_react4.default.useState(data);
  const handleStared = (id) => {
    setFavData((prevData) => prevData.map((row, index) => index === id ? { ...row, starred: !row.starred } : row));
  };
  return { handleStared, favData };
};
var useStarred_default = useStarred;

// app/@hk-components/@hk-data-table/index.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/@hk-components/@hk-data-table/index.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/@hk-components/@hk-data-table/index.jsx"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var HkDataTable = ({
  column,
  rowData,
  bsPrefix,
  classes,
  striped,
  bordered,
  borderless,
  hover,
  size,
  variant,
  responsive,
  rowsPerPage,
  paginatorSize,
  rowSelection,
  searchBar,
  searchQuery,
  exports,
  searchClasses,
  markStarred,
  ...rest
}) => {
  _s();
  const [data, setData] = import_react5.default.useState(rowData);
  const [perPageData, setPerPageData] = import_react5.default.useState(rowsPerPage);
  const [page, setPage] = import_react5.default.useState(1);
  const [searchTerm, setSearchTerm] = import_react5.default.useState("");
  const {
    items,
    requestSort,
    sortConfig
  } = useSortableData_default(data);
  const {
    slice,
    range
  } = useTablePageSize_default(items, page, perPageData);
  const {
    selectAll,
    handleRowSelection,
    handleSelectAll,
    isRowSelected
  } = useRowSelect_default(slice, data);
  const {
    handleStared,
    favData
  } = useStarred_default(rowData);
  import_react5.default.useEffect(() => {
    if (searchQuery) {
      setSearchTerm(searchQuery);
    } else {
      setSearchTerm("");
    }
  }, [searchQuery]);
  const filteredData = slice.filter((item) => searchTerm === "" ? item : Object.values(item).some((value) => value.toString().toLowerCase().includes(searchTerm.toLowerCase())));
  import_react5.default.useEffect(() => {
    setData(favData);
  }, [favData]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Group, { controlId: "searchForm", className: "mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Row_default, { children: searchBar && !searchQuery && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Col_default, { sm: 3, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Control, { type: "search", placeholder: "Search", size: "sm", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value), className: searchClasses }, void 0, false, {
      fileName: "app/@hk-components/@hk-data-table/index.jsx",
      lineNumber: 140,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/@hk-components/@hk-data-table/index.jsx",
      lineNumber: 139,
      columnNumber: 51
    }, this) }, void 0, false, {
      fileName: "app/@hk-components/@hk-data-table/index.jsx",
      lineNumber: 117,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/@hk-components/@hk-data-table/index.jsx",
      lineNumber: 116,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Table_default, { bsPrefix, id: "hK_table", className: (0, import_classnames.default)("hk-data-table", classes), striped, bordered, borderless, hover, size, variant, responsive, ...rest, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("tr", { children: [
        (rowSelection || markStarred) && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("th", { children: rowSelection ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Check, { type: "checkbox", className: "fs-6 mb-0", checked: selectAll, onChange: handleSelectAll }, void 0, false, {
          fileName: "app/@hk-components/@hk-data-table/index.jsx",
          lineNumber: 148,
          columnNumber: 45
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, {}, void 0, false, {
          fileName: "app/@hk-components/@hk-data-table/index.jsx",
          lineNumber: 148,
          columnNumber: 147
        }, this) }, void 0, false, {
          fileName: "app/@hk-components/@hk-data-table/index.jsx",
          lineNumber: 147,
          columnNumber: 59
        }, this),
        column.map((cols, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("th", { onClick: () => requestSort(cols.sort, cols.accessor), className: (0, import_classnames.default)({
          "d-none": cols.hidden
        }, {
          "text-primary": sortConfig !== null && sortConfig.key === cols.accessor
        }, cols.className), rowSpan: cols.rowSpan, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "d-flex", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "flex-grow-1", children: cols.title }, void 0, false, {
            fileName: "app/@hk-components/@hk-data-table/index.jsx",
            lineNumber: 157,
            columnNumber: 37
          }, this),
          cols.sort && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: sortConfig !== null && cols.accessor === sortConfig.key ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: sortConfig.direction === "ascending" ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SortAscending, { size: 14, strokeWidth: 2.5 }, void 0, false, {
            fileName: "app/@hk-components/@hk-data-table/index.jsx",
            lineNumber: 162,
            columnNumber: 93
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SortDescending, { size: 14, strokeWidth: 2.5 }, void 0, false, {
            fileName: "app/@hk-components/@hk-data-table/index.jsx",
            lineNumber: 162,
            columnNumber: 141
          }, this) }, void 0, false, {
            fileName: "app/@hk-components/@hk-data-table/index.jsx",
            lineNumber: 161,
            columnNumber: 104
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ArrowsSort, { size: 14, strokeWidth: 2.5 }, void 0, false, {
              fileName: "app/@hk-components/@hk-data-table/index.jsx",
              lineNumber: 163,
              columnNumber: 61
            }, this),
            " "
          ] }, void 0, true, {
            fileName: "app/@hk-components/@hk-data-table/index.jsx",
            lineNumber: 163,
            columnNumber: 55
          }, this) }, void 0, false, {
            fileName: "app/@hk-components/@hk-data-table/index.jsx",
            lineNumber: 160,
            columnNumber: 51
          }, this)
        ] }, void 0, true, {
          fileName: "app/@hk-components/@hk-data-table/index.jsx",
          lineNumber: 156,
          columnNumber: 33
        }, this) }, index, false, {
          fileName: "app/@hk-components/@hk-data-table/index.jsx",
          lineNumber: 151,
          columnNumber: 54
        }, this))
      ] }, void 0, true, {
        fileName: "app/@hk-components/@hk-data-table/index.jsx",
        lineNumber: 146,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/@hk-components/@hk-data-table/index.jsx",
        lineNumber: 145,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("tbody", { children: filteredData.map((row, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("tr", { className: (0, import_classnames.default)({
        "selected": isRowSelected(index)
      }), children: [
        (rowSelection || markStarred) && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "d-flex align-items-center", children: [
          rowSelection && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Check, { type: "checkbox", className: "form-check fs-6 mb-0", checked: isRowSelected(index), onChange: () => handleRowSelection(index) }, void 0, false, {
            fileName: "app/@hk-components/@hk-data-table/index.jsx",
            lineNumber: 176,
            columnNumber: 54
          }, this),
          markStarred && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: (0, import_classnames.default)("fav-star", {
            "marked": row.starred
          }), onClick: () => handleStared(index), children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(star_default, {}, void 0, false, {
            fileName: "app/@hk-components/@hk-data-table/index.jsx",
            lineNumber: 181,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/@hk-components/@hk-data-table/index.jsx",
            lineNumber: 180,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/@hk-components/@hk-data-table/index.jsx",
            lineNumber: 177,
            columnNumber: 53
          }, this)
        ] }, void 0, true, {
          fileName: "app/@hk-components/@hk-data-table/index.jsx",
          lineNumber: 175,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/@hk-components/@hk-data-table/index.jsx",
          lineNumber: 174,
          columnNumber: 63
        }, this),
        column.map((cols, index2) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("td", { className: (0, import_classnames.default)({
          "d-none": cols.hidden
        }, cols.tdClasses), children: cols.cellFormatter ? cols.cellFormatter(row[cols.accessor]) : row[cols.accessor] }, index2, false, {
          fileName: "app/@hk-components/@hk-data-table/index.jsx",
          lineNumber: 186,
          columnNumber: 58
        }, this))
      ] }, index, true, {
        fileName: "app/@hk-components/@hk-data-table/index.jsx",
        lineNumber: 171,
        columnNumber: 55
      }, this)) }, void 0, false, {
        fileName: "app/@hk-components/@hk-data-table/index.jsx",
        lineNumber: 169,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/@hk-components/@hk-data-table/index.jsx",
      lineNumber: 144,
      columnNumber: 13
    }, this),
    rowsPerPage && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TableFooter_default, { range, slice, setPage, page, totalRows: data, paginatorSize }, void 0, false, {
      fileName: "app/@hk-components/@hk-data-table/index.jsx",
      lineNumber: 194,
      columnNumber: 29
    }, this)
  ] }, void 0, true, {
    fileName: "app/@hk-components/@hk-data-table/index.jsx",
    lineNumber: 115,
    columnNumber: 10
  }, this);
};
_s(HkDataTable, "N0HLi6fWAPGT2L/xmDyJAgLwQAA=", false, function() {
  return [useSortableData_default, useTablePageSize_default, useRowSelect_default, useStarred_default];
});
_c2 = HkDataTable;
HkDataTable.propTypes = {
  column: import_prop_types.default.array.isRequired,
  rowData: import_prop_types.default.array.isRequired,
  bsPrefix: import_prop_types.default.string,
  classes: import_prop_types.default.string,
  striped: import_prop_types.default.bool,
  bordered: import_prop_types.default.bool,
  borderless: import_prop_types.default.bool,
  hover: import_prop_types.default.bool,
  size: import_prop_types.default.string,
  variant: import_prop_types.default.string,
  responsive: import_prop_types.default.bool,
  rowsPerPage: import_prop_types.default.number,
  paginatorSize: import_prop_types.default.string,
  rowSelection: import_prop_types.default.bool,
  searchBar: import_prop_types.default.bool,
  searchQuery: import_prop_types.default.string,
  searchClasses: import_prop_types.default.string,
  markStarred: import_prop_types.default.bool
  // exports: PropTypes.bool,
};
var hk_data_table_default = HkDataTable;
var _c2;
$RefreshReg$(_c2, "HkDataTable");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  hk_data_table_default
};
//# sourceMappingURL=/build/_shared/chunk-ZO24V7LS.js.map
