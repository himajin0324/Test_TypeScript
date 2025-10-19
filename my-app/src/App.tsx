import { Route, Routes } from "react-router-dom";
import TodayPrime from "./pages/TodayPrime";
import Profile from "./pages/Profile";

export default function App(){
    return(<div>
        <Routes>
            <Route path="/" element={<Profile />}/>
            <Route path="/TodayPrime" element={<TodayPrime />} />
            <Route path="*" element={<h1>Not Found Page</h1>} />
        </Routes>
    </div>);
}