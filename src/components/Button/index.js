import PropTypes from "prop-types";

function Button({
  title,
  type,
  icon,
  imageSrc,
  classnames,
  onClick,
  isLoading = false,
  alt,
  ...rest
}) {
  const child = !!isLoading ? (
    <div className="w-10 h-10 rounded-full border-4 border-white border-t-transparent animate-spin"></div>
  ) : (
    { title }
  );
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex items-center justify-center gap-x-2 min-h-[56px] font-semibold p-3 mb-5 border rounded-lg ${classnames}`}
      {...rest}>
      {icon ? <span>{icon}</span> : ""}
      {imageSrc ? <img src={imageSrc} alt={alt} /> : ""}
      <span className="ml-4">{title}</span>
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  title: PropTypes.any,
  isLoading: PropTypes.bool,
};

export default Button;
