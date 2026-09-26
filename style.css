"use strict";

/* =========================================================
   DATA BUKU
========================================================= */

const books = [
    {
        id: 1,
        title: "Belajar JavaScript Modern",
        author: "Andi Pratama",
        category: "Teknologi",
        year: 2025,
        rating: 4.8,
        description: "Panduan praktis mempelajari JavaScript modern mulai dari dasar hingga pembuatan aplikasi web interaktif.",
        cover: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=500&q=80",
        available: true,
        pages: [
            "JavaScript merupakan salah satu bahasa pemrograman yang sangat banyak digunakan dalam pengembangan web modern.",
            "Pada bagian ini kita mempelajari variabel, tipe data, operator, percabangan, dan perulangan.",
            "Setelah memahami dasar JavaScript, kita dapat mulai menggunakan function untuk membuat program yang lebih terstruktur.",
            "DOM memungkinkan JavaScript berinteraksi langsung dengan elemen HTML sehingga halaman dapat menjadi interaktif.",
            "Event listener digunakan untuk merespons tindakan pengguna seperti klik tombol, mengetik pada input, dan melakukan submit form."
        ]
    },

    {
        id: 2,
        title: "Dasar-Dasar Pemrograman",
        author: "Budi Santoso",
        category: "Pendidikan",
        year: 2024,
        rating: 4.6,
        description: "Materi dasar pemrograman untuk pemula yang ingin memahami cara berpikir komputasional.",
        cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=500&q=80",
        available: true,
        pages: [
            "Pemrograman adalah proses memberikan instruksi kepada komputer untuk menyelesaikan suatu masalah.",
            "Algoritma membantu kita menyusun langkah penyelesaian masalah secara sistematis.",
            "Variabel digunakan untuk menyimpan data yang diperlukan oleh program.",
            "Struktur kontrol membantu program menentukan tindakan berdasarkan kondisi tertentu.",
            "Dengan latihan yang konsisten, konsep pemrograman akan menjadi semakin mudah dipahami."
        ]
    },

    {
        id: 3,
        title: "Sejarah Indonesia",
        author: "Dewi Lestari",
        category: "Sejarah",
        year: 2023,
        rating: 4.7,
        description: "Mengenal perjalanan sejarah Indonesia dari masa kerajaan hingga era modern.",
        cover: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=500&q=80",
        available: true,
        pages: [
            "Sejarah Indonesia memiliki perjalanan panjang yang dipengaruhi berbagai kerajaan, perdagangan, dan kebudayaan.",
            "Kerajaan-kerajaan Nusantara memainkan peranan penting dalam perkembangan masyarakat dan kebudayaan.",
            "Perdagangan maritim membuat wilayah Nusantara terhubung dengan berbagai wilayah dunia.",
            "Masa kolonial membawa perubahan besar dalam kehidupan sosial, ekonomi, dan politik.",
            "Memahami sejarah membantu kita melihat hubungan antara masa lalu dan kehidupan masyarakat saat ini."
        ]
    },

    {
        id: 4,
        title: "Fisika untuk Pemula",
        author: "Rina Wijaya",
        category: "Sains",
        year: 2024,
        rating: 4.5,
        description: "Pengantar fisika dengan penjelasan sederhana dan contoh yang dekat dengan kehidupan sehari-hari.",
        cover: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=500&q=80",
        available: true,
        pages: [
            "Fisika mempelajari berbagai fenomena alam dan hubungan antara materi, energi, ruang, serta waktu.",
            "Gerak merupakan salah satu konsep dasar dalam fisika.",
            "Gaya dapat menyebabkan benda mengalami perubahan gerak.",
            "Energi dapat berubah dari satu bentuk ke bentuk lainnya.",
            "Fisika dapat kita temukan dalam berbagai aktivitas kehidupan sehari-hari."
        ]
    },

    {
        id: 5,
        title: "Membangun Bisnis Digital",
        author: "Fajar Nugroho",
        category: "Bisnis",
        year: 2025,
        rating: 4.9,
        description: "Panduan memahami peluang, strategi, dan tantangan membangun bisnis pada era digital.",
        cover: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=500&q=80",
        available: true,
        pages: [
            "Transformasi digital menciptakan berbagai peluang baru bagi pelaku bisnis.",
            "Sebuah bisnis perlu memahami masalah pelanggan sebelum membuat produk.",
            "Strategi pemasaran digital dapat membantu bisnis menjangkau calon pelanggan.",
            "Data dapat digunakan untuk memahami perilaku pelanggan.",
            "Bisnis yang mampu beradaptasi dapat menghadapi perubahan pasar dengan lebih baik."
        ]
    },

    {
        id: 6,
        title: "Laskar Pelangi",
        author: "Andrea Hirata",
        category: "Novel",
        year: 2005,
        rating: 4.9,
        description: "Kisah tentang persahabatan, pendidikan, dan perjuangan anak-anak Belitung.",
        cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=500&q=80",
        available: true,
        pages: [
            "Di sebuah sekolah sederhana, sekelompok anak bertemu dan memulai perjalanan persahabatan.",
            "Mereka memiliki karakter yang berbeda namun saling mendukung.",
            "Keterbatasan tidak menghentikan keinginan mereka untuk belajar.",
            "Guru mereka memberikan inspirasi agar tidak menyerah pada keadaan.",
            "Persahabatan membuat perjalanan pendidikan mereka menjadi penuh kenangan."
        ]
    },

    {
        id: 7,
        title: "Petualangan di Hutan",
        author: "Maya Putri",
        category: "Anak-anak",
        year: 2022,
        rating: 4.4,
        description: "Cerita petualangan anak-anak yang belajar tentang keberanian dan menjaga alam.",
        cover: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=500&q=80",
        available: true,
        pages: [
            "Pagi itu, Raka dan teman-temannya memulai perjalanan menuju hutan.",
            "Mereka menemukan berbagai jenis tumbuhan dan hewan.",
            "Dalam perjalanan mereka belajar pentingnya menjaga kebersihan hutan.",
            "Sebuah sungai kecil menjadi tempat mereka beristirahat.",
            "Petualangan tersebut membuat mereka semakin menyayangi alam."
        ]
    },

    {
        id: 8,
        title: "Kecerdasan Buatan untuk Semua",
        author: "Agus Ramadhan",
        category: "Teknologi",
        year: 2025,
        rating: 4.8,
        description: "Pengenalan kecerdasan buatan dengan bahasa sederhana untuk masyarakat umum.",
        cover: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=500&q=80",
        available: true,
        pages: [
            "Kecerdasan buatan merupakan teknologi yang memungkinkan komputer melakukan tugas yang biasanya membutuhkan kecerdasan manusia.",
            "Machine learning memungkinkan sistem belajar dari data.",
            "Kecerdasan buatan digunakan pada berbagai bidang.",
            "Penggunaan teknologi perlu memperhatikan keamanan dan tanggung jawab.",
            "Pemahaman dasar AI dapat membantu masyarakat menghadapi perubahan teknologi."
        ]
    },

    {
        id: 9,
        title: "Psikologi Pendidikan",
        author: "Siti Rahma",
        category: "Pendidikan",
        year: 2023,
        rating: 4.5,
        description: "Mengenal proses belajar, motivasi, dan perkembangan peserta didik.",
        cover: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=500&q=80",
        available: true,
        pages: [
            "Pendidikan tidak hanya berkaitan dengan penyampaian materi.",
            "Setiap peserta didik memiliki karakteristik dan kebutuhan yang berbeda.",
            "Motivasi dapat memengaruhi proses belajar.",
            "Lingkungan belajar yang baik dapat membantu peserta didik berkembang.",
            "Guru memiliki peranan penting dalam menciptakan pengalaman belajar yang bermakna."
        ]
    },

    {
        id: 10,
        title: "Rahasia Alam Semesta",
        author: "Arif Hidayat",
        category: "Sains",
        year: 2024,
        rating: 4.7,
        description: "Perjalanan mengenal galaksi, bintang, planet, dan berbagai fenomena alam semesta.",
        cover: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=500&q=80",
        available: true,
        pages: [
            "Alam semesta memiliki ukuran yang sangat luas dan terdiri dari berbagai objek astronomi.",
            "Bintang merupakan objek yang menghasilkan cahaya dan energi.",
            "Planet bergerak mengelilingi bintang dalam sistem tertentu.",
            "Galaksi terdiri dari miliaran bintang dan berbagai objek lainnya.",
            "Penelitian astronomi membantu manusia memahami asal-usul dan perkembangan alam semesta."
        ]
    },

    {
        id: 11,
        title: "Strategi Keuangan Pribadi",
        author: "Nadia Permata",
        category: "Bisnis",
        year: 2025,
        rating: 4.6,
        description: "Panduan mengatur keuangan pribadi secara sederhana dan terencana.",
        cover: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=500&q=80",
        available: true,
        pages: [
            "Pengelolaan keuangan dimulai dengan memahami pemasukan dan pengeluaran.",
            "Anggaran membantu kita mengetahui ke mana uang digunakan.",
            "Dana darurat dapat membantu menghadapi kebutuhan yang tidak terduga.",
            "Menabung secara konsisten membutuhkan kebiasaan yang terencana.",
            "Perencanaan keuangan dapat disesuaikan dengan kondisi masing-masing individu."
        ]
    },

    {
        id: 12,
        title: "Kisah di Balik Senja",
        author: "Aulia Sari",
        category: "Fiksi",
        year: 2023,
        rating: 4.3,
        description: "Novel fiksi tentang persahabatan, keluarga, dan perjalanan menemukan makna kehidupan.",
        cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=500&q=80",
        available: true,
        pages: [
            "Senja selalu membawa suasana berbeda bagi tokoh utama dalam cerita.",
            "Pertemuan dengan seorang teman lama membuat berbagai kenangan kembali muncul.",
            "Mereka berbicara tentang keputusan yang pernah dibuat.",
            "Perjalanan hidup tidak selalu berjalan sesuai rencana.",
            "Pada akhirnya, menerima perubahan menjadi bagian penting dalam perjalanan mereka."
        ]
    }
];


