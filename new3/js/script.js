const dateSpan = document.querySelectorAll(".currentDate");
const currDay = document.querySelectorAll(".currDay");
const currMonth = document.querySelectorAll(".currMonth");
const currYear = document.querySelectorAll(".currYear");
const publicDate = document.querySelectorAll('.publicDate')

publicDate.forEach(item => {
  item.innerHTML = new Date().toLocaleDateString('en', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  })
})

dateSpan.forEach(item => {
  item.innerHTML = new Date().toLocaleDateString(
    "en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }
  );
});

currDay.forEach(item => {
  item.innerHTML = new Date().toLocaleDateString(
    "es", {
    day: "numeric",
  }
  );
});

currMonth.forEach(item => {
  item.innerHTML = new Date().toLocaleDateString(
    "es", {
    month: "long",
  }
  );
});

currYear.forEach(item => {
  item.innerHTML = new Date().toLocaleDateString(
    "es", {
    year: "numeric",
  }
  );
});



let rand = Math.floor(Math.random() * (15 - 5) + 5);
$('.data-end-place').text(rand)