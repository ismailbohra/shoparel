import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Input,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Image } from "react-bootstrap";
import ColorStack from "../../components/ColorStack/ColorStack";
import { createProductReqAction } from "../../redux/Product/ProductAction";
import { bindActionCreators } from "redux";
import { propTypes } from "react-bootstrap/esm/Image";
import { connect } from "react-redux";
import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";

const Add = (props) => {
  const [product, setProduct] = useState({
    name: "",
    price: null,
    description: "",
    category: "",
    product_type: "",
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };
  const navigate=useNavigate()
  const uploadImage=()=>{
    const imageRef = ref(storage, product.name || `${Date.now().toString()}`);
    uploadBytes(imageRef, productImgForReq)
      .then(() => {
        getDownloadURL(imageRef)
          .then((url) => {
            const temp={
              ...product,
              product_colors:[...colorList],
              image_link:url
            }
            props.productReq(temp,()=>{navigate('../AddProduct')})
          })
          .catch((error) => {
            console.log(error.message, "error getting the image url");
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
  const handleAddProduct = () => {
    
    uploadImage()
  };
  const [colorList, setColorList] = useState([]);
  const [dialog, setdialog] = useState(false);
  const [color, setColor] = useState("#FF5733");
  const [colorName, setColorName] = useState("");
  const [selectedColor, setSelectedColor] = useState();
  const [productImg, setProductImg] = useState(null)
  const [productImgForReq, setProductImgForReq] = useState(null)
  const handleProductImg=(e)=>{
    setProductImg(URL.createObjectURL(e.target.files[0]));
    setProductImgForReq(e.target.files[0])
  }
  const handleAddColor = () => {
    setdialog(true);
  };
  const handleSelectColor = (index, element) => {
    setColorList((e) => e.filter((e) => e.hex_value != element.hex_value));
  };
  const handleAddColorInList = () => {
    setColorList((e) => [...e, { hex_value: color, colour_name: colorName }]);
  };
  return (
    <>
      <Box sx={{ margin: 5 }}>
        <Typography variant="h5">Add Product</Typography>
        <Grid container>
          <Grid item xs={12} md={6} sx={{ marginTop: 3 }}>
            <Grid container>
              <Grid item xs={12}>
                <TextField
                  label="Product Name"
                  value={product.name}
                  name="name"
                  onChange={inputEvent}
                  fullWidth
                  margin="normal"
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Product Price"
                  value={product.price}
                  name="price"
                  onChange={inputEvent}
                  fullWidth
                  margin="normal"
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Category"
                  value={product.category}
                  name="category"
                  onChange={inputEvent}
                  fullWidth
                  margin="normal"
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Product Type"
                  value={product.product_type}
                  name="product_type"
                  onChange={inputEvent}
                  fullWidth
                  margin="normal"
                  size="small"
                />
              </Grid>
              <Grid item xs={12} mt={2} mb={2}>
              <Input type="file" id="upload" onChange={handleProductImg}>

              </Input>
              </Grid>
              <Grid item xs={12}>
                Colors 
                <Stack direction={'row'}> 
                {colorList.length > 0 && (
                  <ColorStack
                    colorList={colorList}
                    selectedColor={selectedColor}
                    handleSelectColor={handleSelectColor}
                    numbers={15}
                    size={30}
                  ></ColorStack>
                )}
                <Avatar onClick={handleAddColor} sx={{ width: 30, height: 30, marginTop: 0.5 ,marginInline:0.5}}>+</Avatar>
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Product Description"
                  value={product.description}
                  name="description"
                  onChange={inputEvent}
                  fullWidth
                  multiline
                  rows={4}
                  margin="normal"
                  size="small"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={6} sx={{ paddingInline: 5 }}>
          <Box
              sx={{
                border: 1,
                borderRadius: 5,
                width: "100%",
                height: "100%",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderStyle: "dashed",
                overflow: "hidden", // Add overflow hidden
              }}
            >
              {productImg && (
                <Image
                  src={productImg}
                  width={"100%"}
                  height={"100%"}
                  style={{ objectFit: "fill" }} // Add objectFit cover
                />
              )}
            </Box>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ textAlign: "end", margin: 2 }}>
          <Button variant="contained" onClick={handleAddProduct}>
            Add Product
          </Button>
        </Grid>
      </Box>
      <Dialog
        open={dialog}
        onClose={() => {
          setdialog(false);
        }}
      >
        <DialogTitle>Pick The Color</DialogTitle>
        <DialogContent>
          <Typography sx={{ textAlign: "end" }}>
            click color to remove
          </Typography>
          <Grid container>
            <Grid item xs={4}>
              <Box sx={{ margin: 2, height: 100, bgcolor: color }}></Box>
            </Grid>
            <Grid sx={{ margin: 2 }} item xs={6}>
              <Grid container columns={{ xs: 4 }}>
                {colorList.length > 0 && (
                  <ColorStack
                    colorList={colorList}
                    selectedColor={selectedColor}
                    handleSelectColor={handleSelectColor}
                    numbers={15}
                    size={30}
                  ></ColorStack>
                )}
              </Grid>
            </Grid>
          </Grid>

          <Box>
            <TextField
              sx={{ margin: 1 }}
              label="Hex Value"
              value={color}
              onChange={(e) => {
                setColor(e.target.value);
              }}
              size="small"
            ></TextField>
            <TextField
              sx={{ margin: 1 }}
              label="Colour Name"
              value={colorName}
              onChange={(e) => {
                setColorName(e.target.value);
              }}
              size="small"
            ></TextField>
            <Button onClick={handleAddColorInList}>
              <Avatar sx={{ width: 30, height: 30, marginTop: 0.5 }}>+</Avatar>
            </Button>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setdialog(false);
            }}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};


const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch)=>({
  productReq:bindActionCreators(createProductReqAction,dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Add)
