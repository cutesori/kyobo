$(document).ready(function () {

  //맨위 큰 배너 자동 슬라이드
  var autoswiper = new Swiper(".automySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      loop: true,
      effect: 'fade',
    },

  });
  // 큰 배너 옆 광고 슬라이드
  var swiper = new Swiper(".miniSwiper", {
    navigation: {
      nextEl: ".mini-next",
      prevEl: ".mini-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderCustom: function (swiper, current, total) {
        // 01, 02처럼 앞에 0 붙이기
        const formatNumber = (n) => n < 10 ? '0' + n : n;
        return `<span>${formatNumber(current)} - ${formatNumber(total)}</span>`;
      },
    },
  });
  // 맨 아래 이벤트의 정성 부분
  var swiperevent = new Swiper(".mySwiperevent", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    speed: 700,
    navigation: {
      nextEl: ".swiper-button-next-event",
      prevEl: ".swiper-button-prev-event",
    },
  });
});


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

      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 6,
        spaceBetween: 30,
        slidesPerGroup: 6,
        speed: 700,
        navigation: {
          nextEl: ".swiper-button-next0",
          prevEl: ".swiper-button-prev0",
        },
      });
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

      var swiper1 = new Swiper(".mySwiper1", {
        slidesPerView: 6,
        spaceBetween: 30,
        slidesPerGroup: 6,
        speed: 700,
        navigation: {
          nextEl: ".swiper-button-next1",
          prevEl: ".swiper-button-prev1",
        },
      });
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


      var swiper2 = new Swiper(".mySwiper2", {
        slidesPerView: 6,
        spaceBetween: 30,
        slidesPerGroup: 6,
        speed: 700,
        navigation: {
          nextEl: ".swiper-button-next2",
          prevEl: ".swiper-button-prev2",
        },
      });
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

      var swiper3 = new Swiper(".mySwiper3", {
        slidesPerView: 6,
        spaceBetween: 30,
        slidesPerGroup: 6,
        speed: 700,
        navigation: {
          nextEl: ".swiper-button-next3",
          prevEl: ".swiper-button-prev3",
        },
      });
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

      var swiper4 = new Swiper(".mySwiper4", {
        slidesPerView: 6,
        spaceBetween: 30,
        slidesPerGroup: 6,
        speed: 700,
        navigation: {
          nextEl: ".swiper-button-next4",
          prevEl: ".swiper-button-prev4",
        },
      });
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

// cast 파트

const queriescast = [
  { query: "A", targetId: "#cast" }
];

queriescast.forEach((item) => {
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

    data.forEach(book => {
      const temp = `      
            <div class="book">
              <img src="${book.thumbnail}" alt="${book.title}" />
              <strong>${book.title}</strong>
            </div>`;
      $(item.targetId).append(temp);

      var swiperevent = new Swiper(".mySwipercast", {
        slidesPerView: 2,
        spaceBetween: 30,
        slidesPerGroup: 5,
        speed: 700,
        navigation: {
          nextEl: ".swiper-button-next-cast",
          prevEl: ".swiper-button-prev-cast",
        },
      });
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
              <div>
              <strong>${book.title}</strong>
                <p>${book.contents}</p>
                
              </div>
              
            </div>
          </div>`;
      $(item.targetId).append(temp);

      var swiperevent = new Swiper(".todayswiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 700,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next-today",
          prevEl: ".swiper-button-prev-today",
        },
      });

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
    console.log(data);
    data.forEach(book => {
      const temp = `      
          <div class="swiper-slide">
            <div class="book">
              <img src="${book.thumbnail}" alt="${book.title}" />

            </div>
          </div>`;
      $(item.targetId).append(temp);

      var swiperevent = new Swiper(".todayswiper2", {
        initialSlide: 1,
        slidesPerView: 3,
        spaceBetween: 30,
        speed: 700,
        loop: true,

        navigation: {
          nextEl: ".swiper-button-next-today",
          prevEl: ".swiper-button-prev-today",
        },
      });
    });
  });
});

