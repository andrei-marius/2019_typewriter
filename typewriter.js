"use strict";

let aText = [];
let htmlText = document.querySelector("#typewriter").textContent;
aText.push(htmlText);
let iSpeed = 200; 
let iIndex = 0; 
let iArrLength = aText[0].length; 
let iScrollAt = 20; 
let iTextPos = 0; 
let sContents = ''; 
let iRow; 
 
function typewriter(){
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 let destination = document.getElementById("typewriter");
 
 while ( iRow < iIndex ) {
  sContents += aText[iRow++];
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos);
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 500);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}

typewriter();