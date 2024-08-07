const avatar_slides = [
  { id: "avatar0", img: "./images/contents/avatar/reimu.png", caption: "博麗霊夢" },
  { id: "avatar1", img: "./images/contents/avatar/marisa.png", caption: "霧雨魔理沙" },
  { id: "avatar2", img: "./images/contents/avatar/ru-mia.png", caption: "ルーミア" },
  { id: "avatar3", img: "./images/contents/avatar/chiruno.png", caption: "チルノ" },
  { id: "avatar4", img: "./images/contents/avatar/meirin.png", caption: "紅美鈴" },
  { id: "avatar5", img: "./images/contents/avatar/sakuya.png", caption: "十六夜咲夜" },
  { id: "avatar6", img: "./images/contents/avatar/patyuri.png", caption: "パチュリー" },
  { id: "avatar7", img: "./images/contents/avatar/remiria.png", caption: "レミリア" },
  { id: "avatar8", img: "./images/contents/avatar/huran.png", caption: "フラン" },
  { id: "avatar9", img: "./images/contents/avatar/tewi.png", caption: "因幡てゐ" },
  { id: "avatar10", img: "./images/contents/avatar/mima.png", caption: "魅魔" }
];

function createSlide({ id, img, caption }, index, totalSlides) {
  previous = index - 1;
  if (previous < 0 ) previous = totalSlides.length - 1;
  next = index + 1;
  if (next > totalSlides.length - 1) next = 0;
  return `
    <div id="${id}" class="carousel-item relative w-full">
      <div>
        <img src="${img}" class="h-full"/>
      </div>
      <div class="absolute top-1 right-1 flex items-center justify-left">
        <h2 class="text-black text-2xl font-bold rounded p-8 backdrop-blur-sm bg-white/50">${caption}</h2>
      </div>
      <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#avatar${previous}" class="btn btn-ghost">❮</a>
        <a href="#avatar${next}" class="btn btn-ghost">❯</a>
      </div>
    </div>
  `;
}

function createNavigationButtons(totalSlides) {
  let buttons = '';
  for (let i = 0; i <= totalSlides; i++) {
    buttons += `<a href="#${id_name}${i}" class="btn btn-xs">${i}</a>`;
  }
  return buttons;
}

document.getElementById('slide-avatar').innerHTML = `
  <div class="carousel w-full rounded-lg h-56 md:h-96">
    ${avatar_slides.map(createSlide).join('')}
  </div>
  <div class="flex justify-center w-full py-2 gap-2">
    ${createNavigationButtons(avatar_slides.length)}
  </div>
  `;
