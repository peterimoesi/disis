import bodyParser from 'body-parser';
import morgan from 'morgan';
import passport from 'passport';

export default app => {
    app.use(bodyParser.json({limit: '50mb', extended: true}));
    app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
    app.use(morgan('dev'));
    app.use(passport.initialize());
};
