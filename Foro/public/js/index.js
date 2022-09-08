
let contenedor=document.getElementById('contenedorForo')

console.log('hola');

fetch('http://localhost:3000')
.then(response => response.json())
.then(data =>{
    console.log(data.length);
    for (let i = 0; i < data.length; i++) {
        contenedor.innerHTML+=`
    <div class="contenedor">
    <div class="contenedor-2">
        <p class="equipo">${data[i].equipo}</p>
        <img src=${data[i].img} alt="">
        <p>${data[i].juego}</p>
     </div>
   
    <div >
        <p class="link-foro">${data[i].posteo}</p>
    </div>
   
    <div>
        <p>${data[i].usuario}</p>
    </div>
   
    <div>
        <p class="respuestas-foro">${data[i].respuestas}</p>
    </div>
 </div>
    `

        
    }

    
})

/*
equipo:'PC',
    imagen:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDlgbnkF0c4ntU7AXYxn4nIJlvJQ4PZIGwUA&usqp=CAU',
    juego:'rust',
    posteo:'No puedo entrar al mapa',
    usuario:'Nicolascastrocai00',
    respuestas:3
*/


/*
<div class="contenedor">
    <div class="contenedor-2">
        <p class="equipo">PC</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDlgbnkF0c4ntU7AXYxn4nIJlvJQ4PZIGwUA&usqp=CAU" alt="">
        <p>Rust</p>
     </div>
   
    <div >
        <p class="link-foro">No puedo entrar al mapa</p>
    </div>
   
    <div>
        <p>Nicolascastrocai</p>
    </div>
   
    <div>
        <p class="respuestas-foro">3</p>
    </div>
 </div>
   
   
   
   
   
   
               <div class="contenedor">
                   <div class="contenedor-2">
                       <p class="equipo">PC</p>
                       <img src="https://livingplaystation.com/wp-content/uploads/2017/06/ARK-Survival-Evolved-logo.png" alt="">
                       <p>ARK</p>
                   </div>
   
                   <div >
                       <p class="link-foro">Dinosaurio inmortales ayuda!!! </p>
                   </div>
   
                   <div>
                       <p>Brisacoronle01</p>
                       </div>
   
                   <div>
                       <p class="respuestas-foro">2</p>
                   </div>
               </div>
   
   
   
   
   
               <div class="contenedor">
                   <div class="contenedor-2">
                       <p class="equipo">PC</p>
                        <img src="https://seeklogo.com/images/E/elden-ring-logo-0A08D276EC-seeklogo.com.png" alt="">
                       <p>Elden Ring</p>
                    </div>
   
                   <div >
                         <p class="link-foro">Se me buguea el personaje </p>
                   </div>
   
                    <div>
                        <p>rami02</p>
                    </div>
   
                     <div>
                         <p class="respuestas-foro">13</p>
                    </div>
                </div>
   
   
   
   
               <div class="contenedor">
                   <div class="contenedor-2">
                       <p class="equipo">Play 4</p>
                       <img src="https://img.redbull.com/images/c_crop,x_313,y_0,h_353,w_265/c_fill,w_400,h_520/q_auto:low,f_auto/redbullcom/2021/7/28/pmjkmhqo940brpe98wz6/fifa-22-logo-mbappe" alt="">
                       <p >Fifa22</p>
                  </div>
   
                   <div >
                       <p class="link-foro">No puedo comprar cartas </p>
                    </div>
   
                   <div>
                       <p>ian99franco</p>
                   </div>
   
                   <div>
                       <p class="respuestas-foro">4</p>
                    </div>
               </div>
   
   
   
   
   
               <div class="contenedor">
                   <div class="contenedor-2">
                       <p class="equipo">PC</p>
                       <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1818750/header.jpg?t=1659714665" alt="">
                       <p>multiverso</p>
                   </div>
   
                   <div >
                        <p class="link-foro">no me da las monedas cuando gano un juego </p>
                     </div>
   
                     <div>
                         <p>joseDePalo</p>
                     </div>
   
                    <div>
                         <p class="respuestas-foro">1</p>
                     </div>
                </div>
   
*/