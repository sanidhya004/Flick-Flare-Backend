# Flick Flare - Backend

![Flick Flare](https://your-image-url.com/banner.png)

Flick Flare is a GraphQL-powered backend built with TypeScript and MongoDB. It serves as the backbone for a film-focused social platform, allowing users to explore, review, and interact with movies effortlessly.

## 🚀 Features

✅ **GraphQL API** for efficient and flexible data fetching  
✅ **TypeScript** for a strongly typed and scalable codebase  
✅ **MongoDB** for seamless data storage  
✅ **User Authentication & Authorization**  
✅ **Movie Listings & Reviews**  
✅ **Customizable Watchlists**  
✅ **Follow & Engage with Other Users**  
✅ **Optimized Performance with Caching & Pagination**  

## 🛠 Tech Stack

- **Language:** TypeScript
- **API:** GraphQL (Apollo Server)
- **Database:** MongoDB (Mongoose ORM)
- **Authentication:** JWT-based Auth
- **Hosting:** Docker-ready deployment

## 📦 Installation

```sh
# Clone the repository
git clone https://github.com/your-username/flick-flare-backend.git
cd flick-flare-backend

# Install dependencies
npm install

# Create a .env file and add necessary environment variables
cp .env.example .env

# Start the development server
npm run dev
```

## ⚙️ Environment Variables
Ensure you have the following environment variables set up in your `.env` file:

```ini
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-jwt-secret
PORT=your-desired-port
```

## 🚀 Running the Server

```sh
npm start
```

For development mode:
```sh
npm run dev
```

## 🧪 Running Tests

```sh
npm test
```

## 📜 API Documentation
GraphQL Playground is enabled in development mode. After starting the server, visit:

```
http://localhost:<PORT>/graphql
```

Explore the available queries and mutations using the GraphQL Playground UI.

## 🤝 Contributing

We welcome contributions! Feel free to fork the repository and submit a pull request with your improvements.

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

💡 **Flick Flare** is designed to bring a seamless movie-sharing experience. Stay tuned for more features! 🎬✨

