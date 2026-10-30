function tambahBuku() {
 const daftar = document.getElementById("daftar-buku");
 const buku = document.createElement("li");
 buku.textContent = "Buku Baru";
 daftar.appendChild(buku);
}