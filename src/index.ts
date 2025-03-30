import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import pokemonRoute from "./routes/pokemon-route";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
  origin: '*',
}));

app.use(express.json());

app.use('/api', pokemonRoute);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});