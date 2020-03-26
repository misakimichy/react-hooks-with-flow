import React from 'react'

type TestProps = {
    str: string
}
const Test = (props: TestProps) => {
    return (
        <div>
            <h1>{props.str}</h1>
        </div>
    ) 
}

export default Test