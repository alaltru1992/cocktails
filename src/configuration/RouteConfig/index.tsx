import React from "react";
import {RouteProps} from 'react-router'
import DrinkPage from 'pages/DrinkPage';

export enum AppRoutes {
    MARGARITA = 'margarita',
    MAIN = 'main',
    MOJITO = 'mojito',
    A1 = 'a1',
    KIR = 'kir'
}

export const RoutePathes: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.MARGARITA]: '/margarita',
    [AppRoutes.MOJITO]: '/mojito',
    [AppRoutes.A1]: '/a1',
    [AppRoutes.KIR]: '/kir',
}

export const RouteConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]:{
        path: RoutePathes.main,
        element: () => <></>,
    },
    [AppRoutes.MARGARITA]:{
        path: RoutePathes.margarita,
        element: <DrinkPage />
    },
    [AppRoutes.MOJITO]:{
        path: RoutePathes.mojito,
        element: <DrinkPage />
    },
    [AppRoutes.A1]:{
        path: RoutePathes.a1,
        element: <DrinkPage />
    },
    [AppRoutes.KIR]:{
        path: RoutePathes.kir,
        element: <DrinkPage />
    },
}