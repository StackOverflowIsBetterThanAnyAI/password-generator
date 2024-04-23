import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Index from './components/Index/Index'
import './fonts/Poppins-Medium.ttf'
import './fonts/Poppins-Regular.ttf'
import './fonts/Poppins-Bold.ttf'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <Index />
    </React.StrictMode>
)