/* =========================================================
   STORAGE
========================================================= */

const STORAGE = {
    favorites: "pd_favorites",
    history: "pd_history",
    progress: "pd_progress",
    theme: "pd_theme",
    user: "pd_user",
    account: "pd_account",
    lastPages: "pd_last_pages"
};


function readStorage(key, fallback) {
    try {
        const value = localStorage.getItem(key);

        if (value === null) {
            return fallback;
        }

        return JSON.parse(value);
    } catch (error) {
        console.warn("Storage error:", key, error);
        return fallback;
    }
}


function writeStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.warn("Storage write error:", key, error);
    }
}


/* =========================================================
   STATE
========================================================= */

let favorites = readStorage(STORAGE.favorites, []);
let history = readStorage(STORAGE.history, []);
let progress = readStorage(STORAGE.progress, {});
let lastPages = readStorage(STORAGE.lastPages, {});

let currentCategory = "Semua";
let currentSearch = "";
let currentSort = "newest";

let currentReaderBook = null;
let currentReaderPage = 0;


/* =========================================================
   DOM
========================================================= */

const booksGrid = document.getElementById("booksGrid");
const favoriteGrid = document.getElementById("favoriteGrid");
const historyGrid = document.getElementById("historyGrid");

const heroSearch = document.getElementById("heroSearch");
const heroSearchForm = document.getElementById("heroSearchForm");

