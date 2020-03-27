import React from 'react'

type TestProps = {
    str: string,
    num?: number,
    array: Array<number>
}
const Flow = (props: TestProps) => {
    return (
        <div>
            <h1>Flow Component</h1>
            <h2>Flow String: {props.str}</h2>
            <h2>Flow Number: {props.num}</h2>
            <h2>Flow Array map: {props.array.map(value =>
                <p>{value}<hr/></p>)}
            </h2>
        </div>
    ) 
}

export default Flow