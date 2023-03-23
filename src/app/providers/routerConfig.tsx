import { CompanyView } from 'pages/SpotView/CompanyView'
import { createBrowserRouter } from 'react-router-dom'
import { Layout } from 'shared/layout';
import Home from "../../pages/SpotView/Home";
import CompaniesList from "../../pages/SpotView/CompaniesList";

enum routePaths {
    HOME = "/",
    SPOTVIEW = "/company",
    COMPANIES_LIST = "/companies"
}

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: routePaths.HOME,
                element: <Home />
            },
            {
                path: routePaths.SPOTVIEW,
                element: <CompanyView />,
            },
            {
                path: routePaths.COMPANIES_LIST,
                element: <CompaniesList />
            }
        ]
    },
]);
