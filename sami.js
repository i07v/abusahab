// إضافة مؤثرات صوتية (بعد تفاعل المستخدم)
document.body.onclick = function() {
    const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-alarm-digital-clock-beep-989.mp3');
    audio.play();
};
