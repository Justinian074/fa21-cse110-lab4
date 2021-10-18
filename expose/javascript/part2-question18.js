function interval(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

setInterval(interval, 1000);
