fetch("https://jsonplaceholder.typicode.com/users")
.then((res)=>res.json())
.then((data)=>console.log(data));

const data={
    username : "this is title",
    body:"this is post body",
}