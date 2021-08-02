const API_url = "http://localhost:3000/api/posts/";
const API = "http://localhost:3000/";

window.onload = () => {
  getPost();
};

const getPost = () => {
  fetch(API_url, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      buildPost(data);
    });
};

const buildPost = (bPosts) => {
  let blogPostContent = "";
  for (blogPost of bPosts) {
    const img = `${API}${blogPost.post_image}`;
    const date = new Date(parseInt(blogPost.added_date)).toDateString();
    const postLink = `post.html?id=${blogPost.id}`;
    blogPostContent += `
           <a href="${postLink}">
               <div class="post">
                  <div class="post_img" style="background-image: url(${img})"></div>
                  <div class="post_content">
                     <div class="post_date">${date}</div>
                     <div class="post_title"><h4>${blogPost.title}</h4> </div>
                     <div class="post_text">${blogPost.content}</div>
                  </div>
                </div>
           </a>
        `;
  }
  document.querySelector(".blog-cont").innerHTML = blogPostContent;
};
