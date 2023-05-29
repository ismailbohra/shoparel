import { Box, Typography, Stack, Button, useMediaQuery, Link } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { connect, useSelector } from "react-redux";
import Image from "../../components/image/Image";
import { GrFormAdd, GrFormSubtract } from "react-icons/gr";
import { bindActionCreators } from "redux";
import { addToCartAction, clearCartAction } from "../../redux/Cart/Action";



export const ProductForm = (props) => {
  const productList = useSelector((state) => state.Cart.productList);
  const isXsScreen = useMediaQuery((theme) => theme.breakpoints.down("xs"));
  const handleDecrement = (element) => {
    const temp = {
      productId: element.productId,
      quantity: -1,
      color: element.selectedColorValue,
      price: element.price,
      name: element.name,
      image_link: element.image_link,
    };
    props.addToCartReq(temp, () => {});
  };
  const handleIncrement = (element) => {
    const temp = {
      productId: element.productId,
      quantity: +1,
      color: element.selectedColorValue,
      price: element.price,
      name: element.name,
      image_link: element.image_link,
    };
    props.addToCartReq(temp, () => {});
  };
  const handleProductClick = (element) => {
    
  };

  return (
    <>
      <Box sx={{ height: "550px", overflow: "scroll" }}>
        <Link style={{ textDecoration: "none" ,textAlign:'end',display:'block'}} onClick={()=>{props.clearCart()}}>clear</Link>
        {productList.map((element, index) => (
          <Box
            onClick={() => {
              handleProductClick(element);
            }}
            key={index}
            sx={{ display: "flex", flexDirection: "row" }}
            m={0.5}
            mb={1}
          >
            <Image url={element.image_link} height={60} width={60} />
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
                  fontSize: "15px",
                  overflow: "",
                  textOverflow: "ellipsis",
                  whiteSpace: "normal",
                }}
              >
                {element.name}
              </Typography>
              {element.color && (
                <Typography sx={{ fontSize: "12px" }}>
                  {element.color}
                </Typography>
              )}
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
                  <GrFormAdd
                    onClick={() => {
                      handleIncrement(element);
                    }}
                  />
                </Box>
                <Box>{element.quantity}</Box>
                <Box>
                  <GrFormSubtract
                    onClick={() => {
                      handleDecrement(element);
                    }}
                  />
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
          disabled={productList.length==0}
          onClick={props.onSubmit}
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

const mapDispatchToProps = (dispatch) => ({
  addToCartReq: bindActionCreators(addToCartAction, dispatch),
  clearCart:bindActionCreators(clearCartAction,dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);
