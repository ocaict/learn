function toHex(value) {
  var hex = "0123465789ABCDEF";
  var result = hex.charAt(Math.floor(value / 16));
  result += hex.charAt(value % 16);
  return result;
}
var colorBegin = "#DC143C";
var colorEnd = "#3CB371";
var text = "Oca WebTech";
var r = parseInt(colorBegin.substring(1, 3), 16);
var g = parseInt(colorBegin.substring(3, 5), 16);
var b = parseInt(colorBegin.substring(5, 7), 16);
var rr = parseInt(colorEnd.substring(1, 3), 16);
var gg = parseInt(colorEnd.substring(3, 5), 16);
var bb = parseInt(colorEnd.substring(5, 7), 16);
var r_step = (rr - r) / text.length;
var g_step = (gg - g) / text.length;
var b_step = (bb - b) / text.length;
var html = "";
for (var x = 0; x <= text.length; x++) {
  html =
    html +
    '<span style="color:#' +
    toHex(r) +
    toHex(g) +
    toHex(b) +
    '";">' +
    text.charAt(x) +
    "</span>";
  r += r_step;
  g += g_step;
  b += b_step;
}
document.getElementById("title").innerHTML = html;

var data =
  "Web Development^PWA Development^eLearning Development^Mobile & Desktop App Development";
var lines = data.split("^");
var reverse = false;
var index = 0;
var text = "";
var typeWriterElement = document.getElementById("services");

function typeWriterDeluxe() {
  var i = index % lines.length;
  var line = lines[i];
  if (reverse) {
    text = line.substring(0, text.length - 1);
  } else {
    text = line.substring(0, text.length + 1);
  }
  typeWriterElement.innerHTML = text;

  var timeout = 250 - Math.random() * (250 / 2);
  if (reverse) {
    timeout /= 2;
  }
  if (!reverse && text === line) {
    timeout = 5000;
    reverse = true;
  } else if (reverse && text === "") {
    reverse = false;
    index++;
    timeout = 500;
  }
  setTimeout(typeWriterDeluxe, timeout);
}
typeWriterDeluxe();

