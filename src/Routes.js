import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { PasswordGenerator } from './pages/PasswordGenerator'
import { NotFoundPage } from './pages/NotFoundPage'
import React from 'react'

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <HomePage />
                </Route>
                <Route path="/pages" exact>
                    <Redirect to="/" />
                </Route>
                <Route path="/pages/password-generator">
                    <PasswordGenerator />
                </Route>
                <Route>
                    <NotFoundPage />
                </Route>
            </Switch>
        </Router>
    )
}
