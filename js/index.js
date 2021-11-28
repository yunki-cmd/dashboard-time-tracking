const id = document.getElementById("pruebaMedico")

async function obtenerDatos() {
  const datos = await fetch('./data.json').then(res=>res.json());
  console.log(datos)
}

obtenerDatos()

const render = (tipo,modo, datoObjs) => {
  
  const a = {
    "title": "Self Care",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 2,
        "previous": 2
      },
      "monthly": {
        "current": 7,
        "previous": 11
      }
    }
  }
  for (const iterator of object) {

  }

  return ` 
            <div class="card__category__body__menu">
              <span>
                ${a.title}
              </span>
              <div class="card__category__body_menu__puntos">
                <span class="puntos"></span>
              </div>
            </div>
            <div class="card__category_body_hrs">
              <span class="card__category_body_hrs--hora">
                ${a.timeframes[tipo].current}hrs
              </span>
              <span class="card__category_body_hrs--past">
                Last ${tipo} - ${a.timeframes[tipo].previous}hrs
              </span>
            </div>`
}

id.innerHTML = render('weekly')