import { Img } from './Image.styled';

/**
 * Este componente renderiza una imagen.
 * @param {img, text}
 * @returns Img
 */
const Image = ({ img, text }) => {
  return <Img src={img} alt={text} />;
};

export default Image;
