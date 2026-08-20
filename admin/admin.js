const postTitle = document.getElementById("postTitle");
const postDescription = document.getElementById("postDescription");
const savePost = document.getElementById("savePost");
const clearPost = document.getElementById("clearPost");
const statusMessage = document.getElementById("statusMessage");

savePost.addEventListener("click", () => {
  const title = postTitle.value.trim();
  const description = postDescription.value.trim();

  if (!title || !description) {
    statusMessage.textContent = "Please enter title and description.";
    return;
  }

  const postData = {
    title: title,
    description: description,
    updatedAt: new Date().toISOString()
  };

  localStorage.setItem("websitePost", JSON.stringify(postData));

  statusMessage.textContent = "Post saved successfully!";
});

clearPost.addEventListener("click", () => {
  postTitle.value = "";
  postDescription.value = "";
  statusMessage.textContent = "";
});

window.addEventListener("DOMContentLoaded", () => {
  const savedPost = localStorage.getItem("websitePost");

  if (savedPost) {
    const postData = JSON.parse(savedPost);

    postTitle.value = postData.title || "";
    postDescription.value = postData.description || "";
  }
});
