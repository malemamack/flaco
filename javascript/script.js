const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');

// if (bar) {
//     bar.addEventListener('click', () => {
//         nav.classList.add('active');
//     })
// }

function toggleMenu(){
    const bar = document.getElementById('bar');
    nav.classList.toggle('active');
}


function toggleMenu() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('open');
}

