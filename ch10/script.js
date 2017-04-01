/*  JavaScript 6th Edition
    Chapter 10
    Chapter case

    Oak Top House
    Author: 
    Date:   

    Filename: script.js
*/

"use strict";
var zIndexCounter;
var pos = [];
var origin;

// perform setup tasks when page first loads
function setUpPage() {
    document.querySelector("nav ul li:first-of-type").addEventListener("click", loadSetup, false);
    document.querySelector("nav ul li:last-of-type").addEventListener("click", loadDirections, false);
    var movableItems = document.querySelectorAll("#room div");
    //USED FOR MOVING OBJECTS TO BE AT TOP. 
    //THIS GETS ASSIGNED TO MOVING OBJECT AS zIndex
    //since it will be largest zIndex, it will not be covered
    zIndexCounter = movableItems.length+1;
    //ADD EVENT LISTENER TO MOUSEDOWN FOR FURNITURES
    for(var i = 0; i < movableItems.length; i++){
        movableItems[i].addEventListener("mousedown",startDrag,false);
    }
}

function moveDrag(evt){
    currentPos = getCoords(evt);
    var deltaX = currentPos[0] - origin[0]
    var deltaY = currentPos[1] - origin[1]
    this.style.left = (pos[0] + deltaX) + "px";
    this.style.top = (pos[1] + deltaY) + "px";
}
function startDrag(evt){
    //set z-index for object currently being moved
    //so it is not covered by any other elements
    this.style.zIndex = zIndexCounter;
    zIndexCounter++; //so next moved element will also have largest zIndex
    this.addEventListener("mousemove", moveDrag, false)
    this.addEventListener("mouseup", removeDragListener, false)
    pos = [this.offsetLeft,this.offsetTop];
    origin = getCoords(evt)
}

// configure page to display Setup content
function loadSetup() {
   document.querySelector("nav ul li:first-of-type").className = "current";
   document.querySelector("nav ul li:last-of-type").className = "";
   document.getElementById("setup").style.display = "block";
   document.getElementById("location").style.display = "none";
   location.search = "";
}

// configure page to display Directions content
function loadDirections(string) {
   document.querySelector("nav ul li:first-of-type").className = "";
   document.querySelector("nav ul li:last-of-type").className = "current";
   document.getElementById("setup").style.display = "none";
   document.getElementById("location").style.display = "block";
}

// run setUpPage() function when page finishes loading
window.addEventListener("load", setUpPage, false);