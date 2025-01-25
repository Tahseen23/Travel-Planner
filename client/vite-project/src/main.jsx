import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Router } from 'react-router'
import route from './Routes/Index.jsx'
import { RouterProvider } from 'react-router'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import {PersistGate} from 'redux-persist/integration/react'
import {persistStore} from 'redux-persist'

export const persistor=persistStore(store)
createRoot(document.getElementById('root')).render(


  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <RouterProvider router={route} />
      </PersistGate>
    </Provider>

)
