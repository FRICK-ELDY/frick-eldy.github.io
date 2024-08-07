const id_name = "world"

const slides = [
  { id: id_name + "0", img: "./images/contents/world/stela.jpg", caption: "ステラ" },
  { id: id_name + "1", img: "./images/contents/world/whale_and_waves.jpg", caption: "クジラと波" },
  { id: id_name + "2", img: "./images/contents/world/you_in_a_fantastic_world.jpg", caption: "幻想的な世界に浸る、癒しの音楽" },
  { id: id_name + "3", img: "./images/contents/world/4-7-8_Deep_Breath.jpg", caption: "4-7-8_Deep_Breath" },
  { id: id_name + "4", img: "./images/contents/world/bird_cage_healing.jpg", caption: "鳥籠の癒し" },
  { id: id_name + "5", img: "./images/contents/world/galaxy.jpg", caption: "銀河" },
  { id: id_name + "6", img: "./images/contents/world/memories_on_the rooftop.jpg", caption: "屋上の思い出" },
  { id: id_name + "7", img: "./images/contents/world/with_the_dusk.jpg", caption: "夕暮れと共に" },
  { id: id_name + "8", img: "./images/contents/world/moonflower_butterfly.jpg", caption: "月華蝶" }
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
        <a href="#${id_name}${previous}" class="btn btn-ghost">❮</a>
        <a href="#${id_name}${next}" class="btn btn-ghost">❯</a>
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

document.getElementById('slide-world').innerHTML = `
  <div class="carousel w-full rounded-lg h-56 md:h-96">
    ${slides.map(createSlide).join('')}
  </div>
  <div class="flex justify-center w-full py-2 gap-2">
    ${createNavigationButtons(slides.length)}
  </div>
  `;
