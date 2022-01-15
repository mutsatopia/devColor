function app() {
  const colorName = location.href.split("?")[1];
  //뒤로가기 버튼
  const backButton = document.querySelector(".button-back");
  backButton.addEventListener("click", function () {
    if (location.href.indexOf("palette") !== -1) {
      location.href = "./";
    } else if (location.href.indexOf("gradient") !== -1) {
      location.href = "./palette.html?" + colorName;
    }
  });

  //palette Mode 전환 버튼
  const modePalette = document.querySelector(".control-mode");
  modePalette.addEventListener("click", function () {
    location.href = "palette.html?" + colorName;
  });
}
app();

// 공통함수
//clipbord 함수
function copyToClipboard(value) {
  const t = document.createElement("textarea");
  document.body.appendChild(t);
  t.value = value;
  t.select();
  document.execCommand("copy");
  document.body.removeChild(t);
}
//color칩 복사
function handleCopy(e) {
  const selectColor = e.currentTarget.getAttribute("value");
  let format = document.querySelector(".btn-select").textContent.toLowerCase();

  copyToClipboard(palette[colorName][selectColor][format]);
  handleAlertModal();
}
//modal
function handleAlertModal() {
  const alertCopied = document.createElement("div");
  alertCopied.classList.add("alert-modal");
  alertCopied.innerHTML = `
        <p>Copied!</p>
        <button class="button-st2">Close</button>
      `;
  document.querySelector("body").appendChild(alertCopied);
  alertCopied
    .querySelector(".button-st2")
    .addEventListener("click", function () {
      alertCopied.remove();
    });
}
