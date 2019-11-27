/**
 * 防抖函数
 * 使用场景：通常在 input 中需要连续输入值并且需要和后端交换数据的操作
 * 
 * 
 * @param {\} func 
 * @param {*} time 
 */


var debounce = function (func, time) {
    var timeout;
    return function(e) {
        clearTimeout(timeout); // 清除在 time 以内的定时器
        var self = this;
        var arg = arguments;
        console.log("新的",timeout, e.target.value)
        timeout = setTimeout(function() {
            func.apply(self, arg);
        }, time);
    }
}


var validate = debounce(function(e) {
    console.log("值===", e.target.value);
}, 380);


document.getElementById("test").addEventListener("input", validate);