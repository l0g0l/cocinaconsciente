import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// import PrivateRoute from './PrivateRoute'
import Login from '../../Components/Pages/Login/Login'
import SignUp from '../../Components/Pages/SignUp/SignUp'
import Profile from '../../Components/Pages/Profile/Profile'
import Layout from '../../Components/Layout/Layout'
import Home from '../../Components/Pages/Home/Home'
import Search from '../../Components/Pages/Search/Search'
import ShopLists from '../../Components/Pages/ShopLists/ShopLists'
import MyRecipes from '../../Components/Pages/MyRecipes/MyRecipes'
import Tips from '../../Components/Pages/Tips/Tips'



const Routes = () => {
    return (
        <Router>
            <Switch>

                <Layout>
                    {/* <PrivateRoute  path="/home" component={Home}></PrivateRoute> */}
                    <Route exact path="/" component={Home}></Route>
                    <Route path='/registro' component={SignUp}></Route>
                    <Route path='/login' component={Login}></Route>
                    <Route path="/buscador" component={Search}></Route>
                    <Route path="/perfil" component={Profile}></Route>
                    <Route path="/listasdelacompra" component={ShopLists}></Route>
                    <Route path="/misrecetas" component={MyRecipes}></Route>
                    <Route path="/consejos" component={Tips}></Route>
                </Layout>
            </Switch>
        </Router>

    );
}
export default Routes
