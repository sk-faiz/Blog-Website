const API_URL = "http://localhost:3000/api/posts/";
const API_base_url = "http://localhost:3000/";

window.onload = () => {
  getpost();
  getId();
};

const getId = () => {
  const id = window.location.search;
  const idsearch = new URLSearchParams(id);
  return idsearch.get("id");
};

const getpost = () => {
  const pid = getId();
  let url = `${API_URL}${pid}`;
  console.log(url);
  fetch(url, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((postData) => {
      postBuild(postData);
    });
};

const postBuild = (DATA) => {
  const date = new Date(parseInt(DATA.added_date)).toDateString();
  const img = `${API_base_url}${DATA.post_image}`;
  document.querySelector(".post-title").innerHTML = DATA.title;
  document.querySelector(".post-date").innerHTML = `Published on ${date}`;
  document.querySelector(".post-content").innerHTML = DATA.content;
  document.querySelector("header").style.backgroundImage = `url("${img}")`;
};
