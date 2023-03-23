const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#user-name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();
  console.log(email, username, password);

  if (username && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, email, password}),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      alert("account created!");
      document.location.replace("/dashboard");
    } else {
      alert("failed to sign up");
    }
  }
};

document.getElementById("submit-btn")
  .addEventListener("click", signupFormHandler);
