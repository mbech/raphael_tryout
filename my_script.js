window.onload = function(){
  var paper = new Raphael(document.getElementById('canvas_container'), 500, 500)
  var circle = paper.circle(250, 250, 275)

  for (var i = 0; i < 6; i++) {
    paper.circle(Math.random() * 500, Math.random()* 500, Math.random() * (240) + 10)
  }
}