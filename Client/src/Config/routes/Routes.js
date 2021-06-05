import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// import PrivateRoute from './PrivateRoute'
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
import RecipesDetails from '../../Components/Pages/RecipesDetails/RecipesDetails'






const Routes = () => {
    return (
        <Router>
            <Switch>
            <Route path="/buscador" component={SearchInput}></Route>
            <Route path="/filtros" component={Filter}></Route>


                <Layout>
                    {/* <PrivateRoute  path="/home" component={Home}></PrivateRoute> */}
                    <Route exact path="/" component={Home}></Route>
                    <Route path='/registro' component={SignUp}></Route>
                    <Route path='/login' component={Login}></Route>
                    <Route path="/perfil" component={Profile}></Route>
                    <Route path="/listadelacompra" component={ShopLists}></Route>
                    <Route path="/misrecetas" component={MyRecipes}></Route>
                    <Route path="/resultadosrecetas" component={Recipes}></Route>
                    <Route path="/detallerecetas" component={RecipesDetails}></Route>


                </Layout>

            </Switch>
        </Router>

    );
}
export default Routes
