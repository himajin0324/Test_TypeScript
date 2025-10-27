//ブラウザに保存しているデータを管理
import { MakePrime } from "./MathManager.ts";

const label = {number: "Number", today: "TodayDate", date_stored: "Date_Stored"};

export const SetNum = () => {
    if (LoadNum(label.number) && getToday() == localStorage.getItem(label.date_stored)) return LoadNum(label.number);
    else {
        Save(MakePrime(), getToday());
        return LoadNum(label.number);
    }
}

const Save = (n:number, date:string) => {
    localStorage.setItem(label.number,String(n));
    localStorage.setItem(label.date_stored, date);
}

const LoadNum = (str:string) => Number(localStorage.getItem(str));

//今日の日付をxxxx-xx-xx形式で保存
//負荷軽め（とChatGPTが言っていた）なので毎回呼ぶ
const getToday = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth()+1;//getMonthは0はじまり
    const day = date.getDate();
    return year + "-" + month + "-" + day;
}

const removeStorage = (str:string) => {
    localStorage.removeItem(str);
    localStorage.clear();
}