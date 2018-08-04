import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import uniqueValidator from 'mongoose-unique-validator';

const UserSchema = new Schema({
    email : {
        type : String,
        unique : true,
        required : true,
        trim : true
    },
    userName : {
        type : String,
        unique : true,
        trim : true
    },
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    phoneNumber : {
        type : Number
    },
    biography : {
        type : String,
    },
    title : {
        type : String,
    },
    jobTitle : {
        type : String,
    },
    experience : {
        type : Array,
        'default' : []
    },
    education : {
        type : Array,
        'default' : []
    },
    skills : {
        type : Array,
        'default' : []
    },
    defaultTheme : {
        type : Array,
        'default' : [{
            id : 'default',
            colors : {}
        }]
    },
    social : {
        type : Array,
        'default' : []
    },
    interest : {
        type : Array,
        'default' : []
    },
    languages : {
        type : Array,
        'default' : []
    },
    password : {
        type     : 'String',
        required : true
    },
    image : {
        data : Buffer,
        type : String,
        default : '',
    }
}, { timestamps : true, usePushEach: true });

UserSchema.plugin(uniqueValidator);

UserSchema.pre('save', function(next) {
    const user = this;
    if (!user.isModified('password')) {
        next();
    } else {
        bcrypt.hash(user.password, 10, (err, hash) => {
            if (err) {
                return next(err);
            }
            user.password = hash;
            next();
        });
    }
});

export default mongoose.model('User', UserSchema);
