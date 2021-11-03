

let postId = localStorage.getItem('postId')

//retrive the parent element
let postDisplay = document.getElementById('single-post-display')
let PostHeader = document.getElementById('post-header')

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
.then(respond => respond.json())
.then(data =>{
    let html ="";
    html+=`
        <div class="col-md-4 mb-3">
            <a class="postlink text-decoration-none text-dark" href="#">
                <div class="card h-100">
                    <div class="card-body">
                        <div class ="d-flex justify-content-start">
                           <h5 class = "text-primary">${data.id}</h5>
                        </div>
                        <h3 class="post-title mb-4">my ${data.title}</h3>
                        <p class="post-body">${data.body}</p>
                    </div>
                </div>
            </a>
        </div>

    `
    postDisplay.innerHTML = html;
    PostHeader.innerHTML = ` post ${data.id}`
})