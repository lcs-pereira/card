/* MODELO TESTE — iniciar mostrando o holograma no centro.
 * Este código só posiciona as barras de rolagem UMA VEZ ao abrir a página.
 * Depois, o visitante tem total liberdade para rolar em qualquer direção.
 */
const scrollArea = document.querySelector('.scroll-area');

if (scrollArea) {
  window.addEventListener('load', () => {
    // Não move a posição restaurada ao voltar pelo histórico do navegador.
    if (performance.getEntriesByType('navigation')[0]?.type === 'back_forward') return;

    scrollArea.scrollLeft = Math.max(0, (scrollArea.scrollWidth - scrollArea.clientWidth) / 2);
    scrollArea.scrollTop = Math.max(0, (scrollArea.scrollHeight - scrollArea.clientHeight) / 2);
  }, { once: true });
}

document.querySelectorAll('model-viewer').forEach((viewer) => {
  viewer.addEventListener('error', () => {
    console.warn('Não foi possível carregar o modelo 3D. Confira o caminho do .glb e use GitHub Pages ou um servidor local (não file://).');
  });
});
