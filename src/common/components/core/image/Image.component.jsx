import { Img } from './Image.styled';

const Image = ({ img, text }) => {
  return <Img src={img} alt={text} />;
};

export default Image;
