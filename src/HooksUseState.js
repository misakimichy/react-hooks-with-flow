import React, {useState} from 'react'

const HooksUseState = () => {
    const [count, setCount] = useState(0)
    return(
        <div>
            <h1>Hooks useState</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    )
}

export default HooksUseState