document.addEventListener('DOMContentLoaded', () => {
    const sunflowerWrapper = document.getElementById('sunflower-wrapper');
    const messageContainer = document.getElementById('message-container');
    
    // Pequeno delay para garantir que o CSS carregou e criar um efeito de entrada
    setTimeout(() => {
        sunflowerWrapper.classList.add('show');
        messageContainer.classList.add('show');
        
        // Efeito 1: Textos aparecendo aos poucos
        const texts = messageContainer.querySelectorAll('.title, .subtitle, .subtitle-2, .heart, .media-container');
        texts.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(15px)';
            el.style.transition = 'all 1s ease';
            
            // O "Te adoro!" e o coração demoram mais (suspense)
            let delay = 500 + (index * 1200); 
            if (el.classList.contains('subtitle-2')) delay += 1000;
            
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, delay);
        });
    }, 300);

    // Efeito 2: Coração interativo (Mensagem escondida)
    const mainHeart = document.getElementById('interactive-heart');
    const hiddenPs = document.getElementById('hidden-ps');
    const hintPs = document.getElementById('dont-click-hint');
    if (mainHeart && hiddenPs) {
        mainHeart.style.cursor = 'pointer';
        mainHeart.addEventListener('click', () => {
            hiddenPs.classList.toggle('show-ps');
            if (hintPs) hintPs.classList.add('hide-hint');
            
            // Lança coraçõezinhos extras ao clicar no coração principal
            for(let i=0; i<5; i++) {
                spawnFloatingElement(mainHeart.getBoundingClientRect().left + 20, mainHeart.getBoundingClientRect().top, '❤️');
            }
        });
    }

    // Removido o efeito de estrela ao clicar na tela conforme solicitado

    // Criar o girassol via JS
    createSunflower();

    // Criar bolhas de luz no fundo
    createLightBubbles();
});

function spawnFloatingElement(x, y, symbol) {
    const element = document.createElement('div');
    element.classList.add('floating-heart-anim');
    element.innerHTML = symbol;
    
    // Pequena variação para não saírem todos do mesmo pixel
    const offsetX = (Math.random() - 0.5) * 40;
    element.style.left = `${x + offsetX}px`;
    element.style.top = `${y}px`;
    
    document.body.appendChild(element);
    
    setTimeout(() => {
        element.remove();
    }, 2000);
}

function createSunflower() {
    const petalsContainer = document.getElementById('petals');
    if (!petalsContainer) return;
    
    // Camada 1 (fundo)
    for (let i = 0; i < 16; i++) {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        const angle = (i * 22.5) + (Math.random() * 4 - 2); 
        const scale = 0.9 + Math.random() * 0.15;
        const delay = Math.random() * 1.2;
        
        petal.style.setProperty('--angle', `${angle}deg`);
        petal.style.setProperty('--scale', scale);
        petal.style.setProperty('--delay', `${delay}s`);
        petalsContainer.appendChild(petal);
    }
    
    // Camada 2 (meio)
    for (let i = 0; i < 16; i++) {
        const petal = document.createElement('div');
        petal.classList.add('petal', 'layer-2');
        const angle = (i * 22.5 + 11.25) + (Math.random() * 4 - 2);
        const scale = 0.85 + Math.random() * 0.15;
        const delay = 0.2 + Math.random() * 1.2;
        
        petal.style.setProperty('--angle', `${angle}deg`);
        petal.style.setProperty('--scale', scale);
        petal.style.setProperty('--delay', `${delay}s`);
        petalsContainer.appendChild(petal);
    }
    
    // Camada 3 (frente)
    for (let i = 0; i < 12; i++) {
        const petal = document.createElement('div');
        petal.classList.add('petal', 'layer-3');
        const angle = (i * 30) + (Math.random() * 4 - 2);
        const scale = 0.75 + Math.random() * 0.15;
        const delay = 0.4 + Math.random() * 1.0;
        
        petal.style.setProperty('--angle', `${angle}deg`);
        petal.style.setProperty('--scale', scale);
        petal.style.setProperty('--delay', `${delay}s`);
        petalsContainer.appendChild(petal);
    }
}

function createLightBubbles() {
    const bubbleCount = 5; // Reduzido para melhorar a performance
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
