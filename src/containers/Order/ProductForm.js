import { Box, Typography, Stack, Button, useMediaQuery } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import Image from "../../components/image/Image";
import productimg from "../../assets/images/iesblurr.jpg";
import { GrFormAdd, GrFormSubtract } from "react-icons/gr";

const productList = [
  {
    productimg: productimg,
    productName: "Dandruff Shampoo 1 Dandruff Shampoo 1",
    category: "shampoo",
    productType: "type1",
    price: 299,
    productColor: "red",
    description: "xfsdfsdfdsaf",
    noOfItems: 4,
  },
  {
    productimg: productimg,
    productName: "Dandruff Shampoo 2",
    category: "lotion",
    productType: "type2",
    price: 299,
    productColor: "blue",
    description: "xfsdfsdfdsaf",
    noOfItems: 4,
  },
  {
    productimg: productimg,
    productName: "Dandruff Shampoo 3",
    category: "soap",
    productType: "type2",
    price: 299,
    productColor: "red",
    description: "xfsdfsdfdsaf",
    noOfItems: 4,
  },
  // {
  //   productimg: productimg,
  //   productName: "Dandruff Shampoo 4",
  //   category: "soap",
  //   productType: "type1",
  //   price: 299,
  //   productColor: "blue",
  //   description: "xfsdfsdfdsaf",
  //   noOfItems: 4,
  // },
  // {
  //   productimg: productimg,
  //   productName: "Dandruff Shampoo 5",
  //   category: "shampoo",
  //   productType: "type1",
  //   price: 299,
  //   productColor: "green",
  //   description: "xfsdfsdfdsaf",
  //   noOfItems: 4,
  // },
  // {
  //   productimg: productimg,
  //   productName: "Dandruff Shampoo 1",
  //   category: "shampoo",
  //   productType: "type1",
  //   price: 299,
  //   productColor: "red",
  //   description: "xfsdfsdfdsaf",
  //   noOfItems: 4,
  // },
  // {
  //   productimg: productimg,
  //   productName: "Dandruff Shampoo 2",
  //   category: "lotion",
  //   productType: "type2",
  //   price: 299,
  //   productColor: "blue",
  //   description: "xfsdfsdfdsaf",
  //   noOfItems: 4,
  // },
  // {
  //   productimg: productimg,
  //   productName: "Dandruff Shampoo 3",
  //   category: "soap",
  //   productType: "type2",
  //   price: 299,
  //   productColor: "red",
  //   description: "xfsdfsdfdsaf",
  //   noOfItems: 4,
  // },
  // {
  //   productimg: productimg,
  //   productName: "Dandruff Shampoo 4",
  //   category: "soap",
  //   productType: "type1",
  //   price: 299,
  //   productColor: "blue",
  //   description: "xfsdfsdfdsaf",
  //   noOfItems: 4,
  // },
  // {
  //   productimg: productimg,
  //   productName: "Dandruff Shampoo 5",
  //   category: "shampoo",
  //   productType: "type1",
  //   price: 299,
  //   productColor: "green",
  //   description: "xfsdfsdfdsaf",
  //   noOfItems: 4,
  // },
  // {
  //   productimg: productimg,
  //   productName: "Dandruff Shampoo 1",
  //   category: "shampoo",
  //   productType: "type1",
  //   price: 299,
  //   productColor: "red",
  //   description: "xfsdfsdfdsaf",
  //   noOfItems: 4,
  // },
  // {
  //   productimg: productimg,
  //   productName: "Dandruff Shampoo 2",
  //   category: "lotion",
  //   productType: "type2",
  //   price: 299,
  //   productColor: "blue",
  //   description: "xfsdfsdfdsaf",
  //   noOfItems: 4,
  // },
  // {
  //   productimg: productimg,
  //   productName: "Dandruff Shampoo 3",
  //   category: "soap",
  //   productType: "type2",
  //   price: 299,
  //   productColor: "red",
  //   description: "xfsdfsdfdsaf",
  //   noOfItems: 4,
  // },
  // {
  //   productimg: productimg,
  //   productName: "Dandruff Shampoo 4",
  //   category: "soap",
  //   productType: "type1",
  //   price: 299,
  //   productColor: "blue",
  //   description: "xfsdfsdfdsaf",
  //   noOfItems: 4,
  // },
  // {
  //   productimg: productimg,
  //   productName: "Dandruff Shampoo 5",
  //   category: "shampoo",
  //   productType: "type1",
  //   price: 299,
  //   productColor: "green",
  //   description: "xfsdfsdfdsaf",
  //   noOfItems: 4,
  // },
];

export const ProductForm = (props) => {
  const isXsScreen = useMediaQuery((theme) => theme.breakpoints.down("xs"));
  const fontSize = isXsScreen ? "" : "";
  const handleDecrement = (ele) => {
    console.log(ele)
  };
  const handleIncrement = () => {};
  const handleProductClick = (element) => {
    console.log(element.productName)
  };

  return (
    <>
      <Box sx={{ height: "550px", overflow: "scroll" }}>
        {productList.map((element, index) => (
          <Box onClick={()=>{handleProductClick(element)}} key={index} sx={{ display: "flex", flexDirection: "row" }} m={0.5} mb={1}>
            <Image url={element.productimg} height={60} width={60} />
            <Stack
              direction={"column"}
              sx={{
                flexGrow: 1,
              }}
              marginLeft={1}
              marginRight={1}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize:  "15px",
                  overflow: "",
                  textOverflow: "ellipsis",
                  whiteSpace: "normal",
                }}
              >
                {element.productName}
              </Typography>
              <Typography sx={{ fontSize: "12px" }}>
                {element.productType}
              </Typography>
              <Typography sx={{ fontWeight: "bold" }}>
                ₹ {element.price}
              </Typography>
            </Stack>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={0.5}
            >
              <Stack
                sx={{ border: 1 }}
                direction="row"
                pr={1}
                pl={1}
                spacing={0.5}
              >
                <Box>
                  <GrFormAdd onClick={()=>{handleIncrement(element)}} />
                </Box>
                <Box>{element.noOfItems}</Box>
                <Box>
                  <GrFormSubtract onClick={()=>{handleDecrement(element)}} />
                </Box>
              </Stack>
            </Stack>
          </Box>
        ))}
      </Box>
      <Stack justifyContent={"end"} direction={"column"}>
        <Button
          variant="contained"
          color="success"
          sx={{ margin: 1, bgcolor: "green" }}
        >
          Confirm Order
        </Button>
      </Stack>
    </>
  );
};

ProductForm.propTypes = {
  second: PropTypes.func,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);
