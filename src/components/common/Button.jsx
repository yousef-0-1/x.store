export const Button = (props) => {
  return (
    <button
      className={
        props.btnClass +
        " bg-black text-white p-3 rounded-full hover:opacity-95 duration-300 cursor-pointer"
      }
    >
      {props.btnName}
    </button>
  );
};
