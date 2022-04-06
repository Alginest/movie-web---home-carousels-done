import { Box, Button, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./style";
import TopRatedCarousel from "../../Carousels/TopRatedCarousel/TopRatedCarousel";

const TopRatedMovies = () => {
  const classes = useStyles();

  return (
    <section className={classes.topRatedMovies}>
      <Box className={classes.wide}>
        <Typography
          style={{ color: "white" }}
          variant="h5"
          className={classes.generalName}
        >
          Top Rated Movies
        </Typography>

        <Link to="" className={classes.link}>
          <Button className={classes.moreBtn} variant="outlined" type="button">
            View More
          </Button>
        </Link>
      </Box>
      <TopRatedCarousel />
    </section>
  );
};

export default TopRatedMovies;
