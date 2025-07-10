import './App.css'
import Layout from './components/Layout/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard'
import Restaurants from './pages/Restaurants/Restaurants'
import RestaurantMenu from './pages/RestaurantMenu/RestaurantMenu'
import Checkout from './pages/Checkout/Checkout'
import OrderTracking from './pages/OrderTracking/OrderTracking'
import RightSideBar from './components/Layout/RightSideBar'

// Add this to a global setup file like App.tsx or index.tsx
// (Outside of any React component's render method or useEffect, preferably at the top level)

import L from 'leaflet';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

// Fix for default marker icons not showing in Webpack/Vite
delete (L.Icon.Default.prototype as any)._getIconUrl; // Use 'as any' to bypass TypeScript warning if needed
L.Icon.Default.mergeOptions({
  iconRetinaUrl: iconRetinaUrl,
  iconUrl: iconUrl,
  shadowUrl: shadowUrl,
});

// Also, ensure you have 'leaflet/dist/leaflet.css' imported somewhere globally or in this component.
import 'leaflet/dist/leaflet.css';

function App() {
  return (
    <BrowserRouter>
    <Layout>
      <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path='/restaurants' element={<Restaurants />}/>
          <Route  path='/restaurants/:id' element={<RestaurantMenu />}/>
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/order-track/:orderId' element={<OrderTracking />} />
          <Route path='/cart' element={<RightSideBar />} />
      </Routes>
    </Layout>
    </BrowserRouter>
  )
}

export default App