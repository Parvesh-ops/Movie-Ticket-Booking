# 🎬 Movie Ticket Booking Application

A **responsive single-page movie ticket booking application** built with **React + Vite**, designed to simulate a real-world cinema booking experience.  
Users can browse movies, select showtimes, choose seats visually, and complete bookings, while admins can manage shows and view bookings.

> 🚀 Built as a React Developer / Intern project to demonstrate modern frontend skills, UI/UX thinking, and component-based architecture.

---

## 🌟 Live Preview
 https://movie-booking-app.vercel.app

---

## 🛠️ Tech Stack

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
