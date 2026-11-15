import express from 'express';
import indexRoutes from './routes/index.routes.js'
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRoutes);

app.listen(3000, () => {
	console.log(`Message app listening on port 3000`);
});
