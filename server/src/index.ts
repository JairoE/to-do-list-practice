import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {sequelize} from "./db";
import {User} from "./models/User";
import routes from "./routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api", routes);

// Sync database and start server
const startServer = async () => {
  try {
    await sequelize.sync(); // Sync models to database
    console.log("Database synced successfully.");

    // Seed a default user if none exists (so userId: 1 works)
    const defaultUser = await User.findByPk(1);
    if (!defaultUser) {
      await User.create({
        id: 1,
        email: "test@example.com",
      });
      console.log("Created default user (id: 1)");
    }

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

startServer();
