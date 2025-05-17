# Movie Search App

A simple React app built with Material-UI, React Query, and Framer Motion that allows users to search for movies and view results in a responsive grid of cards.

![App Demo](/src/assets/demo.png)

## Features

- Search for movies by title
- Responsive grid layout using **Material-UI (MUI)**
- Smooth animations with **Framer Motion**
- Efficient data fetching and caching with **React Query**
- Loading and error states handled gracefully
- Consistent card sizes for movie results

## Getting Started

### Prerequisites

- Node.js (v16 or later recommended)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/moataz-armash/movie-app-mui.git
   cd movie-search-app
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm start
   # or
   yarn start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Project Structure

- `src/`
  - `MovieSearch.tsx` – Main search component
  - `MovieItem.tsx` – Movie card component
  - `api.ts` – API fetching logic

## Demo

See the screenshot above (`/src/assets/demo.png`) for a preview of the app.

## License

MIT
