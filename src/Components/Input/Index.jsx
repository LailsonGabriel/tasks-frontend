function InputReusable({ type, onChange, value, name }) {
  return <input name={name} type={type} value={value} onChange={onChange} />;
}

export default InputReusable;
