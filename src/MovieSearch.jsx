import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { fetchMovies } from "./api";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import MovieItem from "./MovieItem";

const MovieSearch = () => {
  const [search, setSearch] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["movies", { search }],
    queryFn: () => fetchMovies(search),
    enabled: buttonClicked,
  });

  console.log(data?.results);

  const handleSearchClick = () => {
    if (search.trim() === "") return;
    setButtonClicked(true);
    refetch();
  };

  return (
    <Box
      sx={{
        height: `${data?.results ? "auto" : "85vh"}`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 6,
        background: "linear-gradient(to bottom,#8A76CB, #40396F)",
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: "32px", color: "white" }}>
        Movie App
      </Typography>
      <Box component="div" sx={{ marginBottom: 4 }}>
        <TextField
          type="text"
          variant="standard"
          placeholder="Search for movie..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          fullWidth={{ xs: true, sm: false }}
          sx={{
            width: {
              xs: "95%",
              sm: "auto",
            },
            padding: "4px 8px",
            "& .MuiFilledInput-root": {
              backgroundColor: "#f0f0f0", // Background color of the filled input (target root)
            },
            "& .MuiInputBase-input::placeholder": {
              color: "white", // Placeholder text color (light grey)
            },
            "& .MuiInput-underline:before": {
              borderBottomColor: "#fff", // Change border color before focus (blue in this case)
            },
            "& .MuiInputBase-input": {
              color: "#fff", // Text color inside the input field
            },
            "& .MuiFilledInput-underline:before": {
              borderBottomColor: "transparent", // Change the border color before focus
            },
            "& .MuiFilledInput-underline:hover:before": {
              borderBottomColor: "transparent", // Change the border color on hover
            },
          }}
        />
        <Button
          onClick={handleSearchClick}
          fullWidth={{ xs: true, sm: false }}
          sx={{
            backgroundColor: "white",
            height: 32,
            mt: 1,
            width: {
              xs: "100%",
              sm: "auto",
            },
          }}
        >
          Search
        </Button>
      </Box>

      <Grid
        container
        spacing={2}
        sx={{
          width: "80%",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: 6,
        }}
      >
        {data && data.results && data.results.length > 0 ? (
          data.results.map((movie) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 3 }} key={movie.id}>
              <MovieItem movie={movie} />
            </Grid>
          ))
        ) : isLoading ? (
          <CircularProgress sx={{ color: "white" }} />
        ) : (
          error && (
            <Typography sx={{ color: "white" }}>{error.message}</Typography>
          )
        )}
      </Grid>
    </Box>
  );
};

export default MovieSearch;
