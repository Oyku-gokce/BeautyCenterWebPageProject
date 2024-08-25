const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});


document.addEventListener("DOMContentLoaded", function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    hamburgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    const pages = document.querySelectorAll(".landing");
    let currentPageIndex = 0;

    setTimeout(function() {
        showNextPage();
    }, 5000);

    function showNextPage() {
        console.log("showNextPage fonksiyonu çağrıldı.");

        pages[currentPageIndex].classList.remove("active");
        currentPageIndex = (currentPageIndex + 1) % pages.length;
        pages[currentPageIndex].classList.add("active");

        setTimeout(showNextPage, 5000);
    }
});

document.querySelectorAll('.arrow-container').forEach((arrowContainer, index) => {
    const leftArrow = arrowContainer.querySelector('.arrow-left');
    const rightArrow = arrowContainer.querySelector('.arrow-right');

    leftArrow.addEventListener('click', () => {
        pages[currentPageIndex].classList.remove("active");
        currentPageIndex = (currentPageIndex - 1 + pages.length) % pages.length;
        pages[currentPageIndex].classList.add("active");
    });

    rightArrow.addEventListener('click', () => {
        pages[currentPageIndex].classList.remove("active");
        currentPageIndex = (currentPageIndex + 1) % pages.length;
        pages[currentPageIndex].classList.add("active");
    });
});


// Sol ve sağ okları seç
const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");

// Tıklama olaylarını dinle
leftArrow.addEventListener("click", function() {
    navigateLanding("left");
});

rightArrow.addEventListener("click", function() {
    navigateLanding("right");
});

// Landingler arasında gezinme fonksiyonu
function navigateLanding(direction) {
    const activeLanding = document.querySelector(".landing.active");
    const allLandings = document.querySelectorAll(".landing");
    let newIndex;

    // Sol veya sağa doğru yeni index'i hesapla
    if (direction === "left") {
        newIndex = Array.from(allLandings).indexOf(activeLanding) - 1;
        if (newIndex < 0) {
            newIndex = allLandings.length - 1;
        }
    } else if (direction === "right") {
        newIndex = Array.from(allLandings).indexOf(activeLanding) + 1;
        if (newIndex >= allLandings.length) {
            newIndex = 0;
        }
    }

    // Aktif landing'i değiştir
    activeLanding.classList.remove("active");
    allLandings[newIndex].classList.add("active");
}


document.getElementById('randevuAlButton').addEventListener('click', function() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('dahaFazlaBilgiAlButton').addEventListener('click', function() {
    window.location.href = 'dahaFazlaBilgi.html'; // Hedef sayfanın URL'si
});

document.getElementById('randevuAlButtonn').addEventListener('click', function() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('dahaFazlaBilgiAlButtonn').addEventListener('click', function() {
    window.location.href = 'dahaFazlaBilgi.html'; // Hedef sayfanın URL'si
});