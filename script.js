console.log("Kalender")

let days = document.querySelector(".days");
let currentDayEl;
let selectedDay = -1;

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


function setDay(number){
    console.log(number)
    let currentDate = document.querySelector("#currentDate");
    currentDate.innerHTML = number + " März 2021";

}

let nameInput = document.querySelector("#name");
let name = "";

nameInput.addEventListener("input", (value) => {
    name = value;
    console.log(name)
})