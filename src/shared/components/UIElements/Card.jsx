import './Card.css';

const Card = (props) => {
  const { className, style, children } = props;
  return (
    <div className={`card ${className}`} style={style}>
      {children}
    </div>
  );
};

export default Card;