const categoryList = document.getElementById("categoryList");
const sortSelect = document.getElementById("sortSelect");
const searchStatus = document.getElementById("searchStatus");

const detailModal = document.getElementById("detailModal");
const detailContent = document.getElementById("detailContent");

const authModal = document.getElementById("authModal");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

const themeToggle = document.getElementById("themeToggle");

const reader = document.getElementById("reader");
const readerTitle = document.getElementById("readerTitle");
const readerAuthor = document.getElementById("readerAuthor");
const readerText = document.getElementById("readerText");
const readerPageNumber = document.getElementById("readerPageNumber");
const readerPageInfo = document.getElementById("readerPageInfo");
const readerProgressBar = document.getElementById("readerProgressBar");

const toastContainer = document.getElementById("toastContainer");

const backTop = document.getElementById("backTop");


/* =========================================================
   BOOK FUNCTIONS
========================================================= */

function getBook(id) {
    return books.find(book => book.id === Number(id));
}


function getFilteredBooks() {

    let result = [...books];

    if (currentSearch.trim()) {
        const keyword = currentSearch.toLowerCase().trim();

        result = result.filter(book =>
            book.title.toLowerCase().includes(keyword) ||
            book.author.toLowerCase().includes(keyword) ||
            book.category.toLowerCase().includes(keyword)
        );
    }

    if (currentCategory !== "Semua") {
        result = result.filter(
            book => book.category === currentCategory
        );
    }

    if (currentSort === "newest") {
        result.sort((a, b) => b.year - a.year);
    }

    if (currentSort === "rating") {
        result.sort((a, b) => b.rating - a.rating);
    }

    if (currentSort === "title") {
        result.sort((a, b) =>
            a.title.localeCompare(b.title, "id")
        );
    }

    return result;
}


