// COLOR MODE
const darkModeButton = document.getElementById("darkModeButton")


const bodyElement = document.querySelector("body")
const navbarElement = document.querySelector("nav")
const textAll = document.querySelectorAll("label, p, h1, h2, h3, h4, h5")
const cardAll = document.getElementById("eventList")
const selectAll = document.querySelectorAll("select")
const formButton = document.querySelectorAll("button.formButton")
const textareaNote = document.getElementById("textareaNote")
const cardExample = document.getElementById("cardExample")

darkModeButton.addEventListener("click", (e => {
  if (darkModeButton.textContent === "Dark Mode") {
    darkModeButton.textContent = "Light Mode"
  } else {
    darkModeButton.textContent = "Dark Mode"
  }
  const cardBody = document.querySelectorAll("div.card-body")
  const cardAdded = document.querySelectorAll("div.cardAdded")
  cardAdded.forEach(element => {
    element.classList.toggle("bg-dark")
    element.classList.toggle("bg-light")  
    element.classList.toggle("text-white")  
  });

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

  cardExample.classList.toggle("text-white")
  cardExample.classList.toggle("bg-dark")
  
  
  textareaNote.classList.toggle("text-white")
  textareaNote.classList.toggle("bg-dark")
  
  textAll.forEach(element => {
    element.classList.toggle("text-white")
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
  newEvent.hour = hourInput.value
  newEvent.minutes = minuteInput.value
  newEvent.note = textareaNote.value

  agendaArray.push(newEvent)



  eventList.textContent = ""

  agendaArray.forEach(element => {
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
      })
      // console.log("aggiunto")

  })

  




resetButton.addEventListener("reset", (e) => {
  // e.preventDefault()
  // console.log("TEST-reset")
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

filterButton.addEventListener("click", (e) => {
  e.preventDefault()
  // console.log("TEST-filter")

// FILTRAGGIO
  // TITLE
  if ( titleFilter.value !== ""){
    eventsTitleFiltred = agendaArray.filter(element => element.title.toLowerCase().includes(titleFilter.value.toLowerCase()))
    console.log(eventsDayFiltred)
     eventList.textContent = ""

  eventsTitleFiltred.forEach(element => {
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
      })
  } else {
    eventsTitleFiltred = [...agendaArray]
    // console.log(eventsDayFiltred)
  }
  // DAY
  if ( dayFilter.value !== ""){
    eventsDayFiltred = eventsTitleFiltred.filter(element => element.day === dayFilter.value)
    console.log(eventsDayFiltred)
     eventList.textContent = ""

  eventsDayFiltred.forEach(element => {
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
      })
  } else {
    eventsDayFiltred = [...eventsTitleFiltred]
    // console.log(eventsDayFiltred)
  }
  // MONTH
    if ( monthFilter.value !== ""){
    eventsMonthFiltred = eventsDayFiltred.filter(element => element.month === monthFilter.value)
     
    eventList.textContent = ""

  eventsMonthFiltred.forEach(element => {
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
      })
  } else {
        eventsMonthFiltred = [...eventsDayFiltred]
        // console.log(eventsMonthFiltred)
  }
// YEAR
    if ( yearFilter.value !== ""){
    eventsYearFiltred = eventsMonthFiltred.filter(element => element.year === yearFilter.value)
     
    eventList.textContent = ""

  eventsYearFiltred.forEach(element => {
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
      })
  } else {
        eventsYearFiltred = [...eventsMonthFiltred]
        // console.log(eventsYearFiltred)
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
        // console.log(eventsYearFiltred)
      }
      // MINUTE
    if ( minuteFilter.value !== ""){
    eventsMinutesFiltred = eventsHourFiltred.filter(element => element.minutes === minuteFilter.value)
     
    eventList.textContent = ""

  eventsMinutesFiltred.forEach(element => {
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
        eventsMinutesFiltred = [...eventsHourFiltred]
        // console.log(eventsYearFiltred)
    }})

  resetorAllButton.addEventListener("click", (e) => {
  eventList.textContent = ""

  agendaArray.forEach(element => {
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
      })

  })