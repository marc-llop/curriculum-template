import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { PDFViewer } from '@react-pdf/renderer'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <PDFViewer width='100%' height='100%'>
            <App />
        </PDFViewer>
    </React.StrictMode>,
)
