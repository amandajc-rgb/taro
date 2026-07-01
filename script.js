// Função para mostrar/esconder os detalhes do conceito ao clicar
function toggleDetails(id) {
    const element = document.getElementById(id);
   
    // Verifica se já está ativo
    if (element.classList.contains('active')) {
        element.classList.remove('active');
    } else {
        element.classList.add('active');
    }
}
