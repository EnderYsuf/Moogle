function randomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function toHex(r, g, b) {
    return [r, g, b]
        .map(c => c.toString(16).padStart(2, '0')) // Convert to hex and ensure 2 digits
        .join('');
}

function invertHex(hex) {
    return hex.match(/.{2}/g) // Split into R, G, B pairs
        .map(c => (255 - parseInt(c, 16)).toString(16).padStart(2, '0')) // Invert and pad
        .join('');
}

//window.onload = function() {
    let hexColor = toHex(randomValue(0,255), randomValue(0,255), randomValue(0,255));
    document.body.style.backgroundColor = `#${hexColor}`;
    document.getElementById("color").innerHTML = `#${hexColor}`;
    document.getElementById("color").style.color = `#${invertHex(hexColor)}`;
//}