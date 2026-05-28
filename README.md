# MERN E-Shop

Comprehensive starter e-commerce application built with the MERN stack (MongoDB, Express, React, Node). This repository contains a separate `client` (React + Vite + TypeScript) and `server` (Node + Express) folders with a minimal e-shop backend and frontend scaffold.

**Status:** Development-ready — follow the steps below to run locally.

--

**Contents**
- **Project:** Overview and goals
- **Tech stack:** Libraries and runtimes
- **Prerequisites:** Software required locally
- **Environment variables:** Example `.env` values for `server` and `client`
- **Local development:** Install, run, and build commands
- **API reference:** Common endpoints and payloads
- **Project structure:** Files and directories
- **Deployment:** Build and deploy notes
- **Contributing & License**

## Project

This repository is a minimal MERN e-commerce application useful as a learning project or starting scaffold for a production application. It includes:
- A React + TypeScript frontend bootstrapped with Vite in `client/`.
- An Express backend in `server/src/server.js` that exposes REST API endpoints and connects to MongoDB.

Goals:
- Demonstrate a fullstack dev workflow with separate client and server apps.
- Provide clear environment and build steps for local development and deployment.

## Tech stack
- **Frontend:** React, TypeScript, Vite, CSS
- **Backend:** Node.js, Express
- **Database:** MongoDB (Atlas or local)
- **Auth / Security:** JWT tokens (typical), bcrypt (optional)
- **Dev tools:** nodemon (dev server), vite (client dev server)

## Prerequisites
- Node.js (v16+ recommended)
- npm or yarn
- MongoDB instance (Atlas connection string or local MongoDB server)

## Environment variables
Create a `.env` file in the `server/` directory (and optionally one in `client/` if you need config there).

Example `server/.env`:

```
PORT=5000
MONGO_URI=mongodb+srv://<user>:<password>@cluster0.mongodb.net/eshop?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret_here
NODE_ENV=development
```

If the frontend needs environment variables, create `client/.env` or use Vite's `VITE_` prefix (e.g. `VITE_API_URL=http://localhost:5000`).

## Local development

1. Install dependencies for both server and client:

```bash
# from repository root
cd server && npm install
cd ../client && npm install
```

2. Start the backend and frontend (in separate terminals):

```bash
# Terminal 1 - server
cd server
npm run dev   # or `node src/server.js` if dev script not present

# Terminal 2 - client
cd client
npm run dev
```

Notes:
- The server typically listens on the `PORT` from `server/.env` (default 5000).
- The client dev server (Vite) runs on `http://localhost:5173` by default; adjust `VITE` env variables to point to your API.

### Single-command setup (optional)
You can run both apps together with tools like `concurrently` or by using two terminals. Example with `concurrently` after installing it:

```bash
# Install concurrently at repo root or globally
npm install -D concurrently

# Run both
npx concurrently "cd server && npm run dev" "cd client && npm run dev"
```

## Build and production run

1. Build the frontend:

```bash
cd client
npm run build
```

2. Serve static assets from the server (example approach):
- Copy the built assets from `client/dist` into `server/public` (or configure Express to serve `client/dist`).
- Ensure `MONGO_URI`, `JWT_SECRET`, and `PORT` are set in production environment.
- Start the server:

```bash
cd server
npm start
```

Alternative: Deploy the client and server separately (client to Netlify/Vercel, server to Heroku/Render/AWS/GCP) and set `VITE_API_URL` accordingly.

## API reference (typical endpoints)
The server in this project exposes REST endpoints under `/api/*`. The concrete implementation may differ; adapt as needed.

- GET `/api/products` — list products
- GET `/api/products/:id` — product details
- POST `/api/users/login` — user login (returns JWT)
- POST `/api/users/register` — create an account
- GET `/api/orders` — list orders (protected)
- POST `/api/orders` — create an order (protected)

Request/Response payloads depend on the backend implementation. Inspect `server/src` for controllers and routes, for example: [server/src/server.js](server/src/server.js).

## Project structure

- `client/` — React + Vite frontend (TypeScript)
  - `src/` — React source files
  - `index.html` — Vite HTML entry
  - `package.json` — client scripts and deps

- `server/` — Express backend
  - `src/server.js` — main server entry
  - `package.json` — server scripts and deps

- `README.md` — this file

## Database & Seeding
- If you have seed data, run the provided seed scripts (if included) or import JSON into MongoDB.
- For local MongoDB, set `MONGO_URI=mongodb://localhost:27017/eshop`.

## Deployment notes
- Use environment variables for DB and secrets; never commit `.env` to source control.
- For a single-deployment approach, configure Express to serve built client files from `client/dist`.
- For separate deployments, set `VITE_API_URL` (or equivalent) so the client knows the API base URL.

## Troubleshooting
- CORS issues: enable CORS in Express (`npm i cors`) and configure allowed origins.
- DB connection errors: verify `MONGO_URI` and network access (Atlas IP whitelist).
- Auth errors: confirm `JWT_SECRET` matches between token creation and verification logic.

## Contributing
- Fork the repo, open a feature branch, and submit a pull request.
- Keep changes focused and include README updates for any new features or scripts.

## License
This project is provided as-is. Add a `LICENSE` file if you plan to change the license.

--

If you'd like, I can:
- Add example `.env.example` files in `server/` and `client/`.
- Wire Express to serve `client/dist` for a combined production deploy.
- Create small Postman collection or curl examples for the API.

---

Generated on May 28, 2026.
#MERN-e-SHOP
