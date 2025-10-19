import { Link } from "react-router-dom";
import classes from "./css/Profile.module.css";

export default function Profile(){
    return(<div className={classes.body}>
        <h1>テスト</h1>
        <nav>
            <ul className={classes.menu}>
                <li className={classes.menuList}><Link to="/TodayPrime" className={classes.menuLink}>今日の素数</Link></li>
                <li className={classes.menuList}><Link to="/about" className={classes.menuLink}>About</Link></li>
            </ul>
        </nav>
        
    </div>);
}