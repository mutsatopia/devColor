// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 연결 작업 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

const colorName = location.href.split("?")[1]; // color[1~n];


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 전역 변수 모음 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// ColorQueue, CheckQueue 핵심 변수
let ColorQueue = [palette[colorName][`c1`].hex,palette[colorName][`c2`].hex];
let CheckQueue = ['color-box-1','color-box-2'];

// 2번 기능 변수 
const controlBtn = document.querySelector('.control-btn');
const controlBtnUl = document.querySelector('.control-ul');
let formatSetting = "";


// 9번 기능 번수
const colorArray = document.querySelector('.color-array');
const firstMini = document.querySelector('.first-mini-color');
const secondMini = document.querySelector('.second-mini-color');

// 컬러 박스 엘리먼트
const colorBox1 = document.querySelector('.color-box-1');
const colorBox2 = document.querySelector('.color-box-2');
const colorBox3 = document.querySelector('.color-box-3');
const colorBox4 = document.querySelector('.color-box-4');
const colorBox5 = document.querySelector('.color-box-5');
const colorBox6 = document.querySelector('.color-box-6');

// 배합 색상 그라디언트
const gradientBg = document.querySelector('.gradient');


// 5번 기능 변수
const rangeBar = document.querySelector('.range-bar');
const degValue = document.getElementById("value1");
const rotate = document.querySelector('.gradient-rotate');

// degree 조정 변수
let deg = 90;
// linear시 false, radial시 true
let flag = false;


// 6번 기능 변수
const radialBtn = document.querySelector('.gradient-spread');

// 7번 기능 변수
const randomBtn = document.querySelector('.gradient-random');
let randomColor = [];

// 8번 기능 변수
const copyBtn = document.querySelector('.gradient-copy');
const rgbColor = new Array(...ColorQueue);
const rgbaColor = new Array(...ColorQueue);

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 전역 변수 끝 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 초기 값 세팅 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// 컬러 박스 별 색, 체크 이미지 초기화
colorBox1.style.backgroundImage = 'url(./img/checked.png)';
colorBox2.style.backgroundImage = 'url(./img/checked.png)';
colorBox1.style.backgroundColor = palette[colorName][`c1`].hex;
colorBox2.style.backgroundColor = palette[colorName][`c2`].hex;
colorBox3.style.backgroundColor = palette[colorName][`c3`].hex;
colorBox4.style.backgroundColor = palette[colorName][`c4`].hex;
colorBox5.style.backgroundColor = palette[colorName][`c5`].hex;
colorBox6.style.backgroundColor = palette[colorName][`c6`].hex;


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 초기 값 세팅 끝 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 기능 별 함수 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@ Format List 셀렉트 박스 기능
const openList = () => {
  controlBtn.classList.toggle('on');
};

controlBtn.addEventListener('click', openList);

controlBtnUl.addEventListener('click', () => {
  if(event.target.nodeName === "LI"){
    formatSetting = event.target.innerHTML;
    controlBtn.classList.toggle('on');
    controlBtn.innerHTML = event.target.innerHTML;
  }
});

// @@@@@@@@@@ 최대 2개 선택가능한 그라디언트 컬러배합 기능
// @@@@@ 아규먼트에 해당하는 박스 체크 이미지 추가
const addCheckImg = (box, selectedBox, selectedColor) => {
  box.style.backgroundImage = 'url(./img/checked.png)';
  CheckQueue.push(selectedBox);
  ColorQueue.push(selectedColor);
}

// @@@@@ 아규먼트에 해당하는 박스 체크 이미지 해제
// @@@ 체크 이미지가 있는 박스 재클릭 시 체크 이미지 해제 기능
const removeCheckImg = (box) => {
  box.style.backgroundImage = 'none';
}

// @@@ 체크 이미지가 없는 박스 클릭 시 체크 이미지 해제 기능 (pop/shift 인자 필요)
const removeCheckImg2 = (box, remove) => {
  if(remove === 'pop'){
    box.style.backgroundImage = 'none';
    CheckQueue.pop();
    ColorQueue.pop();
  } else if(remove === 'shift'){
    box.style.backgroundImage = 'none';
    CheckQueue.shift();
    ColorQueue.shift();
  } else {
    console.log('wrong argument, check 2nd argument');
  }
}

// @@@@@ 그라디언트 업데이트 (element는 gradientBg, control-deg가 있음)
const updateGradientBg = function(element, deg=90){
  element.style.background = `linear-gradient(${deg}deg, ${ColorQueue[0]} 0%, ${ColorQueue[1]} 100%)`;
  radialBtn.style.backgroundColor = 'rgba(255,255,255,0.3)';
}

