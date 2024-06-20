import React from "react";
import loggedInUser from "../utils/UserContext";
class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "Piyush Roy",
                location: "Kolkata",
            },
        };
    }

    async componentDidMount() {
        const response = await fetch(
            "https://api.github.com/users/piyushroy007"
        );
        const data = await response.json();
        console.log(data);
        this.setState({ userInfo: data });
    }

    render() {
        const { name, location, avatar_url } = this.state.userInfo;
        return (
            <div className="user-card">
                <h1>{name}</h1>
                <h2>
                    <loggedInUser.Consumer>
                        {(item) => (
                            <div>
                                <h1 className="font-bold">{item.name}</h1>
                                <h1 className="font-bold">{item.location}</h1>
                            </div>
                        )}
                    </loggedInUser.Consumer>
                </h2>
                <img src={avatar_url}></img>
                <h2>Location: {location}</h2>
                <h3>Email: piyushroy@gmail.com</h3>
                <h4>Phone: 9876543210</h4>
            </div>
        );
    }
}

export default UserClass;
