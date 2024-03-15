//** Import react


import {
    Link,
} from "react-router-dom";


const Main = () => {


    return <>

        <div>

            <h1>Hello, use this as a framework for  joyui  Home</h1>
            <ul>
                <li>
                    <Link to="reactcanvas">React + HTML canvas</Link> </li>
                <li>

                    <Link to="fabricjs">Fabricjs</Link> </li>
                <li>
                    <Link to="price">Price</Link>
                </li>

            </ul>
        </div>



    </>



};


export default Main;




