//*pegando arquivo input

const MenuTextItem = document.querySelectorAll(".text-items-menu");

MenuTextItem.forEach((data) => {
  data.style.display = "none";
});

document.querySelector(".image").classList.remove("teste");

document.querySelector(".image").src = "../home/avatar.png";
document.querySelector("#pen").style.display = "none";
document.querySelector(".image-hidden").src = "../home/avatar.png";
document.querySelector(".upload-container-hidden").style.display = "none";
let isProfilePhotoUpload = false;
const file = document.querySelector("#file");
var LocalImageStore = localStorage.getItem("file");
if (LocalImageStore) {
  console.log("caiu");
  document.querySelector("#image").src = LocalImageStore;
}
file.addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    if (reader.result) {
      document.querySelector("#image").src = reader.result;
      document.querySelector("#image-hidden").src = reader.result;
      document.querySelector(".upload-container").style.display = "none";
      document.querySelector(".upload-container-hidden").style.display = "flex";

      isProfilePhotoUpload = true;
      localStorage.setItem("file", reader.result);
    } else {
      document.querySelector("#image").src = "./avatar.png";
    }
  });
  reader.readAsDataURL(this.files[0]);
});
function EdiPhotoProfile() {
  document.getElementById("file-hidden").click();
}
const fileHidden = document.querySelector("#file-hidden");
fileHidden.addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    if (reader.result) {
      document.querySelector("#image-hidden").src = reader.result;

      isProfilePhotoUpload = true;
    } else {
      document.querySelector("#image-hidden").src = "./avatar.png";
    }
  });
  reader.readAsDataURL(this.files[0]);
});

//*mouseEffect

const imgProfile = document.querySelector(".imgInput-hidden");
imgProfile.addEventListener("mouseover", (event) => {
  if (isProfilePhotoUpload) {
    document.querySelector("#pen").style.display = "flex";
    document.querySelector("#pen").addEventListener("click", () => {
      EdiPhotoProfile();
    });
  }
});

imgProfile.addEventListener("mouseout", (event) => {
  if (isProfilePhotoUpload) {
    document.querySelector("#pen").style.display = "none";
  }
});
//* seletores
const selector = (classElement) => document.querySelector(classElement);

let index = -1;
function handleForm(e) {
  e.preventDefault();
  var testerarr = JSON.parse(localStorage.getItem("newtask"));
  var counter = parseInt(
    localStorage.getItem("index") ? parseInt(localStorage.getItem("index")) : -1
  );
  localStorage.setItem("index", ++counter);

  if (FormIsEdited) {
    var counter = parseInt(localStorage.getItem("index"));
    localStorage.setItem("index", --counter);

    newTask = [
      {
        titulo: document.getElementById("titulo").value,
        subtitulo: document.getElementById("sub").value,
        descricao: document.getElementById("descricao").value,
        data: document.getElementById("start").value,
        id: Math.floor(Math.random() * Math.floor(Math.random() * Date.now())),
        index: counter,
      },
    ];
    secondTask = {
      checked: isChecked,
      titulo: document.getElementById("titulo").value,
      subtitulo: document.getElementById("sub").value,
      descricao: document.getElementById("descricao").value,
      data: document.getElementById("start").value,
      id: Math.floor(Math.random() * Math.floor(Math.random() * Date.now())),
      index: handleIndex,
    };
    if (
      secondTask.titulo == "" ||
      secondTask.subtitulo == "" ||
      secondTask.data == ""
    ) {
      var element = document.getElementById("errorContainer");
      element.setAttribute("id", "errorP");
      element.innerHTML = `<p class="error">Preencha todos os campos!</p>`;
      return;
    }

    function udapte(array, index, newValue) {
      array[index] = newValue;
    }

    if (localStorage.getItem("newtask")) {
      var testerarr = JSON.parse(localStorage.getItem("newtask"));
      const index = document.getElementById("index").value;

      udapte(testerarr, index, secondTask);
      testerarr.forEach((data) => {});
      localStorage.setItem("newtask", JSON.stringify(testerarr));
    } else {
      localStorage.setItem("newtask", JSON.stringify(newTask));
    }
    closeModal();
    window.location.reload();
  } else {
    newTask = [
      {
        titulo: document.getElementById("titulo").value,
        subtitulo: document.getElementById("sub").value,
        descricao: document.getElementById("descricao").value,
        data: document.getElementById("start").value,
        id: Math.floor(Math.random() * Math.floor(Math.random() * Date.now())),
        index: counter,
      },
    ];

    secondTask = {
      titulo: document.getElementById("titulo").value,
      subtitulo: document.getElementById("sub").value,
      descricao: document.getElementById("descricao").value,
      data: document.getElementById("start").value,
      id: Math.floor(Math.random() * Math.floor(Math.random() * Date.now())),
      index: counter,
    };

    if (
      secondTask.titulo == "" ||
      secondTask.subtitulo == "" ||
      secondTask.data == ""
    ) {
      var element = document.getElementById("errorContainer");
      element.setAttribute("id", "errorP");
      element.innerHTML = `<p class="error">Preencha todos os campos!</p>`;
      return;
    }

    if (localStorage.getItem("newtask")) {
      const testerarr = JSON.parse(localStorage.getItem("newtask"));

      testerarr.push(secondTask);

      localStorage.setItem("newtask", JSON.stringify(testerarr));
    } else {
      localStorage.setItem("newtask", JSON.stringify(newTask));
    }
    closeModal();
    window.location.reload();
  }
}

