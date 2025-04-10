function randomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.onload = function() {
    let loading = document.getElementById("loading");
    let x = 100;

    let interval = setInterval(() => {
        if (x <= 0) {
            clearInterval(interval);
            loading.style.top = "0%";
            loading.style.display = "none"; // Hide after animation
            return;
        }
        loading.style.top = `${100-x}%`;
        x -= randomValue(5, 20);
        console.log(x);
    }, randomValue(1, 10) * 1000); // Faster updates (0.5 to 1.5 seconds)
};