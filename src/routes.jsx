import App from './App.jsx'
import Bend from './Bend.jsx'
import ErrorPage from './ErrorPage.jsx'
import Fetch from './Fetch.jsx'


const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />
    },

    {
        path: "profile",
        element: <Bend />
    },
    {
        path: "fetch",
        element: <Fetch />
    }
]

export default routes;