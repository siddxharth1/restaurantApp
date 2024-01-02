import { Outlet, Link} from "react-router-dom";
import ProfileFunction from "./Profile";
import ProfileClass from "./ProfileClass";
const AboutUs = () => {
    return (
        <div>
            <h1>About us</h1>
            <p>This is out restaurant about us page</p>
            <ProfileFunction name={"Siddharth"}/>
            {/* <Link to="profile">Profile</Link>
            <Outlet/> */}
        </div>
    )
}

export default AboutUs;