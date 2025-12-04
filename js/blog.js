document.addEventListener('DOMContentLoaded', fetchPosts);

// Função para buscar e exibir os posts
async function fetchPosts() {
    const postsContainer = document.getElementById('postsContainer');
    const loadingMessage = document.getElementById('loadingMessage');

    if (loadingMessage) {
        loadingMessage.remove();
    }

    try {
        const response = await fetch('./js/posts.json');

        if (!response.ok) {
            throw new Error(`Erro ao buscar posts: ${response.statusText}`);
        }

        const posts = await response.json();

        postsContainer.innerHTML = '';

        if (posts.length === 0) {
            postsContainer.innerHTML = '<p class="col-span-full text-center text-gray-500">Nenhum post encontrado.</p>';
            return;
        }

        posts.forEach(post => {
            const postCard = createPostCard(post);
            postsContainer.appendChild(postCard);
        });

    } catch (error) {
        console.error("Falha ao carregar os posts:", error);
        postsContainer.innerHTML = `<p class="col-span-full text-center text-red-500">Erro ao carregar o blog: ${error.message}</p>`;
    }
}

function createPostCard(post) {
    const card = document.createElement('div');

    card.className = 'bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden';

    // Formatação da Data
    const dataFormatada = new Date(post.data).toLocaleDateString('pt-BR', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });

    // Estrutura interna do Card
    card.innerHTML = `
        <a href="./posts-details/${post.link_post || '#'}" class="block">
            <img 
                src="${post.imagem_principal}" 
                alt="Imagem de destaque para ${post.titulo}" 
                class="w-full h-48 object-cover"
            >
        </a>
        <div class="p-6">
            <span class="inline-block ${post.color_tag} text-white text-xs font-semibold px-3 py-1 rounded-full mb-3 uppercase">
                ${post.categoria}
            </span>
            <h2 class="text-xl font-bold text-gray-900 mb-2 hover:text-primary transition duration-300">
                <a href="./posts-details/${post.link_post || '#'}">${post.titulo}</a>
            </h2>
            <p class="text-gray-600 mb-4 text-sm">
                ${post.resumo}
            </p>
            
            <div class="flex items-center justify-between text-sm text-gray-500 border-t pt-4">
                <div class="flex items-center space-x-2">
                    <img src="assets/icons/clock.svg" alt="Ícone de relógio" class="w-4 h-4 icons-gray-500">
                    <span>${post.tempo_leitura_min} min de leitura</span>
                </div>
                <div class="flex items-center space-x-2">
                    <img src="assets/icons/calendar.svg" alt="Ícone de calendário" class="w-4 h-4 icons-gray-500">
                    <span>${dataFormatada}</span>
                </div>
            </div>
        </div>
    `;

    return card;
}