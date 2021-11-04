let todosName = document.getElementById('todos-name');
let todosEmail = document.getElementById('todos-email');
let todosBody = document.getElementById('todos-body');
let todosForm = document.getElementById('todos-form')
let userTodo =[];


//to create or post todos
todosForm.addEventListener('submit',createPost)




//to create or fetch todos
function getTodos(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response =>response.json())
    .then((data)=> {
        console.log(data);
        let todoLayout = document.getElementById('todo-layout') 
        userTodo = data;     
        let todo="";
        userTodo.forEach(e=> {
            //console.log(element)
            todo +=`
                <div class="col-sm-12 col-md-4 col-lg-4 mb-3">
                    <div class="card h-100">
                      <div class="card-body">
                           <p class ="d-flex justify-content-start text-primary">
                           ${e.id}</P>
                          <h3>${e.name}</h3>
                          <h5>${e.email}</h5>
                          <p>${e.body}</p>
                          <div class ="d-flex justify-content-end">
                              <button class ="btn btn-info" onclick="updateTodo()">
                              update</button>
                           </div> 
                     </div>
                  </div>
               </div>
            `
            todoLayout.innerHTML=todo
        });  
    })
}
getTodos();



//to creating todos/posts
function createPost(e) {
    e.preventDefault();
    //TO GET THE VALUE OF EACH INPUT FIELD
   let tName = todosName.value;
    let tEmail = todosEmail.value;
    let tBody = todosBody.value;
    console.log(tName);

    //fetch the url,under it you have method,body and header
    fetch('https://jsonplaceholder.typicode.com/comments',{
        method:'POST',
        body:JSON.stringify({
            name:tName,
            email:tEmail,
            body:tBody,
            userid:6
        }),
        headers:{
            'content-type':'application/json; charset=UTF-8',
        },
    })
    .then(response => response.json())
    .then((data)=>{
        console.log('todos',data)
        console.log(userTodo)
        //userTodo = data;
        userTodo.push(data)
        console.log(userTodo)
        let todoLayout = document.getElementById('todo-layout') 
        let todo="";
        userTodo.forEach(e=> {
            //console.log(element)
            todo +=`
              <div class="col-sm-12 col-md-4 col-lg-4 mb-3">
                  <div class="card h-100">
                       <div class="card-body">
                           <p class ="d-flex justify-content-start text-primary">
                           ${e.id}</P>
                          <h3>${e.name}</h3>
                          <h5>${e.email}</h5>
                          <p>${e.body}</p>
                      </div>
                  </div>
               </div>
            `
            todoLayout.innerHTML=todo
        });  
        alert('comment added succesfuuly!')
    })
}

//updating and editing a post
function updateTodo() {
    fetch('https://jsonplaceholder.typicode.com/comments/1',{
        method:'PUT',
        body:JSON.stringify({
            
            name:'Ammie',
            email:'she',
            body:'javascript',
            userid:6
        }),
        headers:{
            'content-type':'json/application;charset=UTF-8',
        },
    })
    .then(response =>response.json())
    .then((data)=>{
        console.log(data)

    })
    .catch((e)=>{
        console.log(e)
    })
    ;
}
