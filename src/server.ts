import express, { Application } from 'express';
import { getBase } from './controllers/base/base.controller';

const app: Application = express();
const port = 5000;

// =============
// ROUTES
// =============
app.get('/home', getBase);

// =============
// START
// =============
try {
	app.listen(port, (): void => {
		console.log(`[${new Date().toLocaleString()}] Server running on port ${port}...`);
	});
} catch (error) {
	console.error(`Error occured: ${error.message}`);
}
