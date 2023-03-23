const router = require('express').Router();
const { Post, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });
console.log('****New Post**** \n'+ newPost);
    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

// router.get('/posts', async (req, res) => {
//   try {
//     const dbPostData = await Post.findAll({
//       include: [{ model: User}],
//     });
//     console.log('********ALL POSTS************\n' + dbPostData)
//       const post = dbPostData.get({ plain: true })
 
   
//     res.render('post', {
//       post,
//       loggedIn: req.session.loggedIn,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });


// router.get('/posts/:id', async (req, res) => {
//   try {
//     const dbPostData = await Post.findByPk(req.params.id );
//     const post = dbPostData.get({plain: true});

//     res.render('blog', { post, loggedIn: req.session.loggedIn});
//   }catch(err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

router.put('/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.update({
      where: {
        id: req.params.id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: 'No post found with this id!'});
      return;
    }
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// put route for posts


module.exports = router;
