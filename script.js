function getRandomDigit() {
    return Math.floor(Math.random() * 10);
}

function getPattern() {
    return Array.from({ length: 5 }, getRandomDigit);
}

function analyzePattern(pattern) {
    const last = pattern[4];
    const countHigher = pattern.slice(0, 4).filter(n => n < last).length;
    const countLower = pattern.slice(0, 4).filter(n => n > last).length;

    if (countHigher > countLower) return "Rise";
    if (countLower > countHigher) return "Fall";
    return "Equal";
}

function generateAndAnalyze() {
    const pattern = getPattern();
    const result = analyzePattern(pattern);
    return { pattern, result };
}

function display() {
    const output = document.getElementById("output");
    const results = Array.from({ length: 20 }, () => generateAndAnalyze());
    output.innerHTML = results.map(r =>
        `<div><strong>${r.pattern.join(", ")}</strong> → ${r.result}</div>`
    ).join("");
}

setInterval(display, 3000);
display();
