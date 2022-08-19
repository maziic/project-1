import express from 'express';
import routes from './routes/index';

const app = express();
const port = 5000; // Default port

// Add routes
app.use(routes);

// Start server
app.listen(port, () => {
  console.log('LISTENING ON PORT 3000');
});

export default app;
