import classes from "./TodayPrime.module.css";


export default function TodayPrime(){
    const num = MakePrime();
    const place = get_Prime_Place(num);
    return (
        <div>
            <title>あなたの今日の素数α版</title>
            <h1 className={classes.title}>あなたの今日の素数α版💛</h1>
            <p className={classes.basictext}>
                あなたの本日の素数を授かることができます。<br></br>
                と言いつつ、ページをロードすると新たな素数を授かります。
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
            </div>
        </div>

    );
};

const MakePrime = () => {
    let n = Math.floor(Math.random() * 10001);
    while (!isPrime(n))
    {
        n = Math.floor(Math.random() * 10001);
    }
    return n;
}
//素数:true/false
const isPrime = (n:number) => {
    if (n<2) return false;
    //nの約数は√n以下に必ず存在するため、i*i<=n
    for (let i = 2; i * i <= n; i++)
    {
        if (n % i == 0) return false;
    }
    return true;
}

const get_Prime_Place = (n:number) => {
    let count = 0;
    for (let i = 0; i < n; i++){
        if (isPrime(i))count++;
    }
    return count;
}