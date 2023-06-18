function togglemode() {
  const html = document.documentElement
  html.classList.toggle("branco")
  //troca da imagem//
  const img = document.querySelector("#profile img")
  

  if (html.classList.contains("branco")) {
    img.setAttribute("src", "assets/avatar.png")
    img.setAttribute("alt", "mayk com oculos")
  
  } else {
    img.setAttribute("src", "./assets/avatar-pp.png")
    img.setAttribute("alt", "mayk sem oculos")
 
  }


 
}
