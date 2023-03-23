const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment')

// User.hasMany(Post, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE'
// });

// User.hasMany(Comment, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE'
// });

Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});


// Comment.belongsTo(Post, {
//   foreignKey: 'post_id'
// });

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
// post_id might mean something I've added
// make sure post_id is talking about the id of Post
Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});

module.exports = { User, Post, Comment };
