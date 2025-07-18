// قد لا تعمل في كل المتصفحات!
document.getElementById('myVideo').play().then(() => {
    this.muted = false;
    this.volume = 1.0;
}).catch(error => {
    console.log("المتصفح منع التشغيل التلقائي:", error);
});