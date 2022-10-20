setInterval(getSec, 1000);

function getSec() {
    let d = new Date();
    let sec =  d.getSeconds()
    console.log(sec);
};
