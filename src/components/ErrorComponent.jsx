import { useRouteError } from "react-router-dom"

function Error(){
  const error=useRouteError()
    
    return(
    <>
    <h1>Url is not valid </h1>
     <h1>  <div>
           
            <h1>Oops! Something went wrong.</h1>
            <p>{error?.statusText || error?.message}</p>
        </div>
        
        </h1>
    </>)
}
export default Error