
const http = require('http');

const styles = `
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background: #f7f8f0;
    color: #263b30;
    line-height: 1.6;
}

header {
    background: #183d32;
    color: white;
    padding: 20px 8%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
}

.logo {
    font-size: 25px;
    font-weight: bold;
    letter-spacing: 1px;
}

nav {
    display: flex;
    gap: 25px;
    flex-wrap: wrap;
}

nav a {
    color: white;
    text-decoration: none;
    font-weight: bold;
}

nav a:hover {
    color: #c5e3b5;
}

.hero {
    min-height: 430px;
    padding: 100px 8%;
    background: linear-gradient(120deg, #dce9d2, #f5e9d4);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.hero h1 {
    font-size: 48px;
    color: #183d32;
    margin-bottom: 15px;
}

.hero p {
    font-size: 19px;
    max-width: 650px;
    margin-bottom: 25px;
}

.button {
    display: inline-block;
    background: #347653;
    color: white;
    padding: 13px 28px;
    border-radius: 30px;
    text-decoration: none;
    font-weight: bold;
    transition: 0.3s;
}

.button:hover {
    background: #183d32;
    transform: translateY(-3px);
}

.section {
    padding: 65px 8%;
    text-align: center;
}

.section h2 {
    font-size: 32px;
    color: #183d32;
    margin-bottom: 15px;
}

.section-intro {
    margin-bottom: 35px;
    color: #64746a;
}

.cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 25px;
    margin-top: 30px;
}

.card {
    background: white;
    padding: 30px 22px;
    border-radius: 15px;
    box-shadow: 0 5px 20px #00000010;
    transition: 0.3s;
}

.card:hover {
    transform: translateY(-7px);
    box-shadow: 0 10px 25px #00000018;
}

.card h3 {
    color: #347653;
    margin-bottom: 12px;
    font-size: 21px;
}

.icon {
    font-size: 42px;
    margin-bottom: 12px;
}

.about-box {
    max-width: 850px;
    margin: auto;
    background: white;
    padding: 40px;
    border-radius: 18px;
    box-shadow: 0 5px 20px #00000010;
}

.contact-box {
    max-width: 650px;
    margin: auto;
    background: white;
    padding: 35px;
    border-radius: 15px;
    box-shadow: 0 5px 20px #00000010;
}

.contact-box p {
    margin: 15px;
}

footer {
    background: #183d32;
    color: white;
    text-align: center;
    padding: 25px;
    margin-top: 40px;
}

footer p {
    margin: 5px;
}

@media (max-width: 600px) {
    header {
        justify-content: center;
        text-align: center;
    }

    nav {
        justify-content: center;
        gap: 15px;
    }

    .hero {
        padding: 70px 6%;
    }

    .hero h1 {
        font-size: 34px;
    }

    .section {
        padding: 45px 6%;
    }

    .about-box, .contact-box {
        padding: 22px;
    }
}
`;

function createPage(title, content) {
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport"
              content="width=device-width, initial-scale=1.0">
        <title>${title} | Serenity Yoga Studio</title>
        <style>${styles}</style>
    </head>

    <body>
        <header>
            <div class="logo">🧘 Serenity Yoga</div>

            <nav>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/classes">Classes</a>
                <a href="/contact">Contact</a>
            </nav>
        </header>

        ${content}

        <footer>
            <h3>Serenity Yoga Studio</h3>
            <p>Find your balance. Discover your peace.</p>
            <p>© 2026 Serenity Yoga Studio. All Rights Reserved.</p>
        </footer>
    </body>
    </html>
    `;
}

const server = http.createServer((req, res) => {

    const pathname = new URL(req.url, 'http://localhost:3000').pathname;

    let content = '';
    let title = 'Yoga Studio';
    let statusCode = 200;

    if (pathname === '/') {
        title = 'Home';

        content = `
        <section class="hero">
            <h1>Find Your Inner Peace</h1>
            <p>
                Discover the power of yoga.
                Relax your mind, strengthen your body
                and create a healthier lifestyle.
            </p>
            <a href="/classes" class="button">
                Explore Our Classes
            </a>
        </section>

        <section class="section">
            <h2>Welcome to Serenity Yoga</h2>
            <p class="section-intro">
                Your journey towards health and happiness starts here.
            </p>

            <div class="cards">
                <div class="card">
                    <div class="icon">🧘</div>
                    <h3>Mindfulness</h3>
                    <p>Find calmness and improve your mental well-being.</p>
                </div>

                <div class="card">
                    <div class="icon">🌿</div>
                    <h3>Healthy Living</h3>
                    <p>Build a healthy lifestyle through regular practice.</p>
                </div>

                <div class="card">
                    <div class="icon">☀️</div>
                    <h3>Inner Peace</h3>
                    <p>Bring balance and positivity into your everyday life.</p>
                </div>
            </div>
        </section>
        `;
    }

    else if (pathname === '/about') {
        title = 'About Us';

        content = `
        <section class="section">
            <div class="about-box">
                <h2>About Our Studio</h2>

                <p>
                    Serenity Yoga Studio is a peaceful space
                    dedicated to physical fitness, mental wellness
                    and spiritual growth.
                </p>

                <br>

                <p>
                    Our goal is to help everyone discover the
                    benefits of yoga through simple practices,
                    guided meditation and experienced instructors.
                </p>

                <br>

                <h3>Our Mission</h3>
                <p>
                    To create a healthier and happier community
                    through yoga and mindfulness.
                </p>
            </div>
        </section>
        `;
    }

    else if (pathname === '/classes') {
        title = 'Our Classes';

        content = `
        <section class="section">
            <h2>Explore Our Yoga Classes</h2>
            <p class="section-intro">
                Choose a practice that suits your lifestyle.
            </p>

            <div class="cards">

                <div class="card">
                    <div class="icon">🌸</div>
                    <h3>Hatha Yoga</h3>
                    <p>
                        Improve flexibility, posture
                        and physical balance.
                    </p>
                </div>

                <div class="card">
                    <div class="icon">🌿</div>
                    <h3>Vinyasa Yoga</h3>
                    <p>
                        Connect breathing with flowing
                        movements.
                    </p>
                </div>

                <div class="card">
                    <div class="icon">💪</div>
                    <h3>Power Yoga</h3>
                    <p>
                        Build strength, stamina
                        and body flexibility.
                    </p>
                </div>

                <div class="card">
                    <div class="icon">🕊️</div>
                    <h3>Meditation</h3>
                    <p>
                        Relax your mind and improve
                        concentration.
                    </p>
                </div>

            </div>
        </section>
        `;
    }

    else if (pathname === '/contact') {
        title = 'Contact Us';

        content = `
        <section class="section">
            <div class="contact-box">
                <h2>Contact Us</h2>
                <p>We would love to hear from you!</p>

                <p>📍 Location: Serenity Yoga Studio</p>
                <p>📧 Email: serenityyoga@example.com</p>
                <p>📞 Phone: +91 9876543210</p>

                <a href="/" class="button">Back to Home</a>
            </div>
        </section>
        `;
    }

    else {
        statusCode = 404;
        title = 'Page Not Found';

        content = `
        <section class="hero">
            <h1>404 - Page Not Found</h1>
            <p>Sorry! The page you are looking for does not exist.</p>
            <a href="/" class="button">Return Home</a>
        </section>
        `;
    }

    res.writeHead(statusCode, {
        'Content-Type': 'text/html; charset=UTF-8'
    });

    res.end(createPage(title, content));

    console.log(req.method + ' ' + pathname + ' - ' + statusCode);
});

server.listen(3000, () => {
    console.log('Yoga Studio Server running at http://localhost:3000');
});
