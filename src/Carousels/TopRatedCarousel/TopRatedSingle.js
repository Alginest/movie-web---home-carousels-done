import { Badge, makeStyles, Typography, Link } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { img_500, noPicture } from "../../config/config";
import YouTubeIcon from "@material-ui/icons/YouTube";
const useStyles = makeStyles({
  item: {
    display: "flex",
    flexDirection: "column",
    objectFit: "contain",
    padding: 10,
    position: "relative",
  },
  img: {
    borderRadius: 10,
    marginBottom: 5,
    boxShadow: "0px 0px 5px black",
  },
  badge: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  title: {
    color: "white",
    fontSize: 30,
  },
  youtube: {
    position: "absolute",
    left: "0",
    top: "0",
    backgroundColor: "white",
    borderRadius: 50,
  },
  youIconLink: {
    height: "100%",
  },
  youIcon: {
    color: "red",
    fontSize: 80,
    textShadow: "2px 2px 8px #FF0000",
  },
});
const handleDragStart = (e) => e.preventDefault();

const TopRatedSingle = ({ title, poster_path, vote_average, id }) => {
  const [video, setVideo] = useState();
  const [showBg, setShowBg] = useState(false);

  const classes = useStyles();
  const fetchVideo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-US`
    );

    setVideo(data.results[0]?.key);
  };
  useEffect(() => {
    fetchVideo();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div
        className={classes.item}
        onDragStart={handleDragStart}
        key={id}
        onMouseOver={() => setShowBg(true)}
        onMouseOut={() => setShowBg(false)}
      >
        {showBg && video && (
          <div className={classes.youtube}>
            <Link
              href={`https://www.youtube-nocookie.com/embed/${video}`}
              className={classes.youIconLink}
            >
              <YouTubeIcon className={classes.youIcon} />
            </Link>
          </div>
        )}
        <img
          src={poster_path ? `${img_500}/${poster_path}` : noPicture}
          alt={title}
          className={classes.img}
        />
        <Typography variant="h4" className={classes.title}>
          {title}
        </Typography>
        <Badge
          badgeContent={vote_average ? vote_average : "n"}
          className={classes.badge}
          color={
            vote_average
              ? vote_average < 6
                ? "secondary"
                : "primary"
              : "error"
          }
        />
      </div>
    </>
  );
};

export default TopRatedSingle;
