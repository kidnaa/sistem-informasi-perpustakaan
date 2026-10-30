function tambahBuku() {
 const input = document.getElementById("nama-buku");
 const nama = input.value.trim();
 if (nama === "") {
 alert("Nama buku harus diisi!");
 return;
 }
 const daftar = document.getElementById("daftar-buku");
 const buku = document.createElement("li");
 buku.textContent = nama;
 daftar.appendChild(buku);
 input.value = "";
}
