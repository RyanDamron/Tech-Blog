const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const username = document.querySelector("#user-name").value.trim();
  const password = document.querySelector("#password").value.trim();

  if (username && password && email && name) {
    const response = await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify({ username, password, email, name }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      alert("account created!");
      document.location.replace("/login");
    } else {
      alert("failed to sign up");
    }
  }
};

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
