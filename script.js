var a = document.getElementById("fill-me");
var c = document.getElementById("fill-me2")
var e = document.getElementsByClassName("change-all-of-me")

var b = a.innerHTML;
var d = c.innerHTML;
var h = e.innerHTML;

a.innerHTML = "HALO!"
c.innerHTML = "Apa Kabar!"
e[0].innerHTML = "HALO JUGA!"
e[1].innerHTML = "HALO JUGA!"
e[2].innerHTML = "HALO JUGA!"
e[3].innerHTML = "HALO JUGA!"

for(i = 0; i < e.length; i++){
  console.log(e[i].innerHTML)
  }

console.log(b);
console.log(d);
