const timeElemnt = document.getElementById("time")
const newDateTime = new Date().toLocaleTimeString()

timeElemnt.textContent = `the time is: ${newDateTime} `
