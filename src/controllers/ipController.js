const getIpAddress = (req, res) => {
    console.log("GET /ip");
    const ip = req.ip;
    console.log(`User IP Address: ${ip}`);
    res.send({ ip: ip });
};

module.exports = { getIpAddress };