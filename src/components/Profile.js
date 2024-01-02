import { useState } from "react";

const Profile=(props)=>{
    const [counter] = useState(0);
    const [counter2, setCounter2] = useState(1);
    return(
        <div>
            <h1>profile</h1>
            <h2>Name: {props.name}</h2>
            <h2>Counter:{counter}</h2>
            <h2>Counter:{counter2}</h2>
            <button onClick={() => setCounter2(2)}>count</button>
        </div>
    )
}
export default Profile;