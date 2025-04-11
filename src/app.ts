import cors from "cors";
import express from "express";
import { errorHandler } from "./middlewares/error.middleware";
import router from "./routes/index";

export const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", router);

app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    errorHandler(err, req, res, next);
  }
);
