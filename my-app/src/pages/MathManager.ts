//数学的処理を行う関数をまとめたスクリプト

export const MakePrime = () => {
    let n = Math.floor(Math.random() * 10001);
    while (!isPrime(n))
    {
        n = Math.floor(Math.random() * 10001);
    }
    return n;
}
//素数:true/false
export const isPrime = (n:number) => {
    if (n<2) return false;
    //nの約数は√n以下に必ず存在するため、i*i<=n
    for (let i = 2; i * i <= n; i++)
    {
        if (n % i == 0) return false;
    }
    return true;
}
//count番目の素数
export const get_Prime_Place = (n:number) => {
    let count = 0;
    for (let i = 2; i <= n; i++){
        if (isPrime(i))count++;
    }
    return count;
}

export const fact = (n:number) => {
    let i = 2;
    const array:number[] = [];
    let str = "";
    while(i <= n){
        //割り切れた！=iはnの因数
        if (n % i == 0)
        {
            //配列の最後尾に値を追加
            array.push(i);
            n /= i;
        }
        else{
            i++;
        }
    }
    while (array.length > 0){
        str += String(array.shift());
        if (array.length > 0)str += "×";
    }
    return str;
}