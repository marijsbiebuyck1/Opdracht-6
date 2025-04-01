// Pak de canvas en context
const canvas = document.getElementById("scratchCanvas");
const ctx = canvas.getContext("2d");

// Zorg dat de canvas op volle schermgrootte staat
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Zwarte achtergrond starten
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Variabelen voor tekenen
let isDrawing = false;
let lastX = 0;
let lastY = 0;

// Kleur en lijndikte randomiseren
function randomColor() {
    // Returnt een willekeurige kleur in HSL (kleur, verzadiging, lichtheid)
    return `hsl(${Math.random() * 360}, 100%, 70%)`;
}

// Start tekenen
canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    lastX = e.clientX;
    lastY = e.clientY;
});

// Tekenen bij muisbeweging
canvas.addEventListener("mousemove", (e) => {
    if (!isDrawing) return;


    function randomColor() {
        // Kies een hue tussen 200 en 270 voor een blauwtint
        const hue = Math.random() * 70 + 200;  // 200 tot 270 graden (blauw tot paars)
        const saturation = Math.random() * 40 + 60;  // 60% tot 100% verzadiging
        const lightness = Math.random() * 30 + 40;  // 40% tot 70% lichtheid
    
        return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    }

    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();

    // Bollen tekenen
    ctx.beginPath();
    ctx.arc(e.clientX, e.clientY, 15, 0, Math.PI * 2);  // Bollen van vaste grootte (straal = 15)

    ctx.fillStyle = randomColor(); // Willekeurige kleur voor de bol
    ctx.fill();
 

    lastX = e.clientX;
    lastY = e.clientY;
    ctx.lineWidth = 5;
    const ballDrawChance = 1;
});

// Stop met tekenen
canvas.addEventListener("mouseup", () => isDrawing = false);
canvas.addEventListener("mouseleave", () => isDrawing = false);

// ✨ **Fade-out functie:** maakt de tekening steeds donkerder
function fadeOutEffect() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)"; // 0.05 = lichte transparantie
    ctx.fillRect(0, 0, canvas.width, canvas.height);  // Voeg een licht transparante laag toe om te vervagen
}


// Roep de fade-out functie **om de 100ms** aan
setInterval(fadeOutEffect, 50); // De tijd kan worden aangepast voor sneller of trager vervagen
