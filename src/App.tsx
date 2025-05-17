import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import MovieSearch from "./MovieSearch";

// 9b613c126321a1233baeabe9c9bf0570
//https: api.themoviedb.org/3/search/movie?api_key=9b613c126321a1233baeabe9c9bf0570&query=Inception

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <MovieSearch />
    </QueryClientProvider>
  );
}

export default App;
