import './MainHeader.css';

const MainHeader = (props) => {
  const { children } = props;
  return <div className="main-header">{children}</div>;
};

export default MainHeader;
