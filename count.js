/**
 * Created by Administrator on 2016/12/21.
 */

function showCountDown(year, month, day, obj){
    var now = new Date();
    var endDate = new Date(year, month-1, day);
    var leftTome = endDate.getTime() - now.getTime();
    if(leftTome < 0){
        alert('时间已过期');
        clearInterval(set1);
        return;
    }
    var leftSecond = parseInt(leftTome/1000);
    var day1 = Math.floor(leftSecond/(60*60*24));
    var hour = Math.floor((leftSecond - day1*60*60*24)/3600);
    var minute = Math.floor((leftSecond - day1*60*60*24 - hour*60*60)/60);
    var second = Math.floor(leftSecond - day1*60*60*24 - hour*60*60 - minute*60);
    if(day1 < 10){
        day1 = '0'+day1;
    }
    if(hour < 10){
        hour = '0'+hour;
    }
    if(minute < 10){
        minute = '0'+minute;
    }
    if(second < 10){
        second = '0'+second;
    }
    var inputArr = document.getElementById(obj).getElementsByTagName('input');
    inputArr[0].value = day1;
    inputArr[1].value = hour;
    inputArr[2].value = minute;
    inputArr[3].value = second;
}

var set1 = setInterval(function () {
    showCountDown(2016,12,22,'count');
},1000);
