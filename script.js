// COLOR MODE
const darkModeButton = document.getElementById("darkModeButton")


const bodyElement = document.querySelector("body")
const navbarElement = document.querySelector("nav")
const textAll = document.querySelectorAll("label, p, h1, h2, h3, h4, h5")
const cardAll = document.getElementById("eventList")
const selectAll = document.querySelectorAll("select")
const formButton = document.querySelectorAll("button.formButton")
const textareaNote = document.getElementById("textareaNote")

darkModeButton.addEventListener("click", (e => {
  if (darkModeButton.textContent === "Dark Mode") {
    darkModeButton.textContent = "Light Mode"
  } else {
    darkModeButton.textContent = "Dark Mode"
  }
  const cardBody = document.querySelectorAll("div.card-body")

  bodyElement.classList.toggle("bg-dark")
  navbarElement.classList.toggle("bg-light")  
  navbarElement.classList.toggle("bg-dark")
  navbarElement.classList.toggle("navbar-light")
  navbarElement.classList.toggle("navbar-dark")
  darkModeButton.classList.toggle("btn-dark")
  darkModeButton.classList.toggle("btn-light")
  titleEvent.classList.toggle("bg-dark")
  titleEvent.classList.toggle("text-white")

  cardAll.classList.toggle("text-white")
  cardAll.classList.toggle("bg-dark")
  
  textareaNote.classList.toggle("text-white")
  textareaNote.classList.toggle("bg-dark")
  
  textAll.forEach(element => {
    element.classList.toggle("text-white")
  }); 
  
  cardBody.forEach(element => {
    element.classList.toggle("text-white")
    element.classList.toggle("bg-dark")
  }); 

  selectAll.forEach(element => {
    element.classList.toggle("text-white")
    element.classList.toggle("bg-dark")
  }); 

  formButton.forEach(element => {
    element.classList.toggle("btn-secondary")
    element.classList.toggle("btn-outline-light")
  }); 


}))




// EVENT FUNCTIONALITY
const agendaArray = []

const submitButton = document.getElementById("submitButton")
const resetButton = document.getElementById("resetButton")
const titleEvent = document.getElementById("titleEvent")
const dayInput = document.getElementById("daySelector")
const monthInput = document.getElementById("monthSelector")
const yearInput = document.getElementById("yearSelector")

const hourInput = document.getElementById("hourSelector")
const minuteInput = document.getElementById("minuteSelector")
const noteTextArea = document.getElementById("noteTextArea")

const eventList = document.getElementById("eventList")

submitButton.addEventListener("click", (e) => {
  e.preventDefault()
  const newEvent = {}

  newEvent.title = titleEvent.value
  newEvent.day = dayInput.value
  newEvent.month = monthInput.value
  newEvent.year = yearInput.value
  newEvent.note = textareaNote.value

  newEvent.hour = hourInput.value
  newEvent.minutes = minuteInput.value

  agendaArray.push(newEvent)
  console.log(newEvent)
  console.log(agendaArray)

  eventList.textContent = ""
  agendaArray.forEach(element => {
    const newCard = document.createElement("div")
    newCard.innerHTML =`<div class="card" >
            <div class="card-body">
              <h5 id="cardEventTitle" class="card-title">${element.title}</h5>
              <p id="cardEventdate" class="card-text">Data: ${element.day}-${element.month}-${element.year}</p>
              <p id="cardEventhour" class="card-text">Ora: ${element.hour}:${element.minutes}</p>
               <p id="cardNote" class="card-text">Note: ${element.note}</p>
            </div>
          </div>`
    eventList.append(newCard)
  });


})



resetButton.addEventListener("click", (e) => {
  e.preventDefault()
  // console.log("TEST-reset")
})