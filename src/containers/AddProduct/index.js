import { Avatar, Box, Button, Card, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import ColorStack from "../../components/ColorStack/ColorStack";
import { bindActionCreators } from "redux";
import { deleteProductReqAction, getProductReqAction } from "../../redux/Product/ProductAction";
import { useNavigate } from "react-router-dom";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { dispatchToasterSuccess } from "../../utils/Shared";

const Index = (props) => {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleSelectColor = (index, element) => {
    setSelectedColor(index);
  };
  const handleDelete=(value)=>{
    props.deleteProductReq({productId:value},()=>{dispatchToasterSuccess("Deleted Successfully","success")})
  }
  const handleUpdate=(value)=>{
    console.log(value)
  }
  const columns = [
    {
      field: "id",
      headerName: "Sno",
      width: 40,
    },
    {
      field: "image_link",
      headerName: "Image",
      width: 80,
      renderCell: (params) => <Avatar alt="Product Image" src={params.value} />,
    },
    {
      field: "name",
      headerName: "Name",
      width: 250,
    },
    {
      field: "price",
      headerName: "Price",
      width: 80,
    },
    {
      field: "description",
      headerName: "Description",
      width: 200,
    },

    {
      field: "category",
      headerName: "Category",
      width: 120,
    },
    {
      field: "product_type",
      headerName: "Product Type",
      width: 120,
    },

    {
      field: "product_colors",
      headerName: "Colors",
      width: 150,
      renderCell: (params) => (
        <ColorStack
          colorList={params.value}
          selectedColor={selectedColor}
          handleSelectColor={handleSelectColor}
          numbers={3}
          size={20}
        />
      ),
    },
    {
      field: "productId",
      headerName: "Action",
      width: 150,
      renderCell: (params) => (
        <Box display={'flex'} justifyContent={'center'} flexGrow={1} >
          <DriveFileRenameOutlineIcon sx={{marginInline:1}} onClick={()=>{handleUpdate(params.value)}}/>
          <DeleteForeverIcon onClick={()=>{handleDelete(params.value)}}/>
        </Box>
      ),
    },
  ];
  useEffect(() => {
    props.getProductReq();
  }, []);
  const navigate=useNavigate()
  const handleAddProduct=()=>{
    navigate('../Add')
  }
  return (
    <>
      <Box sx={{ margin: 5 }}>
        <Typography variant="h5">Products</Typography>
        <Box sx={{ textAlign: "end", margin: 2 }}>
          <Button variant="contained" onClick={handleAddProduct}>Add Product</Button>
        </Box>
        <Box sx={{ height: 400 }}>
          <DataGrid
            rows={props.products.map((ele, index) => ({
              ...ele,
              id: index + 1,
            }))}
            columns={columns}
            hideFooterSelectedRowCount
          />
        </Box>
      </Box>
    </>
  );
};

Index.propTypes = {
  second: PropTypes.func,
};

const mapStateToProps = (state) => ({
  products: state.Product.products,
});

const mapDispatchToProps = (dispatch) => ({
  getProductReq: bindActionCreators(getProductReqAction, dispatch),
  deleteProductReq:bindActionCreators(deleteProductReqAction,dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);
