import './SideDrawer.css';

const SideDrawer = (props) => {
  const { children } = props;
  return <div className="side-drawer">{children}</div>;
};

export default SideDrawer;