// @@@@@ CheckQueue 최대 용량(2)으로 가장 오래머무른 색깔의 Element를 찾아 체크 이미지 제거
const removeLastCheck = (lastCheck) => {
  CheckQueue.shift();
  ColorQueue.shift();
  switch(lastCheck){
    case'color-box-1': 
      colorBox1.style.backgroundImage = 'none';
      break;
    case'color-box-2': 
      colorBox2.style.backgroundImage = 'none';
      break;
    case'color-box-3': 
      colorBox3.style.backgroundImage = 'none';
      break;
    case'color-box-4': 
      colorBox4.style.backgroundImage = 'none';
      break;
    case'color-box-5': 
      colorBox5.style.backgroundImage = 'none';
      break;
    case'color-box-6': 
      colorBox6.style.backgroundImage = 'none';
      break;
  }
}

// @@@@@ 컬러 박스 클릭 시 배합 이벤트 리스너
colorArray.addEventListener('click', (event) => {
  if(event.target.nodeName === 'BUTTON'){
    let _selectedBox = event.target.classList.value;
    for(let i=0; i<6; i++){
      let selectedColor = palette[colorName][`c${i+1}`].hex;
      if(_selectedBox === `color-box-${i+1}`){
        if(CheckQueue.length === 0){
          addCheckImg(event.target, _selectedBox, selectedColor);
          updateGradientBg(gradientBg);
          updateGradientBg(rotate);
        }
        else if(CheckQueue.length === 1){
          if(_selectedBox === CheckQueue[0]){
            removeCheckImg2(event.target, 'pop');
          } else {
            addCheckImg(event.target, _selectedBox, selectedColor);
            updateGradientBg(gradientBg);
            updateGradientBg(rotate);
          }
          
        }else if (CheckQueue.length === 2){
          if(_selectedBox === CheckQueue[0]){
            removeCheckImg2(event.target, 'shift');
          } else if (_selectedBox === CheckQueue[1]){
            removeCheckImg2(event.target, 'pop');
          } else{
            removeLastCheck(CheckQueue[0]);
            addCheckImg(event.target, _selectedBox, selectedColor);
            updateGradientBg(gradientBg);
            updateGradientBg(rotate);
          }
        }
      }
    }
  }
});



// @@@@@@@@@@ 그라데이션 각도 조절 기능
// @@@@@ 각도 조절 버튼 클릭 시 input 노출
rotate.addEventListener('click', (event) => {
  if(event.target.nodeName === 'BUTTON') {
    event.target.classList.toggle('on');
  }
});

// @@@@@ input range 조절 및 gradientBg에 적용
rangeBar.addEventListener("input",() => {
  flag = false;
  deg = rangeBar.value;
  changeValue(deg);
  deg = parseInt(deg, 10);
  updateGradientBg(gradientBg, deg);
});

// @@@@@ input range 조절 시 해당 degree값 숫자로 노출
const changeValue = function(deg){
  degValue.innerHTML = `${deg}deg`;
}

// @@@@@@@@@@ Radial 버튼 기능
// @@@@@ Radial 버튼 클릭 시 gradientBg 에 적용
const changeRadial = (element) => {
  element.style.background = `radial-gradient(${ColorQueue[0]}, ${ColorQueue[1]})`;
}

// @@@@@ flag값을 통한 on/off/ 기능
radialBtn.addEventListener("click", () => {
  if(!flag){
    radialBtn.style.backgroundColor = 'chartreuse';
    changeRadial(gradientBg);
    flag = true;
    rangeBar.setAttribute('disabled',flag);
    
  } else {
    radialBtn.style.backgroundColor = 'rgba(255,255,255,0.3)';
    updateGradientBg(gradientBg, deg);
    flag = false;
    rangeBar.disabled = flag;
  }
});

// @@@@@@@@@@ 랜덤 버튼 기능
// @@@@@ 체크 이미지 초기화
const initializedCheck = (boxClass) => {
  switch(boxClass){
    case colorBox1.classList.value:
      colorBox1.style.backgroundImage = 'none';
      break;
    case colorBox2.classList.value:
      colorBox2.style.backgroundImage = 'none';
      break;
    case colorBox3.classList.value:
      colorBox3.style.backgroundImage = 'none';
      break;
    case colorBox4.classList.value:
      colorBox4.style.backgroundImage = 'none';
      break;
    case colorBox5.classList.value:
      colorBox5.style.backgroundImage = 'none';
      break;
    case colorBox6.classList.value:
      colorBox6.style.backgroundImage = 'none';
      break;
  }
}

