const Button = ({
  onClick,
  name,
  type,
  disabled,
}: {
  onClick: () => void;
  name?: string;
  type?: string;
  disabled?: boolean;
}) => {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className="bg-black text-white border border-gray-400 px-3 py-3 rounded-lg shadow hover:bg-zinc-900  "
        disabled={disabled}
      >
        {name}
      </button>
    </>
  );
};

export default Button;
