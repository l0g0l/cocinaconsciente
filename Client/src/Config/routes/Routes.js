import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// import PrivateRoute from './PrivateRoute'
import Login from '../../Components/Pages/Login/Login'
import Register from '../../Components/Pages/Register/RegisterCopy'
import Profile from '../../Components/Pages/Profile/Profile'
import Layout from '../../Components/Layout/Layout'
import Home from '../../Components/Pages/Home/Home'
import ShopLists from '../../Components/Pages/ShopLists/ShopLists'
import MyRecipes from '../../Components/Pages/MyRecipes/MyRecipes'
import Tips from '../../Components/Pages/Tips/Tips'



const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Login}></Route>
                <Route path='/registro' component={Register}></Route>
                

                <Layout>
                    {/* <PrivateRoute  path="/home" component={Home}></PrivateRoute> */}
                    <Route path="/perfil" component={Profile}></Route>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/listasdelacompra" component={ShopLists}></Route>
                    <Route path="/misrecetas" component={MyRecipes}></Route>
                    <Route path="/consejos" component={Tips}></Route>


    

                </Layout>
            </Switch>
        </Router>

    );
}
export default Routes
