# Movie Ticket Booking

A responsive single-page application for browsing movies, selecting showtimes, and booking seats. Built with React and Vite, this project includes a simple user flow for searching movies, choosing showtimes, selecting seats, and completing a booking. An admin dashboard is provided for adding shows and viewing bookings.

## Features

- Browse movies with posters, ratings, and trailers
- View detailed movie pages (description, cast, runtime)
- Choose date and showtime, then pick seats visually
- Save favorite movies and view personal bookings
- Admin dashboard to add shows and list bookings

## Tech Stack

- React + Vite
- Plain CSS for styling (component + global styles)
- Utility helpers in `lib/` for date/time formatting

## Getting Started

Prerequisites: Node.js 16+ and npm (or yarn/pnpm)

Install dependencies

```bash
npm install
```

Run development server

```bash
npm run dev
```

Build for production

```bash
npm run build
```

Preview production build locally

```bash
npm run preview
```

## Project Structure (overview)

- `index.html` — HTML entry
- `src/main.jsx` — App bootstrapping and router
- `src/App.jsx` — Root app
- `src/pages/` — Page routes (Home, Movie, MovieDetail, SeatLayout, MyBooking, Favorite, etc.)
- `src/components/` — Reusable components (Header, Footer, MovieCard, TrailersSection, DateSelect, etc.)
- `src/dashboard/` — Admin pages and layout
- `lib/` — Helper utilities (date/time formatting, converters)

## Notable Files

- `src/pages/Home.jsx` — Home page and featured sections
- `src/pages/MovieDetail.jsx` — Movie detail and showtime selection
- `src/pages/SeatLayout.jsx` — Seat map and selection logic
- `src/dashboard/AddShows.jsx` — Admin interface for creating shows

## Notes & Next Steps

- No external API keys are required by default. If you integrate a backend or third-party API, add `.env` instructions here.
- To add screenshots or a demo GIF, place assets in `public/` and reference them in this README.

If you'd like, I can add CI badges, a `CONTRIBUTING.md`, or a short demo image next.
