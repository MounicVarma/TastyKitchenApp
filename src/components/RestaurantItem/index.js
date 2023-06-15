/* eslint-disable react/no-unknown-property */
import {Link} from 'react-router-dom'
import {AiFillStar} from 'react-icons/ai'
import './index.css'

const RestaurantItem = props => {
  const {restaurantDetails} = props
  const {userRating, name, cuisine, id, imageUrl} = restaurantDetails
  return (
    <Link to={`/restaurant/${id}`} className="link">
      <li className="list_item" testid="restaurant-item">
        <img src={imageUrl} className="restaurant_img" alt="restaurant" />
        <div>
          <h1 className="restaurant_heading">{name}</h1>
          <p className="restaurant_para">{cuisine}</p>
          <div className="rating_container">
            <AiFillStar size={12} color="#FFCC00" />
            <p className="rating_para">{userRating.rating}</p>
            <p className="rating">{`(${userRating.totalReviews} ratings)`}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default RestaurantItem