const teste = JSON.parse(localStorage.getItem("newtask"));

const myContent = document.querySelector(".todo-container");
const myContentDetails = document.querySelector(".task-details-container");
let getLocalSotrage = JSON.parse(localStorage.getItem("newtask"));
const checkTaskInput = document.getElementById("checkTask");
let filteredTasksDone = [];
let filteredTasksPendding = [];
let switchDonePendding;
let filteredFiles = [];
let filteredDone = [];

switchDonePendding = JSON.parse(localStorage.getItem("switchDonePendding"));

const inputFilter = document.getElementById("inputFilter");
let testa = [];

function showSelect(id) {
  let showAndHideMenu = false;
  const select = document.getElementById(id);
  if (select.id == id && select.classList.value !== "h1SelectShow") {
    showAndHideMenu == true;

    select.classList.remove("h1Select");
    select.classList.add("h1SelectShow");
  } else {
    select.classList.add("h1Select");
  }
}
function deleteTask(id) {
  const filtered = getLocalSotrage.filter((item) => item.id !== id);
  localStorage.setItem("newtask", JSON.stringify(filtered));
  var counter = parseInt(localStorage.getItem("index"));
  localStorage.setItem("index", --counter);
  window.location.reload();
}
let isEditModal = false;
let isChecked;
let handleIndex;
function editTask(id) {
  isEditModal = true;
  const filtered = getLocalSotrage.filter((item) => item.id === id);
  isChecked = filtered[0].checked;
  handleIndex = filtered[0].index;
  filtered.forEach((data) => {
    document.getElementById("index").value = data.index;
    document.getElementById("start").value = data.data;
    document.getElementById("titulo").value = data.titulo;
    document.getElementById("sub").value = data.subtitulo;
    document.getElementById("descricao").value = data.descricao;
  });
  FormIsEdited = true;
  openModal(isEditModal);
  isEditModal = false;
}
// document.querySelector(".hidden-div").style.display = "none";
//*show select button*//

const checkBtn = document.getElementById("check");

if (checkBtn) {
  checkBtn.addEventListener("click", () => {
    // alert("coding");
    // const filtered = getLocalSotrage.filter((item) => item.id === id);
  });
}
function checkTask(id) {
  function udapte(array, index, newValue) {
    array[index] = newValue;
  }

  const filtered = getLocalSotrage.filter((item) => {
    if (item.id === id) {
      const checkedTask = {
        titulo: item.titulo,
        subtitulo: item.subtitulo,
        descricao: item.descricao,
        data: item.data,
        id: item.id,
        index: item.index,
        checked: !item.checked,
      };
      var testerarr = JSON.parse(localStorage.getItem("newtask"));
      udapte(testerarr, item.index, checkedTask);

      localStorage.setItem("newtask", JSON.stringify(testerarr));
      window.location.reload();
    }
  });
}
// const MenuTextItem = document.querySelectorAll(".text-items-menu");

