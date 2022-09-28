//document.querySelector("h1").style.color = "lime";

//let h1 = document.querySelector("h1");

//h1.textContent = "<p>Bienvenidos</p>";

//h1.innerHTML = "<p>Bienvenidos</p>";

let links = document.querySelectorAll("a");

for(let i=0 ; i<links.length ; i++){
    links[i].textContent = "Soy un link" + (i+1);
    links[i].style.color = "lime";
}