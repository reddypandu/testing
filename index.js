$('ul li').on('click', function(e) {
    e.preventDefault();
    $(".p1.active").removeClass('active');
    $(".p1").eq($(this).index()).addClass('active')
  });