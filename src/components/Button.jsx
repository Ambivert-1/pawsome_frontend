// Button component
const Button = ({ children, onClick, className, variant, size, ...props }) => {
    const baseClass = 'inline-flex items-center justify-center font-medium focus:outline-none transition duration-150 ease-in-out';
    const variantClass = {
      default: 'bg-blue-500 text-white hover:bg-blue-600',
      outline: 'bg-transparent border border-[#FF7B7B] text-[#FF7B7B] hover:bg-[#FF7B7B] hover:text-white',
      ghost: 'bg-transparent text-blue-500 hover:bg-blue-100',
    };
    const sizeClass = {
      default: 'px-4 py-2 text-base',
      small: 'px-2 py-1 text-sm',
      large: 'px-6 py-3 text-lg',
      icon: 'p-2',
    };
  
    const buttonClass = `${baseClass} ${variantClass[variant]} ${sizeClass[size]} ${className}`;
  
    return (
      <button onClick={onClick} className={buttonClass} {...props}>
        {children}
      </button>
    );
  };
  export default Button