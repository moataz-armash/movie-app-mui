import { CardMedia, Paper, styled, Typography } from "@mui/material";
import defultPoster from "./assets/default_poster.jpg";
import { motion as Motion } from "framer-motion";

const MovieItem = ({ movie }) => {
  const Item = styled(Paper)(() => ({
    background: "linear-gradient(to bottom, #3F3AA1,#D15BAC)",
    width: "100%",
    height: 200,
    borderRadius: "12px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "12px",
    textAlign: "center",
  }));

  return (
    <Motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <Item elevation={3} sx={{ display: "flex", flexDirection: "column" }}>
        <CardMedia
          component="img"
          sx={{
            objectFit: "cover",
            height: "70%",
            width: "100%",
            borderRadius: "12px",
          }}
          alt={movie.title}
          image={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : defultPoster
          }
        />
        <Typography
          variant="h6"
          sx={{
            width: "100%",
            color: "white",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          {movie.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            width: "100%",
            color: "white",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          {movie.release_date ? movie.release_date : "Unknown"}
        </Typography>
      </Item>
    </Motion.div>
  );
};

export default MovieItem;
