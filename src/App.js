import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from './constants/routes'
import useAuthListener from "./hooks/use-auth-listener";
import UserContext from './context/user'

const Login = lazy(() => import ('./pages/login'))
const SignUp = lazy(() => import ('./pages/sign-up'))
const NotFound = lazy(() => import ('./pages/not-found'))
const Dashboard = lazy(() => import ('./pages/dashboard'))
const BuyNft = lazy(() => import ('./pages/buy-nft'))

export default function App() {
    const { user } = useAuthListener()

    return (
        <UserContext.Provider value={{user}}>
            <Router>
                <Suspense fallback={<p></p>}>
                    <Switch>
                        <Route path={ROUTES.LOGIN} component={Login} exact/>
                        <Route path={ROUTES.SIGN_UP} component={SignUp} exact/>
                        <Route path={ROUTES.DASHBOARD} component={Dashboard} exact/>
                        <Route path={ROUTES.BUY_NFT} component={BuyNft} exact/>
                        <Route component={NotFound}/>
                    </Switch>
                </Suspense>
            </Router>
        </UserContext.Provider>
    );
}