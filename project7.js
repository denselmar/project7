var screen = document.getElementById("screen")
var namespace = "http://www.w3.org/2000/svg"

// utility function
function transformPoint(event) {
  var pt = screen.createSVGPoint()
  pt.x = event.x
  pt.y = event.y
  var mousept =  pt.matrixTransform(screen.getScreenCTM().inverse())
  return mousept
}

// Step 2: drawSquare and drawCircle functions
function drawSquare(x, y, size, color) {
  // square drawing code here
  var newSquare = document.createElementNS(namespace, "square")
   newSquare.setAttribute("fill", color)
   newSquare.setAttribute("size", size)
   newSquare.setAttribute("x", xpos)
   newSquare.setAttribute("y", ypos)
   canvas.appendChild(newSquare)
}

function drawCircle(x, y, size, color) {

  var newcircle = document.createElementNS(namespace, "circle")
   newCircle.setAttribute("fill", color)
   newCircle.setAttribute("size", size)
   newCircle.setAttribute("x", xpos)
   newCircle.setAttribute("y", ypos)
   canvas.appendChild(newCircle)
}

// Step 3: Event listeners
document.addEventListener("mousedown", function(e) {
  // what do you want to do when the user presses down
  // on the mouse button?
})
