import classes from "./css/TodayPrime.module.css";
import { /*MakePrime,*/ get_Prime_Place } from "./scripts/MathManager.ts";
import { label, SetNum, removeStorage } from "./scripts/DataManager.ts";

export default function TodayPrime(){
    const num = SetNum();
    const place = get_Prime_Place(num);
    const resetParameter = () => {
        removeStorage(label.date_stored);
        window.location.reload();
    }
    return (
        <div>
            <title>あなたの今日の素数α版</title>
            <h1 className={classes.title}>あなたの今日の素数💛</h1>
            <p className={classes.basictext}>
                あなたの本日の素数を授かることができます。<br></br>
            </p>
            <div className={classes.container}>
                <p className={classes.basictext}>あなたの今日の素数は…</p>
                <div>
                <p className={classes.number}>{num}</p>
                </div>
                <p className={classes.basictext}>
                    おめでとうございます！<br></br>
                    これは{place}番目の素数です
                </p>
                <button onClick={resetParameter}>再取得(デバッグ用)</button>

            </div>

        </div>

    );
};

