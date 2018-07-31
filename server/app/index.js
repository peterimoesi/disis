import express from 'express';
import dbConfig from './config/db';
import middlewaresConfig from './config/middlewares';
import {
    UserRoutes,
} from './modules';

const app = express();

const PORT = process.env.port || 8000;

// Database
dbConfig();

// middlewares

middlewaresConfig(app);

app.use('/api', [UserRoutes]);

app.listen(PORT, err => {
    if (err) {
        console.log(err);
    } else {
        console.log('server is running...');
    }
});
