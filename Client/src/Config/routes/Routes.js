import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// import PrivateRoute from './PrivateRoute'
import Login from '../../Components/Pages/Login/Login'
import Register from '../../Components/Pages/Register/RegisterCopy'
import Profile from '../../Components/Pages/Profile/Profile'
// import Layout from '../../Components/Layout/Layout'
import Home from '../../Components/Pages/Home/Home'




const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Login}></Route>
                <Route path='/register' component={Register}></Route>
                <Route path="/profile" component={Profile}></Route>

                {/* <Layout> */}
                    {/* <PrivateRoute  path="/home" component={Home}></PrivateRoute> */}
                    {/* <Route path="/home" component={Home}></Route> */}

                {/* </Layout> */}
            </Switch>
        </Router>

    );
}
export default Routes
