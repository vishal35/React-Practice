const User = (props) => {
    const { name, location } = props
    return (
        <div className="user-card">
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: @vishu35</h4>
        </div>
    )
}

export default User