function renderBooks() {

    const result = getFilteredBooks();

    searchStatus.textContent = currentSearch
        ? `${result.length} buku ditemukan untuk "${currentSearch}"`
        : `${result.length} buku tersedia`;

    if (!result.length) {

        booksGrid.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-book-open"></i>
                <h3>Tidak ada buku yang ditemukan.</h3>
                <p>Coba gunakan kata kunci atau kategori lain.</p>
            </div>
        `;

        return;
    }

    booksGrid.innerHTML = result
        .map(book => createBookCard(book))
        .join("");
}


function createBookCard(book) {

    const isFavorite = favorites.includes(book.id);

    return `
        <article class="book-card">

            <div class="book-cover">

                <img
                    src="${book.cover}"
                    alt="Cover ${escapeHTML(book.title)}"
                    onerror="this.style.display='none'; this.nextElementSibling.style.display='grid';"
                >

                <div class="book-cover-fallback" style="display:none;">
                    <i class="fa-solid fa-book"></i>
                </div>

                <button
                    class="favorite-btn ${isFavorite ? "active" : ""}"
                    data-action="favorite"
                    data-id="${book.id}"
                    aria-label="${isFavorite ? "Hapus dari favorit" : "Tambah ke favorit"}"
                    title="${isFavorite ? "Hapus dari favorit" : "Tambah ke favorit"}"
                >
                    <i class="${isFavorite ? "fa-solid" : "fa-regular"} fa-heart"></i>
                </button>

            </div>

            <div class="book-body">

                <span class="book-category">
                    ${escapeHTML(book.category)}
                </span>

                <h3 class="book-title">
                    ${escapeHTML(book.title)}
                </h3>

                <p class="book-author">
                    ${escapeHTML(book.author)}
                </p>

                <div class="book-meta">
                    <span class="rating">
                        <i class="fa-solid fa-star"></i>
                        ${book.rating}
                    </span>

                    <span class="${book.available ? "available" : "unavailable"}">
                        ${book.available ? "Tersedia" : "Dipinjam"}
                    </span>
                </div>

                <div class="book-actions">

                    <button
                        class="btn btn-primary"
                        data-action="read"
                        data-id="${book.id}"
                    >
                        <i class="fa-solid fa-book-open"></i>
                        Baca
                    </button>

                    <button
                        class="btn btn-outline"
                        data-action="detail"
                        data-id="${book.id}"
                    >
                        Detail
                    </button>

                </div>

            </div>
        </article>
    `;
}


function renderFavorites() {

    const favoriteBooks = books.filter(book =>
        favorites.includes(book.id)
    );

    if (!favoriteBooks.length) {

        favoriteGrid.innerHTML = `
            <div class="empty-state">
                <i class="fa-regular fa-heart"></i>
                <h3>Belum ada buku favorit.</h3>
                <p>Tekan ikon hati pada buku untuk menyimpannya.</p>
            </div>
        `;

        return;
    }

    favoriteGrid.innerHTML = favoriteBooks
        .map(book => createBookCard(book))
        .join("");
}


/* =========================================================
   FAVORITES
========================================================= */

function toggleFavorite(id) {

    id = Number(id);

    if (favorites.includes(id)) {

        favorites = favorites.filter(
            favoriteId => favoriteId !== id
        );

        showToast("Buku dihapus dari favorit.", "success");

    } else {

        favorites.push(id);

        showToast("Buku ditambahkan ke favorit.", "success");
    }

    writeStorage(STORAGE.favorites, favorites);

    renderBooks();
    renderFavorites();
    updateProfile();
}


function loadFavorites() {

    favorites = readStorage(STORAGE.favorites, []);

    if (!Array.isArray(favorites)) {
        favorites = [];
    }

    renderFavorites();
}


/* =========================================================
   DETAIL
========================================================= */

function openBookDetail(id) {

    const book = getBook(id);

    if (!book) return;

    const isFavorite = favorites.includes(book.id);

    detailContent.innerHTML = `

        <div class="detail-layout">

            <img
                class="detail-cover"
                src="${book.cover}"
                alt="Cover ${escapeHTML(book.title)}"
                onerror="this.src=''; this.alt='Cover tidak tersedia';"
            >

            <div class="detail-info">

                <span class="book-category">
                    ${escapeHTML(book.category)}
                </span>

                <h2 id="detailTitle">
                    ${escapeHTML(book.title)}
                </h2>

                <p class="detail-author">
                    oleh ${escapeHTML(book.author)}
                </p>

                <div class="detail-meta">
                    <span>
                        Tahun: ${book.year}
                    </span>

                    <span>
                        Rating: ⭐ ${book.rating}
                    </span>

                    <span>
                        ${book.available ? "Tersedia" : "Tidak tersedia"}
                    </span>
                </div>

                <p class="detail-description">
                    ${escapeHTML(book.description)}
                </p>

                <div class="detail-buttons">

                    <button
                        class="btn btn-primary"
                        data-action="read"
                        data-id="${book.id}"
                    >
                        <i class="fa-solid fa-book-open"></i>
                        Baca Sekarang
                    </button>

                    <button
                        class="btn btn-outline"
                        data-action="favorite"
                        data-id="${book.id}"
                    >
                        <i class="${isFavorite ? "fa-solid" : "fa-regular"} fa-heart"></i>
                        ${isFavorite ? "Hapus Favorit" : "Tambah Favorit"}
                    </button>

                </div>

            </div>

        </div>
    `;

    openModal(detailModal);
}


function closeModal(modal) {

    if (!modal) return;

    modal.classList.remove("show");
}


/* =========================================================
   READER
========================================================= */

function openReader(id, page = null) {

    const book = getBook(id);

    if (!book) return;

    currentReaderBook = book;

    let savedPage = Number(lastPages[book.id]);

    if (!Number.isInteger(savedPage) || savedPage < 0) {
        savedPage = 0;
    }

    if (page !== null) {
        savedPage = Number(page);
    }

    if (savedPage >= book.pages.length) {
        savedPage = book.pages.length - 1;
    }

    currentReaderPage = savedPage;

    readerTitle.textContent = book.title;
    readerAuthor.textContent = book.author;

    reader.classList.remove("hidden");

    document.body.style.overflow = "hidden";

    renderReaderPage();

    addToHistory(book.id);

    showToast("Buku berhasil dibuka.", "success");
}


function closeReader() {

    if (currentReaderBook) {
        saveReadingProgress();
    }

    reader.classList.add("hidden");

    document.body.style.overflow = "";

    currentReaderBook = null;
}


function renderReaderPage() {

    if (!currentReaderBook) return;

    const pages = currentReaderBook.pages;

    const totalPages = pages.length;

    if (currentReaderPage < 0) {
        currentReaderPage = 0;
    }

    if (currentReaderPage >= totalPages) {
        currentReaderPage = totalPages - 1;
    }

    readerText.textContent = pages[currentReaderPage];

    readerPageNumber.textContent = currentReaderPage + 1;

    readerPageInfo.textContent =
        `${currentReaderPage + 1} / ${totalPages}`;

    const percent =
        ((currentReaderPage + 1) / totalPages) * 100;

    readerProgressBar.style.width = `${percent}%`;

    saveReadingProgress();
}


function nextPage() {

    if (!currentReaderBook) return;

    if (currentReaderPage < currentReaderBook.pages.length - 1) {

        currentReaderPage++;

        renderReaderPage();

    } else {

        showToast("Anda sudah berada di halaman terakhir.", "success");

        saveReadingProgress();
    }
}


function previousPage() {

    if (!currentReaderBook) return;

    if (currentReaderPage > 0) {

        currentReaderPage--;

        renderReaderPage();

    } else {

        showToast("Anda sudah berada di halaman pertama.");
    }
}


function saveReadingProgress() {

    if (!currentReaderBook) return;

    const total = currentReaderBook.pages.length;

    const percentage =
        Math.round(
            ((currentReaderPage + 1) / total) * 100
        );

    progress[currentReaderBook.id] = percentage;

    lastPages[currentReaderBook.id] = currentReaderPage;

    writeStorage(STORAGE.progress, progress);
    writeStorage(STORAGE.lastPages, lastPages);

    renderHistory();
}


/* =========================================================
   HISTORY
========================================================= */

function addToHistory(id) {

    id = Number(id);

    history = history.filter(bookId => bookId !== id);

    history.unshift(id);

    history = history.slice(0, 10);

    writeStorage(STORAGE.history, history);

    renderHistory();
    updateProfile();
}


function renderHistory() {

    const historyBooks = history
        .map(id => getBook(id))
        .filter(Boolean);

    if (!historyBooks.length) {

        historyGrid.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-clock-rotate-left"></i>
                <h3>Belum ada riwayat bacaan.</h3>
                <p>Buku yang Anda baca akan muncul di sini.</p>
            </div>
        `;

        return;
    }

    historyGrid.innerHTML = historyBooks
        .map(book => {

            const percentage = progress[book.id] || 0;

            return `
                <article class="history-card">

                    <img
                        class="history-cover"
                        src="${book.cover}"
                        alt="Cover ${escapeHTML(book.title)}"
                    >

                    <div class="history-info">

                        <h3>${escapeHTML(book.title)}</h3>

                        <p>${escapeHTML(book.author)}</p>

                        <div class="history-percent">
                            <span>Progress membaca</span>
                            <span>${percentage}%</span>
                        </div>

                        <div class="progress">
                            <div style="width:${percentage}%"></div>
                        </div>

                        <button
                            class="btn btn-primary"
                            style="margin-top:10px; padding:7px 10px; font-size:11px;"
                            data-action="read"
                            data-id="${book.id}"
                        >
                            <i class="fa-solid fa-play"></i>
                            Lanjutkan
                        </button>

                    </div>

                </article>
            `;
        })
        .join("");
}


