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
  { query: "개정판", targetId: "#book1" },
  { query: "심리학", targetId: "#book2" },
  { query: "요즘", targetId: "#book3" },
  { query: "여행", targetId: "#book4" },
  { query: "바다", targetId: "#book5" },
  { query: "교양", targetId: "#book6" }
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

        <div class="swiper mySwiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">Slide 1</div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div>
      <div class="swiper-slide">Slide 4</div>
      <div class="swiper-slide">Slide 5</div>
      <div class="swiper-slide">Slide 6</div>
      <div class="swiper-slide">Slide 7</div>
      <div class="swiper-slide">Slide 8</div>
      <div class="swiper-slide">Slide 9</div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
        <div class="book">
          <img src="${book.thumbnail}" alt="${book.title}" />
          <strong>${book.title}</strong>
        </div>`;
      $(item.targetId).append(temp);
    });
  });
});

//bookbest
const queries2 = [
  { query: "한강", targetId: "#bookbest1" },
  { query: "한강", targetId: "#bookbest2" },
  { query: "한강", targetId: "#bookbest3" },
  { query: "한강", targetId: "#bookbest4" },
  { query: "한강", targetId: "#bookbest5" },
  { query: "한강", targetId: "#bookbest6" },
  { query: "한강", targetId: "#bookbest7" },
];

queries2.forEach((item) => {
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
       var besttitle= book.title.substring(0,13);
        // console.log(besttitle)

      const temp = `
        <div class="book2">
          <img src="${book.thumbnail}" alt="${besttitle}" />
          <div class="numberbest">${index+1}</div>
          <strong>${besttitle}</strong>
        </div>`;
      $(item.targetId).append(temp);
    });
  });
});
