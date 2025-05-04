import express from 'express';
const PORT = 3001;
const app = express();
app.get('/health', (req, res) => {
  res.json({
    status: 'ok'
  })
})
app.listen(PORT, () =>{
  console.log(`Listening at port http://localhost:${PORT}`);
})
