import { createRoot } from 'react-dom/client'
import './index.css'
import store from './store/appStore.js'
import { Provider } from 'react-redux'
import { createBrowserRouter ,RouterProvider} from 'react-router'
import Projects from "./components/Projects/Projects.jsx"
import Resume from "./components/Resume/Resume.jsx"
import Layout from './utils/Layout.jsx'
import Body from './components/Home/Body.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout />,
    children:[
      {
        path:"/",
        element:<Body />
      },
      {
        path:'/projects',
        element:<Projects />
      },
      {
        path:"/resume",
        element:<Resume />
      }
    ]
  },
  {
    path:"/resume",
    element:<Resume />
  },
  {
    path:"/projects",
    element:<Projects />
  }
])

createRoot(document.getElementById('root')).render(
  <Provider store={store} >
    <RouterProvider router={router} />
  </Provider>,
)
