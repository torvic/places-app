import './Avatar.css';

const Avatar = (props) => {
  const { className, style, src, alt, width } = props;
  return (
    <div className={`avatar ${className}`} style={style}>
      <img src={src} alt={alt} style={{ width, height: width }} />
    </div>
  );
};

export default Avatar;