/* =========================================================
   SEARCH
========================================================= */

function searchBooks(value) {

    currentSearch = value;

    renderBooks();
}


heroSearch.addEventListener("input", event => {

    searchBooks(event.target.value);

});


heroSearchForm.addEventListener("submit", event => {

    event.preventDefault();

    searchBooks(heroSearch.value);

    document
        .getElementById("koleksi")
        .scrollIntoView({
            behavior: "smooth"
        });
});


/* =========================================================
   CATEGORY
========================================================= */

categoryList.addEventListener("click", event => {

    const button = event.target.closest("[data-category]");

    if (!button) return;

    currentCategory = button.dataset.category;

    document
        .querySelectorAll(".category-btn")
        .forEach(btn => {
            btn.classList.toggle(
                "active",
                btn.dataset.category === currentCategory
            );
        });

    renderBooks();

});


document.querySelectorAll(".category-card").forEach(card => {

    card.addEventListener("click", () => {

        currentCategory = card.dataset.category;

        document
            .querySelectorAll(".category-btn")
            .forEach(btn => {
                btn.classList.toggle(
                    "active",
                    btn.dataset.category === currentCategory
                );
            });

        renderBooks();

        document
            .getElementById("koleksi")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});


/* =========================================================
   SORT
========================================================= */

sortSelect.addEventListener("change", event => {

    currentSort = event.target.value;

    renderBooks();

});


/* =========================================================
   GLOBAL BOOK ACTION
========================================================= */

document.addEventListener("click", event => {

    const element = event.target.closest("[data-action]");

    if (!element) return;

    const action = element.dataset.action;
    const id = Number(element.dataset.id);

    if (!id) return;

    if (action === "favorite") {

        toggleFavorite(id);

        if (detailModal.classList.contains("show")) {
            openBookDetail(id);
        }

    }

    if (action === "detail") {
        openBookDetail(id);
    }

    if (action === "read") {

        closeModal(detailModal);

        openReader(id);
    }

});


/* =========================================================
   MODAL
========================================================= */

function openModal(modal) {

    if (!modal) return;

    modal.classList.add("show");

    document.body.style.overflow = "hidden";
}


document.querySelectorAll("[data-close]").forEach(button => {

    button.addEventListener("click", () => {

        const modalId = button.dataset.close;

        const modal = document.getElementById(modalId);

        closeModal(modal);

        if (!document.querySelector(".modal.show") &&
            reader.classList.contains("hidden")) {

            document.body.style.overflow = "";
        }

    });

});


[detailModal, authModal].forEach(modal => {

    modal.addEventListener("click", event => {

        if (event.target === modal) {

            closeModal(modal);

            if (reader.classList.contains("hidden")) {
                document.body.style.overflow = "";
            }

        }

    });

});


document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        if (detailModal.classList.contains("show")) {
            closeModal(detailModal);
        }

        if (authModal.classList.contains("show")) {
            closeModal(authModal);
        }

        if (!reader.classList.contains("hidden")) {
            closeReader();
        }

        if (reader.classList.contains("hidden")) {
            document.body.style.overflow = "";
        }
    }

});


