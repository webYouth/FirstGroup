  function(){
        var mySwiper = new Swiper ('.swiper-container', {
        // direction: 'horizental',
        loop: true,
        
        // 如果需要分页器
        pagination: '.swiper-pagination'
        
        // // 如果需要前进后退按钮
        // nextButton: '.swiper-button-next',
        // prevButton: '.swiper-button-prev',
        
        // // 如果需要滚动条
        // scrollbar: '.swiper-scrollbar',
      })
      $.ajax({
        url:"",
        sycn:true,
        dataType:"json",
        success:function(data){
            var shuju = data.data;
            var str = "";
            for(var i = 0; i<shuju.length;i++){
                 str += '<div class="swiper-slide"></div>';
                str += '<div class="swiper-slide"></div>';
                str += '<div class="swiper-slide"></div>';
            }
        }
      });
      var oPage = $('.swiper-slide');
      for(var i = 0;i<oPage.length;i++){
        if(oPage[i].hasClass("swiper-slide-active")){
            $('.now').html($('.swiper-slide-active').attr('data-swiper-slide-index')+1);
        }
      }

  }();
  













































