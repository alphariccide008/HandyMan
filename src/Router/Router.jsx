import{BrowserRouter, Routes, Route} from 'react-router-dom'

//Import Pages................
import Home from '../Pages/Home';
import Contact from '../Pages/Contact';
import NotFound from '../Pages/NotFound/NotFound';
import About from '../Pages/About';
import Services from '../Pages/Services';
import Testimonial from '../Pages/Testimonial';
import Bathroom from '../Pages/Bathroom';
import Kitchen from '../Pages/Kitchen';
import Bedroom from '../Pages/Bedroom';
import LivingRoom from '../Pages/LivingRoom';
import Roofing from '../Pages/Roofing';
import Backyard from '../Pages/Backyard';
import Adu from '../Pages/Adu';
import Basement from '../Pages/Basement';
import Painting from '../Pages/Painting';
import Drywall from '../Pages/Drywall';
import Electrical from '../Pages/Electrical';
import Plumbing from '../Pages/Plumbing';
import Flooring from '../Pages/Flooring';


//Import Components................
import Nav from '../Components/Nav/Nav'
import Footer from '../Components/Footer/Footer'

export default function Router(){
    return (
        <BrowserRouter>
        <Nav />
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='*' element={<NotFound/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/services' element={<Services/>} />
            <Route path='/adu' element={<Adu/>} />
            <Route path='/bathroom' element={<Bathroom/>} />
            <Route path='/kitchen' element={<Kitchen/>} />
            <Route path='/bedroom' element={<Bedroom/>} />
            <Route path='/livingroom' element={<LivingRoom/>} />
            <Route path='/backyard' element={<Backyard/>} />
            <Route path='/roofing' element={<Roofing/>} />
            <Route path='/basement' element={<Basement/>} />
            <Route path='/painting' element={<Painting/>} />
            <Route path='/drywall' element={<Drywall/>} />
            <Route path='/electrical' element={<Electrical/>} />
            <Route path='/plumbing' element={<Plumbing/>} />
            <Route path='/flooring' element={<Flooring/>} />
            
        </Routes>
       <Footer/>
        </BrowserRouter>
    )
}
