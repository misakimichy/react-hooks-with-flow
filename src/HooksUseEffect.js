import React, { useState, useEffect } from 'react'

const HooksUseEffect = () => {
    const [count, setCount] = useState(0)

    // ComponentDidMount: This run once on mount. Pass an empty array.
    // useEffect(() => {
    //     document.title = `You clicked ${count} times.`
    // }, [])

    // ComponentDidUpdate: only run if count changes
    useEffect(() => {
        document.title = `You clicked ${count} times.`
    }, [count])

    return(
        <div>
            <h1>Hooks useEffect</h1>
            <h3>Web page title will be updated upon the click.</h3>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    )
}

export default HooksUseEffect