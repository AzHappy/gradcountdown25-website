const graduationDate = new Date("May 20, 2025 13:00:00").getTime();

const timer = setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = graduationDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Display the countdown in the HTML
    if (timeLeft > 0) {
        document.getElementById("countdown").innerHTML = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
    } else {
        // If graduation has passed, stop the countdown and show a message
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "🎉 It's Graduation Time!";

        // Launch confetti!
        confetti({
            particleCount: 150,
            spread: 70,
            orgin: { y: 0.6 }
        });
    }
}, 1000); // Repeat every second