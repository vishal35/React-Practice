import User from "./User"
import UserClass from "./UserClass"

const About = () => {
    return (
        <div>
            <h1>About</h1>
            {/* <User name={"Vishal Functional"} location={"Yamunanagar Functional"} /> */}
            <UserClass name={"Vishal Class"} location={"Yamunanagar Class"} />
        </div>
    )
}

export default About