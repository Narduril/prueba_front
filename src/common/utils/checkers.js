export const isString = (value) => {
  return typeof value === 'string';
};

export const objectLength = (obj) => {
  return Object.keys(obj).length;
};

export const diffHours = (date1, date2) => {
  let diff = (Date.parse(date1) - date2.getTime()) / 1000;
  diff /= 60 * 60;
  return Math.abs(Math.round(diff));
};
