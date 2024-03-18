    // 切換手機ham
    $(".btn_ham").click(function() {
        $(".mobile-overlay").fadeIn(300); // 切换淡入淡出
    });
    $(".btn_cross").click(function() {
        $(".mobile-overlay").fadeOut(300); // 切换淡入淡出
    });
    // 設定手機菜單出現尺寸
    $(window).on('resize', function() {
        var width = $(window).width();
        if (width > 1024) {
            $(".mobile-overlay").hide();
        }
    });
    // Smooth scroll to top
    function scrollToTop() {
        scrollToTopAnimation();
    }

    function scrollToTopAnimation() {
        var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0) {
            var nextScroll = currentScroll - (currentScroll / 16);
            window.requestAnimationFrame(function() {
                window.scrollTo(0, nextScroll);
                if (nextScroll > 0) {
                    scrollToTopAnimation();
                }
            });
        }
    }

    // 關於切換label
    document.addEventListener('DOMContentLoaded', function() {
        // 获取所有的.Btn元素
        const btns = document.querySelectorAll('.bg1 .bgtn1');
    
        // 为每个按钮添加点击事件监听器
        btns.forEach(function(btn) {
            btn.addEventListener('click', function() {
                // 先移除所有按钮的'selected'类
                btns.forEach(b => b.classList.remove('selected'));
                
                // 给被点击的按钮添加'selected'类
                btn.classList.add('selected');
            });
        });
    });

    document.addEventListener('DOMContentLoaded', function() {
        // 获取所有的.Btn元素
        const btns = document.querySelectorAll('.bg2 .bgtn2');
    
        // 为每个按钮添加点击事件监听器
        btns.forEach(function(btn) {
            btn.addEventListener('click', function() {
                // 先移除所有按钮的'selected'类
                btns.forEach(b => b.classList.remove('selected'));
                
                // 给被点击的按钮添加'selected'类
                btn.classList.add('selected');
            });
        });
    });

    document.addEventListener('DOMContentLoaded', function() {
        // 获取所有的.Btn元素
        const btns = document.querySelectorAll('.bg3.bgtn3');
    
        // 为每个按钮添加点击事件监听器
        btns.forEach(function(btn) {
            btn.addEventListener('click', function() {
                // 先移除所有按钮的'selected'类
                btns.forEach(b => b.classList.remove('selected'));
                
                // 给被点击的按钮添加'selected'类
                btn.classList.add('selected');
            });
        });
    });