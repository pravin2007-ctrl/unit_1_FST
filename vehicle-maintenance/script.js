const tips = [
    "Check engine oil every 1,000 km",
    "Maintain correct tire pressure",
    "Replace air filter regularly",
    "Check brake fluid level",
    "Clean battery terminals",
    "Service your vehicle periodically"
];

function showTip() {
    const randomIndex = Math.floor(Math.random() * tips.length);
    document.getElementById("randomTip").innerText = tips[randomIndex];
}
