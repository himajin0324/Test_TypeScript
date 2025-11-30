//素因数分解ゲーム
import { useState } from "react";
import { makeTarget } from "./scripts/MathManager.ts";
import classes from "./css/PrimeGame.module.css";

export default function PrimeGame(){
    //初期化対策(Reactの機能)
    //画面を更新してくれる
    //通常の書き方だと値は変わっても画面は更新されない
    //inputの値で割るため，空リスト防止で[1]を初期値
    const [input, setInput] = useState<number[]>([1]);
    const [inputString, setInputString] = useState("");
    const [message, setMessage] = useState(""); // メッセージ用
    const primes = [2,3,5,7,11,13]
    const [Target, setTarget] = useState<number>(makeTarget(primes));
    //画面に入力素数を表示
    const onPrime = (n:number) => {
        setInput((prev) => [...prev, n])
        setInputString((prev) => (prev === "" ? `${n}` : `${prev}×${n}`));
    }
    // const onDiv = () => {
    //     if (input.length <= 1) {
    //         setMessage("素数を選んでください");
    //         return;
    //     }
    //     let result = Target;
    //     let usedPrimes: number[] = [];
    //     let failed = false;

    //     // input[1]以降を順に割る
    //     for (let i = 1; i < input.length; i++) {
    //         const prime = input[i];
    //         if (result % prime === 0) {
    //             result = result / prime;
    //             usedPrimes.push(prime);
    //             // 1になったらクリア
    //             if (result === 1) {
    //                 break;
    //             }
    //         } else {
    //             failed = true;
    //             break;
    //         }
    //     }

    //     setTarget(result);

    //     if (result === 1) {
    //         setMessage("クリア！");
    //         setTarget(makeTarget(primes));
    //         setInput([1]);
    //         setInputString("");
    //     } else if (failed) {
    //         // 割れなかった場合は使った素数だけ表示
    //         setInput([1]);
    //         setInputString(usedPrimes.length > 0 ? usedPrimes.join("×") : "");
    //         setMessage("割れませんでした！");
    //     } else {
    //         // 全て割れたが1になっていない場合（通常はありえない）
    //         setInput([1]);
    //         setInputString("");
    //         setMessage("");
    //     }
    // }
    const autoDiv = () => {
        //入力値が無い場合
        if (input.length <= 1) {
            setMessage("素数を選んでください");
            return;
        }
        
        let result = Target;
        let i = 1;

        function step() {
            if (i >= input.length) {
                //全て割り終わった
                setInput([1]);
                setInputString("");
                setMessage("");
                if (result === 1) {
                    setMessage("クリア！");
                    setTarget(makeTarget(primes));
                }
                return;
            }
            const prime = input[i];
            if (result % prime === 0) {
                result = result / prime;
                // inputから使った素数を消す
                const newInput = [1, ...input.slice(i + 1)];
                setInput(newInput);
                // inputStringも更新（未使用の素数のみ表示）
                const inputPrimes = newInput.slice(1);
                setInputString(inputPrimes.length > 0 ? inputPrimes.join("×") : "");
                setTarget(result);
                setMessage("");
                i++;
                if (result === 1) {
                    setMessage("クリア！");
                    setTarget(makeTarget(primes));
                    setInput([1]);
                    setInputString("");
                    return;
                }
                setTimeout(step, 500);
            } else {
                setInput([1]);
                setInputString("");
                setMessage("割れませんでした！");
            }
        }
        step();
    }
    return (
        <div className={classes.center}>
            <div className={classes.panel}>
                <h2 className={classes.title}>素因数分解ゲーム</h2>
                <div className={classes.target}>Target: <span>{Target}</span></div>
                <div className={classes.input}>入力: <span>{inputString}</span></div>
                <div className={classes.message}>{message}</div>
                <div className={classes.buttonArea}>
                    {primes.map((p) => (
                        <button
                            key={p}
                            className={classes.primeButton}
                            onClick={() => onPrime(p)}
                        >
                            {p}
                        </button>
                    ))}
                </div>
                <button className={classes.divButton} onClick={autoDiv}>割る！</button>
            </div>
        </div>
    );
}