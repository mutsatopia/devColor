// JS 필요 기능

// 1.  뒤로가기(?)                  =====> 한 페이지 구현 시
// 2. button.control-btn          =====> 완료
// - 클릭 시 On 추가
// 3. btn-control-mode(?)         =====> 한 페이지 구현 시
// 4. First-mini, Second-mini     =====> 완료
// - 클릭: 클릭 시
// article.gradient에 색깔 적용      
// - 받기: 받은 컬러로 변경
// 5. button.gradient-rotate      =====> 완료(12/30)
// - 받기: article.gradient
// 백그라운드 컬러 받기
// - 조절: 각도 조절 
// 6. button.gradient-spread
// - 클릭 시 이미지 변경
// 7. button.gradient-random<input type="color" value="#569CD6" class="first-mini-color"/>
// - 클릭 시 랜덤 배합 추천
// - 해당 색깔 클릭 표시 넣기
// 8. button.gradient-copy
// - 클릭 시 그라디언트 코드 복사
// - 클릭 시 copied 팝업창
// 9. Button.color-box            =====> 완료(12/30)
// - 클릭 시
// - 넣기: input.first-mini-color
// - 넣기: input.second-mini-color
// - value 값에 넣기
// - 체크문양 띄우기(자식으로 있다가     ======>
// 클릭 시 on/off)

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 추가 과업(12/30일 기준) @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// --------협의 및 도움 필요---------
// 0-0. Git push & pull
// 0-1. 뒤로가기, control 어떻게 할 것인가?
// 0-2. 미니컬러 제거 건의
// --------협의 및 도움 필요---------
// 1. 코드 복사 + 모달창
// 2. Copy format 변경시 코드 복사 format 변경

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 추가 과업(12/30일 기준) @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 2번 기능 시작 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
const controlBtn = document.querySelector('.control-btn');
const controlBtnUl = document.querySelector('.control-ul');

const openList = () => {
  controlBtn.classList.toggle('on');
};

controlBtn.addEventListener('click', openList);

/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 2번 기능 끝 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/


/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 9번 기능 시작 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/

const colorArray = document.querySelector('.color-array');
const firstMini = document.querySelector('.first-mini-color');
const secondMini = document.querySelector('.second-mini-color');

// 컬러 박스
const colorBox1 = document.querySelector('.color-box-1');
const colorBox2 = document.querySelector('.color-box-2');
const colorBox3 = document.querySelector('.color-box-3');
const colorBox4 = document.querySelector('.color-box-4');
const colorBox5 = document.querySelector('.color-box-5');
const colorBox6 = document.querySelector('.color-box-6');

// 배합 색상 그라디언트
const gradientBg = document.querySelector('.gradient');


// 초기 값 세팅
let ColorQueue = ['#569CD6','#9CDCFE'];
let CheckQueue = ['color-box-1','color-box-2'];
colorBox1.style.backgroundImage = 'url(../img/checked.png)';
colorBox2.style.backgroundImage = 'url(../img/checked.png)';
colorBox1.style.backgroundColor = '#569CD6';
colorBox2.style.backgroundColor = '#9CDCFE';
colorBox3.style.backgroundColor = '#D4D4D4';
colorBox4.style.backgroundColor = '#DCDCAA';
colorBox5.style.backgroundColor = '#DA70D6';
colorBox6.style.backgroundColor = '#CE9178';


// 체크 이미지 엘리먼트
const checkImg1 = document.createElement("img");
checkImg1.setAttribute('src','../img/checked.png');

const checkImg2 = document.createElement("img");
checkImg2.setAttribute('src','../img/checked.png');


// 아규먼트에 해당하는 박스 체크 추가
const addCheckImg = (box, selectedBox, selectedColor) => {
  box.style.backgroundImage = 'url(../img/checked.png)';
  CheckQueue.push(selectedBox);
  ColorQueue.push(selectedColor);
}

// 아규먼트에 해당하는 박스 체크 해제
const removeCheckImg = (box) => {
  box.style.backgroundImage = 'none';
}

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


// 그라디언트 업데이트
const updateGradientBg = function(element, deg=90){
  element.style.background = `linear-gradient(${deg}deg, ${ColorQueue[0]} 0%, ${ColorQueue[1]} 100%)`;
  radialBtn.style.backgroundColor = 'rgba(255,255,255,0.3)';
}

// CheckQueue 최대 용량(2)으로 가장 오래머무른 색깔의 Element를 찾아 체크 이미지 제거
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


const rotate = document.querySelector('.gradient-rotate');

