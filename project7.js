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
function drawSquare(xpos, ypos, size, color) {
 // square drawing code here


  var newSquare = document.createElementNS(namespace,"rect")
 newSquare.setAttribute("fill", color)
 newSquare.setAttribute("x", xpos)
 newSquare.setAttribute("y", ypos)
   newSquare.setAttribute("width", size)
     newSquare.setAttribute("height", size)
 screen.appendChild(newSquare)

}


function drawCircle(xpos, ypos, size, color) {
 // your code here
  var newCircle = document.createElementNS(namespace,"circle")
 newCircle.setAttribute("fill", color)
 newCircle.setAttribute("r" , size)
 newCircle.setAttribute("cx", xpos)
 newCircle.setAttribute("cy", ypos)
 screen.appendChild(newCircle)

}

var drawing = false
// Step 3: Event listeners
document.addEventListener("mousedown", function(e) {
 // what do you want to do when the user presses down
 // on the mouse button?ss
 drawing = true
})

document.addEventListener("mouseup", function(e) {
 // what do you want to do when the user presses down
 // on the mouse button?
 drawing= false
})

document.addEventListener("mousemove", function(e) {
 // what do you want to do when the user presses down
 // on the mouse button?
 var point = transformPoint(e)


var selectShape = document.getElementById("shapeSelect").value
var selectColor = document.getElementById("colorSelect").value
var selectSize  = document.getElementById("sizeSelect").value



 if(drawing) {

   if(selectShape == "circle") {
drawSquare
drawCircle(point.x, point.y, selectSize ,selectColor)

   }

   drawSquare(point.x, point.y, selectSize ,selectColor)

 }
})
