// Bank Soal PJOK Kelas 3 (30 Soal Pilihan Ganda)
const bankSoal = [
    { s: "Gerakan berjalan dan berlari termasuk gerak...", o: ["Lokomotor", "Non-lokomotor", "Manipulatif"], j: 0 },
    { s: "Gerakan mencium lutut bertujuan melatih...", o: ["Kekuatan", "Kelenturan", "Keseimbangan"], j: 1 },
    { s: "Alat yang digunakan pada permainan kasti adalah...", o: ["Raket dan Kok", "Bola dan Pemukul", "Net dan Gawang"], j: 1 },
    { s: "Gerak tidak berpindah tempat disebut gerak...", o: ["Lokomotor", "Non-lokomotor", "Manipulatif"], j: 1 },
    { s: "Berikut ini yang termasuk gerak manipulatif adalah...", o: ["Menendang bola", "Membungkuk", "Berlari"], j: 0 },
    { s: "Sebelum berolahraga kita harus melakukan...", o: ["Pendinginan", "Pemanasan", "Tidur"], j: 1 },
    { s: "Pemanasan berguna agar otot kita tidak...", o: ["Cedera atau kram", "Kuat", "Sehat"], j: 0 },
    { s: "Gerakan membungkukkan badan termasuk gerak...", o: ["Lokomotor", "Non-lokomotor", "Manipulatif"], j: 1 },
    { s: "Lari pagi sangat baik untuk kesehatan...", o: ["Jantung dan paru-paru", "Mata", "Telinga"], j: 0 },
    { s: "Makanan yang sehat adalah makanan yang...", o: ["Mahal", "Bergizi seimbang", "Enak dan manis"], j: 1 },
    { s: "Istirahat yang paling baik setelah lelah beraktivitas adalah...", o: ["Bermain game", "Tidur", "Menonton TV"], j: 1 },
    { s: "Menangkap dan melempar bola memakai jenis gerak...", o: ["Non-lokomotor", "Lokomotor", "Manipulatif"], j: 2 },
    { s: "Sikap awal saat menyundul bola dalam sepak bola adalah...", o: ["Mata terpejam", "Pandangan ke arah bola", "Membelakangi bola"], j: 1 },
    { s: "Gerakan melompat dapat melatih kekuatan otot...", o: ["Tangan", "Leher", "Kaki"], j: 2 },
    { s: "Kebersihan pangkal dari...", o: ["Kaya", "Kesehatan", "Pandai"], j: 1 },
    { s: "Pakaian olahraga yang baik harus mudah...", o: ["Menyerap keringat", "Kotor", "Robek"], j: 0 },
    { s: "Gerak berpindah tempat dari satu titik ke titik lain disebut...", o: ["Lokomotor", "Non-lokomotor", "Manipulatif"], j: 0 },
    { s: "Posisi kaki saat berjalan maju adalah bergantian melangkah ke...", o: ["Depan", "Belakang", "Samping"], j: 0 },
    { s: "Kombinasi gerak dasar lokomotor contohnya adalah...", o: ["Berjalan lalu berlari", "Duduk lalu berdiri", "Diam di tempat"], j: 0 },
    { s: "Berapa kali kita sebaiknya menggosok gigi dalam sehari?", o: ["1 kali", "Minimal 2 kali", "Kadang-kadang"], j: 1 },
    { s: "Kuku yang panjang dan kotor harus segera...", o: ["Dibiarkan", "Dipotong", "Diwarnai"], j: 1 },
    { s: "Sebutkan contoh gerak non-lokomotor...", o: ["Melompat jauh", "Memutar pinggang", "Berlari kencang"], j: 1 },
    { s: "Mencuci tangan sebelum makan bertujuan untuk menghindari...", o: ["Kekenyangan", "Kuman dan penyakit", "Rasa lapar"], j: 1 },
    { s: "Saat lari cepat, posisi badan sebaiknya agak...", o: ["Condong ke depan", "Tegak lurus", "Meliuk ke belakang"], j: 0 },
    { s: "Permainan tradisional engklek dominan menggunakan gerak...", o: ["Melompat satu kaki", "Berlari berpasangan", "Melempar jauh"], j: 0 },
    { s: "Menjaga kesehatan tubuh merupakan bentuk rasa...", o: ["Sombong", "Syukur kepada Tuhan", "Biasa saja"], j: 1 },
    { s: "Tujuan melakukan gerakan pendinginan setelah olahraga adalah...", o: ["Membuat otot tegang", "Mengembalikan kondisi tubuh", "Meningkatkan suhu badan"], j: 1 },
    { s: "Gerakan bergantung pada palang besi melatih kekuatan otot...", o: ["Kaki", "Tangan", "Perut"], j: 1 },
    { s: "Alat pemukul pada permainan tenis meja disebut...", o: ["Bet", "Raket", "Tongkat"], j: 0 },
    { s: "Udara bersih yang kita hirup saat olahraga pagi kaya akan...", o: ["Karbon dioksida", "Oksigen", "Debu"], j: 1 }
];

