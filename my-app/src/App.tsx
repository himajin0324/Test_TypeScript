import { Route, Routes } from "react-router-dom";
import TodayPrime from "./pages/TodayPrime";
import Profile from "./pages/Profile";
import GetPrimeForm from "./pages/GetPrimeForm";
import FooterMenu from "./pages/FooterMenu";

export default function App(){
    return(<div>
        <FooterMenu />
        <Routes>
            <Route path="/" element={<Profile />}/>
            <Route path="/Profile" element={<Profile />}/>
            <Route path="/TodayPrime" element={<TodayPrime />} />
            <Route path="/GetPrimeForm" element={<GetPrimeForm/>}/>
            <Route path="*" element={<h1>Not Found Page</h1>} />
        </Routes>
    </div>);
}


