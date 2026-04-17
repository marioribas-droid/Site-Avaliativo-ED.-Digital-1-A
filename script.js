// --- DADOS DINÂMICOS (Simulando um banco de dados) ---
const beeData = [
    { title: "Abelha Apis", desc: "A principal polinizadora de culturas agrícolas no mundo." },
    { title: "Abelha Jataí", desc: "Nativa do Brasil, não possui ferrão e produz mel medicinal." },
    { title: "Mamangaba", desc: "Essencial para a polinização do maracujá e tomate." }
];

const helpSteps = [
    { title: "Plante Flores Nativas", content: "Abelhas precisam de néctar e pólen de fontes locais." },
    { title: "Evite Pesticidas", content: "Produtos químicos são a maior causa de morte de colmeias." },
    { title: "Disponibilize Água", content: "Pequenos bebedouros com pedras ajudam na hidratação segura." }
];

// --- RENDERIZAÇÃO ---
function init() {
    const grid = document.getElementById('bee-grid');
    const accordion = document.getElementById('accordion-container');

    // Renderizar Cards
    beeData.forEach(item => {
        grid.innerHTML += `
            <article class="card">
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
            </article>
        `;
    });

    // Renderizar Acordeão
    helpSteps.forEach((step, index) => {
        accordion.innerHTML += `
            <div class="accordion-item">
                <button class="accordion-header" onclick="toggleAccordion(${index})">
                    ${step.title}
                </button>
                <div class="accordion-content" id="content-${index}">
                    <p>${step.content}</p>
                </div>
            </div>
        `;
    });
}

// --- FUNCIONALIDADES DE ACESSIBILIDADE ---
let currentFontSize = 16;

function changeFontSize(action) {
    const body = document.body;
    action === 'increase' ? currentFontSize += 2 : currentFontSize -= 2;
    body.style.fontSize = currentFontSize + 'px';
}

function toggleContrast() {
    document.body.classList.toggle('high-contrast');
}

// --- COMPONENTES UI ---
function toggleAccordion(index) {
    const contents = document.querySelectorAll('.accordion-content');
    contents[index].classList.toggle('active');
}

// --- SCROLL REVEAL LOGIC ---
function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach(el => {
        let windowHeight = window.innerHeight;
        let elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", reveal);
window.onload = () => {
    init();
    reveal();
};
