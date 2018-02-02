var headline = document.createElement("h1");
var headtext = document.createTextNode("Vedran Maras");
headline.appendChild(headtext);

var para = document.createElement("p");
var paratext = document.createTextNode("Lorem ipsum dolor samet");
para.appendChild(paratext);

var pic = document.createElement("img");
pic.setAttribute("src", "Best-online-MBAs-in-California.jpg");

var divi = document.createElement("div");
divi.appendChild(headline);
divi.appendChild(para);
divi.appendChild(pic);

var existingElement = document.getElementsByTagName("body")[0];
existingElement.appendChild(divi);