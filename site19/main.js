const yAxisLabels = [
  { label: "Fluctuation", title: "Variability Over Time" },
  { label: "Velocity", title: "Speed of Change" },
  { label: "Quantum", title: "Smallest Measurable Unit" },
  { label: "Momentum", title: "Sustained Movement" },
  { label: "Fusion", title: "Combination of Elements" },
  { label: "Core", title: "Central Element" },
  { label: "Drift", title: "Gradual Shift" },
  { label: "Echo", title: "Repeated Signal" },
  { label: "Horizon", title: "Boundary of Perception" },
  { label: "Energy", title: "Power Output" },
  { label: "Pulse", title: "Rhythmic Signal" },
  { label: "Vortex", title: "Rotational Flow" },
  { label: "Intensity", title: "Strength Over Time" },
  { label: "Nucleus", title: "Central Structure" },
  { label: "Waveform", title: "Signal Representation" },
  { label: "Spectra", title: "Range of Frequencies" },
  { label: "Amplitude", title: "Magnitude of Change" },
  { label: "Chaos", title: "Unpredictability in Patterns" },
  { label: "Equilibrium", title: "Balance State" },
  { label: "Zenith", title: "Peak Level" },
  { label: "Phase", title: "Cyclic Position" },
  { label: "Vector", title: "Directional Force" },
  { label: "Catalyst", title: "Acceleration Factor" },
  { label: "Dimension", title: "Spatial Extent" },
  { label: "Rift", title: "Structural Divide" },
  { label: "Fusion", title: "Energy from Combination" },
  { label: "Gradient", title: "Rate of Change" },
  { label: "Aether", title: "Theoretical Medium" },
  { label: "Flux", title: "Continuous Variation" },
  { label: "Continuum", title: "Unbroken Sequence" },
  { label: "Quantum Leap", title: "Sudden Advancement" },
  { label: "Oscillation", title: "Periodic Movement" },
  { label: "Hyperdrive", title: "Faster-than-Light Travel" },
  { label: "Surge", title: "Sudden Increase" },
  { label: "Synapse", title: "Neural Connection" },
  { label: "Momentum", title: "Sustained Movement" },
  { label: "Turbulence", title: "Chaotic Motion" },
  { label: "Spectral", title: "Wave-Based Analysis" },
  { label: "Pulsar", title: "Rotating Neutron Star" },
  { label: "Inertia", title: "Resistance to Change" },
  { label: "Magnetism", title: "Attractive/Repulsive Force" },
  { label: "Relativity", title: "Space-Time Relationship" },
  { label: "Orbit", title: "Path of Revolution" },
  { label: "Interference", title: "Wave Overlap Effects" },
  { label: "Impulse", title: "Force Over Time" },
  { label: "Radiance", title: "Light Emission" },
  { label: "Zero Point", title: "Quantum Vacuum State" },
  { label: "Cascade", title: "Sequential Process" },
  { label: "Singularity", title: "Gravitational Collapse" }
];

const things = [
  "apple", "banana", "cat", "dog", "car", "tree", "guitar", "book", "mountain", "piano", 
  "elephant", "computer", "chair", "house", "pen", "jacket", "moon", "cloud", "table", "laptop", 
  "keyboard", "coffee", "camera", "flower", "fish", "tiger", "bike", "bird", "ball", "rainbow", 
  "pizza", "lamp", "phone", "television", "glove", "jungle", "shoe", "planet", "star", "sandwich", 
  "shoes", "hat", "rock", "boat", "balloon", "cake", "robot", "candle", "apple pie", "chair", 
  "window", "hat", "giraffe", "pizza box", "guitar string", "shovel", "ice cream", "keyboard", 
  "note", "butterfly", "diamond", "tablecloth", "skateboard", "clock", "bicycle", "mask", "jacket", 
  "glove", "water bottle", "mug", "vase", "ball", "sweater", "fridge", "microwave", "television", 
  "apple", "soccer ball", "telescope", "t-shirt", "backpack", "bottle", "glasses", "rug", "shoes", 
  "remote", "sunglasses", "watch", "coffee table", "lawnmower", "blanket", "toaster", "painting", 
  "cup", "earphones", "backpack", "socks", "cookie", "hat", "bracelet", "skirt", "coat", "broom"
];

function randomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function drawDiagram() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas before drawing

    const canvas_height = 400;
    const index = randomValue(0, yAxisLabels.length - 1);
    const new_title = yAxisLabels[index].title;
    document.getElementById("title").innerHTML = new_title;

    let dataQuantity = randomValue(3, 6);
    let currLabel = new Set();
    const data = [];
    const labels = [];

    for (let k = 0; k < dataQuantity; k++) {
        let new_index;
        do {
            new_index = randomValue(0, things.length - 1);
        } while (currLabel.has(things[new_index]));

        currLabel.add(things[new_index]);
        data.push(randomValue(1, 300));
        labels.push(things[new_index]);
    }

    const barWidth = 50;
    const barSpacing = 15;

    for (let i = 0; i < data.length; i++) {
        const x = i * (barWidth + barSpacing) + 30;
        const y = canvas_height - data[i];
        const height = data[i];

        ctx.fillStyle = "#3498db";
        ctx.fillRect(x, y, barWidth, height);

        ctx.fillStyle = "#000";
        ctx.font = "14px Arial";
        ctx.textAlign = "center";
        ctx.fillText(labels[i], x + barWidth / 2, canvas_height + 20);
        ctx.fillText(data[i], x + barWidth / 2, canvas_height + 40);
    }

    ctx.strokeStyle = "#000";
    ctx.beginPath();
    ctx.moveTo(20, canvas_height);
    ctx.lineTo(canvas.width, canvas_height);
    ctx.moveTo(20, 0);
    ctx.lineTo(20, canvas_height);
    ctx.stroke();

    ctx.save();
    ctx.translate(15, canvas_height / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.font = "16px Arial";
    ctx.fillText(yAxisLabels[index].label, 0, 0);
    ctx.restore();
}

drawDiagram();