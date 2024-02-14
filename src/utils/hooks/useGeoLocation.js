import { useEffect, useState } from "react"

const useGeoLocation = ()=>{
    const[geoLocation, setGeoLocation] = useState(null);

    const onSuccess=(location)=>{
        setGeoLocation({
            coordinate: {
                lat: location.coords.latitude,
                lon: location.coords.longitude
            }
        })
    }
    const onError =(error)=>{
        console.log(error)
        setGeoLocation({
            coordinate: {
                lat: 21.1894506,
                lon: 72.88587869999999
            }
        })
    }
    useEffect(()=>{
        if (!("geolocation" in navigator)) {
            onError({
                message: "Geolocation not supported",
            });
        }
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }, [])

    return geoLocation;
}

export default useGeoLocation