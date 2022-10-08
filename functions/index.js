import functions from 'firebase-functions'
import express from 'express'
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json());

app.listen(5000, () => console.log('api listening on port 5000'))

app.get('/test', (req, res) => {
    res.send('Hosting successful!')
});

export const api = functions.https.onRequest(app);