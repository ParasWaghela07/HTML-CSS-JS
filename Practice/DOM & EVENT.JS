// document.getElementById("google").addEventListener('click', function() {
//     window.location.href="https://www.google.com";
//     win.focus();
// });



// let x = function(e) {
//     let b = document.getElementById("hey");
//     b.classList.toggle("bulbOff");
//     alert("dance");
// }

// let a = document.getElementById("hey");
// a.addEventListener('click', x);

setInterval(async function(){
    let url="https://jsonplaceholder.typicode.com/todos/1"
    console.log(await fetchContent(url))},2000)

// setInterval(async function(){
// document.getElementById("hey").classList.toggle("bulbOff");
// },500)





