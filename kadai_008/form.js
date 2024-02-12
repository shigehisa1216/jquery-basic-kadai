$(function(){
  // class属性がcheckの要素がクリックされたら
  $('.btn').on('click', function () {
    // テキストボックスへ文字を表示
    $('.text-box').val("クリックしました！");    
  });
});
