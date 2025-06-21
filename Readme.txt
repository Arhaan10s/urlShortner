URL Shortener Service
Features

- Generate short URLs for long links
- Redirect to the original URL
- Tracks click count for each URL
- Fully responsive UI (Tailwind CSS)

Installation & Setup---------------------------------------------------------------
1. Clone the repository

git clone https://github.com/your-username/url-shortener.git
cd url-shortener

2. Backend Setup--------------------------------------------------------------------

cd backend
npm install

.env file:--------------------------------------------------------------------------

SERVER_PORT=8000
DB_NAME=your_db_name
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_HOST=localhost
DB_DIALECT=postgres

Run the backend:-------------------------------------------------------------------
npm start
3. Frontend Setup------------------------------------------------------------------

cd frontend
npm install
npm run dev

Packages Used-----------------------------------------------------------------------
Backend:---------------------------------------------------------------------------
- express
- sequelize
- pg (PostgreSQL)
- cors
- dotenv
- nanoid (or crypto)
Frontend:--------------------------------------------------------------------------
- react
- axios
- tailwindcss
- @tailwindcss/postcss
- postcss
- autoprefixer
Scalability Considerations

To handle high traffic (millions of requests/day):--------------------------------

1. Database Optimization:
   - Index the shortUrl column for O(1) lookups.
   - Use read replicas for load balancing reads.
2. Caching:
   - Integrate Redis to cache frequent short-to-original URL mappings.
3. Load Balancing:
   - Use Nginx/HAProxy or a cloud load balancer to distribute traffic.
4. Horizontal Scaling:
   - Deploy multiple backend instances (containers or serverless functions).
5. URL Generation:
   - Use distributed ID generators to prevent collisions (e.g., Snowflake IDs).
6. CDN:
   - Serve static assets from a CDN for faster delivery.

Edge Cases & Handling---------------------------------------------------------------
Issue	Handling----------------
Duplicate URLs	Store unique combinations or hash original URLs.
Malicious URLs	Integrate URL validation (e.g., using validator.js), add domain blacklists.
Short URL collision	Use libraries like nanoid with high entropy to prevent collisions.
Broken Links	Handle with 404 responses for invalid short codes.
URL Length Limit	Validate maximum original URL length (e.g., 2048 chars).


System Design---------------------------------------------------------------------------

This URL Shortener is designed to be modular and scalable from the outset. It follows a 
clear separation between the frontend and backend, with RESTful APIs facilitating 
communication.

Backend Architecture:
- The Express server exposes endpoints for generating short URLs (POST /api/shorten) and 
for redirection (GET /:shortUrl).
- URL mappings are stored in a PostgreSQL database with Sequelize ORM, 
providing structured data handling and the ability to enforce constraints 
(e.g., unique short URLs).

Frontend Architecture:
- Built with React and styled using Tailwind CSS, it allows users to enter long URLs and 
view shortened results. URLs are displayed in a list with clickable short links.

Scalability:
For handling high request volumes, the app would benefit from introducing Redis caching 
for frequent redirects and implementing read replicas on the database layer to reduce load.
 With appropriate horizontal scaling, backend instances can be multiplied to serve traffic. 
 For URL generation at scale, libraries like nanoid provide enough randomness to 
 avoid collision without maintaining global counters, which could become bottlenecks.

Trade-offs:
One trade-off is using a centralized database versus a NoSQL alternative for URL storage. 
Relational databases like PostgreSQL provide more control and integrity at a smaller scale 
but may require more planning (indexes, sharding) as scale increases. Custom aliases were 
not implemented in this iteration for simplicity.

Security Considerations:
Basic URL validation is applied, but at enterprise scale, the system should include 
malware scanning for submitted URLs and rate limiting to prevent abuse.

This design balances ease of implementation with the flexibility to grow into a 
production-level application with relatively few changes.

Example Request & Response
POST /api/shorten

{
  "originalUrl": "https://www.example.com/very/long/url"
}

Response:

{
  "originalUrl": "https://www.example.com/very/long/url",
  "shortUrl": "http://localhost:3000/7f3g5t9x"
}

