/** Limpieza del state */
export const clearState = (func) => {
  func();
  localStorage.setItem('time', new Date());
};
