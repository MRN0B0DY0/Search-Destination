import './index.css'

const UserProfile = props => {
  const {userDetail} = props
  const {name, imgUrl} = userDetail

  return (
    <li className="card-list-container">
      <img src={imgUrl} alt={name} className="image" />
      <p>{name}</p>
    </li>
  )
}

export default UserProfile
