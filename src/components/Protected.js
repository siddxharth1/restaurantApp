import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Protected = ({Component})=>{
    const[showProtected, setShowProtected] = useState(false)
    const navigate = useNavigate()
    useEffect(()=>{
        let login = localStorage.getItem('login')
        if(!login){
            navigate('/login')
        }
        else{
            setShowProtected(true)
        }
    }, [])
    return <>
    {showProtected && <Component/>}
        
    </>
}
export default Protected