let dataPeserta = { nama: "", kelas: "3 A", mapel: "PJOK" };
let indeksSoalSekarang = 0;
let skor = 0;
let jawabanTerpilih = null;

// Fungsi untuk load data tabel saat website pertama kali dibuka
window.onload = function() {
    tampilkanTabel();
};

function bukaForm() {
    document.getElementById("dashboard").classList.add("hidden");
    document.getElementById("form-peserta").classList.remove("hidden");
}

function mulaiKuis() {
    const namaInput = document.getElementById("input-nama").value.trim();
    if (namaInput === "") {
        alert("Silakan isi nama lengkap terlebih dahulu!");
        return;
    }
    dataPeserta.nama = namaInput;
    
    document.getElementById("form-peserta").classList.add("hidden");
    document.getElementById("area-kuis").classList.remove("hidden");
    document.getElementById("info-pengerjaan").innerText = `Siswa: ${dataPeserta.nama} (${dataPeserta.kelas})`;
    
    indeksSoalSekarang = 0;
    skor = 0;
    tampilkanSoal();
}

function tampilkanSoal() {
    jawabanTerpilih = null;
    document.getElementById("btn-next").innerText = indeksSoalSekarang === bankSoal.length - 1 ? "Selesai" : "Selanjutnya";
    
    const dataSoal = bankSoal[indeksSoalSekarang];
    document.getElementById("nomor-soal").innerText = `Soal ${indeksSoalSekarang + 1} dari ${bankSoal.length}`;
    document.getElementById("teks-soal").innerText = dataSoal.s;
    
    const wadahPilihan = document.getElementById("pilihan-jawaban");
    wadahPilihan.innerHTML = "";
    
    dataSoal.o.forEach((opsi, indeks) => {
        const btn = document.createElement("button");
        btn.className = "opsi-btn";
        btn.innerText = `${String.fromCharCode(65 + indeks)}. ${opsi}`;
        btn.onclick = function() {
            pilihJawaban(indeks, btn);
        };
        wadahPilihan.appendChild(btn);
    });
}

function pilihJawaban(indeks, elemenBtn) {
    jawabanTerpilih = indeks;
    const semuaTombol = document.querySelectorAll(".opsi-btn");
    semuaTombol.forEach(btn => btn.classList.remove("terpilih"));
    elemenBtn.classList.add("terpilih");
}

function soalBerikutnya() {
    if (jawabanTerpilih === null) {
        alert("Pilih salah satu jawaban terlebih dahulu!");
        return;
    }
    
    // Cek jawaban benar
    if (jawabanTerpilih === bankSoal[indeksSoalSekarang].j) {
        skor++;
    }
    
    if (indeksSoalSekarang < bankSoal.length - 1) {
        indeksSoalSekarang++;
        tampilkanSoal();
    } else {
        hitungDanSimpanHasil();
    }
}

function hitungDanSimpanHasil() {
    // Rumus nilai matematika skala 100
    const nilaiAkhir = Math.round((skor / bankSoal.length) * 100);
    
    // Ambil data lama di localstorage
    let listNilai = JSON.parse(localStorage.getItem("rekapNilaiPJOK")) || [];
    
    // Tambah data baru
    listNilai.push({
        nama: dataPeserta.nama,
        kelas: dataPeserta.kelas,
        mapel: dataPeserta.mapel,
        nilai: nilaiAkhir
    });
    
    // Simpan kembali ke localstorage
    localStorage.setItem("rekapNilaiPJOK", JSON.stringify(listNilai));
    
    alert(`Ujian selesai! Nilai kamu adalah: ${nilaiAkhir}`);
    
    // Kembali ke dashboard utama
    document.getElementById("area-kuis").classList.add("hidden");
    document.getElementById("dashboard").classList.remove("hidden");
    document.getElementById("input-nama").value = ""; // reset input nama
    
    tampilkanTabel();
}

function tampilkanTabel() {
    const listNilai = JSON.parse(localStorage.getItem("rekapNilaiPJOK")) || [];
    const tbody = document.querySelector("#tabel-nilai tbody");
    tbody.innerHTML = "";
    
    if(listNilai.length === 0) {
        tbody.innerHTML = `<tr><td colspan="4" style="text-align:center;">Belum ada siswa yang mengerjakan.</td></tr>`;
        return;
    }
    
    listNilai.forEach(data => {
        const baris = document.createElement("tr");
        baris.innerHTML = `
            <td>${data.nama}</td>
            <td>${data.kelas}</td>
            <td>${data.mapel}</td>
            <td style="font-weight: bold; color: #0056b3;">${data.nilai}</td>
        `;
        tbody.appendChild(baris);
    });
}
