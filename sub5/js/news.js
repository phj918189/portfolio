// 
$('.content_area>ul li a:eq(0)').show(); // 첫번째 탭 내용만 열어라
//자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***
// console.log(show)
$('.content_area>ul li a').each(function (index) {  // index=0 1 2
$(this).click(function(e){
e.preventDefault();   // <a> href="#" 값을 강제로 막는다    


$(".table, .modal_popup").hide(); //모든 탭내용을 안보이게...
$(".modal_popup:eq("+index+")").show(); //클릭한 해당 탭내용만 보여라
$('.content_area>ul li a').removeClass('active'); //모든 탭메뉴를 비활성화
$(this).addClass('active'); // 클릭한 해당 탭메뉴만 활성화

});
});
