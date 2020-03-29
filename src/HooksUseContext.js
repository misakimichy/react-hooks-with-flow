import React, { useContext } from 'react'

const CurrentRoute = React.createContext({ path: '/welcome'})
const CurrentUser = React.createContext(undefined)
const IsStatic = React.createContext(false)

const HooksUseContext = () => {
    let currentRoute = useContext(CurrentRoute)
    let currentUser = useContext(CurrentUser)
    let isStatic = useContext(IsStatic)
    return (
        !isStatic &&
        currentRoute.path === '/welcome' &&
        (currentUser
            ? `Welcome back, ${currentUser.name}!`
            : `Welcome!`
        )
    )
}

export default HooksUseContext