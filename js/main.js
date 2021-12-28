
const main = document.querySelector('.color-cont');
const frag = document.createDocumentFragment();
const len = Object.keys(palette).length;

for (let i = 0; i < len; i++) {
  const list = document.createElement('li');
  list.classList.add('color-list');
  let colorName = Object.keys(palette)[i];
  list.innerHTML = `
    <a href="palette.html">
      <span class="color-title">${colorName}</span>
      <span class="wrap">
        <span class="script-txt" style='background:${palette[colorName].bg.hex}'>
          <span style='color:${palette[colorName].c3.hex}'>&lt;</span><span style='color:${palette[colorName].c1.hex}'>script</span><span style='color:${palette[colorName].c3.hex}'>&gt;</span><br />
          &nbsp;<span style='color:${palette[colorName].c2.hex}'>console</span><span style='color:${palette[colorName].c3.hex}'>.</span><span style='color:${palette[colorName].c4.hex}'>log</span><span style='color:${palette[colorName].c5.hex}'>(</span><span style='color:${palette[colorName].c6.hex}'>“Hello World”</span><span style='color:${palette[colorName].c5.hex}'>)</span>;<br />
          <span style='color:${palette[colorName].c3.hex}'>&lt;</span><span style='color:${palette[colorName].c1.hex}'>/script</span><span style='color:${palette[colorName].c3.hex}'>&gt;</span>
        </span>
        <span class="palette">
          <span class="color-box" style='background:${palette[colorName].c1.hex}'></span>
          <span class="color-box" style='background:${palette[colorName].c2.hex}'></span>
          <span class="color-box" style='background:${palette[colorName].c3.hex}'></span>
          <span class="color-box" style='background:${palette[colorName].c4.hex}'></span>
          <span class="color-box" style='background:${palette[colorName].c5.hex}'></span>
          <span class="color-box" style='background:${palette[colorName].c6.hex}'></span>
        </span>
      </span>
    </a>
  `
  frag.appendChild(list);
}
main.appendChild(frag);
