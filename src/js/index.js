import '../css/index.css'

const content_bg = $('#bg')
var current = 0;

const backgrounds = new Array(
    'url("src/imgs/dragon.jpeg")'
  // , 'url(imgs/piu.jpg)'
  , 'url(src/imgs/board.jpg)'
  , 'url(src/imgs/abstract.jpg)'
  , 'url(http://placekitten.com/400)'
)
function nextBackground() {
    current++;
    current = current % backgrounds.length;
    content_bg.css('background-image', backgrounds[current]);
}
const backgrounds_colors= new Array(
  // '#212121's
  )
$().ready(function(){
  console.log('Loaded')
  // content_bg.toggleClass('bg');

  // setInterval(nextBackground, 3500);
  // content_bg.css('background-image', backgrounds[0]);
  content_bg.css('background-color', backgrounds_colors[0]);
});