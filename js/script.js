// Viewport Height to Pixels
const container = document.getElementById('container');

function setHeight() {
    container.style.height = window.innerHeight + 'px';    
}

function resetHeight() {
    container.style.height = null;    
}

// Navigation menu
const navSlide = () => {
    const burger = document.querySelector('.burger-menu');
    const nav = document.querySelector('.nav-menu');

    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
    });
}

navSlide();

// About modal
const aboutBtn = document.getElementById('about-btn');
const aboutModal = document.getElementById('about-modal');
const aboutClose = document.getElementById('about-close');

aboutBtn.onclick = function() {
    aboutModal.classList.add('show');
    aboutBtn.classList.add('active');
}

aboutClose.onclick = function() {
    aboutModal.classList.remove('show');
    aboutBtn.classList.remove('active');
}

// Projects modal
const projectsBtn = document.getElementById('projects-btn');
const projectsModal = document.getElementById('projects-modal');
const projectsClose = document.getElementById('projects-close');

projectsBtn.onclick = function() {
    projectsModal.classList.add('show');
    projectsBtn.classList.add('active');
    modalPage_1();
}

projectsClose.onclick = function() {
    projectsModal.classList.remove('show');
    projectsBtn.classList.remove('active');
}

// Projects Modal Pages
const thumbnail_1 = document.getElementById('thumbnail-1');
const thumbnail_2 = document.getElementById('thumbnail-2');
const thumbnail_3 = document.getElementById('thumbnail-3');
const thumbnail_4 = document.getElementById('thumbnail-4');

const title_1 = document.getElementById('title-1');
const title_2 = document.getElementById('title-2');
const title_3 = document.getElementById('title-3');
const title_4 = document.getElementById('title-4');

const link_1 = document.getElementById('link-1');
const link_2 = document.getElementById('link-2');
const link_3 = document.getElementById('link-3');
const link_4 = document.getElementById('link-4');

const code_1 = document.getElementById('code-1');
const code_2 = document.getElementById('code-2');
const code_3 = document.getElementById('code-3');
const code_4 = document.getElementById('code-4');

const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const pageNum = document.getElementById('number');

function modalPage_1() {
    // PAGE 1 - Project 1: Kartoon Fool
    title_1.innerText = 'Kartoon Fool';
    thumbnail_1.style.backgroundImage = "url('../img/thumbnails/kartoon-fool.png')";
    link_1.href = 'https://kartoon-fool.netlify.app';
    code_1.href = 'https://github.com/kaloyan-kirilov/kartoon-fool';
    link_1.target = '_blank';
    code_1.target = '_blank';

    // PAGE 1 - Project 2: Calculator
    title_2.innerText = 'Calculator';
    thumbnail_2.style.backgroundImage = "url('../img/thumbnails/kal-3000.png')";
    link_2.href = 'https://kaloyan-kirilov.github.io/calculator';
    code_2.href = 'https://github.com/kaloyan-kirilov/calculator';
    link_2.target = '_blank';
    code_2.target = '_blank';

    // PAGE 1 - Project 3: Card Game
    title_3.innerText = 'Card Game';
    thumbnail_3.style.backgroundImage = "url('../img/thumbnails/card-game.png')";
    link_3.href = 'https://kaloyan-kirilov.github.io/card-game';
    code_3.href = 'https://github.com/kaloyan-kirilov/card-game';
    link_3.target = '_blank';
    code_3.target = '_blank';

    // PAGE 1 - Project 4: Weather App
    title_4.innerText = 'Weather App';
    thumbnail_4.style.backgroundImage = "url('../img/thumbnails/weather-app.png')";
    link_4.href = 'https://kaloyan-kirilov.github.io/weather-app';
    code_4.href = 'https://github.com/kaloyan-kirilov/weather-app';
    link_4.target = '_blank';
    code_4.target = '_blank';

    prevBtn.classList.add('inactive-btn');

    pageNum.innerText = '1';

    nextBtn.classList.remove('inactive-btn');
    nextBtn.onclick = modalPage_2;
}

function modalPage_2() {
        // PAGE 2 - Project 5: React QuotePad
        title_1.innerText = 'QuotePad';
        thumbnail_1.style.backgroundImage = "url('../img/thumbnails/react-quotepad.png')";
        link_1.href = 'https://kaloyan-kirilov.github.io/react-quotepad';
        code_1.href = 'https://github.com/kaloyan-kirilov/react-quotepad';
        link_1.target = '_blank';
        code_1.target = '_blank';
    
        // PAGE 2 - Project 6: React Chat App
        title_2.innerText = 'Chat App';
        thumbnail_2.style.backgroundImage = "url('../img/thumbnails/chat-app.png')";
        link_2.href = 'https://kaloyan-kirilov.github.io/chat-app';
        code_2.href = 'https://github.com/kaloyan-kirilov/chat-app';
        link_2.target = '_blank';
        code_2.target = '_blank';
    
        // PAGE 2 - Project 7: LA Portal
        title_3.innerText = 'LA Portal';
        thumbnail_3.style.backgroundImage = "url('../img/thumbnails/los-angeles.png')";
        link_3.href = 'https://kaloyan-kirilov.github.io/los-angeles';
        code_3.href = 'https://github.com/kaloyan-kirilov/los-angeles';
        link_3.target = '_blank';
        code_3.target = '_blank';
    
        // PAGE 2 - Project 8: null
        title_4.innerText = 'null :P';
        thumbnail_4.style.backgroundImage = null;
        link_4.href = 'javascript:void(0);';
        code_4.href = 'javascript:void(0);';      
        link_4.target = '_self';
        code_4.target = '_self';
    
        prevBtn.classList.remove('inactive-btn');
        prevBtn.onclick = modalPage_1;

        pageNum.innerText = '2';
    
        nextBtn.classList.add('inactive-btn');
}

// Contact modal
const contactBtn = document.getElementById('contact-btn');
const contactModal = document.getElementById('contact-modal');
const contactClose = document.getElementById('contact-close');

contactBtn.onclick = function() {
    contactModal.classList.add('show');
    contactBtn.classList.add('active');
    setHeight();
}

contactClose.onclick = function() {
    contactModal.classList.remove('show');
    contactBtn.classList.remove('active');
    resetHeight();
}

// Contact form with EmailJS
function sendMessage(e) {
    e.preventDefault();

    const message = {
        name: document.getElementById('input-name').value,
        email: document.getElementById('input-email').value,
        message: document.getElementById('input-message').value
    }

    emailjs
        .send("@gmail", "kk_template", message)
        .then(() => {messageAlert("MESSAGE SENT", "img/tick-icon.svg", null)}, (error) => {messageAlert("MESSAGE FAILED", "img/x-icon.svg", error)});

    function messageAlert(text, image, error) {
        document.getElementById('send-btn').style.display = 'none';
        document.getElementById('message-alert').style.display = 'flex';
        document.getElementById('alert-icon').src = image;
        document.getElementById('alert-text').innerHTML = text;
        document.getElementById('contact-form').reset();

        if (error == null) {
            document.getElementById('message-alert').style.color = "#7dba3a";
            console.log("Message sent successfully!");
        } else {
            document.getElementById('message-alert').style.color = "#c44536";
            console.log("Message failed to send:", error.text);
        }
        

        setTimeout(function() {
            document.getElementById('message-alert').style.display = 'none';
            document.getElementById('send-btn').style.display = 'block';
        }, 4500);
    }
}

document.getElementById('contact-form').addEventListener('submit', sendMessage);
