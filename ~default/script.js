// this is the only thing I could think of using js for

var el = document.querySelector('#snazz')

function render(time){
  requestAnimationFrame(render)

  el.style.color = 'hsl('+(time/30)%255+', 100%, 40%)'
}


requestAnimationFrame(render)
