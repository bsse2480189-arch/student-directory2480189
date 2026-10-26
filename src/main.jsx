// StrictMode: React ka helper component, development mein extra checks aur warnings deta hai
import { StrictMode } from 'react'
// createRoot: React ka function jo browser ke DOM element ke andar app ko render karta hai
import { createRoot } from 'react-dom/client'
// Bootstrap ki CSS import ki, is se btn, card, row, col jaisi classes kaam karti hain
import 'bootstrap/dist/css/bootstrap.min.css'
// apni global CSS file import ki
import './index.css'
// App component import kiya, ye poori application ka main (root) component hai
import App from './App.jsx'

// index.html ke <div id="root"> ko pakro aur us mein React app render karo
createRoot(document.getElementById('root')).render(
  // StrictMode shuru: iske andar ke components par extra checks chalte hain
  <StrictMode>
    {/* App component yahan screen par show hoga */}
    <App />
  {/* StrictMode khatam */}
  </StrictMode>,
)