// @@@@@ 새로운 체크 이미지 할당
const reallowedCheck = (color, num) => {
  switch(color){
    case colorBox1.style.backgroundColor:
      CheckQueue[num] = colorBox1.classList.value;
      colorBox1.style.backgroundImage = 'url(./img/checked.png)';
      break;
    case colorBox2.style.backgroundColor:
      CheckQueue[num] = colorBox2.classList.value;
      colorBox2.style.backgroundImage = 'url(./img/checked.png)';
      break;
    case colorBox3.style.backgroundColor:
      CheckQueue[num] = colorBox3.classList.value;
      colorBox3.style.backgroundImage = 'url(./img/checked.png)';
      break;
    case colorBox4.style.backgroundColor:
      CheckQueue[num] = colorBox4.classList.value;
      colorBox4.style.backgroundImage = 'url(./img/checked.png)';
      break;
    case colorBox5.style.backgroundColor:
      CheckQueue[num] = colorBox5.classList.value;
      colorBox5.style.backgroundImage = 'url(./img/checked.png)';
      break;
    case colorBox6.style.backgroundColor:
      CheckQueue[num] = colorBox6.classList.value;
      colorBox6.style.backgroundImage = 'url(./img/checked.png)';
      break;
  }
}

// @@@@@ 랜덤 색상 추출 후 적용
const updateRandom = () => {
  if(flag){
    gradientBg.style.background = `radial-gradient(${randomColor[0]}, ${randomColor[1]})`;
  }
  else {
    gradientBg.style.background = `linear-gradient(${deg}deg, ${randomColor[0]} 0%, ${randomColor[1]} 100%)`;
  }
}

// @@@@@ 랜덤버튼 이벤트 리스너
randomBtn.addEventListener('click', () => {
  randomColor = ['empty','empty']
  while(randomColor[1] === 'empty'){
    let color = palette[colorName][`c${parseInt((Math.random() * 6) + 1,10)}`].rgb;
    if(randomColor[0] !== color){
      if(randomColor[0] === 'empty'){
        randomColor[0] = color;
      } else {
        randomColor[1] = color;
      }
    }
  }

  initializedCheck(CheckQueue[0]);
  initializedCheck(CheckQueue[1]);
  reallowedCheck(randomColor[0],0);
  reallowedCheck(randomColor[1],1);

  updateRandom();
});

// @@@@@@@@@@ gradient 코드 복사 기능 */
// @@@@@ 세팅 값에 맞는 코드 복사
const getFormatColor = () => {
  if(formatSetting === 'HEX'){
    if(flag){
      return `radial-gradient(${ColorQueue[0]}, ${ColorQueue[1]})`;
    } else {
      return `linear-gradient(${deg}deg, ${ColorQueue[0]} 0%, ${ColorQueue[1]} 100%)`;
    }
  } else if(formatSetting === 'RGB'){
    for(let i=0; i<2; i++){
      for(let j=0; j<6; j++){
        if(ColorQueue[i] === palette[colorName][`c${j+1}`].hex){
          rgbColor[i] = palette[colorName][`c${j+1}`].rgb;
        }
      }
    }
    if(flag){
      return `radial-gradient(${rgbColor[0]}, ${rgbColor[1]})`;
    } else {
      return `linear-gradient(${deg}deg, ${rgbColor[0]} 0%, ${rgbColor[1]} 100%)`;
    }
  } else {
    for(let i=0; i<2; i++){
      for(let j=0; j<6; j++){
        if(ColorQueue[i] === palette[colorName][`c${j+1}`].hex){
          rgbaColor[i] = palette[colorName][`c${j+1}`].rgba;
        }
      }
    }
    if(flag){
      return `radial-gradient(${rgbaColor[0]}, ${rgbaColor[1]})`;
    } else {
      return `linear-gradient(${deg}deg, ${rgbaColor[0]} 0%, ${rgbaColor[1]} 100%)`;
    }
  }
}

// @@@@@ 복사 버튼 클릭 시 모달창 및 세팅포맷에 맞는 값 복사
// @@@@@ Clipboard API 사용(참 좋은 APIㅋ)
const gradientCopy = () => {
  const _copiedAlert = document.querySelector('.copied');
  let _copiedColor = '';

  console.log(controlBtn.innerHTML);

  _copiedColor = getFormatColor();
  
  navigator.clipboard.writeText(_copiedColor);
  
  _copiedAlert.classList.toggle('on');
  setTimeout(() => {
    _copiedAlert.classList.toggle('on');
  },800);
}
copyBtn.addEventListener('click', gradientCopy);

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 기능 별 함수 끝 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@





// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 초기 실행 함수 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@ 페이지 별 첫 gradientBG 초기화
updateGradientBg(gradientBg);
