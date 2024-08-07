const world_slides = [
  { id: "world0", img: "./images/contents/world/stela.jpg", caption: "ステラ" },
  { id: "world1", img: "./images/contents/world/whale_and_waves.jpg", caption: "クジラと波" },
  { id: "world2", img: "./images/contents/world/you_in_a_fantastic_world.jpg", caption: "幻想的な世界に浸る、癒しの音楽" },
  { id: "world3", img: "./images/contents/world/4-7-8_Deep_Breath.jpg", caption: "4-7-8_Deep_Breath" },
  { id: "world4", img: "./images/contents/world/bird_cage_healing.jpg", caption: "鳥籠の癒し" },
  { id: "world5", img: "./images/contents/world/galaxy.jpg", caption: "銀河" },
  { id: "world6", img: "./images/contents/world/memories_on_the rooftop.jpg", caption: "屋上の思い出" },
  { id: "world7", img: "./images/contents/world/with_the_dusk.jpg", caption: "夕暮れと共に" },
  { id: "world8", img: "./images/contents/world/moonflower_butterfly.jpg", caption: "月華蝶" }
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
        <a href="#world${previous}" class="btn btn-ghost">❮</a>
        <a href="#world${next}" class="btn btn-ghost">❯</a>
      </div>
    </div>
  `;
}

function createNavigationButtons(totalSlides) {
  let buttons = '';
  for (let i = 0; i <= totalSlides; i++) {
    buttons += `<a href="#world${i}" class="btn btn-xs">${i}</a>`;
  }
  return buttons;
}

document.getElementById('slide-world').innerHTML = `
  <div class="carousel w-full rounded-lg h-56 md:h-96">
    ${world_slides.map(createSlide).join('')}
  </div>
  <div class="flex justify-center w-full py-2 gap-2">
    ${createNavigationButtons(world_slides.length)}
  </div>
  `;
