function formatSelect() {
  const selectBtn = document.querySelector(".btn-select"); //select
  const optionUl = document.querySelector(".list-member"); //ul

  if (localStorage.getItem("colorFormat") !== null) {
    selectBtn.textContent = localStorage.getItem("colorFormat");
  }

  let devLang = ["HEX", "RGB", "RGBA",];
  for (let i = 0; i < devLang.length; i++) {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.setAttribute("type", "button");
    btn.textContent = devLang[i];
    optionUl.appendChild(li).appendChild(btn);
  }

  const listAll = optionUl.querySelectorAll("button"); // option list
  const firstOption = optionUl.querySelector("button"); //option first button
  const lastOption = listAll[listAll.length - 1]; //option last button

  const handleClickSelect = function () {
    selectBtn.classList.toggle("on");
    optionUl.classList.toggle("on");
  };
  const handleClickOption = function (e) {
    if (e.target.tagName === "BUTTON") {
      selectBtn.textContent = e.target.textContent;
      //로컬스토리지 컬러 포맷 저장
      localStorage.setItem("colorFormat", e.target.textContent);
      selectBtn.classList.remove("on");
      optionUl.classList.remove("on");
      window.setTimeout(function () {
        selectBtn.focus();
      }, 100);
    }
  };

  //focus 이동
  const handleTabFoucus = function (e) {
    if (!e.shiftKey && e.keyCode === 9) {
      e.preventDefault();
      window.setTimeout(function () {
        firstOption.focus();
      }, 100);
    }
  };
  //shift+tab
  const handleShiftTabFoucus = function (e) {
    if (e.shiftKey && e.keyCode === 9) {
      e.preventDefault();
      window.setTimeout(function () {
        lastOption.focus();
      }, 100);
    }
  };
  //ESC키
  const handleEsc = function (e) {
    if (e.keyCode === 27) {
      selectBtn.classList.remove("on");
      optionUl.classList.remove("on");
      window.setTimeout(function () {
        selectBtn.focus();
      }, 100);
    }
  };

  selectBtn.addEventListener("click", handleClickSelect);
  optionUl.addEventListener("click", handleClickOption);

  selectBtn.addEventListener("keydown", handleEsc);
  optionUl.addEventListener("keydown", handleEsc);

  lastOption.addEventListener("keydown", handleTabFoucus);
  firstOption.addEventListener("keydown", handleShiftTabFoucus);
}

formatSelect();
