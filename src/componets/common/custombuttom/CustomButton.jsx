import './CustomButton.css';

const CustomButton = ({ 
  children, 
  variant = 'primary',
  size = 'medium',
  disabled = false,
  fullWidth = false,
  onClick,
  ...props
}) => {
  return (
    <button
      className={`custom-button ${variant} ${size} ${fullWidth ? 'full-width' : ''}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      <span className="button-content">
        {children}
      </span>
    </button>
  );
};

export default CustomButton;
