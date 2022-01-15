function palettePage() {
  //main 페이지에서 받아온 color이름
  const colorName = location.href.split("?")[1];

  //title 태그 추가
  const title = document.querySelector(".title");
  title.textContent = colorName;

  const paletteWrap = document.querySelector(".color-list .wrap");
  const scriptTxt = paletteWrap.querySelector(".script-txt");
  scriptTxt.style.backgroundColor = `${palette[colorName].bg.hex}`;

  const spanTxt = scriptTxt.querySelectorAll("span");
  spanTxt.forEach((element) => {
    const spanClass = element.getAttribute("class");
    element.style.color = `${palette[colorName][spanClass].hex}`;
  });

  const paletteBtn = paletteWrap.querySelectorAll(".color-box");
  paletteBtn.forEach((element) => {
    const btnValue = element.getAttribute("value");
    element.style.backgroundColor = `${palette[colorName][btnValue].hex}`;
  });

  //color칩 복사
  function handleCopy(e) {
    const selectColor = e.currentTarget.getAttribute("value");
    let format = document
      .querySelector(".btn-select")
      .textContent.toLowerCase();

    copyToClipboard(palette[colorName][selectColor][format]);
    handleAlertModal();
  }

  //각각의 컬러칩
  const colorBtn = document.querySelectorAll(".palette button");
  colorBtn.forEach((ele) => ele.addEventListener("click", handleCopy));

  //모든 컬러 복사
  const allCopy = document.querySelector(".copy-all");
  allCopy.addEventListener("click", handleAllCopy);

  //모든컬러 복사
  function handleAllCopy() {
    let format = document
      .querySelector(".btn-select")
      .textContent.toLowerCase();
    let len = Object.keys(palette[colorName]).length;

    let arr = [];

    arr.push(palette[colorName].bg[format]); //bg복사여부
    for (let i = 1; i < len; i++) {
      arr.push(palette[colorName][`c${i}`][format]);
    }
    copyToClipboard(arr);
    handleAlertModal();
  }

  //gradient Mode 버튼
  const modeGradient = document.querySelector(".mode-gradient");
  modeGradient.addEventListener("click", function () {
    location.href = "gradient.html?" + colorName;
  });
}

palettePage();
