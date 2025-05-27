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

    
    // //라이프
    // var swiper = new Swiper(".mySwiperlife", {
    //     slidesPerView: 6,
    //     spaceBetween: 30,
    //     pagination: {
    //         el: ".swiper-pagination",
    //         clickable: true,

    //     }, scrollbar: {
    //         el: ".swiper-scrollbar",
    //         hide: false,
    //     }
    // });


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
            const querys = ['김영하'];

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
                    $('.probox').eq(j).append(`
                                <img src="${book[j].thumbnail}"/>
                                <h5>${str}</h5>
                                <h6>${book[j].authors}</h6>
                                <h3>${book[j].price}</h3>
                            `);

                }
            })
        } catch (error) {
            console.log('에러발생', error);
        }
    }
    bookData();

};


