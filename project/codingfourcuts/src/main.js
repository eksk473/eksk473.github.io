//인앱 탈출
window.onload = function () {
  if (
    navigator.userAgent.match(
      /inapp|NAVER|KAKAOTALK|Snapchat|Line|WirtschaftsWoche|Thunderbird|Instagram|everytimeApp|WhatsApp|Electron|wadiz|AliApp|zumapp|iPhone(.*)Whale|Android(.*)Whale|kakaostory|band|twitter|DaumApps|DaumDevice\/mobile|FB_IAB|FB4A|FBAN|FBIOS|FBSS|SamsungBrowser\/[^1]/i
    )
  ) {
    document.body.innerHTML = "";
    location.href =
      "intent://" +
      location.href.replace(/https?:\/\//i, "") +
      "#Intent;scheme=http;package=com.android.chrome;end";
    alert(location.href);
  }
  //   if (navigator.userAgent.match(/iPhone|iPad/i)) {
  //     location.href =
  //       "ftp://도메인/bridge.html?_targeturl=" + location.href;
  //   } else {
  // }
};

//img 등록
$(".upload-img").change(function (e) {
  var cuts = e.target.parentElement.parentElement;
  var files = e.target.files;
  var arr = Array.prototype.slice.call(files);

  //업로드 가능 파일인지 체크
  for (var i = 0; i < files.length; i++) {
    if (!checkExtension(files[i].name, files[i].size)) {
      return false;
    }
  }
  preview(arr);

  function checkExtension(fileName, fileSize) {
    var regex = new RegExp("(.*?).(exe|sh|zip|alz)$");
    var maxSize = 20971520; //20MB

    if (fileSize >= maxSize) {
      alert("이미지 크기가 초과되었습니다.");
      $(".upload-img").val(""); //파일 초기화
      return false;
    }

    if (regex.test(fileName)) {
      alert("확장자명을 확인해주세요.");
      $(".upload-img").val(""); //파일 초기화
      return false;
    }
    return true;
  }

  function preview(arr) {
    arr.forEach(function (f) {
      //div에 이미지 추가
      var str = "<div class=" + "preview" + ">";

      //이미지 파일 미리보기
      if (f.type.match("image.*")) {
        //파일을 읽기 위한 FileReader객체 생성
        var reader = new FileReader();
        reader.onload = function (e) {
          //파일 읽어들이기를 성공했을때 호출되는 이벤트 핸들러
          str += '<img src="' + e.target.result + '" title="' + f.name + '" />';
          str += '<span class="delBtn" onclick="delImg(this)"></span>';
          str += "</div>";
          $(str).appendTo(cuts);
        };
        reader.readAsDataURL(f);
      } else {
        alert("오류 발생");
      }
    });
  }
});

//img 삭제
function delImg(e) {
  $(e).parent("div").remove();
  $(".upload-img").val("");
}

// frame 배경색 변경
function BGcolorChange() {
  document.getElementById("frame").style.backgroundColor =
    document.getElementById("BGcolor").value;
}

// frame 글씨색 변경
function TXTcolorChange() {
  $(".txt").css("background-color", $("#TXTcolor").val());
}

//frame 다운로드
function saveAs(url, fileName) {
  const link = document.createElement("a");

  link.href = url;

  link.download = fileName;

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);
}

//frame 스크린샷
function makeDivToImageFile() {
  const captureDiv = document.getElementById("frame");

  if ($(".preview").length == 4) {
    html2canvas(captureDiv, {
      allowTaint: true,

      useCORS: true,

      /* canvas의 크기 지정. */
      width: captureDiv.offsetWidth,

      height: captureDiv.offsetHeight,

      scale: 3,
    })
      .then(function (canvas) {
        const imageURL = canvas.toDataURL("image/jpeg");

        saveAs(imageURL, "codingfourcuts.jpg");
      })
      .catch(function (err) {
        console.log(err);
      });
  } else {
    alert("사진을 모두 등록해주세요^^");
  }
}

//download - func 실행
$(".download").click(function () {
  // 버튼 등을 이용해서 적당한 때 함수를 호출한다.
  makeDivToImageFile();
});
