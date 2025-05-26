$(document).ready(function () {
  // 카테고리 첫번째 탭부분

  $('#tab2').css({ 'background-color': '#e9e9e9', 'color': '#6b6b6b' });
  $('#tab1').css({ 'background-color': 'white', 'color': 'black' });

  $("#tab1").show();

  $("#tab2").click(function () {

    $(".servicetab").show();

    $(".cate, .sub_list_wrap").hide();

    $('#tab1').css({ 'background-color': '#e9e9e9', 'color': '#6b6b6b' });
    $('#tab2').css({ 'background-color': 'white', 'color': 'black' });

    $(".servicetab").addClass("active");

    $(".cate, .sub_list_wrap").removeClass("active");

  });

  $("#tab1").click(function () {

    $(".cate, .sub_list_wrap").show();

    $(".servicetab, .EBOOK, .SAM, .HOTTRACK").hide();

    $('#tab2').css({ 'background-color': '#e9e9e9', 'color': '#6b6b6b' });
    $('#tab1').css({ 'background-color': 'white', 'color': 'black' });

    $(".cate, .sub_list_wrap").addClass("active");

    $(".servicetab").removeClass("active");

  });

  // 카테고리 2번째 부분
  $(".EBOOK, .SAM, .HOTTRACK").hide();

  $(".main1").click(function () {

    $(".KYOBO").show();

    $(".EBOOK, .SAM, .HOTTRACK").hide();

    $(".main1").addClass("active");

    $(".EBOOK, .SAM, .HOTTRACK").removeClass("active");

  });

  $(".main2").click(function () {

    $(".EBOOK").show();

    $(".KYOBO, .SAM, .HOTTRACK").hide();

    $(".main2").addClass("active");

    $(".KYOBO, .SAM, .HOTTRACK").removeClass("active");

  });

  $(".main3").click(function () {

    $(".SAM").show();

    $(".KYOBO, .EBOOK, .HOTTRACK").hide();

    $(".main3").addClass("active");

    $(".KYOBO, .EBOOK, .HOTTRACK").removeClass("active");

  });

  $(".main4").click(function () {

    $(".HOTTRACK").show();

    $(".KYOBO, .SAM, .EBOOK").hide();

    $(".main4").addClass("active");

    $(".KYOBO, .SAM, .EBOOK").removeClass("active");

  });

  // 카테고리 3번째 부분
  $(".left1").click(function () {

    $(".koreabook").show();

    $(".westernbook, .japanbook, .kyobobook").hide();

    $(".koreabook").addClass("active");

    $(".westernbook, .japanbook, .kyobobook").removeClass("active");

  });

  $(".left2").click(function () {

    $(".westernbook").show();

    $(".koreabook, .japanbook, .kyobobook").hide();

    $(".westernbook").addClass("active");

    $(".koreabook, .japanbook, .kyobobook").removeClass("active");

  });

  $(".left3").click(function () {

    $(".japanbook").show();

    $(".koreabook, .westernbook, .kyobobook").hide();

    $(".japanbook").addClass("active");

    $(".koreabook, .westernbook, .kyobobook").removeClass("active");

  });

  $(".left4").click(function () {

    $(".kyobobook").show();

    $(".koreabook, .japanbook, .westernbook").hide();

    $(".kyobobook").addClass("active");

    $(".koreabook, .japanbook, .westernbook").removeClass("active");


    
  });


  $(function () {

    $('.toggle_btn').click(function () {

      $('.whole').stop().fadeToggle('fast');

    })


  });


});
