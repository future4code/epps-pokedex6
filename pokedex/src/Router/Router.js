import { BrowserRouter, Switch, Route} from "react-router-dom"
import HeaderHome from '../Components/HeaderHome'
import HeaderDetails from '../Components/HeaderDetails'
import HeaderPokedex from '../Components/HeaderPokedex'
import Home from '../Pages/Home/Home'
import Pokedex from '../Pages/Pokedex/Pokedex'
import Details from '../Pages/Details/Details'


const Router = () => {
    return(
    <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <HeaderHome/>
                <Home/>
            </Route>

            <Route exact path="/pokedex">
                <HeaderPokedex/>
                <Pokedex/>
            </Route>

            <Route exact path="/details">
                <HeaderDetails/>
                <Details/>
            </Route>
        </Switch>
    </BrowserRouter>
    )
}

export default Router