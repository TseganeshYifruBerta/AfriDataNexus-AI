import express from 'express';
import bodyParser from 'body-parser';
import chatbotRouter from './routes/chatbot';
import cors from 'cors'

const app = express();

app.use(cors())
// Middleware
app.use(bodyParser.json());

// API routes
app.use('/api/chatbot', chatbotRouter);

// Start the Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
