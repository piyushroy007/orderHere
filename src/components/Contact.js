import React from "react";

const Contact = () => {
    return (
        <div className="min-h-96 bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 min-h-500px sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <div>
                            <h1 className="text-2xl font-semibold">
                                Contact Us
                            </h1>
                        </div>
                        <div className="divide-y divide-gray-200">
                            <div className="text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                <p>
                                    Got a question or suggestion? We'd love to
                                    hear from you!
                                </p>
                                <form className="space-y-6">
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium text-gray-700">
                                            Name
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                required
                                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-gray-700">
                                            Email
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                required
                                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-medium text-gray-700">
                                            Message
                                        </label>
                                        <div className="mt-1">
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows="4"
                                                required
                                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></textarea>
                                        </div>
                                    </div>
                                    <div className="flex justify-center">
                                        <button
                                            type="submit"
                                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
