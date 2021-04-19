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
}

projectsClose.onclick = function() {
    projectsModal.classList.remove('show');
    projectsBtn.classList.remove('active');
}

// Contact modal
const contactBtn = document.getElementById('contact-btn');
const contactModal = document.getElementById('contact-modal');
const contactClose = document.getElementById('contact-close');

contactBtn.onclick = function() {
    contactModal.classList.add('show');
    contactBtn.classList.add('active');
}

contactClose.onclick = function() {
    contactModal.classList.remove('show');
    contactBtn.classList.remove('active');
}

// Contact form with Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBFSfHT1n3KV6A43W_07PH8DttDXCvKJy4",
    authDomain: "contact-form-bc80f.firebaseapp.com",
    projectId: "contact-form-bc80f",
    storageBucket: "contact-form-bc80f.appspot.com",
    messagingSenderId: "828372448685",
    appId: "1:828372448685:web:0dd2017c079381f0e79d24"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var msgCollection = firebase.database().ref('messages');

document.getElementById('contact-form').addEventListener('submit', sendMessage);

function sendMessage(e) {
    e.preventDefault();

    var name = getInputValue('input-name');
    var email = getInputValue('input-email');
    var message = getInputValue('input-message');   

    saveMessage(name, email, message);

    document.getElementById('send-btn').style.display = 'none';
    document.getElementById('sent-alert').style.display = 'flex';
    document.getElementById('contact-form').reset();

    setTimeout(function() {
        document.getElementById('sent-alert').style.display = 'none';
        document.getElementById('send-btn').style.display = 'block';
    },5000);
}

function getInputValue(id) {
    return document.getElementById(id).value;
}

function saveMessage(name, email, message) {
    var newMessageRef = msgCollection.push();
    newMessageRef.set({
        name: name,
        email: email,
        message: message
    });
}