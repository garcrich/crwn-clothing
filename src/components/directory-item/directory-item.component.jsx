
import { Link } from 'react-router-dom'

import './directory-item.styles.scss';

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;

  return (
    <Link to={`shop/${title}`}className="directory-item-container">
      <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} />
      {/* <img /> */}
      <div className="body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </Link>
  )
}

export default DirectoryItem;