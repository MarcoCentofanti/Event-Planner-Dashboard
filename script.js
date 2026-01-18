
const agendaArray = []

const submitButton = document.getElementById("submitButton")
const resetButton = document.getElementById("resetButton")
const titleEvent = document.getElementById("titleEvent")
const dayInput = document.getElementById("daySelector")
const monthInput = document.getElementById("monthSelector")
const yearInput = document.getElementById("yearSelector")

const hourInput = document.getElementById("hourSelector")
const minuteInput = document.getElementById("minuteSelector")

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

  agendaArray.push(newEvent)
  console.log(newEvent)
  console.log(agendaArray)

  eventList.textContent = ""
  agendaArray.forEach(element => {
    const newCard = document.createElement("div")
    newCard.innerHTML =`<div class="card" >
            <div class="card-body">
              <h5 id="cardEventTitle" class="card-title">${element.title}</h5>
              <p id="cardEventdate" class="card-text">${element.day}-${element.month}-${element.year}</p>
              <p id="cardEventhour" class="card-text">${element.hour}:${element.minutes}</p>
            </div>
          </div>
        </div>`
    eventList.append(newCard)
  });


})



resetButton.addEventListener("click", (e) => {
  e.preventDefault()
  // console.log("TEST-reset")
})