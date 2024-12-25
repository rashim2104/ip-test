const express = require('express');
const ipRoutes = require('./routes/ip');

const app = express();
const PORT = process.env.PORT || 3001;

app.use('/api', ipRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});