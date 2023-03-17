const numberOfSlides = 10;
const numberOfItemsPerSlide = 10;

const $container = document.querySelector(".page-container");

for (let i = 0; i < numberOfSlides; i++) {
  const $slide = document.createElement("div");
  $slide.classList.add("slide");

  $slideTrack = document.createElement("div");
  $slideTrack.classList.add("slide-track");

  const animationName = i % 2 === 0 ? "slide-left" : "slide-right";
  $slideTrack.classList.add(`animation-${animationName}`);

  for (let j = 0; j < numberOfItemsPerSlide; j++) {
    const $item = document.createElement("div");
    $item.classList.add("item");
    $item.textContent = j;
    $slideTrack.append($item);
  }

  for (let k = 0; k < numberOfItemsPerSlide; k++) {
    const $item = document.createElement("div");
    $item.classList.add("item");
    $item.textContent = k;
    $slideTrack.append($item);
  }

  $slide.append($slideTrack);
  $container.append($slide);
}
