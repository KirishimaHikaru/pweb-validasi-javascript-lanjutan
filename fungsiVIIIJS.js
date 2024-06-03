function nimValidation() {
  var nim = document.getElementById("nim").value;
  var minLength = 10;

  if (nim.length != minLength) {
    alert("NIM harus lengkap, sama dengan 10 digit!");
  } else {
    return true;
  }
}

function emailValidation() {
  const emailInput = document.getElementById("email").value;
  const allowedDomain = "webmail.uad.ac.id";

  if (!emailInput.endsWith("@" + allowedDomain)) {
    alert("Email tidak valid. Harap isi dan gunakan domain yang sesuai.");
  } else {
    return true;
  }
}

function jurusanValidation() {
  const fakultasInput = document.getElementById("fakultas").value;
  const prodiInput = document.getElementById("prodi").value;

  if (fakultasInput == "-" && prodiInput == "-") {
    alert("Pilih fakultas dan prodi terlebih dahulu!");
  } else if (prodiInput == "-") {
    alert("Pilih prodi terlebih dahulu!");
  } else if (fakultasInput == "-") {
    alert("Pilih fakultas terlebih dahulu!");
  } else {
    return true;
  }
}

function agreementValidation() {
  const agreementInput = document.getElementById("konfirm").checked;
  if (!agreementInput) {
    alert("Harap centang pernyataan!");
  } else {
    return true;
  }
}

/*
      FUNCTION UNDER CONSTRUCTION!
      function allFilled(){
         const namaInput = document.getElementsById('namaAwal').value;
         const nimInput = document.getElementsById('nim').value;
         const umurInput = document.getElementsById('umur').value;
         const alamatInput = document.getElementsById('alamat').value;
         const kelaminInput = document.getElementsByClassName('kelamin').value;

         return namaInput.value.trim() !== '' &&
                umurInput.value.trim() !== '' &&
                alamatInput.value.trim() !== '';
      }
*/
function allValid() {
  // return true;
  return (
    nimValidation() &&
    emailValidation() &&
    jurusanValidation() &&
    agreementValidation()
  );
  // return allFilled();
}

const myForm = document.getElementById("formulir");
myForm.addEventListener("submit", function (event) {
  event.preventDefault();
  if (allValid()) {
    alert(
      "Terima kasih telah mengisi formulir ini. Data anda akan kami proses."
    );
    document.getElementById("formulir").submit();
  }
  if (allValid()) {
    showData();
  }
});

function showData() {
  var namaA = document.getElementById("namaAwal").value;
  var namaB = document.getElementById("namaAkhir").value;
  var nim = document.getElementById("nim").value;
  var email = document.getElementById("email").value;
  var fakultas = document.getElementById("fakultas").value;
  var prodi = document.getElementById("prodi").value;
  var umur = document.getElementById("umur").value;
  var alamat = document.getElementById("alamat").value;
  var kelamin = document.querySelector('input[name="kelamin"]:checked').value;
  var konfirm = document.getElementById("konfirm").value;

  confirm(
    "Konfirmasi data, apakah sudah benar semua?\n\n" +
      "Data yang telah direkam sebagai berikut:\n" +
      "Nama : " +
      namaA +
      " " +
      namaB +
      "\n" +
      "NIM : " +
      nim +
      "\n" +
      "Email : " +
      email +
      "\n" +
      "Fakultas : " +
      fakultas +
      "     " +
      "Prodi : " +
      prodi +
      "\n" +
      "Umur : " +
      umur +
      "\n" +
      "Jenis Kelamin : " +
      kelamin +
      "\n" +
      "Alamat : " +
      alamat +
      "\n"
  );
}
