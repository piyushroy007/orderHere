import { useRouteError } from "react-router-dom";


const Error = () => {
    const err = useRouteError();
    console.log("Error: ", err);
    return (
        <div className="error">
            <h3>{err.status} : {err.statusText}</h3>
            <h3>{err.data}</h3>
        </div>
    );
};

export default Error;