document.addEventListener("DOMContentLoaded", function () {
    let x = 0;
    let interval = setInterval(() => {
        x++
        let p = document.createElement("p");
        p.textContent = `Line ${x}`;
        document.body.appendChild(p);
    },5)

    function detectScrollIntent() {
        x++;
        let p = document.createElement("p");
        p.textContent = `Line ${x}`;
        document.body.appendChild(p);
    }

    document.addEventListener("wheel", detectScrollIntent, { once: true });
});