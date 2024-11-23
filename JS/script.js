const myCanvas = document.getElementById("kleurenPalet");
const ctx = myCanvas.getContext("2d");

let kleurInput = prompt("Voer een cijfer tussen 1 en 5 in voor de kleur."); // Vraagt een nummer tussen 1 en 5 voor de kleur
let vormInput = prompt("Voer een vorm in: Cirkel, Ster, Driehoek of Vierkant"); // Vraagt een vorm.

// Functie voor het tekenen van een ster.
function drawStar(x, y, radius, sides, fillColor) {
  var points = sides || 5;
  ctx.fillStyle = fillColor;
  ctx.beginPath();
  ctx.moveTo(x, y + radius);
  for (var i = 0; i < 2 * points + 1; i++) {
    var r = i % 2 == 0 ? radius : radius / 2;
    var a = (Math.PI * i) / points;
    ctx.lineTo(x + r * Math.sin(a), y + r * Math.cos(a));
  }
  ctx.closePath();
  if (fillColor) ctx.fill();
}

switch (kleurInput) {
  case "1":
    ctx.fillStyle = "red"; // Maakt een rode achtergrond bij input 1.
    ctx.fillRect(0, 0, 400, 400);
    break;
  case "2":
    ctx.fillStyle = "green"; // Maakt een groene achtergrond bij input 2.
    ctx.fillRect(0, 0, 400, 400);
    break;
  case "3":
    ctx.fillStyle = "blue"; // Maakt een blauwe achtergrond bij input 3.
    ctx.fillRect(0, 0, 400, 400);
    break;
  case "4":
    ctx.fillStyle = "yellow"; // Maakt een gele achtergrond bij input 4.
    ctx.fillRect(0, 0, 400, 400);
    break;
  case "5":
    ctx.fillStyle = "hotpink"; // Maakt een roze achtergrond bij input 5.
    ctx.fillRect(0, 0, 400, 400);
    break;
  default:
    ctx.fillText("Deze kleur zit niet in mijn systeem.", 10, 50); // Zet neer als er geen geldige kleur gegeven is.
    ctx.font = "50px Verdana";
}

switch (vormInput) {
  case "Cirkel": // Tekent een cirkel bij de input Cirkel
    ctx.fillStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.arc(200, 200, 200, 0, 2 * Math.PI);
    ctx.fill();
    break;
  case "Ster":// Tekent een Ster bij de input Ster
    drawStar(200, 200, 200, 5, "white");
    ctx.rotate(Math.PI / 8);
    break;
  case "Driehoek": // Tekent een Driehoek bij de input Driehoek
    ctx.fillStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.moveTo(200, 25); 
    ctx.lineTo(375, 375); 
    ctx.lineTo(25, 375); 
    ctx.closePath(); 
    ctx.fill();
    break;
  case "Vierkant":// Tekent een Vierkant bij de input Vierkant
    ctx.fillStyle = "white";
    ctx.fillRect(25, 25, 350, 350);
    break;
  default:
    ctx.fillText("Deze vorm zit niet in mijn systeem.", 20, 50);// Zet neer als er geen geldige vorm gegeven is.
    ctx.font = "50px Verdana";
}
