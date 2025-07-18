// يحاول إجبار التشغيل حتى مع مقاومة المتصفح
document.addEventListener('click', () => {
    const video = document.getElementById('myVideo');
    video.play().then(() => {
        video.muted = false;
        video.volume = 1.0;
    }).catch(e => {
        alert("المتصفح منع التشغيل! اضغط موافق ثم انقر على الصفحة.");
    });
});