/* =========================================================
   READER CONTROLS
========================================================= */

document
    .getElementById("readerClose")
    .addEventListener("click", closeReader);


document
    .getElementById("nextPage")
    .addEventListener("click", nextPage);


document
    .getElementById("previousPage")
    .addEventListener("click", previousPage);


document.addEventListener("keydown", event => {

    if (reader.classList.contains("hidden")) return;

    if (event.key === "ArrowRight") {
        nextPage();
    }

    if (event.key === "ArrowLeft") {
        previousPage();
    }

});


/* =========================================================
   AUTH
========================================================= */

function openLogin() {

    authModal.classList.add("show");

    loginForm.classList.remove("hidden");
    registerForm.classList.add("hidden");

    document
        .querySelectorAll(".auth-tab")
        .forEach(tab => {
            tab.classList.toggle(
                "active",
                tab.dataset.auth === "login"
            );
        });

    document.body.style.overflow = "hidden";
}


function openRegister() {

    authModal.classList.add("show");

    loginForm.classList.add("hidden");
    registerForm.classList.remove("hidden");

    document
        .querySelectorAll(".auth-tab")
        .forEach(tab => {
            tab.classList.toggle(
                "active",
                tab.dataset.auth === "register"
            );
        });

    document.body.style.overflow = "hidden";
}


