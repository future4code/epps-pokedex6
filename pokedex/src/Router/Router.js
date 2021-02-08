import { BrowserRouter, Switch, Route} from "react-router-dom"
import Header from '../Components/Header'
import Home from '../Pages/Home'
import Pokedex from '../Pages/Pokedex'
import Details from '../Pages/Details'

const Router = () => {
    <BrowserRouter>
    <Header/>
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>

            <Route exact path="/pokedex">
                <Pokedex/>
            </Route>

            <Route exact path="/details">
                <Details/>
            </Route>
        </Switch>
    </BrowserRouter>
}

export default Router