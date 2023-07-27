import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
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