document
    .getElementById("loginOpen")
    .addEventListener("click", openLogin);


document.querySelectorAll(".auth-tab").forEach(tab => {

    tab.addEventListener("click", () => {

        if (tab.dataset.auth === "login") {
            openLogin();
        } else {
            openRegister();
        }

    });

});


registerForm.addEventListener("submit", event => {

    event.preventDefault();

    const name =
        document.getElementById("registerName").value.trim();

    const email =
        document.getElementById("registerEmail").value.trim();

    const password =
        document.getElementById("registerPassword").value;

    const confirm =
        document.getElementById("registerConfirm").value;

    if (password !== confirm) {

        showToast(
            "Konfirmasi password tidak sama.",
            "error"
        );

        return;
    }

    const account = {
        name,
        email,
        password
    };

    writeStorage(STORAGE.account, account);

    const user = {
        name,
        email
    };

    writeStorage(STORAGE.user, user);

    updateProfile();

    closeModal(authModal);

    registerForm.reset();

    showToast(
        "Pendaftaran berhasil. Selamat datang!",
        "success"
    );

});


loginForm.addEventListener("submit", event => {

    event.preventDefault();

    const email =
        document.getElementById("loginEmail").value.trim();

    const password =
        document.getElementById("loginPassword").value;

    const account =
        readStorage(STORAGE.account, null);

    if (!account) {

        showToast(
            "Belum ada akun. Silakan daftar terlebih dahulu.",
            "error"
        );

        return;
    }

    if (
        account.email !== email ||
        account.password !== password
    ) {

        showToast(
            "Email atau password salah.",
            "error"
        );

        return;
    }

    writeStorage(STORAGE.user, {
        name: account.name,
        email: account.email
    });

    updateProfile();

    closeModal(authModal);

    loginForm.reset();

    showToast(
        `Selamat datang, ${account.name}!`,
        "success"
    );

});


