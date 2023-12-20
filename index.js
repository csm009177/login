document.addEventListener('DOMContentLoaded', function() {
  const signUpForm = document.getElementById('signUp');
  
  signUpForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // 입력값 가져오기
    const id = document.getElementById('inputid').value;
    const pw = document.getElementById('inputpw').value;
    const mail = document.getElementById('inputmail').value;

    // JSON 형식으로 변환
    const userData = {
      id: id,
      pw: pw,
      mail: mail
    };

    // 서버에 데이터 전송
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/saveData', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(userData));
  });
});