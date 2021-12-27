import { Link } from 'react-router-dom';

import Card from '../../shared/components/UIElements/Card';
import Avatar from '../../shared/components/UIElements/Avatar';

import './UserItem.css';

const UserItem = (props) => {
  const { id, image, name, placeCount } = props;
  return (
    <li className="user-item">
      <div className="user-item__content">
        <Card>
          <Link to={`/${id}/places`}>
            <div className="user-item__image">
              <Avatar src={image} alt={name} />
            </div>
            <div className="user-item__info">
              <h2>{name}</h2>
              <h3>
                {`${placeCount} ${placeCount === 1 ? 'Place' : 'Places'}`}
              </h3>
            </div>
          </Link>
        </Card>
      </div>
    </li>
  );
};
export default UserItem;
