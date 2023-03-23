const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

// All of these routes are prefixed with '/dashboard'

router.get('/', withAuth, async (req, res) => {
    // console.log("Session: ", req.session);
    // Who is the USER(?)
    // QUery the Databse for the User ID from req.session.user_id;
    // console.log("User ID: ", req.session.user_id);
    const userData = await User.findByPk(req.session.user_id);
   // const user = userData.map(data => data.get({ plain: true }));
    console.log("User DataValues: ", userData.dataValues);


    // Based on the USER --> the user_id --> We want to query the DATABASE for this USERS associated POSTS
    const userPosts = await Post.findAll({
        where: {
            user_id: req.session.user_id
        }
    })
    // console.log("Users Posts: ", userPosts);
    const filteredPosts = userPosts.map(post => post.get({ plain: true }));
    // console.log("Sanitized Posts: ", filteredPosts);

    let username = userData.dataValues.username;

    res.render('dashboard', { username, posts: filteredPosts });
});



module.exports = router;