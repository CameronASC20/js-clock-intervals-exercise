const secondHand = document.getElementById('second')
const minHand = document.getElementById('minute')
const hourHand = document.getElementById('hour')

let degrees = 1;

seconds = setInterval(() => {
    let secRotation = (degrees/ 60) * 360
    secondHand.style.transform = "rotate(" + secRotation + "deg)"
    degrees += 1
}, 1000)

minutes = setInterval(() => {
    let minRotation = (degrees/ 60) * 360
    minHand.style.transform = "rotate(" + minRotation + "deg)" 
    degrees += 1
}, 60000)

hours = setInterval(() => {
    let hourRotation = (degrees/ 12) * 360
    hourHand.style.transform = "rotate(" + hourRotation + "deg)"
    degrees += 1
}, 360000)