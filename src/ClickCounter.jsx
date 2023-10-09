import { useState } from "react";
import RedButton from "./RedButton.jsx";

function ClickCounter(props) {
    const [count, setCount] = useState(props.initialCount)

    const incrementCount = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <div>{count}</div>
            <RedButton 
                message='Click to increment' 
                incrementCount={incrementCount} 
                number={1}
            />
        </div>
    )
}

export default ClickCounter