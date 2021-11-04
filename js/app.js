
//create a funtion to fetch posts
function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response =>  response.json())
    .then((data)=> {
        console.log(data);
        let postLayout = document.getElementById('post-layout')
        let html = "";
        data.forEach(e => {
            //console.log(element); 
            html +=`
               <div class="col-md-4 mb-3">
                  <a class="aTag text-decoration-none text-dark" href="post.html" id=${e.id}>
                       <div class="card h-100">
                           <div class="card-body">
                               <div class ="d-flex justify-content-start">
                                   <h5 class = "text-primary">${e.id}</h5>
                               </div>
                              <h3 class="post-title mb-4">my ${e.title}</h3>
                              <p class="post-body">${e.body}</p>
                           </div>
                      </div>
                   </a>
               </div>
            `  
            postLayout.innerHTML=html   
            

            let aTag =Array.from(document.querySelectorAll('.aTag'))
            aTag.forEach(tag => {
               tag.addEventListener('click',()=>{
                 let postId = tag.getAttribute('id')
                    localStorage.setItem('postId',postId)
                })
            });
        });
    })
}
getPosts();


