// const commentFormHandler = async (event) => {
//     event.preventDefault();
   
//     const comment = document.querySelector('#comment-input').value.trim();
    
//    console.log('this is comment', comment);
//     // const post_id = document.querySelector('#comment-submit-btn').getAttribute('data-id');
   

  
//     if (comment) {
//       const response = await fetch(`/api/comments`, {
//         method: 'POST',
//         body: JSON.stringify({ comment}),
//         headers: {
//           'Content-Type': 'application/json',
//         },
        
//       });
//       console.log('This is response: ', response);
     
//       if (response.ok) {
    
//         document.location.reload();
//       } else {
//         alert('Failed to create comment');
//       }
//     }
//   };
  

  
  
  
// //  const postId =  req.params.post_id;
  
  
  
// const commentForm = document.querySelector('.new-comment-form');

//   commentForm.addEventListener('submit', commentFormHandler);