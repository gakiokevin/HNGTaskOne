//defining an array containing all days of the week
let daysOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday', 'Friday','Saturday']
let date = new Date().getDay()
let weekDay = daysOfWeek[date]
 let dayOfWeek = document.getElementById('dayOfWeek')
 dayOfWeek.textContent =  weekDay



 let UTC = new Date().getTime()
 let UTCTime = document.getElementById('UTCTime')
 UTCTime.textContent = UTC