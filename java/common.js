$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: {
    query: "The Scent of PAGE",
    size: 12,
    // sort: "accuracy"
  },
  headers: {
    Authorization: "KakaoAK dea026a9cd34d89b629fd0115d3565b7" // ← 여기도 너의 실제 키로 넣어야 함!
  }
})


  .done(function (msg) {
    console.log(msg);

    const origin = msg.documents;
    let data = origin.filter((val) => {
      return val.thumbnail !== '' && val.contents !== '';
    });

    for (var i = 0; i < data.length; i++) {
      var book = data[i];
      var temp = `
      <div>
        <img src="${book.thumbnail}" alt="${book.title}" />
        <strong>${book.title}</strong>
      </div>`;
      $(".scentarray").append(temp);
    }
  });



// bookslide

const queries = [
  { query: "여행", targetId: "#book1 .swiper-wrapper" },

];

queries.forEach((item) => {
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {
      query: item.query,
      size: 12
    },
    headers: {
      Authorization: "KakaoAK dea026a9cd34d89b629fd0115d3565b7"
    }
  }).done(function (msg) {
    const data = msg.documents.filter(val => val.thumbnail && val.contents);

    data.forEach(book => {
      const temp = `      
          <div class="swiper-slide">
            <div class="book">
              <img src="${book.thumbnail}" alt="${book.title}" />
              <strong>${book.title}</strong>
            </div>
          </div>`;
      $(item.targetId).append(temp);
    });
  });
});

// bookslide2 사람들이 많이 찾고있어요

const queries2 = [
  { query: "주식", targetId: "#bookmanylist .swiper-wrapper" },
];

queries2.forEach((item) => {
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {
      query: item.query,
      size: 12
    },
    headers: {
      Authorization: "KakaoAK dea026a9cd34d89b629fd0115d3565b7"
    }
  }).done(function (msg) {
    const data = msg.documents.filter(val => val.thumbnail && val.contents);

    data.forEach(book => {
      const temp = `      
          <div class="swiper-slide">
            <div class="book">
              <img src="${book.thumbnail}" alt="${book.title}" />
              <strong>${book.title}</strong>
            </div>
          </div>`;
      $(item.targetId).append(temp);
    });
  });
});

// bookslide3 교보문고가 만들었어요

const queries3 = [
  { query: "뭔데", targetId: "#bookmadelist .swiper-wrapper" },
];

queries3.forEach((item) => {
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {
      query: item.query,
      size: 12
    },



    headers: {
      Authorization: "KakaoAK dea026a9cd34d89b629fd0115d3565b7"
    }
  }).done(function (msg) {
    const data = msg.documents.filter(val => val.thumbnail && val.contents);

    data.forEach(book => {
      const temp = `      
          <div class="swiper-slide">
            <div class="book">
              <img src="${book.thumbnail}" alt="${book.title}" />
              <strong>${book.title}</strong>
            </div>
          </div>`;
      $(item.targetId).append(temp);
    });
  });
});

// bookslide4

const queries4 = [
  { query: "출판", targetId: "#bookpodlist .swiper-wrapper" },
];

queries4.forEach((item) => {
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {
      query: item.query,
      size: 12
    },
    headers: {
      Authorization: "KakaoAK dea026a9cd34d89b629fd0115d3565b7"
    }
  }).done(function (msg) {
    const data = msg.documents.filter(val => val.thumbnail && val.contents);

    data.forEach(book => {
      const temp = `      
          <div class="swiper-slide">
            <div class="book">
              <img src="${book.thumbnail}" alt="${book.title}" />
              <strong>${book.title}</strong>
            </div>
          </div>`;
      $(item.targetId).append(temp);
    });
  });
});

// book MD, 본상품이랑 비슷 슬라이더 아님

const queriesMD = [
  { query: "개정판", targetId: "#bookmdlist" },
  { query: "심리학", targetId: "#booksimilarlist" },

];

queriesMD.forEach((item) => {
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {
      query: item.query,
      size: 6
    },
    headers: {
      Authorization: "KakaoAK dea026a9cd34d89b629fd0115d3565b7"
    }
  }).done(function (msg) {
    const data = msg.documents.filter(val => val.thumbnail && val.contents);

    data.forEach(book => {
      const temp = `      
            <div class="book">
              <img src="${book.thumbnail}" alt="${book.title}" />
              <strong>${book.title}</strong>
            </div>`;
      $(item.targetId).append(temp);
    });
  });
});

