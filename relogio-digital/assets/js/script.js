const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");
const Milliseconds = document.getElementById("centesimos");

const relogio = setInterval(function time(){
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();
    let cs = dateToday.getMilliseconds();

    let now = new Date();
    let performanceTime = performance.now();
    let Milliseconds = now.getMilliseconds()
    let centesimo = Milliseconds;

     // <<< (codigo teste)
    
    if (hr < 10) hr = "0" + hr;

    if (min < 10) min = "0" + min;
    
    if (s < 10) s = "0" + s;
    
    if (cs) cs = cs/10;

    if (cs) cs = cs.toFixed(0);
    

    
    
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
    centesimos.textContent = cs;
})
