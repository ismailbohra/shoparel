import {
  Box,
  Grid,
  Stack,
  Typography,
  Avatar,
  Tooltip,
  MenuItem,
  TextField,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { connect } from "react-redux";
import Image from "../../components/image/Image";
import imgurl from "../../assets/images/cosmeticimage.png";
export const ProductDetails = (props) => {
  const product = {
    productImageUrl: imgurl,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec    odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla    quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent    mauris. Fusce nec tellus sed augue semper porta. Mauris massa.    Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad    litora torquent per conubia nostra, per inceptos himenaeos.    Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.    Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem    at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut    ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel,    suscipit quis, luctus non, massa. Fusce ac turpis quis ligula    lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel,    tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit.    Class aptent taciti sociosqu ad litora torquent per conubia nostra,    per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non    tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante    quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc    feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin    quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit.",
    price: "999",
    mrp:'1199',
    name: "Loreal Shampoo powder talc ipsfdsfsafsfds fdsfsdf sdfasf dfsdfasd",
    category: "solid",
    productType: "pencil",
    quantity: ["60 ml", "100 ml", "500 ml"],
    productColors: [
      {
        hexValue: "#b72227",
        colourName: "Bee's Knees",
      },
      {
        hexValue: "#BB656B",
        colourName: "Brain Freeze",
      },
      {
        hexValue: "#8E4140",
        colourName: "Drip",
      },
      {
        hexValue: "#A12A33",
        colourName: "On a Stick",
      },
      {
        hexValue: "#904550",
        colourName: "Ice Cube",
      },
      {
        hexValue: "#452222",
        colourName: "Lolly",
      },
      {
        hexValue: "#7C3F35",
        colourName: "Candyfloss",
      },
      {
        hexValue: "#b72227",
        colourName: "Bee's Knees",
      },
      {
        hexValue: "#BB656B",
        colourName: "Brain Freeze",
      },
      {
        hexValue: "#8E4140",
        colourName: "Drip",
      },
      {
        hexValue: "#A12A33",
        colourName: "On a Stick",
      },
      {
        hexValue: "#904550",
        colourName: "Ice Cube",
      },
      {
        hexValue: "#452222",
        colourName: "Lolly",
      },
      {
        hexValue: "#7C3F35",
        colourName: "Candyfloss",
      },
      {
        hexValue: "#b72227",
        colourName: "Bee's Knees",
      },
      {
        hexValue: "#BB656B",
        colourName: "Brain Freeze",
      },
      {
        hexValue: "#8E4140",
        colourName: "Drip",
      },
      {
        hexValue: "#A12A33",
        colourName: "On a Stick",
      },
      {
        hexValue: "#904550",
        colourName: "Ice Cube",
      },
      {
        hexValue: "#452222",
        colourName: "Lolly",
      },
      {
        hexValue: "#7C3F35",
        colourName: "Candyfloss",
      },
      {
        hexValue: "#A12A33",
        colourName: "On a Stick",
      },
      {
        hexValue: "#904550",
        colourName: "Ice Cube",
      },
      {
        hexValue: "#452222",
        colourName: "Lolly",
      },
      {
        hexValue: "#7C3F35",
        colourName: "Candyfloss",
      },
      {
        hexValue: "#A12A33",
        colourName: "On a Stick",
      },
      {
        hexValue: "#904550",
        colourName: "Ice Cube",
      },
      {
        hexValue: "#452222",
        colourName: "Lolly",
      },
      {
        hexValue: "#7C3F35",
        colourName: "Candyfloss",
      },
    ],
  };
  const [selectedColor, setSelectedColor] = useState(0);
  const handleSelectColor = (index) => {
    setSelectedColor(index);
  };

//   const [initialIndex, setinitialIndex] = useState(false);
//   const [lastIndex, setlastIndex] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(5)
//   let color=[]
//   const handlePreviousColor=()=>{
//     color=product.productColors.slice(currentIndex-5,currentIndex,currentIndex)
//   }
//   const handleNextColor=()=>{
//     color=product.productColors.slice(currentIndex,currentIndex+5)
//   }
  
  return (
    <Grid container>
      <Grid item xs={12} md={5} p={3}>
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          direction={"column"}
        >
          <Image
            url={product.productImageUrl}
            height={400}
            width={400}
            borderRadius={5}
          />
        </Stack>
      </Grid>
      <Grid item xs={12} md={7} p={2}>
        <Stack direction={"column"}>
          <Typography variant="h4">{product.name}</Typography>
          <Typography pt={1} sx={{ color: "grey" }}>
            {product.category} {product.productType}
          </Typography>
          <Typography sx={{fontWeight:'#1A2027',fontSize:'25px'}}>
          ₹ {product.price}
          </Typography>
          {product.productColors.length > 0 && (
            <>
              <Typography pt={1} sx={{ fontSize: "20px" }}>
                Select Color
              </Typography>
              <Stack direction={"row"} m={1} flexWrap={"wrap"}>
                {/* {initialIndex && <Avatar onClick={handlePreviousColor} src={imgurl} sx={{ margin: 0.5 }} />} */}
                {product.productColors.map((element, index) => {
                  return (
                    <Tooltip title={element.colourName}>
                      <Avatar
                        key={index}
                        sx={{
                          bgcolor: element.hexValue,
                          margin: 0.5,
                          border: index == selectedColor ? 4 : null,
                          borderColor: index == selectedColor ? "black" : null,
                          boxShadow: index == selectedColor ? 5 : null,
                        }}
                        m={0.5}
                        onClick={() => {
                          handleSelectColor(index);
                        }}
                      >
                        &nbsp;
                      </Avatar>
                    </Tooltip>
                  );
                })}
                {/* {lastIndex && <Avatar onClick={handleNextColor} src={imgurl} sx={{ margin: 0.5 }} />} */}
              </Stack>
            </>
          )}
          <Typography pt={1} sx={{ fontSize: "20px" }}>
            Select Quantity
          </Typography>
          <TextField
            id="quantity"
            name=""
            select
            // value={formik.values.mode}
            // onChange={formik.handleChange}
            sx={{ width: "6rem", marginTop: 1,marginBottom:1 }}
            size="small"
          >
            {product.quantity.map((element, index) => {
              return (
                <MenuItem value={element} key={index} defaultValue={element}>
                  {element}
                </MenuItem>
              );
            })}
          </TextField>
          <Button variant="contained" sx={{width:200}}>
            Add to Cart
          </Button>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Box pl={2} pr={2}>
          <Typography variant="h5">Description</Typography>
          <Typography xs={{ fontSize: "1px" }} pt={1}>
            {product.description}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

ProductDetails.propTypes = {
  second: PropTypes.func,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
