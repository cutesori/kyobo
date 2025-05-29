window.onload = function () {

    // 북카드
    var swiper = new Swiper(".mySwiperbookcard", {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    //함께 구매한 상품 
    var swiper = new Swiper(".mySwiperproduct", {
        slidesPerView: 6,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,

        }, scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
        }
    });


    //라이프
    var swiper = new Swiper(".mySwiperlife", {
        slidesPerView: 6,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,

        }, scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
        }
    });


    //기분좋은 발견
    var swiper = new Swiper(".mySwiperfound", {
        slidesPerView: 1.3,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,

        }, scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
        }
    });

    //작가 정보의 스크롤
    var swiper = new Swiper(".mySwiperau", {
        slidesPerView: 6,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,

        }, scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
        }
    });



    // API 가져오기 fetch
    async function fetchBooks(query) {
        const params = new URLSearchParams({
            target: "title",
            query,
            size: 50,
        });
        const url = `https://dapi.kakao.com/v3/search/book?${params}`;

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Authorization: "KakaoAK dea026a9cd34d89b629fd0115d3565b7"
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP 오류: ${response.status}`);
        }

        return response.json();
    }

    async function bookData() {
        try {

            // 함께 구매한 상품-도서
            const querys = ['유시민'];

            querys.forEach(async (query, i) => {
                const data = await fetchBooks(query);

                //썸네일이 빈 문자열인것은 제외
                const origin = data.documents;
                let book = origin.filter((val) => {
                    return val.thumbnail != '' && val.contents != '';
                })

                // for문 (8개)

                for (let j = 0; j < 13; j++) {

                    let titleT = book[j].title;
                    let str = titleT.substring(0, 10);
                    $('.product .probox').eq(j).append(`
                                <img src="${book[j].thumbnail}"/>
                                <h5>${str}</h5>
                                <h6>${book[j].authors}</h6>
                                <h3>${book[j].price}</h3>
                            `);

                }
            })

            // 함께 구매한 상품-라이프
            const lifes = ['요리'];

            lifes.forEach(async (query, i) => {
                const data = await fetchBooks(query);

                //썸네일이 빈 문자열인것은 제외
                const origin = data.documents;
                let book = origin.filter((val) => {
                    return val.thumbnail != '' && val.contents != '';
                })

                // for문 (8개)

                for (let j = 0; j < 13; j++) {

                    let titleT = book[j].title;
                    let str = titleT.substring(0, 10);
                    $('.life .probox').eq(j).append(`
                                <img src="${book[j].thumbnail}"/>
                                <h5>${str}</h5>
                                
                                <h3>${book[j].price}</h3>
                            `);

                }
            })

            // 이분야의 베스트
            const best = ['도시락'];

            best.forEach(async (query, i) => {
                const data = await fetchBooks(query);

                //썸네일이 빈 문자열인것은 제외
                const origin = data.documents;
                let book = origin.filter((val) => {
                    return val.thumbnail != '' && val.contents != '';
                })

                // for문

                for (let j = 0; j < 13; j++) {

                    let titleT = book[j].title;
                    let str = titleT.substring(0, 20);
                    $('.Bestcontent').eq(j).append(`
                                <img src="${book[j].thumbnail}"/>
                            <div class='Bc-box'>
                                <div class="numberbest">${j + 1}</div>
                                <h5>${str}</h5>
                                <h6>${book[j].authors}</h6>
                                <h3>${book[j].price}</h3>
                            </div>
                        `);

                }
            })

            // 이분야의 신간
            const news = ['채식'];

            news.forEach(async (query, i) => {
                const data = await fetchBooks(query);

                //썸네일이 빈 문자열인것은 제외
                const origin = data.documents;
                let book = origin.filter((val) => {
                    return val.thumbnail != '' && val.contents != '';
                })

                // for문

                for (let j = 0; j < 13; j++) {

                    let titleT = book[j].title;
                    let str = titleT.substring(0, 20);
                    $('.Bestcontent2').eq(j).append(`
                                <img src="${book[j].thumbnail}"/>
                            <div class='Bc-box'>
                                <h5>${str}</h5>
                                <h6>${book[j].authors}</h6>
                                <h3>${book[j].price}</h3>
                            </div>
                        `);

                }
            })

            // 작가정보의 책 스크롤
            const queryau = ['김영하'];

            queryau.forEach(async (query, i) => {
                const data = await fetchBooks(query);

                //썸네일이 빈 문자열인것은 제외
                const origin = data.documents;
                let book = origin.filter((val) => {
                    return val.thumbnail != '' && val.contents != '';
                })

                // for문

                for (let j = 0; j < 13; j++) {

                    let titleT = book[j].title;
                    let str = titleT.substring(0, 20);
                    $('.aubox').eq(j).append(`
                                <img src="${book[j].thumbnail}"/>
                                <h5>${str}</h5>
                            `);

                }
            })

        } catch (error) {
            console.log('에러발생', error);
        }
    }
    bookData();
};

//  $(function () {
//             $.get("./txt/bookintro.txt", function (data) {
//                 $("#tmpBox").html(data);
//             })
//             $.get("./txt/Clist.txt", function (data2) {
//                 $("#tmpBox3").html(data2);
//             })

//         });


document.addEventListener("DOMContentLoaded", async function () {
    try {
        // 책소개
        const response = await fetch("./txt/bookintro.txt");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.text();
        document.getElementById("tmpBox").innerHTML = data;

        // 작가 소개
        const response2 = await fetch("./txt/author.txt");
        if (!response2.ok) {
            throw new Error("Network response was not ok");
        }
        const data2 = await response2.text();
        document.getElementById("tmpBox2").innerHTML = data2;

        // 목차
        const response3 = await fetch("./txt/Clist.txt");
        if (!response3.ok) {
            throw new Error("Network response was not ok");
        }
        const data3 = await response3.text();
        document.getElementById("tmpBox3").innerHTML = data3;

        // 책속으로
        const response4 = await fetch("./txt/intothebook.txt");
        if (!response4.ok) {
            throw new Error("Network response was not ok");
        }
        const data4 = await response4.text();
        document.getElementById("tmpBox4").innerHTML = data4;

        // 출판사 서평
        const response5 = await fetch("./txt/pub.txt");
        if (!response5.ok) {
            throw new Error("Network response was not ok");
        }
        const data5 = await response5.text();
        document.getElementById("tmpBox5").innerHTML = data5;


    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
    }
});

// 3D책
$('.box3D').click(function(){
    $(this).toggleClass('rotate');                        
});

// // 펼치기 토글
// $('.hide_txt').click(function () {
//     const $box = $('#tmpBox3'); // 불러온 텍스트가 들어간 곳
//     const $icon = $(this).find('i');
//     const $label = $(this).find('span');

//     $box.toggleClass('open'); // 클래스로 펼치기 / 접기 제어

//     if ($box.hasClass('open')) {
//         $label.text('접기');
//         $icon.removeClass('fa-angle-down').addClass('fa-angle-up');
//     } else {
//         $label.text('펼쳐보기');
//         $icon.removeClass('fa-angle-up').addClass('fa-angle-down');
//     }
// });

// 펼치기 기능
$('.hide_txt').click(function () {
  const $container = $(this).closest('div');  // 가장 가까운 div 찾기 (Clist, intothebook, pub)
  const $box = $container.find('.hidden_box').first(); // 해당 div 내 hidden_box 찾기
  const $icon = $(this).find('i');
  const $label = $(this).find('span');

  $box.toggleClass('open');

  if ($box.hasClass('open')) {
    $label.text('접기');
    $icon.removeClass('fa-angle-down').addClass('fa-angle-up');
  } else {
    $label.text('펼쳐보기');
    $icon.removeClass('fa-angle-up').addClass('fa-angle-down');
  }
});
// 리뷰 별점
document.querySelectorAll('.review-stars').forEach(star => {
  const rating = parseFloat(star.dataset.rating) || 0;
  star.style.setProperty('--rating', `${rating * 20}%`);
});

// 리뷰 전체 탭
$('.tab-buttons li').click(function () {
  const target = $(this).data('tab');

  // 버튼 active 클래스 변경
  $('.tab-buttons li').removeClass('active');
  $(this).addClass('active');

  // 탭 내용 전환
  $('.tab-content').removeClass('active');
  $('#' + target).addClass('active');
});
