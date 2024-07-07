import { useState } from "react";


const PracCounter = () =>{
const [count, setCount] = useState(0)
    const Increase = () => {
        setCount(count + 1)
    }

    const Decrease = () => {
        setCount(count - 1)
    }

return(
   <>
     <div>
        <h1>My Counter App</h1>
        <h2>{count}</h2>
        <button onClick={Increase}>Increase</button>
        <button onClick={Decrease}>Decrease</button>
    </div>
   </>
)
}
export default PracCounter;
/**
* count -> the state variable
* setCount -> the function that lets you update the state variable
* 0 -> the initial state value
*/
//function to handle incrementing the count
//setCount function to update the count state variable
//function to handle decrementing the count
/**Display the count variable */
/**Increment button, takes in handleIncrement as value */
/**Decrement button, takes in handleDecrement as value */