/* =========================================================
   PROFILE
========================================================= */

function updateProfile() {

    const user = readStorage(STORAGE.user, null);

    const nameElement =
        document.getElementById("profileName");

    const emailElement =
        document.getElementById("profileEmail");

    const favoriteCount =
        document.getElementById("profileFavoriteCount");

    const readCount =
        document.getElementById("profileReadCount");

    if (user) {

        nameElement.textContent =
            user.name || "Pengguna";

        emailElement.textContent =
            user.email || "";

    } else {

        nameElement.textContent = "Tamu";

        emailElement.textContent =
            "Belum login";
    }

    favoriteCount.textContent =
        favorites.length;

    readCount.textContent =
        history.length;
}


document
    .getElementById("editProfileBtn")
    .addEventListener("click", () => {

        const user =
            readStorage(STORAGE.user, null);

        if (!user) {

            showToast(
                "Silakan login terlebih dahulu.",
                "error"
            );

            openLogin();

            return;
        }

        const newName =
            prompt(
                "Masukkan nama baru:",
                user.name
            );

        if (!newName || !newName.trim()) {
            return;
        }

        user.name = newName.trim();

        writeStorage(STORAGE.user, user);

        updateProfile();

        showToast(
            "Profil berhasil diperbarui.",
            "success"
        );

    });


/* =========================================================
   DARK MODE
========================================================= */

function updateThemeIcon() {

    const icon =
        themeToggle.querySelector("i");

    const dark =
        document.body.classList.contains("dark");

    icon.className =
        dark
            ? "fa-solid fa-sun"
            : "fa-solid fa-moon";
}


function toggleDarkMode() {

    const dark =
        document.body.classList.toggle("dark");

    writeStorage(STORAGE.theme, dark ? "dark" : "light");

    updateThemeIcon();
}


function loadTheme() {

    const theme =
        localStorage.getItem(STORAGE.theme);

    if (theme === "dark") {
        document.body.classList.add("dark");
    }

    updateThemeIcon();
}


themeToggle.addEventListener(
    "click",
    toggleDarkMode
);


/* =========================================================
   READER THEME
========================================================= */

document
    .getElementById("readerTheme")
    .addEventListener("click", () => {

        document.body.classList.toggle("dark");

        const dark =
            document.body.classList.contains("dark");

        writeStorage(
            STORAGE.theme,
            dark ? "dark" : "light"
        );

        updateThemeIcon();

    });


/* =========================================================
   MOBILE MENU
========================================================= */

menuToggle.addEventListener("click", () => {

    const opened =
        navMenu.classList.toggle("open");

    menuToggle.setAttribute(
        "aria-expanded",
        String(opened)
    );

    const icon =
        menuToggle.querySelector("i");

    icon.className =
        opened
            ? "fa-solid fa-xmark"
            : "fa-solid fa-bars";

});


document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("open");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle
            .querySelector("i")
            .className = "fa-solid fa-bars";

    });

});


/* =========================================================
   TOAST
========================================================= */

function showToast(message, type = "") {

    const toast =
        document.createElement("div");

    toast.className =
        `toast ${type}`;

    toast.textContent = message;

    toastContainer.appendChild(toast);

    setTimeout(() => {

        toast.style.opacity = "0";

        setTimeout(() => {
            toast.remove();
        }, 250);

    }, 3000);
}


/* =========================================================
   BACK TO TOP
========================================================= */

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");
    }

});


backTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================================================
   ESCAPE HTML
========================================================= */

function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* =========================================================
   INITIALIZE
========================================================= */

function initializeApp() {

    loadTheme();

    favorites =
        readStorage(STORAGE.favorites, []);

    history =
        readStorage(STORAGE.history, []);

    progress =
        readStorage(STORAGE.progress, {});

    lastPages =
        readStorage(STORAGE.lastPages, {});

    renderBooks();

    renderFavorites();

    renderHistory();

    updateProfile();
}


initializeApp();
