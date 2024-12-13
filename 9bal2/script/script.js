const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    burger.classList.toggle('active');
});

// Модальне вікно
const searchBtn = document.getElementById('search-btn');
const modal = document.getElementById('search-modal');
const closeBtn = document.querySelector('.close-btn');
const searchForm = modal.querySelector('form');

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'flex';
});
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Не знайдено');
    modal.style.display = 'none';
});

//Свайпер
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

//Генерація скриптом карточок

const blogs = [
    {
        img: "img/swiper1.png",
        category: "Подорожі",
        date: "13 березня 2023",
        title: "Поїздка чи автобус? Який варіант підходить?",
        description: "Вибір між поїздкою чи автобусом залежить від різних факторів, таких як відстань подорожі, доступний час, вартість і особа",
        link: "#"
    },
    {
        img: "img/swiper2.png",
        category: "Розробка",
        date: "11 березня 2023",
        title: "Найкращий веб-сайт для пошуку для вашого наступного проекту",
        description: "Використовуйте низькі плоди, щоб визначити додаткову активність для бета-тестування. Подолайте цифровий розрив за допомогою додаткових кліків",
        link: "#"
    },
    {
        img: "img/swiper3.png",
        category: "Спорт",
        date: "10 березня 2023",
        title: "Як стати танцюристом у 2023 році з відповідними навичками?",
        description: "Органічно розвивайте цілісне бачення світу проривних інновацій через різноманітність робочих місць і розширення можливостей.",
        link: "#"
    },
    {
        img: "img/swiper4.png",
        category: "Подорожі",
        date: "13 березня 2023",
        title: "Хто найкращий співак у чарті? Знаєте його?",
        description: "Чарт Billboard, який рейтингує найвидатніших виконавців усіх часів на основі їх виступів у щотижневому Billboard Hot 100.",
        link: "#"
    },
    {
        img: "img/swiper5.png",
        category: "Розробка",
        date: "11 березня 2023",
        title: "Як почати експортно-імпортний бізнес з дому?",
        description: "Використовуйте низькі плоди, щоб визначити додаткову активність для бета-тестування. Подолайте цифровий розрив за допомогою додаткових кліків.",
        link: "#"
    },
    {
        img: "img/swiper6.png",
        category: "Спорт",
        date: "10 березня 2023",
        title: "Приготуйте кілька напоїв із шоколаду, шоколаду та молока",
        description: "Органічно розвивайте цілісне бачення світу проривних інновацій через різноманітність робочих місць і розширення можливостей.",
        link: "#"
    },
    {
        img: "img/card1.png",
        category: "Подорожі",
        date: "13 березня 2023",
        title: "8 правил морської подорожі, які потрібно знати",
        description: "Подорож морем має багато переваг. Деякі з переваг транспортування товарів морем включають: ви можете відправляти великі обсяги за ціною.",
        link: "#"
    },
    {
        img: "img/card2.png",
        category: "Розробка",
        date: "11 березня 2023",
        title: "Як створити потужне портфоліо та отримати роботу в UI/UX",
        description: "Використовуйте низькі плоди, щоб визначити додаткову активність для бета-тестування. Подолайте цифровий розрив за допомогою додаткових кліків.",
        link: "#"
    },
    {
        img: "img/card3.png",
        category: "Спорт",
        date: "10 березня 2023",
        title: "Як стати професійним футболістом у 2023 році",
        description: "Органічно розвивайте цілісне бачення світу проривних інновацій через різноманітність робочих місць і розширення можливостей.",
        link: "#"
    }
];
const postsContainer = document.getElementById("sub-posts");
blogs.forEach(blog => {
    const post = document.createElement("div");
    post.classList.add("sub-post");
    post.innerHTML = `
        <img src="${blog.img}" alt="${blog.title}">
        <div class="sub-post-content">
            <span>${blog.category}<small>${blog.date}</small></span>
            <h3>${blog.title}</h3>
            <p>${blog.description}</p>
            <a href="${blog.link}">Детальніше...</a>
        </div>
    `;
    postsContainer.appendChild(post);
});