// MenuTextItem.forEach((data) => {
//   data.style.display = "none";
// });
const menuMenuItemMenu = document.getElementById("OpenMenu");
const divMenu = document.getElementById("div-menu");
let isOpenMenu = false;

menuMenuItemMenu.addEventListener("click", () => {
  if (isOpenMenu == false) {
    MenuTextItem.forEach((data) => {
      data.style.display = "flex";
    });

    divMenu.style =
      "width:150px;transition:width 2s;-moz-transition:width 2s;-webkit-transition:width 2s;-o-transition:width 2s; align-items: flex-start; padding-left:17px";

    isOpenMenu = !isOpenMenu;
  } else {
    MenuTextItem.forEach((data) => {
      data.style.display = "none";
    });

    isOpenMenu = !isOpenMenu;
    divMenu.style.width = "65px";
  }
});
function TwoWIndows(id) {
  const showTask = document.getElementById("titulo-detail");
  showTask.style.display = "none";
  const testeDescrip = descricao.toString();
  const filtered = getLocalSotrage.filter((item) => item.id === id);
  document.querySelector(".hidden-div").style.display = "flex";
  filtered.forEach((data) => {
    document.getElementById("index2").value = data.index;
    document.getElementById("start2").value = data.data;
    document.getElementById("titulo2").value = data.titulo;
    document.getElementById("sub2").value = data.subtitulo;
    document.getElementById("descricao2").value = data.descricao;
  });
}
const calendar = document.querySelector(".calendar"),
  date = document.querySelector(".date"),
  daysContainer = document.querySelector(".days"),
  prev = document.querySelector(".prev"),
  next = document.querySelector(".next"),
  todayBtn = document.querySelector(".today-btn"),
  gotoBtn = document.querySelector(".goto-btn"),
  dateInput = document.querySelector(".date-input"),
  eventDay = document.querySelector(".event-day"),
  eventDate = document.querySelector(".event-date"),
  eventsContainer = document.querySelector(".events"),
  addEventBtn = document.querySelector(".add-event"),
  addEventWrapper = document.querySelector(".add-event-wrapper "),
  addEventCloseBtn = document.querySelector(".close "),
  addEventTitle = document.querySelector(".event-name "),
  addEventFrom = document.querySelector(".event-time-from "),
  addEventTo = document.querySelector(".event-time-to "),
  addEventSubmit = document.querySelector(".add-event-btn ");

let today = new Date();
let activeDay;
let month = today.getMonth();
let year = today.getFullYear();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// const eventsArr = [
//   {
//     day: 13,
//     month: 11,
//     year: 2022,
//     events: [
//       {
//         title: "Event 1 lorem ipsun dolar sit genfa tersd dsad ",
//         time: "10:00 AM",
//       },
//       {
//         title: "Event 2",
//         time: "11:00 AM",
//       },
//     ],
//   },
// ];

const eventsArr = [];
getEvents();
console.log(eventsArr);

