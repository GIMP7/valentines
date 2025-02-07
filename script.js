let currentPage = 1;
let noCount = 0;
let userChoice = null;

// Initialize the first page
loadPage(currentPage);

function loadPage(page) {
    const content = document.getElementById("content");
    content.innerHTML = "";

    switch (page) {
        case 1:
            content.innerHTML = `
                <img src="capy1.png" alt="Capybara" width="200">
                <p>Can I ask you a simple question?</p>
                <button onclick="handleChoice('yes')">Yes 💖</button>
                <button onclick="handleChoice('no')">No 😢</button>
            `;
            break;
        case 2:
            if (userChoice === 'no') {
                content.innerHTML = `
                    <img src="capy3.png" alt="Capybara" width="200">
                    <p>You never had a choice... 💚</p>
                `;
                setTimeout(() => loadPage(3), 2000);
            } else {
                loadPage(3);
            }
            break;
        case 3:
            content.innerHTML = `
                <img src="capy2.png" alt="Capybara" width="200">
                <p>Will you be my Valentine? 🌹</p>
                <button id="yesBtn" onclick="loadPage(4)">Yes 💘</button>
                <button id="noBtn" onclick="moveNoButton()">No 😭</button>
            `;
            break;
        case 4:
            content.innerHTML = `
                <p>Wow, you chose yes? Awww! 🥰</p>
                <button onclick="loadPage(5)">Proceed 🚀</button>
            `;
            break;
        case 5:
            content.innerHTML = `
                <p>Let's plan our meetup!</p>
                <input type="text" id="location" placeholder="Location 🗺️">
                <input type="text" id="time" placeholder="Time ⏰">
                <button onclick="printData()">Print</button>
            `;
            break;
    }
}

function handleChoice(choice) {
    userChoice = choice;
    loadPage(2);
}

function moveNoButton() {
    noCount++;
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");

    if (noCount <= 3) {
        // Increase the size of the "Yes" button
        let newSize = 16 + noCount * 10; // Increase font size
        let newPadding = 10 + noCount * 5; // Increase padding
        yesBtn.style.fontSize = `${newSize}px`;
        yesBtn.style.padding = `${newPadding}px ${newPadding * 2}px`;
    }

    // After the third "No", remove the "No" button
    if (noCount >= 3) {
        noBtn.remove();
    }
}
function printData() {
    const location = document.getElementById("location").value;
    const time = document.getElementById("time").value;

    const canvas = document.createElement("canvas");
    canvas.width = 400;
    canvas.height = 200;
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "#f0f0f0";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#000";
    ctx.font = "20px 'Roboto', sans-serif";
    ctx.fillText("See you! 💌", 20, 30);
    ctx.font = "16px 'Roboto', sans-serif";
    ctx.fillText(`Location: ${location} 🗺️`, 20, 70);
    ctx.fillText(`Time: ${time} ⏰`, 20, 100);
    ctx.fillText("Don’t forget to send this back to me! 📨", 20, 150);

    // Convert canvas to image
    canvas.toBlob(function(blob) {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "meetup_plan.png";

        // Trigger download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Revoke the object URL to free up memory
        URL.revokeObjectURL(link.href);
    }, "image/png");
}

function preventClose() {
    alert("You must give an answer! ❤️");
}

// Add falling hearts animation
function createHearts() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
}

var audio = new Audio('Cotton Vibe - i like you.mp3');
audio.play();

var audio;
$("#startAudio").on("click", function(e){
    if(!audio){
        audio = new Audio('Cotton Vibe - i like you.mp3');;
    }
});

setInterval(createHearts, 300);