import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 7001;
app.use(cors());

app.get('/info', (req, res) => {
  res.json({
    service: 'service-a-node',
    message: 'Hello from Node/Express',
    timestamp: new Date().toISOString()
  });
});

app.get('/', (req, res) => res.send('Service A is running'));
app.listen(PORT, () => console.log(`Service A listening on ${PORT}`));
