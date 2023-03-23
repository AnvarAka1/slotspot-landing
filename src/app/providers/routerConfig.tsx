import { CompanyView } from '@pages/SpotView/CompanyView'
import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '@shared/layout';
import Home from "../../pages/SpotView/Home";
import CompanyList from "@pages/SpotView/CompanyList";
import * as ROUTES from '@src/constants/routes'

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: ROUTES.HOME_PATH,
                element: <Home />
            },
            {
                path: ROUTES.COMPANY_DETAIL_PATH,
                element: <CompanyView />,
            },
            {
                path: ROUTES.COMPANY_LIST_PATH,
                element: <CompanyList />
            }
        ]
    },
]);
