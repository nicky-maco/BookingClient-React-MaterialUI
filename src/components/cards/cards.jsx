import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import DeleteIcon from "@mui/icons-material/Delete";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarRateIcon from "@mui/icons-material/StarRate";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./cards.css";

export default function Cards({ image, title }) {
  return (
    <Card
      sx={{
        maxWidth: 800,
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
      }}
    >
      <CardMedia
        component="img"
        image={image}
        alt=""
        sx={{ width: { lg: 250 }, height: 250 }}
      />
      <CardContent>
        <Box>
          <Grid container direction="row">
            <Grid xs={9} sm={9} container direction="column" paddingRight={2}>
              <h4 className="title-card">{title}</h4>
              <span className="time">
                <AccessTimeIcon
                  color="warning"
                  fontSize="small"
                ></AccessTimeIcon>
                3 HRS
              </span>
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                marginTop={4}
                marginBottom={4}
              >
                <Grid sm={6} container alignItems="center">
                  <AccessTimeIcon color="warning"></AccessTimeIcon>
                  <Grid>
                    <span className="sub-title">DATE</span>
                    <div className="text">DOM, ENE 1, 2023</div>
                  </Grid>
                </Grid>
                <Grid sm={6} container alignItems="center">
                  <LocationOnOutlinedIcon color="warning"></LocationOnOutlinedIcon>
                  <Grid>
                    <span className="sub-title">DEPARTURE</span>
                    <div className="text">PUERTO MALDONADO</div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
              >
                <Button variant="contained" size="small">
                  SHOW REVIEWS
                </Button>
                <Button
                  size="small"
                  variant="outlined"
                  color="success"
                  startIcon={<DeleteIcon />}
                >
                  READ MORE
                </Button>
                <Button size="small" variant="contained" color="secondary">
                  <FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon>
                </Button>
              </Grid>
            </Grid>
            <Grid
              xs={3}
              sm={3}
              textAlign="end"
              container
              alignItems="center"
              justifyContent="center"
            >
              <div>
                <StarRateIcon color="warning"></StarRateIcon>
                <StarRateIcon color="warning"></StarRateIcon>
                <StarRateIcon color="warning"></StarRateIcon>
                <StarRateIcon></StarRateIcon>
              </div>
              <div>
                <span className="price">From</span>
                <div className="price">S/. 60.00</div>
              </div>
              <Button
                variant="contained"
                color="error"
                size="small"
                startIcon={<ShoppingCartIcon />}
              >
                comprar
              </Button>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
}