//function to add days in days with class day and prev-date next-date on previous month and next month days and active on today
function initCalendar() {
  const firstDay = new Date(year, month, 1);
  let lastDay = new Date(year, month, 0);
  const prevLastDay = new Date(year, month, 0);
  const prevDays = prevLastDay.getDate();
  const lastDate = lastDay.getDate();
  const day = firstDay.getDay();
  const nextDays = 7 - lastDay.getDay() - 1;

  date.innerHTML = months[month] + " " + year;

  let days = "";
  localStorageDays = JSON.parse(localStorage.getItem("newtask"));
  filteredFiles = Object.values(
    localStorageDays.reduce((acc, cur) => {
      if (!acc[cur.data]) acc[cur.data] = cur;
      return acc;
    }, {})
  );
  console.log(filteredFiles);
  for (let x = day; x > 0; x--) {
    days += `<div class="day prev-date">${prevDays - x + 1}</div>`;
  }
  let localDate;
  let filteredDataArry = [];
  for (let i = 1; i <= lastDate; i++) {
    //check if event is present on that day

    let event = false;
    eventsArr.forEach((eventObj) => {
      if (
        eventObj.day === i &&
        eventObj.month === month + 1 &&
        eventObj.year === year
      ) {
        event = true;
      }
    });

    let formateddate = `${year}-${0}${month + 1}-${i}`;

    filteredFiles.map((item) => {
      if (formateddate == item.data) {
        console.log("formateddate", formateddate);
        console.log("item.data", item.data);
        activeDay = i;
        let datToday = new Date();
        let dateTodayString = datToday.toString();
        let dateTodayStringSliced = dateTodayString.slice(7, 10);
        console.log(
          "???? ~ file: script.js:425 ~ filteredFiles.map ~ dateTodayStringSliced",
          dateTodayStringSliced
        );
        console.log("formateddate", i, year, month);
        days += `<div onclick="{handleModal(${item.data})}" class="${
          i === new Date().getDate() &&
          year === new Date().getFullYear() &&
          month === new Date().getMonth()
            ? "day today active event"
            : "day event"
        }">${i}</div>`;
        localDate = i;
      }
    });
    if (localDate != i) {
      activeDay = i;

      let datToday = new Date();
      let dateTodayString = datToday.toString();
      let dateTodayStringSliced = dateTodayString.slice(7, 10);

      days += `<div class="${
        i === new Date().getDate() &&
        year === new Date().getFullYear() &&
        month === new Date().getMonth()
          ? "day today active"
          : "day"
      } ">${i}</div>`;
    }

    if (
      i === new Date().getDate() &&
      year === new Date().getFullYear() &&
      month === new Date().getMonth()
    ) {
      console.log("CAIUUUU");
      activeDay = i;
      getActiveDay(i);
      updateEvents(i);
      //   if (event) {
      //     days += `<div class="day today active event">${i}</div>`;
      //   } else {
      //     days += `<div class="day today active">${i}</div>`;
      //   }
      // } else {
      //   if (event) {
      //     days += `<div class="day event">${i}</div>`;
      //   } else {
      //     days += `<div class="day ">${i}</div>`;
      //   }
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="day next-date">${j}</div>`;
  }
  daysContainer.innerHTML = days;
  addListner();
}
function handleModal(item) {
  console.log("???? ~ file: script.js:475 ~ handleModal ~ item", item);
  alert(item);
}
//function to add month and year on prev and next button
function prevMonth() {
  month--;
  if (month < 0) {
    month = 11;
    year--;
  }
  initCalendar();
}

function nextMonth() {
  month++;
  if (month > 11) {
    month = 0;
    year++;
  }
  initCalendar();
}

prev.addEventListener("click", prevMonth);
next.addEventListener("click", nextMonth);

initCalendar();

//function to add active on day
function addListner() {
  const days = document.querySelectorAll(".day");
  days.forEach((day) => {
    day.addEventListener("click", (e) => {
      getActiveDay(e.target.innerHTML);
      updateEvents(Number(e.target.innerHTML));
      activeDay = Number(e.target.innerHTML);
      //remove active
      days.forEach((day) => {
        day.classList.remove("active");
      });
      //if clicked prev-date or next-date switch to that month
      if (e.target.classList.contains("prev-date")) {
        prevMonth();
        //add active to clicked day afte month is change
        setTimeout(() => {
          //add active where no prev-date or next-date
          const days = document.querySelectorAll(".day");
          days.forEach((day) => {
            if (
              !day.classList.contains("prev-date") &&
              day.innerHTML === e.target.innerHTML
            ) {
              day.classList.add("active");
            }
          });
        }, 100);
      } else if (e.target.classList.contains("next-date")) {
        nextMonth();
        //add active to clicked day afte month is changed
        setTimeout(() => {
          const days = document.querySelectorAll(".day");
          days.forEach((day) => {
            if (
              !day.classList.contains("next-date") &&
              day.innerHTML === e.target.innerHTML
            ) {
              day.classList.add("active");
            }
          });
        }, 100);
      } else {
        e.target.classList.add("active");
      }
    });
  });
}

todayBtn.addEventListener("click", () => {
  today = new Date();
  month = today.getMonth();
  year = today.getFullYear();
  initCalendar();
});

dateInput.addEventListener("input", (e) => {
  dateInput.value = dateInput.value.replace(/[^0-9/]/g, "");
  if (dateInput.value.length === 2) {
    dateInput.value += "/";
  }
  if (dateInput.value.length > 7) {
    dateInput.value = dateInput.value.slice(0, 7);
  }
  if (e.inputType === "deleteContentBackward") {
    if (dateInput.value.length === 3) {
      dateInput.value = dateInput.value.slice(0, 2);
    }
  }
});

gotoBtn.addEventListener("click", gotoDate);

function gotoDate() {
  console.log("here");
  const dateArr = dateInput.value.split("/");
  if (dateArr.length === 2) {
    if (dateArr[0] > 0 && dateArr[0] < 13 && dateArr[1].length === 4) {
      month = dateArr[0] - 1;
      year = dateArr[1];
      initCalendar();
      return;
    }
  }
  alert("Invalid Date");
}

//function get active day day name and date and update eventday eventdate
function getActiveDay(date) {
  const day = new Date(year, month, date);
  const dayName = day.toString().split(" ")[0];
  eventDay.innerHTML = dayName;
  eventDate.innerHTML = date + " " + months[month] + " " + year;
}

//function update events when a day is active
function updateEvents(date) {
  let events = "";
  eventsArr.forEach((event) => {
    if (
      date === event.day &&
      month + 1 === event.month &&
      year === event.year
    ) {
      event.events.forEach((event) => {
        events += `<div class="event">
            <div class="title">
              <i class="fas fa-circle"></i>
              <h3 class="event-title">${event.title}</h3>
            </div>
            <div class="event-time">
              <span class="event-time">${event.time}</span>
            </div>
        </div>`;
      });
    }
  });
  if (events === "") {
    events = `<div class="no-event">
            <h3>No Events</h3>
        </div>`;
  }
  eventsContainer.innerHTML = events;
  saveEvents();
}

//function to add event
addEventBtn.addEventListener("click", () => {
  addEventWrapper.classList.toggle("active");
});

addEventCloseBtn.addEventListener("click", () => {
  addEventWrapper.classList.remove("active");
});

document.addEventListener("click", (e) => {
  if (e.target !== addEventBtn && !addEventWrapper.contains(e.target)) {
    addEventWrapper.classList.remove("active");
  }
});

//allow 50 chars in eventtitle
addEventTitle.addEventListener("input", (e) => {
  addEventTitle.value = addEventTitle.value.slice(0, 60);
});

function defineProperty() {
  var osccred = document.createElement("div");
  osccred.innerHTML =
    "A Project By <a href='https://www.youtube.com/channel/UCiUtBDVaSmMGKxg1HYeK-BQ' target=_blank>Open Source Coding</a>";
  osccred.style.position = "absolute";
  osccred.style.bottom = "0";
  osccred.style.right = "0";
  osccred.style.fontSize = "10px";
  osccred.style.color = "#ccc";
  osccred.style.fontFamily = "sans-serif";
  osccred.style.padding = "5px";
  osccred.style.background = "#fff";
  osccred.style.borderTopLeftRadius = "5px";
  osccred.style.borderBottomRightRadius = "5px";
  osccred.style.boxShadow = "0 0 5px #ccc";
  document.body.appendChild(osccred);
}

defineProperty();

//allow only time in eventtime from and to
addEventFrom.addEventListener("input", (e) => {
  addEventFrom.value = addEventFrom.value.replace(/[^0-9:]/g, "");
  if (addEventFrom.value.length === 2) {
    addEventFrom.value += ":";
  }
  if (addEventFrom.value.length > 5) {
    addEventFrom.value = addEventFrom.value.slice(0, 5);
  }
});

addEventTo.addEventListener("input", (e) => {
  addEventTo.value = addEventTo.value.replace(/[^0-9:]/g, "");
  if (addEventTo.value.length === 2) {
    addEventTo.value += ":";
  }
  if (addEventTo.value.length > 5) {
    addEventTo.value = addEventTo.value.slice(0, 5);
  }
});

//function to add event to eventsArr
addEventSubmit.addEventListener("click", () => {
  const eventTitle = addEventTitle.value;
  const eventTimeFrom = addEventFrom.value;
  const eventTimeTo = addEventTo.value;
  if (eventTitle === "" || eventTimeFrom === "" || eventTimeTo === "") {
    alert("Please fill all the fields");
    return;
  }

  //check correct time format 24 hour
  const timeFromArr = eventTimeFrom.split(":");
  const timeToArr = eventTimeTo.split(":");
  if (
    timeFromArr.length !== 2 ||
    timeToArr.length !== 2 ||
    timeFromArr[0] > 23 ||
    timeFromArr[1] > 59 ||
    timeToArr[0] > 23 ||
    timeToArr[1] > 59
  ) {
    alert("Invalid Time Format");
    return;
  }

  const timeFrom = convertTime(eventTimeFrom);
  const timeTo = convertTime(eventTimeTo);

  //check if event is already added
  let eventExist = false;
  eventsArr.forEach((event) => {
    if (
      event.day === activeDay &&
      event.month === month + 1 &&
      event.year === year
    ) {
      event.events.forEach((event) => {
        if (event.title === eventTitle) {
          eventExist = true;
        }
      });
    }
  });
  if (eventExist) {
    alert("Event already added");
    return;
  }
  const newEvent = {
    title: eventTitle,
    time: timeFrom + " - " + timeTo,
  };
  console.log(newEvent);
  console.log(activeDay);
  let eventAdded = false;
  if (eventsArr.length > 0) {
    eventsArr.forEach((item) => {
      if (
        item.day === activeDay &&
        item.month === month + 1 &&
        item.year === year
      ) {
        item.events.push(newEvent);
        eventAdded = true;
      }
    });
  }

  if (!eventAdded) {
    eventsArr.push({
      day: activeDay,
      month: month + 1,
      year: year,
      events: [newEvent],
    });
  }

  console.log(eventsArr);
  addEventWrapper.classList.remove("active");
  addEventTitle.value = "";
  addEventFrom.value = "";
  addEventTo.value = "";
  updateEvents(activeDay);
  //select active day and add event class if not added
  const activeDayEl = document.querySelector(".day.active");
  if (!activeDayEl.classList.contains("event")) {
    activeDayEl.classList.add("event");
  }
});

//function to delete event when clicked on event
eventsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("event")) {
    if (confirm("Are you sure you want to delete this event?")) {
      const eventTitle = e.target.children[0].children[1].innerHTML;
      eventsArr.forEach((event) => {
        if (
          event.day === activeDay &&
          event.month === month + 1 &&
          event.year === year
        ) {
          event.events.forEach((item, index) => {
            if (item.title === eventTitle) {
              event.events.splice(index, 1);
            }
          });
          //if no events left in a day then remove that day from eventsArr
          if (event.events.length === 0) {
            eventsArr.splice(eventsArr.indexOf(event), 1);
            //remove event class from day
            const activeDayEl = document.querySelector(".day.active");
            if (activeDayEl.classList.contains("event")) {
              activeDayEl.classList.remove("event");
            }
          }
        }
      });
      updateEvents(activeDay);
    }
  }
});

//function to save events in local storage
function saveEvents() {
  localStorage.setItem("events", JSON.stringify(eventsArr));
}

//function to get events from local storage
function getEvents() {
  //check if events are already saved in local storage then return event else nothing
  if (localStorage.getItem("events") === null) {
    return;
  }
  eventsArr.push(...JSON.parse(localStorage.getItem("events")));
}

function convertTime(time) {
  //convert time to 24 hour format
  let timeArr = time.split(":");
  let timeHour = timeArr[0];
  let timeMin = timeArr[1];
  let timeFormat = timeHour >= 12 ? "PM" : "AM";
  timeHour = timeHour % 12 || 12;
  time = timeHour + ":" + timeMin + " " + timeFormat;
  return time;
}
