/**
 * Hace un scroll suave y espera hasta que termine.
 * @param {number} targetY - La posición vertical a la que hacer scroll
 * @param {number} [tolerance=2] - Tolerancia en píxeles para considerar que llegó
 * @returns {Promise<void>} - Se resuelve cuando el scroll termina
 */
export async function scrollToSmooth(targetY: number, tolerance = 2): Promise<void> {
  return new Promise((resolve: (value: undefined) => void) => {
    // Inicia el scroll suave
    window.scrollTo({ top: targetY, behavior: 'smooth' });

    let lastY = window.scrollY;

    function checkScroll() {
      // Si estamos dentro de la tolerancia o no se movió más
      if (Math.abs(window.scrollY - targetY) <= tolerance) {
        resolve(undefined); // Scroll terminado
      } else {
        lastY = window.scrollY;
        requestAnimationFrame(checkScroll); // Revisa en el próximo frame
      }
    }

    requestAnimationFrame(checkScroll);
  });
}
