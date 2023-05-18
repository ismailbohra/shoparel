import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";

export default function DataTable(props) {
  const { rows, columns, height } = props;

  const searchString = useSelector((state) => state.SearchBox.searchValue);

  const filteredObjects = rows.filter((obj) =>
    Object.values(obj).some((value) => {
      if (typeof value === "string") {
        return value.toLowerCase().includes(searchString.toLowerCase());
      }
      return false;
    })
  );

  return (
    <div style={{ height: height, width: "100%" }}>
      <DataGrid
        rows={filteredObjects.map((items,index)=>({id:index+1,...items}))}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        // checkboxSelection
      />
    </div>
  );
}
