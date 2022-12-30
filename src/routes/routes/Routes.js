import { createBrowserRouter } from 'react-router-dom';
import About from '../../components/About/About';
import Checkout from '../../components/Checkout/Checkout';
import Inventory from '../../components/Inventory/Inventory';
import Login from '../../components/Login/Login';
import Registration from '../../components/Registration/Registration';
import Shop from '../../components/Shop/Shop';
import Main from '../../layout/Main';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/shop',
                loader: async () => {
                    return fetch('https://dummyjson.com/products')
                },
                element: <Shop></Shop>
            },
            {
                path: '/inventory',
                element: <Inventory></Inventory>
            },
            {
                path: '/checkout',
                element: <Checkout></Checkout>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            }
        ]
    }
]);