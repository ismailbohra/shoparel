import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function DataTable(props) {
  const { rows, columns, height } = props;

  const flexValue=(window.innerWidth<=768)?0:1

  const newColumns = columns.map((col) => {
    if (col.field !== "id") {
      return {
        ...col,
        flex: flexValue,
      };
    }
    return col;
  });
  const searchString = useSelector((state) => state.SearchBox.searchValue);

  const filteredObjects = rows.filter((obj) =>
    Object.values(obj).some((value) => {
      if (typeof value === "string") {
        return value.toLowerCase().includes(searchString.toLowerCase());
      }
      return false;
    })
  );
  const navigate = useNavigate();
  const handleClick = (element) => {
    navigate("../Order", { state: { row: element.row } });
  };
  return (
    <div style={{ height: height, width: "100%" }}>
      <DataGrid
        rows={filteredObjects.map((items, index) => ({
          id: index + 1,
          ...items,
        }))}
        columns={newColumns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        // checkboxSelection
        onRowClick={handleClick}
      />
    </div>
  );
}
