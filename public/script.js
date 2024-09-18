document.addEventListener('DOMContentLoaded', () => {
    const countdownElement = {
        days: document.getElementById('days'),
        hours: document.getElementById('hours'),
        minutes: document.getElementById('minutes'),
        seconds: document.getElementById('seconds')
    };

    const countdownDate = new Date("2024-10-24T18:00:00Z").getTime(); // Set the target date and time

    function updateCountdown() {
        const now = new Date().getTime();
        const timeRemaining = countdownDate - now;

        if (timeRemaining < 0) {
            clearInterval(countdownInterval);
            countdownElement.days.textContent = '00';
            countdownElement.hours.textContent = '00';
            countdownElement.minutes.textContent = '00';
            countdownElement.seconds.textContent = '00';
            return;
        }

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        countdownElement.days.textContent = String(days).padStart(2, '0');
        countdownElement.hours.textContent = String(hours).padStart(2, '0');
        countdownElement.minutes.textContent = String(minutes).padStart(2, '0');
        countdownElement.seconds.textContent = String(seconds).padStart(2, '0');
    }

    const countdownInterval = setInterval(updateCountdown, 1000);

    const indicatorIcon = document.getElementById('indicator-icon');
    const sections = document.querySelectorAll('.section');
    let currentSectionIndex = 0;

    function updateIndicatorIcon() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const sectionHeight = window.innerHeight;
        const index = Math.round(scrollTop / sectionHeight);

        if (index >= sections.length - 1) {
            console.log('Last section reached');
            indicatorIcon.className = 'fas fa-arrow-up';
        } else {
            console.log(`Section ${index + 1} reached`);
            indicatorIcon.className = 'fas fa-arrow-down';
        }
    }

    function scrollToSection(index) {
        window.scrollTo({
            top: index * window.innerHeight,
            behavior: 'smooth'
        });
    }

    document.getElementById('indicator').addEventListener('click', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const sectionHeight = window.innerHeight;
        const index = Math.round(scrollTop / sectionHeight);

        if (index >= sections.length - 1) {
            scrollToSection(index - 1);
        } else {
            scrollToSection(index + 1);
        }
    });

    window.addEventListener('scroll', updateIndicatorIcon);
    updateIndicatorIcon(); // Initial call to set the correct icon


});
function goToPage() {
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSf1nEpOmZIU5PTi_HwQtaN_ucuiR-pXmM0MD4ib0xjvmp5rBA/viewform?usp=sf_link"; // Change this to your desired URL
}