function animate(obj, target, callback) {
    // 防止反复点击按钮，先清除以前的定时器，只保留当前的一个定时器执行
    clearInterval(obj.timer);

    obj.timer = setInterval(function () {

        if (obj.offsetLeft === target) {
            clearInterval(obj.timer);
            if (callback) {
                callback();
            }
        }
        let step = (target - obj.offsetLeft) / 5;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        obj.style.left = obj.offsetLeft + step + 'px';

    }, 10)

}
