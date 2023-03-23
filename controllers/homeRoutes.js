const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  console.log('Home Page');
  try {
    // Get all posts and JOIN with user data
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });
    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      posts, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/signup", async (req, res) => {
  if (req.session.logged_in) {
    console.log('redirect');
    res.redirect("/");
    return;
  }
  // Pass serialized data and session flag into template
  res.render("signuppage");
  return;
});

router.get('/posts/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const post = postData.get({ plain: true });
    console.log(post)

    res.render('singlepost', {
      post,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/edit/:id', withAuth, async (req, res) => {
  try{
    const postData = await Post.findByPk(req.params.id)
    if (postData) {
      const post = postData.get({plain: true})
      res.render('editpost', 
        {layout: 'dashboard', post}
    ) }else {
        res.status(404).json(err);
    
    } 
  } catch (err) {
    res.status(500).json(err);
  }
});

    // It might be helpful to create a dashboardRoutes.js
// Use withAuth middleware to prevent access to route


router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

module.exports = router;
