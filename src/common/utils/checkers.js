/** Chequeador de strings */
export const isString = (value) => {
  return typeof value === 'string';
};

/** Chequeador tamaño objeto */
export const objectLength = (obj) => {
  return Object.keys(obj).length;
};

/** Chequeador diferencia horas */
export const diffHours = (date1, date2) => {
  let diff = (Date.parse(date1) - date2.getTime()) / 1000;
  diff /= 60 * 60;
  return Math.abs(Math.round(diff));
};
