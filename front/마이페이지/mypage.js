/*
function loadFile(input) {
  var file = input.files[0];	//선택된 파일 가져오기

  //미리 만들어 놓은 div에 text(파일 이름) 추가
  var name = document.getElementById('fileName');
  name.textContent = file.name;

  //새로운 이미지 div 추가
  var newImage = document.createElement("img");
  newImage.setAttribute("class", 'img');

  //이미지 source 가져오기
  newImage.src = URL.createObjectURL(file);   

  newImage.style.width = "30%";
  newImage.style.height = "60%";
  //newImage.style.visibility = "hidden";   //버튼을 누르기 전까지는 이미지를 숨긴다
  newImage.style.objectFit = "contain";

  //이미지를 image-show div에 추가
  var container = document.getElementById('image-show');
  container.appendChild(newImage);
};
*/
//이미지 더보기 기능
var moreNum = 4;
$(".list li:nth-child(n + " + (moreNum + 1) + ")").addClass("is-hidden");
$(".view-but").on("click", function () {
  $(".list li.is-hidden").slice(0, moreNum).removeClass("is-hidden");
  if ($(".list li.is-hidden").length == 0) {
    $(".view-but").fadeOut();
  }
});