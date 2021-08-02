let api = "http://localhost:3000/api/posts/";

const submitNewPost = () => {
    const title = document.getElementById("form-post-title").value;
    const content = document.getElementById("form-post-content").value;
    const image = document.getElementById("post-image");

    let form = new FormData();
    form.append("post-image", image.files[0])
    form.append("title", title);
    form.append("content", content)
    
    fetch(api, {
        method:"POST",
        body:form
    }).then(()=> {
         window.location.href = "index.html"
    })
}