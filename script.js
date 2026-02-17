document.addEventListener('DOMContentLoaded', () => {
    // Product Data
    const products = [
        {
            id: 1,
            name: "The Classic Glam",
            image: "image/1.jpg",
            description: "Elevate your style without the salon wait⏳ Ready-to-wear nails, made for you🌸"
        },
        {
            id: 2,
            name: "Instant Chic",
            image: "image/2.jpg",
            description: "Why wait hours at the salon when glam is just a press away?😉"
        },
        {
            id: 3,
            name: "Custom Bliss",
            image: "image/3.jpg",
            description: "Glam nails in minutes, zero salon stress😉 DM to order your custom set now!💌"
        },
        {
            id: 4,
            name: "Fierce Leopard",
            image: "image/4.jpg",
            description: "Leopard spots, floral blooms & a touch of sparkle — because your nails deserve to be as fierce and fabulous as you are💖💅"
        },
        {
            id: 5,
            name: "Blossom Shine",
            image: "image/5.jpg",
            description: "Shimmer, shine, and a touch of blossom✨🌸 Who said salon glam can’t come home? DM us to get yours😉"
        },
        {
            id: 6,
            name: "Jinx Inspired",
            image: "image/6.jpg",
            description: "Customized Jinx Nails – Arcane Inspired 💙💥 “Chaos, but make it cute”"
        },
        {
            id: 7,
            name: "Mocha Gold",
            image: "image/7.jpg",
            description: "Neutral but never basic 🤎✨ Dripping in mocha tones & gold details. Press-ons for girls who like their nails extra & expensive."
        },
        {
            id: 8,
            name: "Blush Dreams",
            image: "image/8.jpg",
            description: "Blush pink, glossy dreams 🫧 Soft chrome glow with tiny polka dots. Clean, cute, and quietly eye-catching."
        },
        {
            id: 9,
            name: "Monogram Love",
            image: "image/9.jpg",
            description: "Love looks better with a monogram- Get his initial on your nails girlies😉💅🏻"
        },
        {
            id: 10,
            name: "Alifa Musee",
            image: "image/10.jpg",
            description: "ALIFA MUSEE🍋🍸"
        }
    ];

    // Render Products
    const productsContainer = document.getElementById('products-container');

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <div>
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-desc">${product.description}</p>
                </div>
                <a href="https://www.instagram.com/kails_beauty/" target="_blank" class="cta-button" style="padding: 0.5rem 1rem; font-size: 0.8rem; width: fit-content; text-decoration: none; display: inline-block;">DM to Order</a>
            </div>
        `;

        productsContainer.appendChild(productCard);
    });

    // Mobile Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('toggle');
    });

    // Close menu when link is clicked
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('toggle');
        });
    });

    // Sticky Header Logic (Optional: add shadow on scroll)
    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    });

    // Smooth Scroll Animation for links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
