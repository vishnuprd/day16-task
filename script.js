function startCountdown() {
    const countdownElement = document.querySelector("h1"); // Get the h1 element
    let count = 10; // Initial countdown value

    function updateCountdown() {
        if (count >= 1) {
            countdownElement.innerHTML = count;
            count--;

            setTimeout(updateCountdown, 1000);
        } else {
            countdownElement.innerHTML = "Happy Independence Day";
        }
    }

    updateCountdown(); // Start the countdown immediately
}
