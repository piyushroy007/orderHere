import React from "react";

const Contact = () => {
    return (
        <div>
            <h1 className="text-xl font-bold">Contact Us Page</h1>
            <div>
                <form className="border p-2 shadow-sm shadow-orange-300 flex justify-between flex-wrap">
                    <input
                        className="border p-2 m-2"
                        type="text"
                        placeholder="Name"
                    />
                    <input
                        className="border p-2 m-2"
                        type="email"
                        placeholder="Email"
                    />
                    <input
                        className="border p-2 m-2"
                        type="text"
                        placeholder="Subject"
                    />
                    <input
                        className="border p-2 m-2"
                        type="text"
                        placeholder="Message"
                    />
                    <button
                        className="border p-2 m-2 bg-slate-400"
                        type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
