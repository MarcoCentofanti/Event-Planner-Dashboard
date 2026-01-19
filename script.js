
// FUNCIONS
const cardRender = function (element){
    const newCard = document.createElement("div")
    newCard.classList.add("card")
    newCard.classList.add("cardAdded")
    if (darkModeButton.textContent === "Light Mode") {
        newCard.classList.add("bg-dark")
        newCard.classList.add("text-white")
    }
        newCard.innerHTML =
        `<div class="card-body">
        <h5 id="cardEventTitle" class="card-title">${element.title}</h5>
        <p id="cardEventdate" class="card-text">Data: ${element.day}-${element.month}-${element.year}</p>
        <p id="cardEventhour" class="card-text">Ora: ${element.hour}:${element.minutes}</p>
        <p id="cardNote" class="card-text">Note: ${element.note}</p>
        <p id="cardTag" class="card-text">Tag: ${element.tag}</p>
        </div>`
        
        eventList.append(newCard)
  }



// COLOR MODE

const darkModeButton = document.getElementById("darkModeButton")
const navbarElement = document.querySelector("nav")
const textAll = document.querySelectorAll("label, p, h1, h2, h3, h4, h5")
const selectAll = document.querySelectorAll("select")
const formButton = document.querySelectorAll("button.formButton")
const textareaNote = document.getElementById("textareaNote")
const ButtonModalAddTag = document.getElementById("ButtonModalAddTag")
const html = document.documentElement;
darkModeButton.addEventListener("click", (e => {
  if (darkModeButton.textContent === "Dark Mode") {
    darkModeButton.textContent = "Light Mode"
  } else {
    darkModeButton.textContent = "Dark Mode"
  }
  
  const current = html.getAttribute("data-bs-theme");
  html.setAttribute("data-bs-theme", current === "dark" ? "light" : "dark");
  const cardAdded = document.querySelectorAll("div.cardAdded")
  cardAdded.forEach(element => {
    element.classList.toggle("bg-dark")
    element.classList.toggle("bg-light")  
    element.classList.toggle("text-white")  
  });
  
  navbarElement.classList.toggle("bg-light")  
  navbarElement.classList.toggle("bg-dark")
  navbarElement.classList.toggle("navbar-light")
  navbarElement.classList.toggle("navbar-dark")
  textAll.forEach(element => {
    element.classList.toggle("text-white")
    darkModeButton.classList.toggle("btn-dark")
    darkModeButton.classList.toggle("btn-light")
    ButtonModalAddTag.classList.toggle("btn-dark")
  }); 
  
  // Comportamenti sostituito da "data-bs-theme" righe 48-49
  /*
  const bodyElement = document.querySelector("body")
  const cardAll = document.getElementById("eventList")
  const cardExample = document.getElementById("cardExample")
  const modal = document.getElementById("exampleModal")

  bodyElement.classList.toggle("bg-dark")
  titleEvent.classList.toggle("bg-dark")
  titleEvent.classList.toggle("text-white")
  titleFilter.classList.toggle("bg-dark")
  titleFilter.classList.toggle("text-white")
  cardAll.classList.toggle("text-white")
  cardAll.classList.toggle("bg-dark")
  cardExample.classList.toggle("text-white")
  cardExample.classList.toggle("bg-dark")
  buttonAddTag.classList.toggle("bg-dark")
  modal.classList.toggle("text-black")
  textareaNote.classList.toggle("text-white")
  textareaNote.classList.toggle("bg-dark")

  */
  

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
  newEvent.hour = hourInput.value
  newEvent.minutes = minuteInput.value
  newEvent.note = textareaNote.value
  newEvent.tag = tagSelector.value

  agendaArray.push(newEvent)
  eventList.textContent = ""
  agendaArray.forEach((element) => cardRender(element))

})


resetButton.addEventListener("reset", (e) => {
})


// FILTER FUNCTIONALITY

const filterButton = document.getElementById("filterButton")
const resetorAllButton = document.getElementById("resetorAllButton")
const titleFilter = document.getElementById("titleFilter")


const dayFilter = document.getElementById("dayFilter")
const monthFilter = document.getElementById("monthFilter")
const yearFilter = document.getElementById("yearFilter")

const hourFilter = document.getElementById("hourFilter")
const minuteFilter = document.getElementById("minuteFilter")

let eventsTitleFiltred
let eventsDayFiltred
let eventsMonthFiltred
let eventsYearFiltred
let eventsHourFiltred
let eventsMinutesFiltred
let eventsTagFiltred

filterButton.addEventListener("click", (e) => {
  e.preventDefault()
  // console.log("TEST-filter")

// FILTRAGGIO
  // TITLE
  if ( titleFilter.value !== ""){
    eventsTitleFiltred = agendaArray.filter(element => element.title.toLowerCase().includes(titleFilter.value.toLowerCase()))
    console.log(eventsDayFiltred)
     eventList.textContent = ""

  eventsTitleFiltred.forEach(element => cardRender(element))
  } else {
    eventsTitleFiltred = [...agendaArray]
  }
  // DAY
  if ( dayFilter.value !== ""){
    eventsDayFiltred = eventsTitleFiltred.filter(element => element.day === dayFilter.value)
    console.log(eventsDayFiltred)
     eventList.textContent = ""

  eventsDayFiltred.forEach(element => cardRender(element))
  } else {
    eventsDayFiltred = [...eventsTitleFiltred]
  }
  // MONTH
    if ( monthFilter.value !== ""){
    eventsMonthFiltred = eventsDayFiltred.filter(element => element.month === monthFilter.value)
     
    eventList.textContent = ""

  eventsMonthFiltred.forEach(element => cardRender(element))
  } else {
        eventsMonthFiltred = [...eventsDayFiltred]
  }
  // YEAR
    if ( yearFilter.value !== ""){
    eventsYearFiltred = eventsMonthFiltred.filter(element => element.year === yearFilter.value)
     
    eventList.textContent = ""

  eventsYearFiltred.forEach(element => cardRender(element))
  } else {
        eventsYearFiltred = [...eventsMonthFiltred]
  }
  // HOUR
    if ( hourFilter.value !== ""){
    eventsHourFiltred = eventsYearFiltred.filter(element => element.hour === hourFilter.value)
     
    eventList.textContent = ""

  eventsHourFiltred.forEach(element => {
    const newCard = document.createElement("div")
    newCard.classList.add("card")
    newCard.classList.add("cardAdded")
    if (darkModeButton.textContent === "Light Mode") {
        newCard.classList.add("bg-dark")
        newCard.classList.add("text-white")
    }
        newCard.innerHTML =
        `<div class="card-body">
        <h5 id="cardEventTitle" class="card-title">${element.title}</h5>
        <p id="cardEventdate" class="card-text">Data: ${element.day}-${element.month}-${element.year}</p>
        <p id="cardEventhour" class="card-text">Ora: ${element.hour}:${element.minutes}</p>
        <p id="cardNote" class="card-text">Note: ${element.note}</p>
        </div>`
        
        eventList.append(newCard)
        console.log(newCard)
      })
  } else {
        eventsHourFiltred = [...eventsYearFiltred]
      }
  // MINUTE
    if ( minuteFilter.value !== ""){
    eventsMinutesFiltred = eventsHourFiltred.filter(element => element.minutes === minuteFilter.value)
     
    eventList.textContent = ""

  eventsMinutesFiltred.forEach(element => cardRender(element))
  } else {
        eventsMinutesFiltred = [...eventsHourFiltred]
    }
      // TAG
if ( tagSelector.value !== ""){
    eventsTagFiltred = eventsMinutesFiltred.filter(element => element.tag === tagSelector.value)
     
    eventList.textContent = ""

  eventsTagFiltred.forEach(element => cardRender(element))
  } else {
        eventsTagFiltred = [...eventsMinutesFiltred]
    }
  })

  resetorAllButton.addEventListener("click", (e) => {
  eventList.textContent = ""
  agendaArray.forEach(element => cardRender(element))
  })

  // TAG FUNCIONALITY
  const tagList = ["Casa", "Salute", "Lavoro"]



  const buttonAddTag = document.getElementById("buttonAddTag")
  const titleTagAdded = document.getElementById("titleTagAdded")
  
  const tagFilterSelector = document.getElementById("tagFilterSelector")
  const tagSelector = document.getElementById("tagSelector")

  tagList.forEach(element => {
    const newOption = document.createElement("option")
    newOption.setAttribute("value", element)
    newOption.textContent = element
    
    const newOptionFilter = document.createElement("option")
    newOptionFilter.setAttribute("value", element)
    newOptionFilter.textContent = element

    tagSelector.append(newOption)
    tagFilterSelector.append(newOptionFilter)

  });


  buttonAddTag.addEventListener("click", () => {
    if(tagList.includes(titleTagAdded.value)) {
      
    }
    tagList.push(titleTagAdded.value)
    tagSelector.textContent = ""
    tagFilterSelector.textContent = ""

    tagSelector.innerHTML = "<option selected></option>"
    tagFilterSelector.innerHTML = "<option selected></option>"

    tagList.forEach(element => {
    const newOption = document.createElement("option")
    newOption.setAttribute("value", element)
    newOption.textContent = element
    
    const newOptionFilter = document.createElement("option")
    newOptionFilter.setAttribute("value", element)
    newOptionFilter.textContent = element

    tagSelector.append(newOption)
    tagFilterSelector.append(newOptionFilter)
  });
  })