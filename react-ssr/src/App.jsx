import React from 'react'
import Header from './common/Header/Header'
import { renderRoutes } from 'react-router-config'

export default function App(props) {
    return (
        <div>
            <Header/>
            { renderRoutes(props.route.routes) }
        </div>
    )
}