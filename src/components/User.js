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
            <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                        <div className="max-w-md mx-auto">
                            <div>
                                <h1 className="text-2xl font-semibold mb-6">
                                    About Us
                                </h1>
                            </div>
                            <div className="divide-y divide-gray-200">
                                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                    <div className="flex items-center space-x-4">
                                        <img
                                            src={avatar_url}
                                            alt="Admin Profile"
                                            className="w-16 h-16 rounded-full"
                                        />
                                        <div>
                                            <p className="font-semibold">
                                                Piyush Roy
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                Administrator
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <p>
                                            <strong>Address:</strong> Kolkata,
                                            West Bengal
                                        </p>
                                        {/* <p>
                                            <strong>Date of Birth:</strong>{" "}
                                            {new Date(
                                                "27/07/1996"
                                            ).toLocaleDateString()}
                                        </p> */}
                                    </div>
                                    <p>
                                        Welcome To orderHere.Your Favourite
                                        destination for ordering food.
                                    </p>
                                    <p>
                                        Our mission is to provde your Favourite
                                        food as quick as possible
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            // <div className="user-card">
            //     <h1>{name}</h1>
            //     <h2>
            //         <loggedInUser.Consumer>
            //             {(item) => (
            //                 <div>
            //                     <h1 className="font-bold">{item.name}</h1>
            //                     <h1 className="font-bold">{item.location}</h1>
            //                 </div>
            //             )}
            //         </loggedInUser.Consumer>
            //     </h2>
            //     <img src={avatar_url}></img>
            //     <h2>Location: {location}</h2>
            //     <h3>Email: piyushroy@gmail.com</h3>
            //     <h4>Phone: 9876543210</h4>
            // </div>
        );
    }
}

export default UserClass;
