
function clock(){
    const date = new Date()
    const months = date.getMonth();
    const dates = date.getDate();
    const day = date.getDay();
    const dayOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
    const koreaDay = dayOfWeek[day];
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    document.querySelector(".js-clock").innerText = `${months}월 ${dates}일 ${koreaDay}요일 ${hours < 10 ? `0${hours}` : hours} : ${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`
}

function init(){
    clock();
    setInterval(clock, 1000);
}

init();