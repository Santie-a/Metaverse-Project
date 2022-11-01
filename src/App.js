import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from './constants/routes'
import useAuthListener from "./hooks/use-auth-listener";
import UserContext from './context/user'

const NotFound = lazy(() => import ('./pages/not-found'))
const Dashboard = lazy(() => import ('./pages/dashboard'))
const SelectTeam = lazy(() => import ('./pages/select-team'))

export default function App() {
    const { user } = useAuthListener()

    return (
        <UserContext.Provider value={{user}}>
            <Router>
                <Suspense fallback={<p></p>}>
                    <Switch>
                        <Route path={ROUTES.DASHBOARD} component={Dashboard} exact/>
                        <Route path={ROUTES.SELECT_TEAM} component={SelectTeam} exact/>
                        <Route component={NotFound}/>
                    </Switch>
                </Suspense>
            </Router>
        </UserContext.Provider>
    );
}