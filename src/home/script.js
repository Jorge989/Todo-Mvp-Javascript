//*pegando arquivo input

document.querySelector(".image").classList.remove("teste");
document.querySelector(".hidden-div").style.display = "none";
document.querySelector(".image").src = "./avatar.png";
document.querySelector("#pen").style.display = "none";
document.querySelector(".image-hidden").src = "./avatar.png";
document.querySelector(".upload-container-hidden").style.display = "none";
let isProfilePhotoUpload = false;
const file = document.querySelector("#file");

file.addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    if (reader.result) {
      document.querySelector("#image").src = reader.result;
      document.querySelector("#image-hidden").src = reader.result;
      document.querySelector(".upload-container").style.display = "none";
      document.querySelector(".upload-container-hidden").style.display = "flex";

      isProfilePhotoUpload = true;
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
  var testerarr = JSON.parse(localStorage.getItem("newtask"));

  var counter = parseInt(
    localStorage.getItem("index") ? parseInt(localStorage.getItem("index")) : -1
  );
  localStorage.setItem("index", ++counter);

  if (FormIsEdited) {
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

    function udapte(array, index, newValue) {
      array[index] = newValue;
    }

    if (localStorage.getItem("newtask")) {
      var testerarr = JSON.parse(localStorage.getItem("newtask"));
      const index = document.getElementById("index").value;

      udapte(testerarr, index, secondTask);

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
const getLocalSotrage = JSON.parse(localStorage.getItem("newtask"));
const inputFilter = document.getElementById("inputFilter");
let testa = [];

inputFilter.addEventListener("keydown", function (e) {
  console.log(e.key);
  testa = getLocalSotrage.filter((data) => {
    console.log("e", typeof e.key, e.key);
    console.log("data.titulo", typeof data.titulo, data.titulo);
    console.log("data2222", data.titulo == e.key);
    let word = "";
    word.concat(e.key);
    console.log(
      "🚀 ~ file: script.js:218 ~ testa=getLocalSotrage.filter ~ word",
      word
    );
    return data.index == e.key;
  });
  console.log("testa", testa.length);
  if (testa.length > 0) {
    console.log("IF");
    let showIntHtml = testa
      .map((data, index) => {
        console.log("🚀 ~ file: script.js:208 ~ .map ~ data", data.descricao);
        return `<div class="todo" onclick="setDetails(${data.id})
    "> 
            <div class="titles-wrapper"> 
             <input  ${
               data.checked ? "checked" : ""
             }  type="checkbox" id="check" class="check" name="check" onclick="checkTask(${
          data.id
        })"/> 
             <div class="container-titles"> 
             <div class="titles">
             <p class="subtitlep">Task: ${data.index}</p>
             <h4 class="titleh4">${data.titulo}</h4> 
 
             </div>
            <p class="subtitlep">${data.subtitulo}</p>
            </div> 
             </div> 
<div class="priority"><div class="done"><p id="priority">Today</p><p class="checked">${
          data.checked ? "Done" : "pendding"
        }</p></div>
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
    console.log("ELSE");
    const showIntHtml = getLocalSotrage
      .map((data, index) => {
        console.log("🚀 ~ file: script.js:208 ~ .map ~ data", data.descricao);
        return `<div class="todo" onclick="setDetails(${data.id})
    "> 
            <div class="titles-wrapper"> 
                 <input  ${
                   data.checked ? "checked" : ""
                 }  type="checkbox" id="check" class="check" name="check" onclick="checkTask(${
          data.id
        })"/> 
             <div class="container-titles"> 
                 <div class="titles">
                  <p class="subtitlep">Task: ${data.index}</p>
             <h4 class="titleh4">${data.titulo}</h4> 
        
               </div>
            <p class="subtitlep">${data.subtitulo}</p>
            </div> 
             </div> 
<div class="priority"><div class="done"><p id="priority">Today</p><p class="checked">${
          data.checked ? "Done" : "pendding"
        }</p></div>
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
});

const showIntHtml = getLocalSotrage
  .map((data, index) => {
    return `<div class="todo" "onclick="setDetails(${data.id}")
    "> 
            <div class="titles-wrapper"> 

             <input  ${
               data.checked ? "checked" : ""
             }  type="checkbox" id="check" class="check" name="check" onclick="checkTask(${
      data.id
    })"/> 
             <div class="container-titles"> 
             <div class="titles">
             <p class="subtitlep">Task: ${data.index}</p>
             <h4 class="titleh4">${data.titulo}</h4> 
               </div>
            <p class="subtitlep">${data.subtitulo}</p>
            </div> 
             </div> 
<div class="priority"><div class="done"><p id="priority">Today</p><p class="checked">${
      data.checked ? "Done" : "pendding"
    }</p></div>
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
  window.location.reload();
}
let isEditModal = false;
function editTask(id) {
  isEditModal = true;
  const filtered = getLocalSotrage.filter((item) => item.id === id);
  filtered.forEach((data) => {
    console.log("🚀 ~ file: script.js:247 ~ filtered.forEach ~ data", data);
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
function setDetails(id) {
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

const checkBtn = document.getElementById("check");
checkBtn.addEventListener("click", () => {
  // alert("coding");
  const filtered = getLocalSotrage.filter((item) => item.id === id);
});
function checkTask(id) {
  function udapte(array, index, newValue) {
    array[index] = newValue;
  }

  const filtered = getLocalSotrage.filter((item) => {
    console.log("🚀 ~ file: script.js:3702 ~ filtered ~ item", item.checked);

    function handleCheckedTask(checked) {
      return (checked = !checked);
    }
    console.log("here", handleCheckedTask());
    if (item.id === id) {
      console.log("caiu aqui2");
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

  console.log("🚀 ~ file: script.js:366 ~ checkTask ~ filtered", filtered);
}

const divMenu = document.getElementById("div-menu");
let isOpenMenu = false;
divMenu.addEventListener("click", () => {
  console.log(
    "🚀 ~ file: script.js:436 ~ divMenu.addEventListener ~ isOpenMenu",
    isOpenMenu
  );
  if (isOpenMenu == false) {
    console.log("caiu no if");
    divMenu.style =
      "width:300px;transition:width 2s;-moz-transition:width 2s;-webkit-transition:width 2s;-o-transition:width 2s;";

    isOpenMenu = !isOpenMenu;
    console.log(
      "🚀 ~ file: script.js:439 ~ divMenu.addEventListener ~ isOpenMenu",
      isOpenMenu
    );
  } else {
    console.log("caiu no else");
    isOpenMenu = !isOpenMenu;
    divMenu.style.width = "65px";
    console.log(
      "🚀 ~ file: script.js:443 ~ divMenu.addEventListener ~ isOpenMenu",
      isOpenMenu
    );
  }
  // divMenu.style.width = isO
  // if ((isOpenMenu = false)) {
  //   console.log("entrou no if");
  //   divMenu.style.width = "200px";
  // } else if ((isOpenMenu = true)) {
  //   console.log("entrou no else");
  //   divMenu.style.width = "65px";
  // }
});
