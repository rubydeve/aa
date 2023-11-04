const publicDate = document.querySelectorAll('.publicDate')
const dateSpan = document.querySelectorAll('.currentDate')
const currYear = document.querySelectorAll('.currYear')
const leftPlace = document.querySelectorAll('.leftPlace')

publicDate.forEach(item => {
  item.innerHTML = new Date().toLocaleDateString('en', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
})
dateSpan.forEach(item => {
  item.innerHTML = new Date().toLocaleDateString('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
})
currYear.forEach(item => {
  item.innerHTML = new Date().getFullYear()
})
const left = Math.floor(Math.random() * (15 - 5) + 5)
leftPlace.forEach(item => {
  item.innerHTML = left
})



const updDate = getYesterdayDate().toLocaleDateString('en', {
  day: "numeric",
  month: "long",
  year: "numeric",
})

document.querySelector('.updateDate').innerHTML = updDate
// document.querySelector('.updateDate2').innerHTML = updDate

function getYesterdayDate() {
  let yesterday = new Date()
  yesterday.setMonth(yesterday.getMonth())
  yesterday.setDate(yesterday.getDate())
  yesterday.setHours(yesterday.getHours())
  yesterday.setMinutes(yesterday.getMinutes() - 95)
  return yesterday
}
