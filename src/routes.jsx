import App from './App.jsx'
import Bend from './Bend.jsx'
import ErrorPage from './ErrorPage.jsx'


const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />
    },

    {
    path: "profile",
    element: <Bend />
    }
]

export default routes;