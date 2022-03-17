function InputReusable({ type, onChange, value, name, place }) {
  return (
    <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={place}
    />
  );
}

export default InputReusable;
