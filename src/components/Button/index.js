import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Button({
  title,
  type,
  icon,
  imageSrc,
  classnames,
  onClick,
  href,
  isLoading = false,
  alt,
  ...rest
}) {
  const child = !!isLoading ? (
    <div className="w-10 h-10 rounded-full border-4 border-white border-t-transparent animate-spin"></div>
  ) : (
    { title }
  );

  // if (rest.href) {
  //   <Link to={rest.href}>demo</Link>;
  // }

  return (
    <button
      type={type}
      href={href}
      onClick={onClick}
      className={`flex items-center justify-center gap-x-2 min-h-[56px] font-semibold p-3 mb-5 border rounded-lg ${classnames}`}
      {...rest}>
      {icon ? <span>{icon}</span> : ""}
      {imageSrc ? <img src={imageSrc} alt={alt} /> : ""}
      <Link to={href} className="ml-4">
        {title}
      </Link>
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  title: PropTypes.any,
  isLoading: PropTypes.bool,
};

export default Button;
