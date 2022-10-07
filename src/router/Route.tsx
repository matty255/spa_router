import React,{ useState } from 'react'
import Main from '../page/Main'

type R = {
    path: string;
    component:React.ReactElement
}
const Route = ({path, component}:R) => {
 
    const { pathname } = window.location

    if (pathname === path) {
    return <div>{component}</div>
    } else return <Main />
    }

export default Route
