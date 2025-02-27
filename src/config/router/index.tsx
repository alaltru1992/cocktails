import  React, {Suspense} from "react";
import {Route, Routes} from 'react-router-dom'
import {RouteConfig} from '../RouteConfig'

export default () =>{
    return <Suspense fallback='Loading...'>
        <Routes>
            {
                Object.values(RouteConfig).map(({element, path}) => (
                    <Route path={path} element={element} key={path}/>
                ))
            }
        </Routes>
    </Suspense>
}