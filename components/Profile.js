
export default function Profile(props) {
  return (
    <div className="flex flex-col items-center my-8">
        <img
          className="rounded-full border-white border-2 m-2" 
          width={216}
          height={216}
          src={props.user.image} 
          alt="User profile"
        ></img>
        <h2>{`${props.user.firstName} ${props.user.lastName}`}</h2>
        <h3>email: {props.user.email}</h3>
    </div>
  )
}
