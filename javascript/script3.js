let currentIndex = 0;
const track = document.querySelector('.feature-carousel');
const cards = document.querySelectorAll('.card');

function updateSlidePosition() {
  const offset = currentIndex * cards[0].offsetWidth;
  track.scrollTo({ left: offset, behavior: 'smooth' });
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlidePosition();
  }
}

function nextSlide() {
  if (currentIndex < cards.length - 1) {
    currentIndex++;
    updateSlidePosition();
  }
}