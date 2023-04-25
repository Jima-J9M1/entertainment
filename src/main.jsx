import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {GoogleOAuthProvider} from '@react-oauth/google'
// import {googleApi} from './auth/GoogleApi.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="84049459526-r3o9a901kr4f4u9n3nm6dslhb0cmfbbc.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>,
  </React.StrictMode>
)
