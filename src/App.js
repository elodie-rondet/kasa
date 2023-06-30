import Accueil from './pages/accueil/Accueil';
import Error from './pages/error/Error';
import About from './pages/about/About';
import PageAppartement from './pages/pageAppartement/PageAppartement';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: "/Accueil/",
		element: <Accueil />
	},
	{
		path: "/pageAppartement/:id",
		element: <PageAppartement />
	},
	{
		path: '/Apropos',
		element: <About />
	},
	{
		path: "*",
		element: <Error />
	},
]);

function App() {
	return (
		<>
			<RouterProvider router={router}/>
		</>
	);
}

export default App;
