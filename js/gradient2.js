function gradientPage() {
  //main 페이지에서 받아온 color이름
  const colorName = location.href.split("?")[1];

  //title 태그 추가
  const title = document.querySelector(".title");
  title.textContent = colorName;

  const paletteWrap = document.querySelector(".cont-palette");

  const gradientBox = paletteWrap.querySelector(".gradient");
  gradientBox.style.background = `linear-gradient(90deg, ${palette[colorName].c1.hex} 0%, ${palette[colorName].c2.hex}  100%)`;

  const paletteBtn = paletteWrap.querySelectorAll(".color-array button");
  paletteBtn.forEach((element) => {
    const btnValue = element.getAttribute("value");
    element.style.backgroundColor = `${palette[colorName][btnValue].hex}`;
  });

  //gradient Mode 버튼
  const modePalette = document.querySelector(".mode-palette");
  modePalette.addEventListener("click", function () {
    location.href = "palette.html?" + colorName;
  });
}

gradientPage();
