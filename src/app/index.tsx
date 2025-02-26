import './styles/styles.scss';
import CocktailPage from 'pages/CocktailPage';
import MenuPage from 'pages/Menu';

export default () =>{
    return <div className='app'>
        <MenuPage />
        <CocktailPage />
    </div>
}