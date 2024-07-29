import express, { Request, Response, NextFunction } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
