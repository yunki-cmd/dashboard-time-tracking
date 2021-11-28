const divsRender = document.querySelectorAll('.rendered')
const tiposWorks=['Work','Play',"Study","Exercise","Social","Self Care"]
const daily = document.getElementById('event-daily')
const weekly = document.getElementById('event-weekly')
const monthly = document.getElementById('event-monthly')

window.addEventListener('load',function(e){
  let tipo ='weekly'
  quitarEstilo()
  let b = document.getElementById('event-weekly')
  b.style.color='white'
  tiposWorks.forEach((element,indece) => {
    obtenerDatos(tipo,element,indece)
  })
})

monthly.addEventListener('click',function(e){
  let tipo ='monthly'
  quitarEstilo()
  e.target.style.color='white'
  tiposWorks.forEach((element,indece) => {
    obtenerDatos(tipo,element,indece)
  })
})

weekly.addEventListener('click', function(e){
  let tipo ='weekly'
  quitarEstilo()
  e.target.style.color='white'
  tiposWorks.forEach((element,indece) => {
    obtenerDatos(tipo,element,indece)
  })
})

daily.addEventListener('click',e=>{
  let tipo ='daily'
  quitarEstilo()
  e.target.style.color='white'
  tiposWorks.forEach((element,indece) => {
    obtenerDatos(tipo,element,indece)
  })
})
 
function quitarEstilo(){
  let a = document.querySelectorAll('.card__perfil__weak__span > span')
  a.forEach(element=>{
    if(element.style.color==='white'){
      element.removeAttribute('style')
    }
  })
}

tiposWorks.forEach((element,indece) => {
  obtenerDatos('weekly',element,indece)
})

 function obtenerDatos(tipo,modo,indice) {
   fetch('./data.json').then(res=>res.json())
  .then(resp =>{
     return resp.find(elemnt=> {
        if(elemnt.title===modo){
          return elemnt
        }
      })
  })
  .then(resp =>{
    divsRender[indice].innerHTML= renderizar(tipo,resp)
  })
  
}

function renderizar(tipo,datos) {
  return ` 
<div class="card__category__body__menu">
  <span>
    ${datos.title}
  </span>
  <div class="card__category__body_menu__puntos">
    <span class="puntos"></span>
  </div>
</div>
<div class="card__category_body_hrs">
  <span class="card__category_body_hrs--hora">
    ${datos.timeframes[tipo].current}hrs
  </span>
  <span class="card__category_body_hrs--past">
    Last ${tipo} - ${datos.timeframes[tipo].previous}hrs
  </span>
</div>`
}


