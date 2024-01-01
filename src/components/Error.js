import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.log(error);

    const{status, statusText, data} = error
    return (
        <div className="errorPage">
            <h1>Oops something went wrong :0</h1>
            <h2>{status+ ": "+ statusText} </h2>
            <p>{data}</p>
        </div>
    )
}
export default Error;