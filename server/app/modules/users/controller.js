import User from './model';
import { createToken } from './utils/createToken';
import bcrypt from 'bcrypt';

function returnUser (user, image) {
    return {
        id    : user._id,
        email : user.email,
        userName : user.userName,
        firstName : user.firstName,
        lastName : user.lastName,
        title : user.title,
        jobTitle : user.jobTitle,
        experience : user.experience,
        education : user.education,
        social : user.social[0] || {},
        skills : user.skills,
        defaultTheme : user.defaultTheme[0] || {},
        phoneNumber : user.phoneNumber,
        biography : user.biography,
        interest : user.interest,
        languages : user.languages,
        ...image
    };
}

export const userRegister = async (req, res) => {
    const { email, password, firstName, lastName } = req.body;
    if (password.length < 6) {
        return res.status(400).json({ error: true, errorMessage: 'Password should be more than 6' });
    }
    try {
        const user = await User.create({ email, password, firstName, lastName, image : '' });
        console.log(user);
        return res.status(200).json({
            success : true,
            user : returnUser(user),
            token : `bearer ${createToken(user)}`
        });
    } catch (e) {
        console.log(e);
        return res.status(400).json({ error: true, errorMessage: 'Unauthorised' });
    }
};

export const userLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        User.findOne({ email: email })
            .exec(function (err, user) {
                if (!user) {
                    return res.status(401).json({ error: true, errorMessage: 'No user found' });
                }
                bcrypt.compare(password, user.password, function (err, result) {
                    if (result === true) {
                        return res.status(200).json({
                            success : true,
                            user : returnUser(user),
                            token : `bearer ${createToken(user)}`
                        });
                    } else {
                        console.log(password, user.password);
                        return res.status(401).json({ error: true, errorMessage: 'Unauthorised' });
                    }
                });
            });
    } catch (e) {
        console.log(e);
        return res.status(401).json({ error: true, errorMessage: 'Unauthorised' });
    }
};

export const userUpdate = async (req, res) => {
    const { userId } = req.params;
    const {...args} = req.body;
    try {
        await User.findById(userId, function(err, result) {
            if (!result) {
                return res.status(401).json({ error: true, errorMessage: 'Unauthorised' });
            }
            for (let key in args) {
                if (args.hasOwnProperty(key)) {
                    result[key] = args[key];
                }
            }
            result.save(function (err, updatedUser) {
                if (err) { return res.status(401).json({ error: true, errorMessage: 'Cannot update user' }); }
                return res.status(200).json({
                    success : true,
                    user : returnUser(updatedUser),
                });
            });
        });
    }
    catch (e) {
        console.log(e);
        return res.status(401).json({ error: true, errorMessage: 'Unauthorised' });
    }
};

export const getUserDetails = async (req, res) => {
    const { userId, userName } = req.params;
    console.log(userName);
    try {
        await User.findOne(userId ? { _id : userId } : { userName })
            .select('email firstName lastName image experience education social interest biography skills defaultTheme phoneNumber')
            .exec(function (err, user) {
                if (!user) {
                    return res.status(401).json({ error: true, errorMessage: 'User not found' });
                }
                return res.status(201).json({
                    success : true,
                    user : returnUser(user, { image : user.image })
                });
            });
    }
    catch (e) {
        console.log(e);
        return res.status(401).json({ error: true, errorMessage: 'Error finding User' });
    }
};

export const profileImageUpdate = async (req, res) => {
    const { imageString } = req.body;
    const { userId } = req.params;
    try {
        await User.findById(userId, async(err, user) => {
            user.image = imageString;
            user.save((err, updatedUser) => {
                if (err) {
                    console.log(err);
                    return res.status(401).json({ error: true, errorMessage: 'Error saving img' });
                }
                return res.status(200).json({
                    success : true,
                    user : {
                        image : updatedUser.image,
                    },
                });
            });
        });
    }
    catch (e) {
        console.log(e);
        return res.status(401).json({ error: true, errorMessage: 'Unauthorised' });
    }
};

