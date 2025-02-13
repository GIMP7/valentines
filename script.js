let currentPage = 1;
let noCount = 0;
let userChoice = null;

// Initialize the first page
loadPage(currentPage);

var audio = new Audio('Cotton Vibe - i like you.mp3');
audio.play();

function loadPage(page) {
    const content = document.getElementById("content");
    content.innerHTML = "";

    switch (page) {
        case 1:
            content.innerHTML = `
                <img src="https://scontent-atl3-3.xx.fbcdn.net/v/t39.1997-6/467508345_9086222614796781_563634619382262706_n.webp?_nc_cat=1&ccb=1-7&_nc_sid=1176f5&_nc_ohc=ZwoS-TRvjuQQ7kNvgEvTX03&_nc_oc=Adhj-ihBy7MIBvo02gJMXPaRtbR00n_dQYcr2cYwZeqb-OaTq3XwSgwr85ND-Am5cpAlmwAF9LAhdYqVUWh6iyAc&_nc_ad=z-m&_nc_cid=0&_nc_zt=26&_nc_ht=scontent-atl3-3.xx&_nc_gid=AUtBB5D7EgYlAFQ3j6O8paJ&oh=00_AYC1ARo6LndSBpnMZ9yyUu32WryLMHlcGkfvZGRuDagVgQ&oe=67AF5F12" alt="Capybara" width="200">
                <p>Can I ask you a simple question?</p>
                <button onclick="handleChoice('yes')">Yes 💖</button>
                <button onclick="handleChoice('no')">No 😢</button>
            `;
            break;
        case 2:
            if (userChoice === 'no') {
                content.innerHTML = `
                    <img src="https://scontent-atl3-3.xx.fbcdn.net/v/t39.1997-6/72617639_526300201436745_2666503971543187456_n.webp?_nc_cat=1&ccb=1-7&_nc_sid=1176f5&_nc_ohc=_JMqmF77vBgQ7kNvgF83Dj4&_nc_oc=AdgmRNGgwvzkS57hhPkSFxqtZqHoe1r9WN7EDWCFa3wsQdZQqlnECTvhEnyldcAa_My2jinVeyjCdhQdOPos__L2&_nc_ad=z-m&_nc_cid=0&_nc_zt=26&_nc_ht=scontent-atl3-3.xx&_nc_gid=Al3lgwIFUQQgBaV413YsMhw&oh=00_AYBcGCRMitH6W71GYChqAkxqq962V4iqRFebbGOwl1Slvg&oe=67AF8B7E" alt="Capybara" width="200">
                    <p>You never had a choice... 💚</p>
                `;
                setTimeout(() => loadPage(3), 2000);
            } else {
                loadPage(3);
            }
            break;
        case 3:
            content.innerHTML = `
                <img src="https://scontent-atl3-3.xx.fbcdn.net/v/t39.1997-6/464868351_8939602809458763_8937941634214901573_n.webp?_nc_cat=1&ccb=1-7&_nc_sid=1176f5&_nc_ohc=laGoTESP8M4Q7kNvgHASi7a&_nc_oc=Adh_4aoinPdp0OVnla-Dx1JnW89QjHkoEktDLzipK5_uaP55FjjDeDWeS85N9q5rWaucy0AbL8l0k42MKS5qPLjM&_nc_ad=z-m&_nc_cid=0&_nc_zt=26&_nc_ht=scontent-atl3-3.xx&_nc_gid=ANDI4ljullRWp68AorPxUpo&oh=00_AYDc2ZtUhnLGoXubHJZJUvF5YVR6Imi0BKNiGPLBRH_S8Q&oe=67AF7DE1" alt="Capybara" width="200">
                <p>Will you be my Valentine? 🌹</p>
                <button id="yesBtn" onclick="loadPage(4)">Yes 💘</button>
                <button id="noBtn" onclick="moveNoButton()">No 😭</button>
            `;
            break;
        case 4:
            content.innerHTML = `
                <img src="https://scontent-atl3-3.xx.fbcdn.net/v/t39.1997-6/465005449_8939616832790694_3081030498179688939_n.webp?_nc_cat=1&ccb=1-7&_nc_sid=1176f5&_nc_ohc=Co_HCg4nlDgQ7kNvgEJPYmz&_nc_oc=AdjFDFMEqEXnHmmmascI0abZmnu3GnPP3Wodw8ZBhjjJoKwwMFRxU6UrZyxtfuOEPx6Yse_70QS2AP4T1ENCatKq&_nc_ad=z-m&_nc_cid=0&_nc_zt=26&_nc_ht=scontent-atl3-3.xx&_nc_gid=AqVvEvlggoY1xFCuIjrbj_a&oh=00_AYBPo_MZoYOcqNgZiogA5uCXSChwEsSsOgunflFL_y_Q3A&oe=67AF9362" alt="Capybara" width="200">
                <p>Wow, you chose yes? Awww! 🥰</p>
                <button onclick="loadPage(5)">Proceed 🚀</button>
            `;
            break;
        case 5:
            content.innerHTML = `
                <img src="https://scontent-atl3-2.xx.fbcdn.net/v/t39.1997-6/467934597_9086232158129160_8434242529680232338_n.webp?_nc_cat=101&ccb=1-7&_nc_sid=1176f5&_nc_ohc=wjkquv1bgb8Q7kNvgEhFR5i&_nc_oc=AdiYgpSi1eTirkt4ytwVhgpsegA5O42e-IVCx1oVdSGSnlFmA_jkgAAd-xrnH5VZslnZlv2kFxhW7XCNEAIMn1mq&_nc_ad=z-m&_nc_cid=0&_nc_zt=26&_nc_ht=scontent-atl3-2.xx&_nc_gid=AC3hgk6l4PMIn_njrQLSJ24&oh=00_AYAW4ieC56blmyEOxWv3hbELm8hCo1NGqZvHlf15OIVFYw&oe=67AF90F5" alt="Capybara" width="200">
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
        document.getElementById("yesBtn").addEventListener("click", celebrate);
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
    ctx.fillText("See you!", 20, 30);
    ctx.font = "16px 'Roboto', sans-serif";
    ctx.fillText(`Location: ${location} 🗺️`, 20, 70);
    ctx.fillText(`Time: ${time} ⏰`, 20, 100);
    ctx.fillText("Send this back to me!", 20, 150);

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
    heart.innerHTML = "💐";
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
}

function celebrate() {
    confetti({
        particleCount: 500,
        spread: 360,
        origin: { y: 0.6 }
    });
}


setInterval(createHearts, 300);