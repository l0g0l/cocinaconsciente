import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// import PrivateRoute from './PrivateRoute'
import Login from '../../Components/Pages/Login/Login'
import Registro from '../../Components/Pages/Registro/Registro'
// import Layout from '../../Components/Layout/Layout'
// import Ajustes from '../../Components/Pages/Ajustes/Ajustes'



const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Login}></Route>
                <Route path='/registro' component={Registro}></Route>
                {/* <Layout> */}
                    {/* <PrivateRoute  path="/home" component={Home}></PrivateRoute> */}
                    <Route path="/ajustes" component={Ajustes}></Route>
                
                {/* </Layout> */}
            </Switch>
        </Router>

    );
}
export default Routes
