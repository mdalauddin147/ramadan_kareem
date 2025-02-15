document.addEventListener("DOMContentLoaded", () => {
    const messageText = "Ramadan is a time of mercy, forgiveness, and countless blessings. May you receive all three in abundance. Ramadan Kareem! 🌸🌙";
    const messageDiv = document.getElementById("message");

    messageText.split(" ").forEach(word => {
        const span = document.createElement("span");
        span.classList.add("word");
        span.textContent = word;
        messageDiv.appendChild(span);
    });

    messageDiv.addEventListener("click", () => {
        document.querySelectorAll(".word").forEach((span, index) => {
            setTimeout(() => {
                span.style.opacity = "0";
                span.style.transform = "translateY(-15px)";
            }, index * 100);
        });
    });
});
          