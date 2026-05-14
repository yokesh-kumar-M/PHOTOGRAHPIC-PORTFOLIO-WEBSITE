# Enterprise Multi-Server Photographic Portfolio

This project has been upgraded from a static website to an enterprise-grade multi-server architecture.

## Architecture Overview

- **Frontend:** Next.js (React) application with TypeScript and Tailwind CSS.
- **Backend:** Node.js Express API handling dynamic data (Blog, Gallery, Contact Form).
- **Database:** PostgreSQL for persistent storage.
- **Proxy:** NGINX serving as a reverse proxy and API Gateway.
- **Orchestration:** Docker Compose for seamless local development and deployment.

## How to Run

### Prerequisites
- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Execution Steps
1. Clone the repository.
2. Run the following command in the root directory:
   ```bash
   docker compose up --build
   ```
3. Access the application at `http://localhost`.

## API Endpoints
- `GET /api/blog` - Fetch blog posts.
- `GET /api/gallery` - Fetch gallery items.
- `POST /api/contact` - Submit contact form messages.

## Project Structure
- `/frontend`: Next.js application source code.
- `/backend`: Node.js Express API source code and DB initialization.
- `/nginx`: NGINX configuration.
- `docker-compose.yml`: Orchestration configuration for all services.
- Original static files are preserved in the root for reference.
