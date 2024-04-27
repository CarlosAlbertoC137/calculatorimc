import "./Button.css";

const Button = ({ id, text, action }) => {
  const handlleAction = (e) => {
    action(e);
  };
  return (
    <button id={id} onClick={handlleAction}>
      {text}
    </button>
  );
};

export default Button;
