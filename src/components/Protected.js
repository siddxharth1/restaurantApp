import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Protected = ({Component})=>{
    const[showProtected, setShowProtected] = useState(false)
    const navigate = useNavigate()
    let login = localStorage.getItem('login')
    useEffect(()=>{
        if(!login){
            navigate('/login')
        }
        else{
            setShowProtected(true)
        }
    }, [login])
    return <>
    {showProtected && <Component/>}
        
    </>
}
export default Protected