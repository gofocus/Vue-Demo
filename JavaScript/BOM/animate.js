function animate(obj, target, callback) {
    // 防止反复点击按钮，先清除以前的定时器，只保留当前的一个定时器执行
    clearInterval(obj.timer);

    obj.timer = setInterval(function () {

        if (obj.offsetLeft === target) {
            clearInterval(obj.timer);
            /*
                        if (callback) {
                            callback();
                        }
            */
            callback && callback(); // 逻辑中断，简单写法
        }
        let step = (target - obj.offsetLeft) / 5;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        obj.style.left = obj.offsetLeft + step + 'px';

    }, 10)

}

// window滚动动画
function animateY(obj, target, callback) {
    // 防止反复点击按钮，先清除以前的定时器，只保留当前的一个定时器执行
    clearInterval(obj.timer);

    obj.timer = setInterval(function () {

        if (obj.pageYOffset === target) {
            // 动画效果执行完毕，停止计时器
            clearInterval(obj.timer);

            callback && callback(); // 逻辑中断，简单写法
        }

        let step = (target - obj.pageYOffset) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);

        obj.scroll(0, obj.pageYOffset + step);

    }, 10)

}
