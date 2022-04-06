import { Box, Button, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./style";
import PopularSeries from "../../Carousels/PopularSeries/PopularSeries";

const TopRatedMovies = () => {
  const classes = useStyles();

  return (
    <section className={classes.popularSeries}>
      <Box className={classes.wide}>
        <Typography
          style={{ color: "white" }}
          variant="h5"
          className={classes.generalName}
        >
          Popular TV
        </Typography>

        <Link to="" className={classes.link}>
          <Button className={classes.moreBtn} variant="outlined" type="button">
            View More
          </Button>
        </Link>
      </Box>
      <PopularSeries />
    </section>
  );
};

export default TopRatedMovies;
