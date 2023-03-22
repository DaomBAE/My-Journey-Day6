function getTime() {
    const time = document.querySelector(".time");
    
    const newDate = new Date();

    const hours = newDate.getHours();
    const minutes = newDate.getMinutes();
    const seconds = newDate.getSeconds();
    
    // time.innerText = hours + ":" + minutes + ":" + seconds;
    time.innerText = `${hours}:${minutes}:${seconds}`;
}

getTime();

setInterval (getTime, 1000);
