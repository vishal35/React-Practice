import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            userInfo: {
                name: "Dummy Name",
                location: "Default Location"
            }
        }
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/vishal35")
        const json = await data.json()

        this.setState({
            userInfo: json
        })
    }

    render() {
        const { name, location, avatar_url } = this.state.userInfo
        const { count } = this.state
        return (
            <div className="user-card">
                {/* <h1>{count}</h1>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1
                    })
                }}>Count Increse</button> */}
                <img src={avatar_url} style={{ width: '200px', height: 'auto' }} />
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @vishu35</h4>
            </div>
        )
    }
}

export default UserClass