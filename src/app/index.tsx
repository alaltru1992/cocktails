import './styles/styles.scss';
import Router from '../configuration/router'
import MenuPage from 'pages/Menu';
import CocktailsPage from 'pages/CocktailsPage'

export default () =>{
    return <div className='app'>
        <MenuPage />
        <CocktailsPage>
            <Router />
        </CocktailsPage>
    </div>
}