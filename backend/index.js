import express from 'express';
import cors from 'cors';
import path from "path";

const app = express();
const port = 4000;

const __dirname = path.resolve();

// Enable CORS to allow requests from the frontend
app.use(cors());

app.get('/hello', (req, res) => {
  res.send('hello world');
});

if (true) {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/hello`);
});
