const InputHandler = ({ target }, prevState, setState) => {
  const { name, value } = target;
  setState({ ...prevState, [name]: value });
};

export default InputHandler;
