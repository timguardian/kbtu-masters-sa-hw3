const express = require('express');
const promMid = require('express-prometheus-middleware');
const app = express();

const PORT = 8081;
app.use(promMid({
  metricsPath: '/metrics',
  collectDefaultMetrics: true,
  requestDurationBuckets: [0.1, 0.5, 1, 1.5],
  requestLengthBuckets: [512, 1024, 5120, 10240, 51200, 102400],
  responseLengthBuckets: [512, 1024, 5120, 10240, 51200, 102400],
}));

app.get('/welcome', (req, res) => {
    if(!req.query.name){
        res.status(400).send("You have not provided name");
    }else{
        res.status(200).json({ message: `Hello, ${req.query.name}!` });
    }
});

app.get('/serviceA', (req, res) => {
    res.json({message: 'Service A has been called'});
});


app.get('/serviceB', (req, res) => {
    if(req.query.unhealthy){
        res.status(500).send("Unhealthy response");
    }else{
        res.json({message: 'Service B has been called'});
    }
});

app.get('/unhealthy', (req, res) => {
    res.status(500).send("Unhealthy service has been called");
});

app.listen(PORT, () => {
  console.log(`Example api is listening on http://localhost:${PORT}`);
});