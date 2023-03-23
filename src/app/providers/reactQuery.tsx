import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export const queryClient = new QueryClient()

const reactQuery = (component: () => React.ReactNode) => () =>
(
    <QueryClientProvider client={queryClient}>
        {component()}
        <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
)

export default reactQuery