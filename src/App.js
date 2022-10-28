import './App.css';
import {Routes, Route} from "react-router-dom"
import SharedLayout from './components/SharedLayout';
import { About, Home, Shop, Users, Products, Favorites , Services, Mission, Vision} from './pages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />}>
            <Route index path='mission' element={<Mission />} />
            <Route path='vision' element={<Vision />} />
          </Route>
          <Route path='service' element={<Services />} />
          <Route path='shop' element={<Shop />}>
            <Route index path='users' element={<Users />} />
            <Route path='products' element={<Products />} />
            <Route path='favorites' element={<Favorites />} />
          </Route>
        </Route>
      </Routes>
     
    </div>
  );
}

export default App;
