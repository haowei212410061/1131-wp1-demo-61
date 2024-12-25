// import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import HomePage_xx from './pages/HomePage_xx'
// import BlogStaticPage_xx from './pages/BlogStaticPage_xx'
// import BlogNodePage_xx from './pages/BlogNodePage_xx'
// import BlogSupaPage_xx from './pages/BlogSupaPage_xx'
// import BlogSupaPage2_xx from './pages/BlogSupaPage2_xx'

// import P1Page_61 from './pages/mid_xx/P1Page_61'
// import P2Page_61 from './pages/mid_xx/P2Page_61'
// import P3Page_61 from './pages/mid_xx/P3Page_61'
// import P4Page_61 from './pages/mid_xx/P4Page_61'
import {
  HomePage_xx,
  BlogStaticPage_xx,
  BlogNodePage_xx,
  BlogSupaPage_xx,
  BlogSupaPage2_xx,
  HomeLayoutPage_61,
} from './pages'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { P1Page_61, P2Page_61, P3Page_61, P4Page_61 } from './pages/mid_xx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayoutPage_61 />,
    children: [
      {
        index: true,
        element: <HomePage_xx />,
      },
      {
        path: '/static_61',
        element: <BlogStaticPage_xx />,
      },
      {
        path: '/node_61',
        element: <BlogNodePage_xx />,
      },
      {
        path: '/supa_61',
        element: <BlogSupaPage_xx />,
      },
      {
        path: '/supa2_61',
        element: <BlogSupaPage2_xx />,
      },
    ],
  },
  {
    path: '/mid_61',
    element: <HomeLayoutPage_61 />,
    children: [
      {
        index: true,
        element: <P1Page_61 />,
      },
      {
        path: 'p2_61',
        element: <P2Page_61 />,
      },
      {
        path: 'p3_61',
        element: <P3Page_61 />,
      },
      {
        path: 'p4_61',
        element: <P4Page_61 />,
      },
    ],
  },
])


const App_xx = () => {
  return <RouterProvider router={router} />
}

export default App_xx
