
$(function(){
    function onScrollInit( items, trigger ) {
        items.each( function() {
        var element = $(this),
            animationClass = element.attr('data-animation'),
            animationDelay = element.attr('data-animation-delay');

            element.css({
                '-webkit-animation-delay':  animationDelay,
                '-moz-animation-delay':     animationDelay,
                'animation-delay':          animationDelay
            });

            var Trigger = ( trigger ) ? trigger : element;

            Trigger.waypoint(function() {
                element.addClass('animated').addClass(animationClass);
                },{
                    triggerOnce: true,
                    offset: '90%'
            });
        });
    }

    onScrollInit( $('.animation') );
    onScrollInit( $('.animation'), $('.animation-container') );
});
const glowEffect = document.querySelector('.glow-effect');



// 设置遮罩图像位置到新的值（例如，左上角）
function setMaskPosition(x, y) {
    glowEffect.style.maskPosition = `${x} ${y}`;
}

function adjustMaskSize() {
    const image = document.querySelector('.S1_gp_mainpic');
    const glowEffect = document.querySelector('.glow-effect');

    // 使用setTimeout确保图片尺寸已更新
    setTimeout(() => {
        // 获取图片的实际宽度和高度
        const rect = image.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        // 设置遮罩大小以匹配图片尺寸
        glowEffect.style.maskSize = `${width}px ${height}px`;

        // 确保遮罩位置与图片对齐
        glowEffect.style.top = `${image.offsetTop}px`;
        glowEffect.style.left = `${image.offsetLeft}px`;
    }, 0);
}

// 监听图片的load事件来调整遮罩
const image = document.querySelector('.S1_gp_mainpic');
if (image.complete) {
    adjustMaskSize(); // 如果图片已加载，直接调整遮罩
} else {
    image.addEventListener('load', adjustMaskSize); // 否则等待图片加载完成
}

// 监听窗口大小变化事件来调整遮罩