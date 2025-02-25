const currYear = new Date().getFullYear();

function Footer() {
    return (
        <div className="div bg-black text-white pb-10 pt-10">
            <div className="bottom max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
                <div className="second grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="first">
                        <p className="text-lg">Order Here</p>
                        <p className="text-gray-400">
                            Copyright &copy; {currYear}
                        </p>
                        <p className="text-gray-400">
                            Made with 💗 by <strong>Piyush Roy</strong>
                        </p>
                    </div>
                    <div className="second">
                        <p className="text-lg pb-2">Company</p>
                        <p className="text-gray-400 pb-2">About</p>
                        <p className="text-gray-400 pb-2">Careers</p>
                        <p className="text-gray-400 pb-2">Team</p>
                        <p className="text-lg pb-2">Legal </p>
                        <p className="text-gray-400 pb-2">Terms & Conditions</p>
                    </div>
                    <div className="third">
                        <p className="text-lg pb-2">Contact Us</p>
                        <p className="text-gray-400 pb-2">Help & Support </p>
                        <p className="text-gray-400 pb-2">Partner with us</p>
                        <p className="text-gray-400 pb-2">Ride with us </p>
                    </div>
                    <div className="forth">
                        <p className="text-lg pb-2">We Deliver to:</p>
                        <p className="text-gray-400 pb-2">Bangalore</p>
                        <p className="text-gray-400 pb-2">Gurgaon</p>
                        <p className="text-gray-400 pb-2">Hyderabad</p>
                        <p className="text-gray-400 pb-2">Delhi</p>
                        <p className="text-gray-400 pb-2">Mumbai</p>
                        <p className="text-gray-400 pb-2">Pune</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
