//*pegando arquivo input

const MenuTextItem = document.querySelectorAll(".text-items-menu");

MenuTextItem.forEach((data) => {
  data.style.display = "none";
});
// localStorage.setItem("filteredTasksDone", JSON.stringify(""));
document.querySelector(".image").classList.remove("teste");
document.querySelector(".hidden-div").style.display = "none";
document.querySelector(".image").src = "./avatar.png";
document.querySelector("#pen").style.display = "none";
document.querySelector(".image-hidden").src = "./avatar.png";
document.querySelector(".upload-container-hidden").style.display = "none";
let isProfilePhotoUpload = false;
const file = document.querySelector("#file");
var LocalImageStore = localStorage.getItem("file");
if (LocalImageStore) {
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
const btnNewTask = selector(".btn-new-task");

//*modal
const modal = selector(".modal");
const overlay = selector(".overlay");
const btnCloseModal = selector(".close-modal");
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  if (!isEditModal) {
    (document.getElementById("start").value = ""),
      (document.getElementById("titulo").value = ""),
      (document.getElementById("sub").value = ""),
      (document.getElementById("descricao").value = "");
  }
};
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
btnCloseModal.addEventListener("click", () => closeModal());
overlay.addEventListener("click", () => {
  closeModal();
});
let FormIsEdited = false;
btnNewTask.addEventListener("click", () => {
  FormIsEdited = false;
  openModal();
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

//* submiting form

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
checkTaskInput.addEventListener("click", (click) => {
  switchDonePendding = checkTaskInput.checked;
  localStorage.setItem(
    "switchDonePendding",
    JSON.stringify(switchDonePendding)
  );
});
switchDonePendding = JSON.parse(localStorage.getItem("switchDonePendding"));

checkTaskInput.addEventListener("change", () => {
  const tests = getLocalSotrage.forEach((task) => {
    task;

    if (task.checked == true) {
      filteredTasksDone.push(task);
      filteredFiles = Object.values(
        filteredTasksDone.reduce((acc, cur) => {
          if (!acc[cur.titulo]) acc[cur.titulo] = cur;
          return acc;
        }, {})
      );
      filteredTasksDone = filteredFiles;
      localStorage.setItem(
        "filteredTasksDone",
        JSON.stringify(filteredTasksDone)
      );
      filteredDone = JSON.parse(localStorage.getItem("filteredTasksDone"));
    } else {
      filteredTasksPendding.push(task);

      filteredFiles = Object.values(
        filteredTasksPendding.reduce((acc, cur) => {
          if (!acc[cur.titulo]) acc[cur.titulo] = cur;
          return acc;
        }, {})
      );
      filteredTasksPendding = filteredFiles;
      localStorage.setItem(
        "filteredTasksPendding",
        JSON.stringify(filteredTasksPendding)
      );
    }
  });
});

const inputFilter = document.getElementById("inputFilter");
let testa = [];

inputFilter.addEventListener("keydown", function (e) {
  testa = getLocalSotrage.filter((data) => {
    let word = "";
    word.concat(e.key);

    return data.index == e.key;
  });

  if (testa.length > 0) {
    let showIntHtml = testa
      .map((data, index) => {
        return `<div class="${
          data.checked ? "todo" : "uncheck-todo"
        }" onclick="TwoWIndows(${data.id})
    "> 
              <div class="${
                data.checked ? "titles-wrapper" : "titles-wrapper-uncheck"
              }""> 
             <input  ${
               data.checked ? "checked" : ""
             }  type="checkbox" id="check" class="check" name="check" onclick="checkTask(${
          data.id
        })"/> 
 <div  class="${
   data.checked ? "container-titles" : "container-titles-uncheck"
 }"> 
             <div class="titles">
             <p class="subtitlep">ID: ${data.index}</p>
             <h4 class="titleh4">${data.titulo}</h4> 
 
             </div>
            <p class="subtitlep">${data.subtitulo}</p>
            </div> 
             </div> 
<div class="${data.checked ? "priority" : "priority-uncheck"}"><div class="${
          data.checked ? "done" : "done-uncheck"
        }"><p id="priority">Today</p><p class="${
          data.checked ? "checked" : "uncheck"
        }">${data.checked ? "Done" : "pendding"}</p></div>
<button class="button-bullet" onclick="showSelect(${data.id})">
<i class="fa-solid fa-ellipsis-vertical" id=menu-bullet>
</i></button><div name="select"class="h1Select" id="${data.id}">
  <option value="valor1" class="deletar" onclick="deleteTask(${
    data.id
  })">Deletar</option>
  <option value="valor2" class="editar"onclick="editTask(${
    data.id
  })">Editar</option>
</div></div>
</div>`;
      })
      .join("");
    myContent.innerHTML = showIntHtml;
  } else {
    const showIntHtml = getLocalSotrage
      .map((data, index) => {
        return `<div class="${
          data.checked ? "todo" : "uncheck-todo"
        }" onclick="TwoWIndows(${data.id})
    "> 
    <div class="${
      data.checked ? "titles-wrapper" : "titles-wrapper-uncheck"
    }""> 

             <input  ${
               data.checked ? "checked" : ""
             }  type="checkbox" id="check" class="check" name="check" onclick="checkTask(${
          data.id
        })"/> 
     <div  class="${
       data.checked ? "container-titles" : "container-titles-uncheck"
     }"> 
             <div class="titles">
             <p class="subtitlep-id">ID: ${data.index}</p>
             <h4 class="titleh4"><p>Título:</p>${data.titulo}</h4> 
               </div>
            <h4 class="subtitlep"><p>Subtítulo:</p>${data.subtitulo}</h4>
            </div> 
             </div> 
<div class="${data.checked ? "priority" : "priority-uncheck"}"><div class="${
          data.checked ? "done" : "done-uncheck"
        }"><p id="priority">Today</p><p class="${
          data.checked ? "checked" : "uncheck"
        }">${data.checked ? "Done" : "pendding"}</p></div>
<button class="button-bullet" onclick="showSelect(${data.id})">
<i class="fa-solid fa-ellipsis-vertical" id=menu-bullet>
</i></button><div name="select"class="h1Select" id="${data.id}">
  <option value="valor1" class="deletar" onclick="deleteTask(${
    data.id
  })">Deletar</option>
  <option value="valor2" class="editar"onclick="editTask(${
    data.id
  })">Editar</option>
</div></div>
</div>`;
      })
      .join("");

    myContent.innerHTML = showIntHtml;
  }
  if (getLocalSotrage.length == 0 || !getLocalSotrage) {
    const noTaskIntHtml = `<p class="NotaskParagafh">Você não possui tasks</p>`;
    myContent.innerHTML = noTaskIntHtml;
  }
});

var filterPendding = JSON.parse(localStorage.getItem("filteredTasksPendding"));
var filterDone = JSON.parse(localStorage.getItem("filteredTasksDone"));

checkTaskInput.addEventListener("change", () => {
  if (switchDonePendding == true) {
    const showIntHtml = filterPendding
      .map((data, index) => {
        return `<div class="${
          data.checked ? "todo" : "uncheck-todo"
        }" onclick="TwoWIndows(${data.id})
    "> 
              <div class="${
                data.checked ? "titles-wrapper" : "titles-wrapper-uncheck"
              }""> 

             <input  ${
               data.checked ? "checked" : ""
             }  type="checkbox" id="check" class="check" name="check" onclick="checkTask(${
          data.id
        })"/> 
<div  class="${
          data.checked ? "container-titles" : "container-titles-uncheck"
        }"> 
             <div class="titles">
             <p class="subtitlep-id">ID: ${data.index}</p>
             <h4 class="titleh4"><p>Título:</p>${data.titulo}</h4> 
               </div>
            <h4 class="subtitlep"><p>Subtítulo:</p>${data.subtitulo}</h4>
            </div> 
             </div> 
<div class="${data.checked ? "priority" : "priority-uncheck"}"><div class="${
          data.checked ? "done" : "done-uncheck"
        }"><p id="priority">Today</p><p class="${
          data.checked ? "checked" : "uncheck"
        }">${data.checked ? "Done" : "pendding"}</p></div>
<button class="button-bullet" onclick="showSelect(${data.id})">
<i class="fa-solid fa-ellipsis-vertical" id=menu-bullet>
</i></button><div name="select"class="h1Select" id="${data.id}">
  <option value="valor1" class="deletar" onclick="deleteTask(${
    data.id
  })">Deletar</option>
  <option value="valor2" class="editar"onclick="editTask(${
    data.id
  })">Editar</option>
</div></div>
</div>`;
      })
      .join("");

    myContent.innerHTML = showIntHtml;
  } else {
    const showIntHtml = filterDone
      .map((data, index) => {
        return `<div class="${
          data.checked ? "todo" : "uncheck-todo"
        }" onclick="TwoWIndows(${data.id})
    "> 
              <div class="${
                data.checked ? "titles-wrapper" : "titles-wrapper-uncheck"
              }""> 

             <input  ${
               data.checked ? "checked" : ""
             }  type="checkbox" id="check" class="check" name="check" onclick="checkTask(${
          data.id
        })"/> 
             <div  class="${
               data.checked ? "container-titles" : "container-titles-uncheck"
             }"> 
             <div class="titles">
             <p class="subtitlep-id">ID: ${data.index}</p>
             <h4 class="titleh4"><p>Título:</p>${data.titulo}</h4> 
               </div>
            <h4 class="subtitlep"><p>Subtítulo:</p>${data.subtitulo}</h4>
            </div> 
             </div> 
<div class="${data.checked ? "priority" : "priority-uncheck"}"><div class="${
          data.checked ? "done" : "done-uncheck"
        }"><p id="priority">Today</p><p class="${
          data.checked ? "checked" : "uncheck"
        }">${data.checked ? "Done" : "pendding"}</p></div>
<button class="button-bullet" onclick="showSelect(${data.id})">
<i class="fa-solid fa-ellipsis-vertical" id=menu-bullet>
</i></button><div name="select"class="h1Select" id="${data.id}">
  <option value="valor1" class="deletar" onclick="deleteTask(${
    data.id
  })">Deletar</option>
  <option value="valor2" class="editar"onclick="editTask(${
    data.id
  })">Editar</option>
</div></div>
</div>`;
      })
      .join("");

    myContent.innerHTML = showIntHtml;
  }
  if (getLocalSotrage.length == 0) {
    const noTaskIntHtml = `<p class="NotaskParagafh">Você não possui tasks</p>`;
    myContent.innerHTML = noTaskIntHtml;
  }
});

if (getLocalSotrage) {
  const showIntHtml = getLocalSotrage
    .map((data, index) => {
      return `<div class="${
        data.checked ? "todo" : "uncheck-todo"
      }" onclick="TwoWIndows(${data.id})
    "> 
            <div class="${
              data.checked ? "titles-wrapper" : "titles-wrapper-uncheck"
            }""> 

             <input  ${
               data.checked ? "checked" : ""
             }  type="checkbox" id="check" class="check" name="check" onclick="checkTask(${
        data.id
      })"/> 
             <div  class="${
               data.checked ? "container-titles" : "container-titles-uncheck"
             }"> 
             <div class="titles">
             <p class="subtitlep-id">ID: ${data.index}</p>
             <h4 class="titleh4"><p>Título:</p>${data.titulo}</h4> 
               </div>
            <h4 class="subtitlep"><p>Subtítulo:</p>${data.subtitulo}</h4>
            </div> 
             </div> 
<div class="${data.checked ? "priority" : "priority-uncheck"}"><div class="${
        data.checked ? "done" : "done-uncheck"
      }"><p id="priority">Today</p><p class="${
        data.checked ? "checked" : "uncheck"
      }">${data.checked ? "Done" : "pendding"}</p></div>
<button class="button-bullet" onclick="showSelect(${data.id})">
<i class="fa-solid fa-ellipsis-vertical" id=menu-bullet>
</i></button><div name="select"class="h1Select" id="${data.id}">
  <option value="valor1" class="deletar" onclick="deleteTask(${
    data.id
  })">Deletar</option>
  <option value="valor2" class="editar"onclick="editTask(${
    data.id
  })">Editar</option>
</div></div>
</div>`;
    })
    .join("");

  myContent.innerHTML = showIntHtml;
} else {
}
if (!getLocalSotrage || getLocalSotrage.length == 0) {
  const noTaskIntHtml = `<p class="NotaskParagafh">Você não possui tasks</p>`;
  myContent.innerHTML = noTaskIntHtml;
}
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
document.querySelector(".hidden-div").style.display = "none";
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
