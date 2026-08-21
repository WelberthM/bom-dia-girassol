document.addEventListener('DOMContentLoaded', () => {
    const sunflowerWrapper = document.getElementById('sunflower-wrapper');
    const messageContainer = document.getElementById('message-container');
    
    // Pequeno delay para garantir que o CSS carregou e criar um efeito de entrada
    setTimeout(() => {
        sunflowerWrapper.classList.add('show');
        messageContainer.classList.add('show');
    }, 300);

    // Criar o girassol via JS
    createSunflower();

    // Criar bolhas de luz no fundo
    createLightBubbles();
});

function createSunflower() {
    const petalsContainer = document.getElementById('petals');
    if (!petalsContainer) return;
    
    // Camada 1 (fundo)
    for (let i = 0; i < 24; i++) {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        const angle = (i * 15) + (Math.random() * 4 - 2); 
        const scale = 0.9 + Math.random() * 0.15;
        const delay = Math.random() * 1.2;
        
        petal.style.setProperty('--angle', `${angle}deg`);
        petal.style.setProperty('--scale', scale);
        petal.style.setProperty('--delay', `${delay}s`);
        petalsContainer.appendChild(petal);
    }
    
    // Camada 2 (meio)
    for (let i = 0; i < 24; i++) {
        const petal = document.createElement('div');
        petal.classList.add('petal', 'layer-2');
        const angle = (i * 15 + 7.5) + (Math.random() * 4 - 2);
        const scale = 0.85 + Math.random() * 0.15;
        const delay = 0.2 + Math.random() * 1.2;
        
        petal.style.setProperty('--angle', `${angle}deg`);
        petal.style.setProperty('--scale', scale);
        petal.style.setProperty('--delay', `${delay}s`);
        petalsContainer.appendChild(petal);
    }
    
    // Camada 3 (frente)
    for (let i = 0; i < 18; i++) {
        const petal = document.createElement('div');
        petal.classList.add('petal', 'layer-3');
        const angle = (i * 20) + (Math.random() * 4 - 2);
        const scale = 0.75 + Math.random() * 0.15;
        const delay = 0.4 + Math.random() * 1.0;
        
        petal.style.setProperty('--angle', `${angle}deg`);
        petal.style.setProperty('--scale', scale);
        petal.style.setProperty('--delay', `${delay}s`);
        petalsContainer.appendChild(petal);
    }
}

function createLightBubbles() {
    const bubbleCount = 15;
    const body = document.body;
    
    for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('light-bubble');
        
        // Propriedades aleatórias
        const size = Math.random() * 60 + 20; // 20px a 80px
        const left = Math.random() * 100; // 0% a 100%
        const top = Math.random() * 100; // 0% a 100%
        const delay = Math.random() * 5; // 0s a 5s
        const duration = Math.random() * 10 + 5; // 5s a 15s
        
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${left}%`;
        bubble.style.top = `${top}%`;
        bubble.style.animationDelay = `${delay}s`;
        bubble.style.animationDuration = `${duration}s`;
        
        body.appendChild(bubble);
    }
}
