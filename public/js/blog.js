const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#blog-title').value.trim();
  // const needed_funding = document.querySelector('#project-funding').value.trim();
  const text = document.querySelector('#blog-post').value.trim();

  if (name && text) {
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({ name, text }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create comment');
    }
  }
};

// const editButtonHandler = async (event) => {
//   if(event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');

//     const response = await fetch(`/api/posts/${id}`, {
//       method: "PUT",
//     });
//     if(response.ok) {
//       document.location
//     }
//   }
// }

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete post');
    }
  }
};

const postForm = document
  .querySelector('.new-post-form');
  postForm.addEventListener('submit', newFormHandler);

  // const updatePost = document.querySelector('.edit-button');
  // updatePost.addEventListener('click', editButtonHandler);

const deletePost = document.querySelector('.delete-button');
deletePost.addEventListener('click',delButtonHandler);
  // find delete button in post list div
// const postList =document
//   .querySelectorAll('.post-list')
//   if (postList) {
//     for (let i = 0; i < postList.length; i++) {
//       let post = postList[i];
//   post.addEventListener('click', delButtonHandler);
//     }
//   }
