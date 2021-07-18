import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import PrivateRoute from './PrivateRoute'
import Login from '../../Components/Pages/Login/Login'
import SignUp from '../../Components/Pages/SignUp/SignUp'
import Profile from '../../Components/Pages/Profile/Profile'
import Layout from '../../Components/Layout/Layout'
import Home from '../../Components/Pages/Home/Home'
import SearchInput from '../../Components/-Reusable/SearchInput/SearchInput'
import ShopLists from '../../Components/Pages/ShopLists/ShopLists'
import MyRecipes from '../../Components/Pages/MyRecipes/MyRecipes'
import Filter from '../../Components/-All/Filter/Filter'
import Recipes from '../../Components/Pages/Recipes/Recipes'
import RecipeDetails from '../../Components/Pages/RecipeDetails/RecipeDetails'



const Routes = () => {
    return (
        <Router>
            <Switch>
                <PrivateRoute path="/buscador" component={SearchInput}></PrivateRoute>
                <PrivateRoute path="/filtros" component={Filter}></PrivateRoute>
                <Route exact path="/" component={Login}></Route>
                <Route path='/registro' component={SignUp}></Route>

                <Layout>
               
                    <PrivateRoute path='/home' component={Home}></PrivateRoute>
                    <PrivateRoute path="/perfil" component={Profile}></PrivateRoute>
                    <PrivateRoute path="/listadelacompra" component={ShopLists}></PrivateRoute>
                    <PrivateRoute path="/misrecetas" component={MyRecipes}></PrivateRoute>
                    <PrivateRoute path="/resultadosrecetas" component={Recipes}></PrivateRoute>
                    <PrivateRoute path="/detallerecetas" component={RecipeDetails}></PrivateRoute>


                </Layout>

            </Switch>
        </Router>

    );
}
export default Routes
