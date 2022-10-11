/** Reemplazo de espacios en blanco (urls por ejemplo) */
export const replaceWhiteSpace = (toReplace) => {
  return toReplace.replace(/\s/g, '-').toLowerCase();
};
