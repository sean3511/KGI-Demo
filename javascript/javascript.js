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

    $(document).ready(function () {
        // 当点击.bgtn1时
        $('.bg1 .bgtn1').click(function () {
            // 移除其他所有.bgtn1的'selected'类，并给当前点击的.bgtn1添加'selected'类
            $('.bg1 .bgtn1').removeClass('selected');
            $(this).addClass('selected');
            
            // 获取data-slide-to属性的值，并触发轮播到对应的项
            var slideIndex = $(this).data('slide-to');
            $('#myCarousel').carousel(slideIndex);
        });
    
        // 当轮播项开始滑动时，这里可以保持空，因为.bgtn1的'selected'状态在点击时已经更新
        $('#myCarousel').on('slide.bs.carousel', function (e) {
            // 不需要在这里移除.bgtn1的'selected'类
        });
    
        // 当轮播项完成滑动时，确认同步.bgtn1的'selected'状态
        $('#myCarousel').on('slid.bs.carousel', function (e) {
            // 获取当前激活的轮播项的索引
            var activeIndex = $(this).find('.carousel-item.active').index();
            // 移除所有.bgtn1的'selected'类，并给对应的.bgtn1添加'selected'类
            $('.bg1 .bgtn1').removeClass('selected');
            $('.bg1 .bgtn1').eq(activeIndex).addClass('selected');
        });
    
        // 页面加载完成后，如果需要，可以在这里同步.bgtn1的'selected'状态以匹配当前激活的.carousel-item
        var initialActiveIndex = $('#myCarousel .carousel-item.active').index();
        $('.bg1 .bgtn1').eq(initialActiveIndex).addClass('selected');
    });

    $(document).ready(function () {
        // 当点击.bgtn1时
        $('.bg2 .bgtn2').click(function () {
            // 移除其他所有.bgtn1的'selected'类，并给当前点击的.bgtn1添加'selected'类
            $('.bg2 .bgtn2').removeClass('selected');
            $(this).addClass('selected');
            
            // 获取data-slide-to属性的值，并触发轮播到对应的项
            var slideIndex = $(this).data('slide-to');
            $('#my2Carousel').carousel(slideIndex);
        });
    
        // 当轮播项开始滑动时，这里可以保持空，因为.bgtn1的'selected'状态在点击时已经更新
        $('#my2Carousel').on('slide.bs.carousel', function (e) {
            // 不需要在这里移除.bgtn1的'selected'类
        });
    
        // 当轮播项完成滑动时，确认同步.bgtn1的'selected'状态
        $('#my2Carousel').on('slid.bs.carousel', function (e) {
            // 获取当前激活的轮播项的索引
            var activeIndex = $(this).find('.carousel-item.active').index();
            // 移除所有.bgtn1的'selected'类，并给对应的.bgtn1添加'selected'类
            $('.bg2 .bgtn2').removeClass('selected');
            $('.bg2 .bgtn2').eq(activeIndex).addClass('selected');
        });
    
        // 页面加载完成后，如果需要，可以在这里同步.bgtn1的'selected'状态以匹配当前激活的.carousel-item
        var initialActiveIndex = $('#my2Carousel .carousel-item.active').index();
        $('.bg2 .bgtn2').eq(initialActiveIndex).addClass('selected');
    });



    $(document).ready(function () {
        // 当点击.bgtn1时
        $('.bg3 .bgtn3').click(function () {
            // 移除其他所有.bgtn1的'selected'类，并给当前点击的.bgtn1添加'selected'类
            $('.bg3 .bgtn3').removeClass('selected');
            $(this).addClass('selected');
            
            // 获取data-slide-to属性的值，并触发轮播到对应的项
            var slideIndex = $(this).data('slide-to');
            $('#my3Carousel').carousel(slideIndex);
        });
    
        // 当轮播项开始滑动时，这里可以保持空，因为.bgtn1的'selected'状态在点击时已经更新
        $('#my3Carousel').on('slide.bs.carousel', function (e) {
            // 不需要在这里移除.bgtn1的'selected'类
        });
    
        // 当轮播项完成滑动时，确认同步.bgtn1的'selected'状态
        $('#my3Carousel').on('slid.bs.carousel', function (e) {
            // 获取当前激活的轮播项的索引
            var activeIndex = $(this).find('.carousel-item.active').index();
            // 移除所有.bgtn1的'selected'类，并给对应的.bgtn1添加'selected'类
            $('.bg3 .bgtn3').removeClass('selected');
            $('.bg3 .bgtn3').eq(activeIndex).addClass('selected');
        });
    
        // 页面加载完成后，如果需要，可以在这里同步.bgtn1的'selected'状态以匹配当前激活的.carousel-item
        var initialActiveIndex = $('#my2Carousel .carousel-item.active').index();
        $('.bg3 .bgtn3').eq(initialActiveIndex).addClass('selected');
    });

    