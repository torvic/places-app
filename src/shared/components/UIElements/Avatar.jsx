import './Avatar.css';

const Avatar = (props) => {
  const { className, style, image, alt, width } = props;
  return (
    <div className={`avatar ${className}`} style={style}>
      <img src={image} alt={alt} style={{ width, height: width }} />
    </div>
  );
};

export default Avatar;
