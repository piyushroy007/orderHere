import { useState,useEffect } from "react";

const useOnlineStatus = () => {
    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
        window.addEventListener("offline", () =>{
            console.log("Offline status")
            setIsOnline(false);
        });

        window.addEventListener("online", () =>{
            console.log("Online status");
            setIsOnline(true);
        });
    } ,[]);

    return isOnline;
}

export default useOnlineStatus;