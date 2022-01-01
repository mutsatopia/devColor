function app() {
      //리스트
      const contList = document.querySelector('.cont-list');
      const paletteList = contList.querySelectorAll('.color-list a');

      //팔레트
      const contPalette = document.querySelector('.cont-palette');
      const backButton = contPalette.querySelector('.back');

      function handlePalette(e) {
            e.preventDefault();
            let colorName = e.currentTarget.querySelector('.color-title').textContent;

            const sect = document.querySelector('section.color-list');

            const title = document.createElement('p');
            title.classList.add('color-title');
            title.classList.add('a11y-hidden');
            title.textContent = colorName;

            const content = document.createElement('div');
            content.classList.add('wrap');

            content.innerHTML = `
                  <div class="script-txt" style='background:${palette[colorName].bg.hex}'>
                  <p>
                        <span style='color:${palette[colorName].c3.hex}'>&lt;</span><span style='color:${palette[colorName].c1.hex}'>script</span><span style='color:${palette[colorName].c3.hex}'>&gt;</span><br />
                        &nbsp;<span style='color:${palette[colorName].c2.hex}'>console</span><span style='color:${palette[colorName].c3.hex}'>.</span><span style='color:${palette[colorName].c4.hex}'>log</span><span
                        style='color:${palette[colorName].c5.hex}'>(</span><span style='color:${palette[colorName].c6.hex}'>“Hello World”</span><span style='color:${palette[colorName].c5.hex}'>)</span>;<br />
                        <span style='color:${palette[colorName].c3.hex}'>&lt;</span><span style='color:${palette[colorName].c1.hex}'>/script</span><span class="c3">&gt;</span>
                  </p>
                  </div>
                  <ul class="palette">
                        <li><button class="color-box" value="c1" style='background:${palette[colorName].c1.hex}'><span class="a11y-hidden">First
                              color</span><span>COPY</span></button></li>
                        <li><button class="color-box" value="c2" style='background:${palette[colorName].c2.hex}'><span class="a11y-hidden">Second
                              color</span><span>COPY</span></button></li>
                        <li><button class="color-box" value="c3" style='background:${palette[colorName].c3.hex}'><span class="a11y-hidden">third
                              color</span><span>COPY</span></button></li>
                        <li><button class="color-box" value="c4" style='background:${palette[colorName].c4.hex}'><span class="a11y-hidden">Fourth
                              color</span><span>COPY</span></button></li>
                        <li><button class="color-box" value="c5" style='background:${palette[colorName].c5.hex}'><span class="a11y-hidden">Fifth
                              color</span><span>COPY</span></button></li>
                        <li><button class="color-box" value="c6" style='background:${palette[colorName].c6.hex}'><span class="a11y-hidden">Sixth
                              color</span><span>COPY</span></button></li>
                  </ul>
                  `;

            sect.appendChild(title);
            sect.appendChild(content);



            const colorBtn = document.querySelectorAll('.palette button');
            const allCopy = document.querySelector('.button-st1');

            colorBtn.forEach(ele =>
                  ele.addEventListener("click", handleCopy)
            )
            allCopy.addEventListener("click", handleAllCopy)
      }

      function viewPaletteMode() {
            contList.classList.remove('active');
            contPalette.classList.add('active');
      }
      function hidePaletteMode() {
            contList.classList.add('active');
            contPalette.classList.remove('active');
            contPalette.querySelector('section.color-list .wrap').remove();
            contPalette.querySelector('section.color-list .color-title').remove();
      }
      paletteList.forEach(ele =>
            ele.addEventListener("click", handlePalette)
      )
      paletteList.forEach(ele =>
            ele.addEventListener("click", viewPaletteMode)
      )

      backButton.addEventListener("click", hidePaletteMode);

      //clipbord 함수
      function copyToClipboard(value) {
            const t = document.createElement("textarea");
            document.body.appendChild(t);
            t.value = value;
            t.select();
            document.execCommand('copy');
            document.body.removeChild(t);
      }

      //color칩 복사
      function handleCopy(e) {
            const colorName = document.querySelector('section.color-list .color-title').textContent;
            const selectColor = e.currentTarget.getAttribute('value');
            let format = document.querySelector('.btn-select').textContent.toLowerCase();

            copyToClipboard(palette[colorName][selectColor][format]);
            alert('Copied!');
      }

      //모든컬러 복사
      function handleAllCopy() {
            const colorName = document.querySelector('section.color-list .color-title').textContent;
            let format = document.querySelector('.btn-select').textContent.toLowerCase();
            let len = Object.keys(palette[colorName]).length;
            let arr = [];

            arr.push(palette[colorName].bg[format]); //bg복사여부
            for (let i = 1; i < len; i++) {
                  arr.push(palette[colorName][`c${i}`][format]);
            }
            copyToClipboard(arr);
            alert('Copied!');
      }




}

app();