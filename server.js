const async = () => {
    return Promise.resolve();
};

const port = require('./config/port.config');

async()
    .then(() => require('./data'))
    .then((data) => require('./app').init(data))
    .then((app) => {
        app.listen(port, () => console.log(`Server starts at: ${port}`));
    });

