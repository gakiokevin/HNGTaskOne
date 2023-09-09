//Function to update the time to display the  current time
 updateTime()
function updateTime(){
let daysOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday', 'Friday','Saturday']
let date = new Date().getDay()
let weekDay = daysOfWeek[date]
 let dayOfWeek = document.getElementById('dayOfWeek')
 dayOfWeek.textContent =  weekDay
   //defining the UTC time in seconds
 let UTC = new Date().getTime()
   let UTCTime = document.getElementById('UTCTime')
   UTCTime.textContent = UTC
}
setInterval(updateTime,1000)