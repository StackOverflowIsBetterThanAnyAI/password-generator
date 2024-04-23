import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom'
import { HomePage } from './HomePage/HomePage'
import { PasswordGeneratorPage } from './PasswordGeneratorPage/PasswordGeneratorPage'
import { PasswordStoragePage } from './PasswordStoragePage/PasswordStoragePage'
import { NotFoundPage } from './NotFoundPage/NotFoundPage'
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
                    <PasswordGeneratorPage />
                </Route>
                <Route path="/pages/password-storage">
                    <PasswordStoragePage />
                </Route>
                <Route>
                    <NotFoundPage />
                </Route>
            </Switch>
        </Router>
    )
}
