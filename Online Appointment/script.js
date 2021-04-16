console.log("Kalender")

//Selection
let days = document.querySelector(".days");
let currentDayEl;
let selectedDay = -1;
let savedAppointments = JSON.parse(localStorage.getItem("appointments"));
console.log(savedAppointments)
let time = document.querySelector("#time");

// Iteration durch das li Elemente
for(let i=1;i<32;i++){
 const listElementLi = document.createElement("li");
 listElementLi.innerHTML = i
 days.appendChild(listElementLi)
 listElementLi.addEventListener("click",() => {
    if (currentDayEl){
    currentDayEl.classList.remove("active");
    }
    setDay(i)
    selectedDay = i;
    listElementLi.classList.add("active")
    currentDayEl = listElementLi
 })
}

// Anzeige/Ausgeben des Angewählten Tages
function setDay(number){
    console.log(number)
    let currentDate = document.querySelector("#currentDate");
    currentDate.innerHTML = number + " März 2021";

}

// Name Selektieren und
let nameInput = document.querySelector("#name");

// Button New Appointment
const button = document.querySelector(".newApp");

button.addEventListener('click', () => {
let name = nameInput.value;
//console.log(time)
let selectedTime = time.options[time.selectedIndex].value;
console.log(selectedTime + " " + selectedDay + ' ' + name)
savedAppointments.push(selectedTime + " " + selectedDay + ' ' + name)
localStorage.setItem("appointments", JSON.stringify(savedAppointments));

})