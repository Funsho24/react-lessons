import Second from "./Second";
import "./First.css"
const First = () => {
    const myName = "Funsho";

    return (
        <div>
            <h1>This is our first component</h1>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, quas.
            </p>
            <h1>
                my name is {myName}
 </h1>
            <Second/>
        </div>
    );
};

export default First