//bookbest
const queriesbest = [
  { query: "한강", targetId: "#bookbest1" },
  { query: "한강", targetId: "#bookbest2" },
  { query: "한강", targetId: "#bookbest3" },
  { query: "한강", targetId: "#bookbest4" },
  { query: "한강", targetId: "#bookbest5" },
  { query: "한강", targetId: "#bookbest6" },
  { query: "한강", targetId: "#bookbest7" },
];

queriesbest.forEach((item) => {
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {
      query: item.query,
      size: 10
    },
    headers: {
      Authorization: "KakaoAK dea026a9cd34d89b629fd0115d3565b7"
    }
  }).done(function (msg) {
    const data = msg.documents.filter(val => val.thumbnail && val.contents);

    data.forEach((book, index) => {
      var besttitle = book.title.substring(0, 13);
      // console.log(besttitle)

      const temp = `
        <div class="book2">
          <img src="${book.thumbnail}" alt="${besttitle}" />
          <div class="numberbest">${index + 1}</div>
          <strong>${besttitle}</strong>
        </div>`;
      $(item.targetId).append(temp);
    });
  });
});

// ai 추천 파트

const queriesAI = [
  { query: "개정판", targetId: "#bookAIlist" }
];

queriesAI.forEach((item) => {
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {
      query: item.query,
      size: 4
    },
    headers: {
      Authorization: "KakaoAK dea026a9cd34d89b629fd0115d3565b7"
    }
  }).done(function (msg) {
    const data = msg.documents.filter(val => val.thumbnail && val.contents);

    data.forEach(book => {
      const temp = `      
            <div class="book">
              <img src="${book.thumbnail}" alt="${book.title}" />
              <strong>${book.title}</strong>
            </div>`;
      $(item.targetId).append(temp);
    });
  });
});

// ai 추천 파트

const queriescast = [
  { query: "개정판", targetId: "#bookCastlist" }
];

queriescast.forEach((item) => {
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {
      query: item.query,
      size: 15
    },
    headers: {
      Authorization: "KakaoAK dea026a9cd34d89b629fd0115d3565b7"
    }
  }).done(function (msg) {
    const data = msg.documents.filter(val => val.thumbnail && val.contents);

    data.forEach(book => {
      const temp = `      
            <div class="book">
              <img src="${book.thumbnail}" alt="${book.title}" />
              <strong>${book.title}</strong>
            </div>`;
      $(item.targetId).append(temp);
    });
  });
});


// 오늘의 선택 슬라이더

const queriestoday = [
  { query: "주식", targetId: "#today .swiper-wrapper" },
];

queriestoday.forEach((item) => {
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {
      query: item.query,
      size: 12
    },
    headers: {
      Authorization: "KakaoAK dea026a9cd34d89b629fd0115d3565b7"
    }
  }).done(function (msg) {
    const data = msg.documents.filter(val => val.thumbnail && val.contents);

    data.forEach((book, index) => {
      var today = book.contents.substring(0, 10);

      // data.forEach(book => {

      const temp = `      
          <div class="swiper-slide">
            <div class="book">
              <img src="${book.thumbnail}" alt="${book.title}" />
              <p>${book.contents}</p>
              <strong>${book.title}</strong>
            </div>
          </div>`;
      $(item.targetId).append(temp);

    });
  });
});


const queriestoday2 = [
  { query: "주식", targetId: "#today2 .swiper-wrapper" },
];

queriestoday2.forEach((item) => {
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {
      query: item.query,
      size: 12
    },
    headers: {
      Authorization: "KakaoAK dea026a9cd34d89b629fd0115d3565b7"
    }
  }).done(function (msg) {
    const data = msg.documents.filter(val => val.thumbnail && val.contents);

    data.forEach(book => {
      const temp = `      
          <div class="swiper-slide">
            <div class="book">
              <img src="${book.thumbnail}" alt="${book.title}" />
              <strong>${book.title}</strong>
            </div>
          </div>`;
      $(item.targetId).append(temp);
    });
  });
});


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
