import Input from '@mui/material/Input';

const InputBox = (prop) => {
  const { inputId, inputText, inputType, inputColor, inputFunc } = prop;

  return (
    <Input
      id={inputId}
      color={inputColor}
      name={inputType}
      placeholder={inputText}
      type={inputType}
      onChange={({ target: { value } }) => inputFunc(value)}
    />
  );
};

export default InputBox;
