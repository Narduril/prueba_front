const minSize = {
  mobile: '576px',
  tablets: '768px',
  laptops: '992px',
  largeDevices: '1200px'
};

const maxSize = {
  mobile: '575.98px',
  tablets: '767.98px',
  laptops: '991.98px',
  largeDevices: '1199.98px'
};

export const minDevice = {
  mobile: `(min-width: ${minSize.mobile})`, // Small devices (landscape phones, 576px and up)
  tablets: `(min-width: ${minSize.tablets})`, // Medium devices (tablets, 768px and up)
  laptops: `(min-width: ${minSize.laptops})`, // Large devices (desktops, 992px and up)
  largeDevices: `(min-width: ${minSize.largeDevices})` // Extra large devices (large desktops, 1200px and up)
};

export const maxDevice = {
  mobile: `(max-width: ${maxSize.mobile})`, // Small devices (landscape phones, less than 567px)
  tablets: `(max-width: ${maxSize.tablets})`, // Medium devices (tablets, less than 768px)
  laptops: `(max-width: ${maxSize.laptops})`, // Large devices (desktops, less than 992px)
  largeDevices: `(max-width: ${maxSize.largeDevices})` // Extra large devices (large desktops, less than 1200)
};
