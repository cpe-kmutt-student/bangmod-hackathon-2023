const Button = ({
  onClick,
  label,
  type,
  className,
  style,
  disabled,
}: {
  onClick: () => void;
  label?: string;
  type?: string;
  className?: string;
  style?: string;
  disabled?: boolean;
}) => {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className={className}
        style={style}
        disabled={disabled}
      >
        {label}
      </button>
    </>
  );
};

export default Button;
