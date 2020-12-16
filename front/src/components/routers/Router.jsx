import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import FeedImgPage from '../screens/FeedImgPage/FeedImgPage'
import ImgPage from '../screens/ImgPage/ImgPage'
import LoginPage from '../screens/LoginPage/LoginPage'
import SignUpPage from '../screens/SignUpPage/SignUpPage'


const Router = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path={'/feedimgpage'}>
                <FeedImgPage/>
            </Route>
            <Route exact path={'/imgPage'}>
                <ImgPage/>
            </Route>
            <Route exact path={'/login'}>
                <LoginPage/>
            </Route>
            <Route exact path={'/signup'}>
                <SignUpPage/>
            </Route>
        </Switch>
        </BrowserRouter>
    )
}
export default Router