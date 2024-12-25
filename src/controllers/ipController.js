const getIpAddress = (req, res) => {
    console.log("GET /ip");
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    console.log(`User IP Address: ${ip}`);
    res.send({ ip: ip });
};

module.exports = { getIpAddress };