// 컬러 배합 클릭 이벤트 리스너
colorArray.addEventListener('click', (event) => {
  if(event.target.nodeName === 'BUTTON'){
    let selectedBox = event.target.classList.value;
    for(let i=0; i<6; i++){
      let selectedColor = palette[`color1`][`c${i+1}`].hex;
      if(selectedBox === `color-box-${i+1}`){
        if(CheckQueue.length === 0){
          addCheckImg(event.target, selectedBox, selectedColor);
          updateGradientBg(gradientBg);
          updateGradientBg(rotate);
        }
        else if(CheckQueue.length === 1){
          if(selectedBox === CheckQueue[0]){
            removeCheckImg2(event.target, 'pop');
          } else {
            addCheckImg(event.target, selectedBox, selectedColor);
            updateGradientBg(gradientBg);
            updateGradientBg(rotate);
          }
          
        }else if (CheckQueue.length === 2){
          if(selectedBox === CheckQueue[0]){
            removeCheckImg2(event.target, 'shift');
          } else if (selectedBox === CheckQueue[1]){
            removeCheckImg2(event.target, 'pop');
          } else{
            removeLastCheck(CheckQueue[0]);
            addCheckImg(event.target, selectedBox, selectedColor);
            updateGradientBg(gradientBg);
            updateGradientBg(rotate);
          }
        }
      }
    }
  }
});



/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 9번 기능 끝 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/

/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 5번 기능 시작 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/


const rangeBar = document.querySelector('.range-bar');
const degValue = document.getElementById("value1");

let deg = 90;

const changeValue = function(deg){
  degValue.innerHTML = `${deg}deg`;
}

rangeBar.addEventListener("input",() => {
  deg = rangeBar.value;
  changeValue(deg);
  deg = parseInt(deg, 10);
  updateGradientBg(gradientBg, deg);
});

rotate.addEventListener('click', (event) => {
  if(event.target.nodeName === 'BUTTON') {
    event.target.classList.toggle('on');
  }
});



/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 5번 기능 끝 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */

/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 6번 기능 시작 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/


const radialBtn = document.querySelector('.gradient-spread');

const changeRadial = (element) => {
  element.style.background = `radial-gradient(${ColorQueue[0]}, ${ColorQueue[1]})`;
}

let flag = false;
radialBtn.addEventListener("click", () => {
  if(!flag){
    radialBtn.style.backgroundColor = 'chartreuse';
    changeRadial(gradientBg);
    flag = true;
  } else {
    radialBtn.style.backgroundColor = 'rgba(255,255,255,0.3)';
    updateGradientBg(gradientBg, deg);
    flag = false;
  }
});




/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 6번 기능 끝 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */

/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 7번 기능 시작 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/

const randomBtn = document.querySelector('.gradient-random');

let randomColor = [];

// CheckQueue ['color-box-5', 'color-box-1'];

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

const reallowedCheck = (color, num) => {
  switch(color){
    case colorBox1.style.backgroundColor:
      CheckQueue[num] = colorBox1.classList.value;
      colorBox1.style.backgroundImage = 'url(../img/checked.png)';
      break;
    case colorBox2.style.backgroundColor:
      CheckQueue[num] = colorBox2.classList.value;
      colorBox2.style.backgroundImage = 'url(../img/checked.png)';
      break;
    case colorBox3.style.backgroundColor:
      CheckQueue[num] = colorBox3.classList.value;
      colorBox3.style.backgroundImage = 'url(../img/checked.png)';
      break;
    case colorBox4.style.backgroundColor:
      CheckQueue[num] = colorBox4.classList.value;
      colorBox4.style.backgroundImage = 'url(../img/checked.png)';
      break;
    case colorBox5.style.backgroundColor:
      CheckQueue[num] = colorBox5.classList.value;
      colorBox5.style.backgroundImage = 'url(../img/checked.png)';
      break;
    case colorBox6.style.backgroundColor:
      CheckQueue[num] = colorBox6.classList.value;
      colorBox6.style.backgroundImage = 'url(../img/checked.png)';
      break;
  }
}

const updateRandom = () => {
  if(flag){
    gradientBg.style.background = `radial-gradient(${randomColor[0]}, ${randomColor[1]})`;
  }
  else {
    gradientBg.style.background = `linear-gradient(${deg}deg, ${randomColor[0]} 0%, ${randomColor[1]} 100%)`;
  }
}

randomBtn.addEventListener('click', () => {
  randomColor = ['empty','empty']
  while(randomColor[1] === 'empty'){
    let color = palette[`color1`][`c${parseInt((Math.random() * 6) + 1,10)}`].rgb;
    if(randomColor[0] !== color){
      if(randomColor[0] === 'empty'){
        randomColor[0] = color;
      } else {
        randomColor[1] = color;
      }
    }
  }
  // CheckQueue
  // 기존 [모래를 갖고있는 버튼의 클래스 이름, 갈색을 갖고있는 버튼의 클래스 이름]
  // 랜덤 [핑크, 파랑]
  // 기존을 [핑크를 갖고있는 버튼의 클래스 이름, 파랑을 갖고있는 버튼의 클래스 이름]으로 변경 시켜줘야함

  // [모래, 갈색] hex 값인 배열 randomColor

  initializedCheck(CheckQueue[0]);
  initializedCheck(CheckQueue[1]);
  reallowedCheck(randomColor[0],0);
  reallowedCheck(randomColor[1],1);

  // 기존 CheckQueue에 있던 클래스를 갖고있는 버튼의 백그라운드 이미지를 제거
  // 이후 RandomColor와 같은 색을 갖고있는 버튼의 클래스 이름을 찾아 백그라운드 이미지를 추가
  // 이후 상태는 CheckQueue에 RandomColor 가 순서에 맞게 들어가있다.

  updateRandom();
});








/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 7번 기능 끝 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */