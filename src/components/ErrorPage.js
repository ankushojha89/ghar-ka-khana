import { useRouteError } from "react-router-dom"
import { useTitle } from "../hooks/customeFunctions";

export default ErrorPage = ()=>{
    const err=useRouteError();
    useTitle(err.status+" | "+err.statusText)
    return (
        <div>
            <h1>{err.statusText}({err.status})</h1>
            <p>{err.data}</p>
        </div>
    )
}