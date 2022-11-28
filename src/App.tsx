import { useRoutes, BrowserRouter, Navigate } from 'react-router-dom'
import Home from '@/views/home/Home'
import NotFound from '@/views/notFound/NotFound'

const Routes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ])
  return routes
}

const App = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}

export default App
