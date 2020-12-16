import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import FeedImgPage from '../screens/FeedImgPage/FeedImgPage'
import ImgPushPage from '../screens/ImgPushPage/ImgPushPage'
import LoginPage from '../screens/LoginPage/LoginPage'
import SignUpPage from '../screens/SignUpPage/SignUpPage'
import FeedImgDetail from '../screens/FeedImgPage/FeedImgDetail'


const Router = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path={'/feedimgpage'}>
                <FeedImgPage/>
            </Route>
            <Route exact path={'/imgpushpage'}>
                <ImgPushPage/>
            </Route>
            <Route exact path={'/login'}>
                <LoginPage/>
            </Route>
            <Route exact path={'/signup'}>
                <SignUpPage/>
            </Route>
            <Route exact path={'/img/:id'}>
                <FeedImgDetail/>
            </Route>
            <Route>
                <div>Erro 404, se ferrou</div>
            </Route>
           
        </Switch>
        </BrowserRouter>
    )
}
export default Router