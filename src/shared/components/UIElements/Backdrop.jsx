import { createPortal } from 'react-dom';

import './Backdrop.css';

const Backdrop = (props) => {
  const { onClick } = props;
  return createPortal(
    <div className="backdrop" onClick={onClick} role="none" />,
    document.getElementById('backdrop-hook'),
  );
};

export default Backdrop;
