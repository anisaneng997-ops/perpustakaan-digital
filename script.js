/* =========================================================
   PERPUSTAKAAN DIGITAL
   Vanilla JavaScript
========================================================= */

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
        description:
            "Panduan praktis mempelajari JavaScript modern dari dasar hingga membangun aplikasi web interaktif.",
        cover:
            "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=600&q=80",
        available: true,
        pages: [
            "JavaScript merupakan salah satu bahasa pemrograman paling populer untuk membangun aplikasi web modern. Bahasa ini memungkinkan halaman web memberikan pengalaman yang interaktif kepada pengguna.",
            "Dalam mempelajari JavaScript, penting untuk memahami variabel, tipe data, operator, kondisi, perulangan, fungsi, dan struktur data. Setelah dasar tersebut dipahami, kita dapat melanjutkan ke konsep yang lebih kompleks.",
            "DOM atau Document Object Model memungkinkan JavaScript berinteraksi dengan HTML. Dengan DOM, kita dapat mengubah teks, menambahkan elemen, merespons klik pengguna, dan membuat aplikasi web yang dinamis.",
            "Konsep modern seperti module, asynchronous programming, Promise, dan async/await sangat penting untuk membangun aplikasi yang terstruktur dan mudah dipelihara.",
            "Pada akhirnya, kemampuan JavaScript berkembang melalui latihan. Buatlah proyek kecil secara rutin dan terus eksplorasi teknologi web yang baru."
        ]
    },

    {
        id: 2,
        title: "Dasar-Dasar Kecerdasan Buatan",
        author: "Rina Lestari",
        category: "Teknologi",
        year: 2025,
        rating: 4.9,
        description:
            "Pengenalan konsep kecerdasan buatan, machine learning, data, dan penerapannya dalam kehidupan sehari-hari.",
        cover:
            "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80",
        available: true,
        pages: [
            "Kecerdasan buatan adalah bidang ilmu komputer yang mempelajari cara membuat sistem mampu melakukan tugas yang biasanya membutuhkan kemampuan manusia.",
            "Machine learning merupakan salah satu bagian penting dari kecerdasan buatan. Sistem belajar dari data untuk menemukan pola dan membuat prediksi.",
            "Data menjadi salah satu komponen terpenting dalam pengembangan sistem kecerdasan buatan. Kualitas data sangat memengaruhi kualitas hasil model.",
            "Kecerdasan buatan digunakan pada berbagai bidang seperti kesehatan, pendidikan, transportasi, bisnis, dan layanan publik.",
            "Pengembangan AI yang baik juga membutuhkan perhatian terhadap keamanan, privasi, transparansi, dan dampak teknologi terhadap masyarakat."
        ]
    },

    {
        id: 3,
        title: "Sejarah Indonesia Modern",
        author: "Budi Santoso",
        category: "Sejarah",
        year: 2023,
        rating: 4.7,
        description:
            "Membahas perjalanan sejarah Indonesia dari masa pergerakan nasional hingga perkembangan Indonesia modern.",
        cover:
            "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=600&q=80",
        available: true,
        pages: [
            "Sejarah Indonesia modern merupakan perjalanan panjang yang melibatkan berbagai kelompok masyarakat dan perubahan sosial yang besar.",
            "Pergerakan nasional menjadi salah satu periode penting dalam sejarah Indonesia. Pendidikan dan organisasi modern berperan dalam berkembangnya kesadaran kebangsaan.",
            "Proklamasi kemerdekaan pada tahun 1945 menjadi tonggak penting dalam perjalanan bangsa Indonesia.",
            "Setelah kemerdekaan, Indonesia menghadapi berbagai tantangan dalam membangun pemerintahan, ekonomi, pendidikan, dan kehidupan sosial.",
            "Memahami sejarah membantu masyarakat melihat perubahan masa lalu dan mengambil pelajaran untuk masa depan."
        ]
    },

    {
        id: 4,
        title: "Fisika Untuk Semua",
        author: "Dewi Anggraini",
        category: "Sains",
        year: 2024,
        rating: 4.6,
        description:
            "Penjelasan sederhana mengenai konsep fisika yang sering ditemui dalam kehidupan sehari-hari.",
        cover:
            "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=600&q=80",
        available: true,
        pages: [
            "Fisika mempelajari berbagai fenomena alam mulai dari gerak benda hingga energi dan gelombang.",
            "Gerak merupakan salah satu konsep dasar fisika. Kecepatan menjelaskan seberapa cepat posisi sebuah benda berubah terhadap waktu.",
            "Energi dapat hadir dalam berbagai bentuk. Energi tidak hilang begitu saja, tetapi dapat berubah dari satu bentuk ke bentuk lainnya.",
            "Gelombang dapat ditemukan dalam suara, cahaya, dan berbagai fenomena lainnya.",
            "Fisika menjadi dasar bagi banyak teknologi modern yang digunakan manusia setiap hari."
        ]
    },

    {
        id: 5,
        title: "Strategi Bisnis Digital",
        author: "Fajar Nugroho",
        category: "Bisnis",
        year: 2025,
        rating: 4.8,
        description:
            "Strategi membangun dan mengembangkan bisnis pada era digital.",
        cover:
            "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=600&q=80",
        available: true,
        pages: [
            "Transformasi digital mengubah cara perusahaan berkomunikasi dengan pelanggan dan mengelola bisnis.",
            "Pemahaman terhadap kebutuhan pelanggan menjadi dasar penting dalam membuat produk yang relevan.",
            "Media digital memberikan banyak peluang untuk menjangkau pelanggan dengan biaya yang lebih efisien.",
            "Data dapat digunakan untuk memahami perilaku pelanggan dan membantu proses pengambilan keputusan.",
            "Bisnis yang mampu beradaptasi dengan perubahan teknologi memiliki kesempatan untuk berkembang bersama perubahan pasar."
        ]
    },

    {
        id: 6,
        title: "Metode Belajar Efektif",
        author: "Siti Rahma",
        category: "Pendidikan",
        year: 2024,
        rating: 4.7,
        description:
            "Berbagai teknik belajar yang dapat membantu meningkatkan pemahaman dan konsistensi belajar.",
        cover:
            "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=600&q=80",
        available: true,
        pages: [
            "Belajar efektif bukan hanya tentang berapa lama seseorang belajar, tetapi bagaimana proses belajar dilakukan.",
            "Tujuan belajar yang jelas membantu seseorang menentukan materi dan strategi yang tepat.",
            "Belajar secara aktif dengan membuat rangkuman, menjelaskan kembali materi, dan mengerjakan latihan dapat membantu memperkuat pemahaman.",
            "Istirahat juga menjadi bagian penting dari proses belajar karena otak membutuhkan waktu untuk memproses informasi.",
            "Konsistensi merupakan salah satu faktor penting dalam membangun kebiasaan belajar yang baik."
        ]
    },

    {
        id: 7,
        title: "Petualangan di Pulau Awan",
        author: "Maya Kirana",
        category: "Fiksi",
        year: 2022,
        rating: 4.5,
        description:
            "Kisah petualangan seorang anak yang menemukan pulau misterius di balik awan.",
        cover:
            "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=600&q=80",
        available: true,
        pages: [
            "Pagi itu, Arka menemukan sebuah peta tua di dalam kotak kayu milik kakeknya.",
            "Peta tersebut menunjukkan sebuah tempat yang tidak pernah ia lihat sebelumnya, yaitu Pulau Awan.",
            "Dengan keberanian yang besar, Arka memulai perjalanan bersama sahabatnya.",
            "Di perjalanan mereka menemukan banyak hal yang tidak pernah mereka bayangkan.",
            "Petualangan tersebut membuat Arka memahami bahwa keberanian bukan berarti tidak memiliki rasa takut."
        ]
    },

    {
        id: 8,
        title: "Rahasia Taman Senja",
        author: "Nadia Putri",
        category: "Novel",
        year: 2021,
        rating: 4.4,
        description:
            "Novel tentang persahabatan, keluarga, dan sebuah rahasia yang tersimpan di taman tua.",
        cover:
            "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80",
        available: true,
        pages: [
            "Taman senja selalu menjadi tempat favorit Lila sejak kecil.",
            "Suatu sore, ia menemukan sebuah surat lama yang tersembunyi di bawah bangku taman.",
            "Surat tersebut membuka cerita lama tentang keluarganya.",
            "Lila kemudian mulai mencari jawaban dengan bantuan sahabatnya.",
            "Perjalanan tersebut mengajarkan Lila bahwa masa lalu tidak selalu harus dilupakan."
        ]
    },

    {
        id: 9,
        title: "Mengenal Planet Kita",
        author: "Arif Maulana",
        category: "Sains",
        year: 2023,
        rating: 4.6,
        description:
            "Pengenalan bumi, tata surya, lingkungan, dan fenomena alam dengan bahasa sederhana.",
        cover:
            "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&w=600&q=80",
        available: true,
        pages: [
            "Bumi adalah salah satu planet dalam tata surya yang memiliki kondisi yang mendukung kehidupan.",
            "Permukaan bumi terdiri dari berbagai ekosistem yang saling berhubungan.",
            "Atmosfer berperan penting dalam menjaga kondisi bumi dan melindungi kehidupan.",
            "Perubahan lingkungan dapat memberikan dampak besar bagi manusia dan makhluk hidup lainnya.",
            "Menjaga lingkungan merupakan tanggung jawab bersama."
        ]
    },

    {
        id: 10,
        title: "Belajar Bersama",
        author: "Lina Wulandari",
        category: "Anak-anak",
        year: 2024,
        rating: 4.8,
        description:
            "Buku anak-anak yang mengajarkan pentingnya membaca, belajar, dan bekerja sama.",
        cover:
            "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80",
        available: true,
        pages: [
            "Dina sangat suka membaca buku di perpustakaan sekolah.",
            "Suatu hari guru mengajak seluruh murid membuat kelompok belajar.",
            "Dina belajar bahwa setiap teman memiliki kemampuan yang berbeda.",
            "Mereka saling membantu menyelesaikan tugas.",
            "Sejak hari itu, Dina semakin senang belajar bersama teman-temannya."
        ]
    },

    {
        id: 11,
        title: "Panduan Menulis Kreatif",
        author: "Yoga Saputra",
        category: "Pendidikan",
        year: 2022,
        rating: 4.5,
        description:
            "Panduan praktis untuk mengembangkan ide dan menulis cerita yang menarik.",
        cover:
            "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80",
        available: true,
        pages: [
            "Menulis kreatif dimulai dari kemampuan mengamati lingkungan dan menemukan ide.",
            "Ide dapat muncul dari pengalaman sehari-hari, percakapan, buku, maupun imajinasi.",
            "Tokoh yang kuat membuat pembaca lebih mudah terhubung dengan cerita.",
            "Konflik membantu membuat cerita menjadi lebih menarik.",
            "Latihan menulis secara rutin merupakan cara terbaik untuk meningkatkan kemampuan."
        ]
    },

    {
        id: 12,
        title: "Ekonomi Untuk Pemula",
        author: "Rizky Hidayat",
        category: "Bisnis",
        year: 2024,
        rating: 4.6,
        description:
            "Pengenalan ekonomi untuk memahami kebutuhan, pasar, uang, dan kegiatan ekonomi.",
        cover:
            "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80",
        available: true,
        pages: [
            "Ekonomi mempelajari bagaimana manusia menggunakan sumber daya yang terbatas untuk memenuhi kebutuhan.",
            "Kebutuhan manusia sangat beragam sedangkan sumber daya yang tersedia memiliki keterbatasan.",
            "Pasar mempertemukan penjual dan pembeli dalam kegiatan pertukaran barang dan jasa.",
            "Uang mempermudah proses pertukaran dan menjadi alat untuk mengukur nilai.",
            "Pemahaman ekonomi dapat membantu seseorang mengambil keputusan keuangan dengan lebih baik."
        ]
    }
];


/* =========================================================
   LOCAL STORAGE
========================================================= */

const STORAGE = {
    favorites: "digitalLibraryFavorites",
    history: "digitalLibraryHistory",
    progress: "digitalLibraryProgress",
    users: "digitalLibraryUsers",
    currentUser: "digitalLibraryCurrentUser",
    theme: "digitalLibraryTheme",
    profile: "digitalLibraryProfile"
};


function getStorage(key, fallback) {
    try {
        const data = localStorage.getItem(key);

        if (data === null) {
            return fallback;
        }

        return JSON.parse(data);

    } catch (error) {
        console.error("Gagal membaca localStorage:", error);

        return fallback;
    }
}


function setStorage(key, value) {
    try {
        localStorage.setItem(
            key,
            JSON.stringify(value)
        );

        return true;

    } catch (error) {
        console.error("Gagal menyimpan localStorage:", error);

        return false;
    }
}


/* =========================================================
   APPLICATION STATE
========================================================= */

const state = {
    search: "",
    category: "Semua",
    sort: "latest",
    currentBookId: null,
    currentPage: 1
};


/* =========================================================
   DOM ELEMENTS
========================================================= */

const booksGrid =
    document.getElementById("booksGrid");

const booksEmpty =
    document.getElementById("booksEmpty");

const favoriteGrid =
    document.getElementById("favoriteGrid");

const favoriteEmpty =
    document.getElementById("favoriteEmpty");

const historyGrid =
    document.getElementById("historyGrid");

const historyEmpty =
    document.getElementById("historyEmpty");

const categoryFilter =
    document.getElementById("categoryFilter");

const sortSelect =
    document.getElementById("sortSelect");

const searchResultInfo =
    document.getElementById("searchResultInfo");

const heroSearchForm =
    document.getElementById("heroSearchForm");

const heroSearchInput =
    document.getElementById("heroSearchInput");

const bookModal =
    document.getElementById("bookModal");

const bookModalContent =
    document.getElementById("bookModalContent");

const reader =
    document.getElementById("reader");

const readerTitle =
    document.getElementById("readerTitle");

const readerAuthor =
    document.getElementById("readerAuthor");

const readerText =
    document.getElementById("readerText");

const currentPage =
    document.getElementById("currentPage");

const pageIndicator =
    document.getElementById("pageIndicator");

const readerProgressBar =
    document.getElementById("readerProgressBar");

const readerProgressText =
    document.getElementById("readerProgressText");

const prevPageBtn =
    document.getElementById("prevPageBtn");

const nextPageBtn =
    document.getElementById("nextPageBtn");

const readerFavoriteBtn =
    document.getElementById("readerFavoriteBtn");

const authModal =
    document.getElementById("authModal");

const loginForm =
    document.getElementById("loginForm");

const registerForm =
    document.getElementById("registerForm");

const toast =
    document.getElementById("toast");

const toastMessage =
    document.getElementById("toastMessage");

const themeBtn =
    document.getElementById("themeBtn");

const backToTop =
    document.getElementById("backToTop");

const mobileMenuBtn =
    document.getElementById("mobileMenuBtn");

const navMenu =
    document.getElementById("navMenu");


/* =========================================================
   UTILITY
========================================================= */

function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


function getBookById(id) {
    return books.find(
        book => book.id === Number(id)
    );
}


function getFavorites() {
    return getStorage(
        STORAGE.favorites,
        []
    );
}


function saveFavorites(favorites) {
    setStorage(
        STORAGE.favorites,
        favorites
    );
}


function getHistory() {
    return getStorage(
        STORAGE.history,
        []
    );
}


function saveHistory(history) {
    setStorage(
        STORAGE.history,
        history
    );
}


function getProgress() {
    return getStorage(
        STORAGE.progress,
        {}
    );
}


function saveProgress(progress) {
    setStorage(
        STORAGE.progress,
        progress
    );
}


function isFavorite(bookId) {

    return getFavorites().includes(
        Number(bookId)
    );
}


/* =========================================================
   TOAST
========================================================= */

let toastTimer = null;

function showToast(message, type = "success") {

    toastMessage.textContent = message;

    const icon = toast.querySelector("i");

    if (type === "error") {
        icon.className =
            "fa-solid fa-circle-exclamation";
    } else {
        icon.className =
            "fa-solid fa-circle-check";
    }

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}


/* =========================================================
   BOOK CARD
========================================================= */

function createBookCard(book) {

    const favorite = isFavorite(book.id);

    return `
        <article class="book-card">

            <div class="book-cover">

                <img
                    src="${escapeHTML(book.cover)}"
                    alt="Cover buku ${escapeHTML(book.title)}"
                    loading="lazy"
                >

                <button
                    class="favorite-btn ${favorite ? "active" : ""}"
                    type="button"
                    data-action="favorite"
                    data-id="${book.id}"
                    aria-label="${
                        favorite
                            ? "Hapus dari favorit"
                            : "Tambah ke favorit"
                    }"
                >
                    <i class="${
                        favorite
                            ? "fa-solid"
                            : "fa-regular"
                    } fa-heart"></i>
                </button>

                <span class="book-status ${
                    book.available ? "available" : ""
                }">
                    ${
                        book.available
                            ? "Tersedia"
                            : "Tidak tersedia"
                    }
                </span>

            </div>


            <div class="book-info">

                <span class="book-category">
                    ${escapeHTML(book.category)}
                </span>

                <h3 class="book-title">
                    ${escapeHTML(book.title)}
                </h3>

                <p class="book-author">
                    ${escapeHTML(book.author)}
                </p>

                <div class="book-rating">

                    <i class="fa-solid fa-star"></i>

                    <strong>
                        ${book.rating}
                    </strong>

                    <span>
                        / 5
                    </span>

                </div>


                <div class="book-actions">

                    <button
                        class="btn btn-primary"
                        type="button"
                        data-action="read"
                        data-id="${book.id}"
                    >
                        <i class="fa-solid fa-book-open"></i>
                        Baca
                    </button>

                    <button
                        class="btn btn-outline"
                        type="button"
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


/* =========================================================
   FILTER + SORT
========================================================= */

function getFilteredBooks() {

    let result = [...books];

    const keyword =
        state.search.trim().toLowerCase();

    if (keyword) {

        result = result.filter(book => {

            return (
                book.title.toLowerCase().includes(keyword) ||
                book.author.toLowerCase().includes(keyword) ||
                book.category.toLowerCase().includes(keyword)
            );

        });
    }


    if (state.category !== "Semua") {

        result = result.filter(
            book =>
                book.category === state.category
        );
    }


    if (state.sort === "latest") {

        result.sort(
            (a, b) => b.year - a.year
        );

    } else if (state.sort === "rating") {

        result.sort(
            (a, b) => b.rating - a.rating
        );

    } else if (state.sort === "title") {

        result.sort(
            (a, b) =>
                a.title.localeCompare(
                    b.title,
                    "id"
                )
        );
    }


    return result;
}


/* =========================================================
   RENDER BOOKS
========================================================= */

function renderBooks() {

    const result =
        getFilteredBooks();

    booksGrid.innerHTML = result
        .map(createBookCard)
        .join("");

    booksEmpty.classList.toggle(
        "hidden",
        result.length > 0
    );


    if (state.search || state.category !== "Semua") {

        searchResultInfo.textContent =
            `${result.length} buku ditemukan`;

    } else {

        searchResultInfo.textContent =
            "Jelajahi koleksi buku digital kami.";
    }
}


/* =========================================================
   FAVORITES
========================================================= */

function toggleFavorite(bookId) {

    const id = Number(bookId);

    let favorites =
        getFavorites();

    if (favorites.includes(id)) {

        favorites =
            favorites.filter(
                favoriteId => favoriteId !== id
            );

        showToast(
            "Buku dihapus dari favorit."
        );

    } else {

        favorites.push(id);

        showToast(
            "Buku ditambahkan ke favorit."
        );
    }

    saveFavorites(favorites);

    renderBooks();

    renderFavorites();

    renderHistory();

    updateProfileStats();
    updateReaderFavoriteButton();
}


function renderFavorites() {

    const favorites =
        getFavorites();

    const favoriteBooks =
        books.filter(
            book => favorites.includes(book.id)
        );

    favoriteGrid.innerHTML =
        favoriteBooks
            .map(createBookCard)
            .join("");

    favoriteEmpty.classList.toggle(
        "hidden",
        favoriteBooks.length > 0
    );
}


/* =========================================================
   SEARCH
========================================================= */

function performSearch(keyword) {

    state.search =
        keyword.trim();

    renderBooks();

    document
        .getElementById("koleksi")
        .scrollIntoView({
            behavior: "smooth"
        });
}


/* =========================================================
   CATEGORY
========================================================= */

function setCategory(category) {

    state.category = category;

    categoryFilter.value =
        category;

    document
        .querySelectorAll(".category-chip")
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.category === category
            );

        });

    renderBooks();
}


/* =========================================================
   BOOK DETAIL
========================================================= */

function openBookDetail(bookId) {

    const book =
        getBookById(bookId);

    if (!book) {
        return;
    }

    const favorite =
        isFavorite(book.id);

    bookModalContent.innerHTML = `

        <div class="book-detail">

            <div>

                <img
                    class="book-detail-cover"
                    src="${escapeHTML(book.cover)}"
                    alt="Cover ${escapeHTML(book.title)}"
                >

            </div>


            <div class="book-detail-info">

                <span class="book-category">
                    ${escapeHTML(book.category)}
                </span>

                <h2 id="modalBookTitle">
                    ${escapeHTML(book.title)}
                </h2>

                <p class="book-detail-author">
                    Oleh ${escapeHTML(book.author)}
                </p>


                <div class="book-detail-meta">

                    <span class="meta-item">
                        Tahun ${book.year}
                    </span>

                    <span class="meta-item">
                        Rating ${book.rating}/5
                    </span>

                    <span class="meta-item">
                        ${
                            book.available
                                ? "Tersedia"
                                : "Tidak tersedia"
                        }
                    </span>

                </div>


                <p class="book-detail-description">
                    ${escapeHTML(book.description)}
                </p>


                <div class="book-detail-actions">

                    <button
                        class="btn btn-primary"
                        id="modalReadBtn"
                        type="button"
                    >
                        <i class="fa-solid fa-book-open"></i>
                        Baca Sekarang
                    </button>

                    <button
                        class="btn btn-outline"
                        id="modalFavoriteBtn"
                        type="button"
                    >
                        <i class="${
                            favorite
                                ? "fa-solid"
                                : "fa-regular"
                        } fa-heart"></i>

                        ${
                            favorite
                                ? "Hapus Favorit"
                                : "Tambah Favorit"
                        }

                    </button>

                </div>

            </div>

        </div>
    `;


    bookModal.classList.remove("hidden");

    document.body.style.overflow =
        "hidden";


    document
        .getElementById("modalReadBtn")
        .addEventListener(
            "click",
            () => {

                closeBookModal();

                openReader(book.id);
            }
        );


    document
        .getElementById("modalFavoriteBtn")
        .addEventListener(
            "click",
            () => {

                toggleFavorite(book.id);

                openBookDetail(book.id);
            }
        );
}


function closeBookModal() {

    bookModal.classList.add("hidden");

    if (reader.classList.contains("hidden")) {
        document.body.style.overflow = "";
    }
}


/* =========================================================
   READING HISTORY
========================================================= */

function addToHistory(bookId) {

    const id =
        Number(bookId);

    let history =
        getHistory();

    history =
        history.filter(
            item => item.bookId !== id
        );

    history.unshift({
        bookId: id,
        lastPage: getProgress()[id] || 1,
        updatedAt: Date.now()
    });

    history =
        history.slice(0, 20);

    saveHistory(history);
}


function renderHistory() {

    const history =
        getHistory();

    if (!history.length) {

        historyGrid.innerHTML = "";

        historyEmpty.classList.remove(
            "hidden"
        );

        return;
    }


    historyEmpty.classList.add(
        "hidden"
    );


    const progress =
        getProgress();


    historyGrid.innerHTML =
        history
            .map(item => {

                const book =
                    getBookById(item.bookId);

                if (!book) {
                    return "";
                }

                const page =
                    progress[book.id] || 1;

                const total =
                    book.pages.length;

                const percent =
                    Math.round(
                        (page / total) * 100
                    );

                return `

                    <article class="history-card">

                        <img
                            class="history-cover"
                            src="${escapeHTML(book.cover)}"
                            alt="${escapeHTML(book.title)}"
                        >

                        <div class="history-info">

                            <h3>
                                ${escapeHTML(book.title)}
                            </h3>

                            <p>
                                ${escapeHTML(book.author)}
                            </p>

                            <div class="history-progress">

                                <div class="history-percent">

                                    <span>
                                        Progress membaca
                                    </span>

                                    <strong>
                                        ${percent}%
                                    </strong>

                                </div>

                                <div class="progress-track">

                                    <div
                                        class="progress-bar"
                                        style="width:${percent}%"
                                    ></div>

                                </div>

                            </div>

                        </div>


                        <button
                            class="btn btn-primary"
                            type="button"
                            data-action="read"
                            data-id="${book.id}"
                        >
                            <i class="fa-solid fa-play"></i>
                            Lanjutkan
                        </button>

                    </article>
                `;

            })
            .join("");
}


/* =========================================================
   READER
========================================================= */

function openReader(bookId) {

    const book =
        getBookById(bookId);

    if (!book) {
        return;
    }

    state.currentBookId =
        book.id;


    const progress =
        getProgress();

    const savedPage =
        Number(progress[book.id] || 1);


    state.currentPage =
        Math.min(
            Math.max(savedPage, 1),
            book.pages.length
        );


    readerTitle.textContent =
        book.title;

    readerAuthor.textContent =
        book.author;


    addToHistory(book.id);

    renderReaderPage();

    updateReaderFavoriteButton();


    reader.classList.remove(
        "hidden"
    );

    document.body.style.overflow =
        "hidden";

    renderHistory();

    updateProfileStats();

    showToast(
        "Buku berhasil dibuka."
    );
}


function closeReader() {

    reader.classList.add(
        "hidden"
    );

    state.currentBookId =
        null;

    document.body.style.overflow = "";

    renderHistory();
}


function renderReaderPage() {

    const book =
        getBookById(
            state.currentBookId
        );

    if (!book) {
        return;
    }


    const totalPages =
        book.pages.length;

    const page =
        state.currentPage;


    readerText.innerHTML = `
        <p>
            ${escapeHTML(book.pages[page - 1])}
        </p>
    `;


    currentPage.textContent =
        page;

    pageIndicator.textContent =
        `${page} / ${totalPages}`;


    const percent =
        Math.round(
            (page / totalPages) * 100
        );


    readerProgressBar.style.width =
        `${percent}%`;

    readerProgressText.textContent =
        `${percent}%`;


    prevPageBtn.disabled =
        page <= 1;

    nextPageBtn.disabled =
        page >= totalPages;


    saveReadingProgress();
}


function saveReadingProgress() {

    if (!state.currentBookId) {
        return;
    }


    const progress =
        getProgress();


    progress[state.currentBookId] =
        state.currentPage;


    saveProgress(progress);


    let history =
        getHistory();

    history =
        history.map(item => {

            if (
                item.bookId ===
                state.currentBookId
            ) {
                return {
                    ...item,
                    lastPage:
                        state.currentPage,
                    updatedAt:
                        Date.now()
                };
            }

            return item;
        });


    saveHistory(history);
}


function nextPage() {

    const book =
        getBookById(
            state.currentBookId
        );

    if (!book) {
        return;
    }


    if (
        state.currentPage <
        book.pages.length
    ) {

        state.currentPage++;

        renderReaderPage();

        renderHistory();
    }
}


function previousPage() {

    if (
        state.currentPage > 1
    ) {

        state.currentPage--;

        renderReaderPage();

        renderHistory();
    }
}


function updateReaderFavoriteButton() {

    if (!state.currentBookId) {
        return;
    }


    const favorite =
        isFavorite(
            state.currentBookId
        );


    readerFavoriteBtn.innerHTML = `
        <i class="${
            favorite
                ? "fa-solid"
                : "fa-regular"
        } fa-heart"></i>
    `;

    readerFavoriteBtn.classList.toggle(
        "active",
        favorite
    );
}


/* =========================================================
   AUTH
========================================================= */

function getUsers() {

    return getStorage(
        STORAGE.users,
        []
    );
}


function saveUsers(users) {

    setStorage(
        STORAGE.users,
        users
    );
}


function getCurrentUser() {

    return getStorage(
        STORAGE.currentUser,
        null
    );
}


function saveCurrentUser(user) {

    if (user) {

        setStorage(
            STORAGE.currentUser,
            user
        );

    } else {

        localStorage.removeItem(
            STORAGE.currentUser
        );
    }
}


function openLogin() {

    authModal.classList.remove(
        "hidden"
    );

    showAuthTab("login");

    document.body.style.overflow =
        "hidden";
}


function openRegister() {

    authModal.classList.remove(
        "hidden"
    );

    showAuthTab("register");

    document.body.style.overflow =
        "hidden";
}


function closeAuth() {

    authModal.classList.add(
        "hidden"
    );

    document.body.style.overflow = "";
}


function showAuthTab(tab) {

    document
        .querySelectorAll(".auth-tab")
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.authTab === tab
            );

        });


    loginForm.classList.toggle(
        "hidden",
        tab !== "login"
    );

    registerForm.classList.toggle(
        "hidden",
        tab !== "register"
    );
}


function registerUser(event) {

    event.preventDefault();


    const name =
        document
            .getElementById("registerName")
            .value
            .trim();

    const email =
        document
            .getElementById("registerEmail")
            .value
            .trim()
            .toLowerCase();

    const password =
        document
            .getElementById("registerPassword")
            .value;

    const confirmPassword =
        document
            .getElementById("registerConfirmPassword")
            .value;


    if (
        name.length < 2
    ) {

        showToast(
            "Nama minimal 2 karakter.",
            "error"
        );

        return;
    }


    if (
        password.length < 6
    ) {

        showToast(
            "Password minimal 6 karakter.",
            "error"
        );

        return;
    }


    if (
        password !==
        confirmPassword
    ) {

        showToast(
            "Konfirmasi password tidak cocok.",
            "error"
        );

        return;
    }


    const users =
        getUsers();


    const exists =
        users.some(
            user =>
                user.email === email
        );


    if (exists) {

        showToast(
            "Email sudah terdaftar.",
            "error"
        );

        return;
    }


    const newUser = {
        id: Date.now(),
        name,
        email,
        password
    };


    users.push(newUser);

    saveUsers(users);


    const profile = {
        name,
        email
    };

    setStorage(
        STORAGE.profile,
        profile
    );


    saveCurrentUser({
        id: newUser.id,
        name,
        email
    });


    registerForm.reset();

    closeAuth();

    updateUserInterface();

    showToast(
        "Pendaftaran berhasil."
    );
}


function loginUser(event) {

    event.preventDefault();


    const email =
        document
            .getElementById("loginEmail")
            .value
            .trim()
            .toLowerCase();

    const password =
        document
            .getElementById("loginPassword")
            .value;


    const users =
        getUsers();


    const user =
        users.find(
            item =>
                item.email === email &&
                item.password === password
        );


    if (!user) {

        showToast(
            "Email atau password salah.",
            "error"
        );

        return;
    }


    saveCurrentUser({
        id: user.id,
        name: user.name,
        email: user.email
    });


    setStorage(
        STORAGE.profile,
        {
            name: user.name,
            email: user.email
        }
    );


    loginForm.reset();

    closeAuth();

    updateUserInterface();

    showToast(
        `Selamat datang, ${user.name}.`
    );
}


function logoutUser() {

    saveCurrentUser(null);

    updateUserInterface();

    showToast(
        "Anda telah keluar dari akun."
    );
}


function updateUserInterface() {

    const user =
        getCurrentUser();

    const loginBtn =
        document.getElementById(
            "loginBtn"
        );

    const profileMiniBtn =
        document.getElementById(
            "profileMiniBtn"
        );

    const miniAvatar =
        document.getElementById(
            "miniAvatar"
        );


    if (user) {

        loginBtn.classList.add(
            "hidden"
        );

        profileMiniBtn.classList.remove(
            "hidden"
        );

        miniAvatar.textContent =
            user.name
                .charAt(0)
                .toUpperCase();

    } else {

        loginBtn.classList.remove(
            "hidden"
        );

        profileMiniBtn.classList.add(
            "hidden"
        );
    }


    updateProfile();
}


/* =========================================================
   PROFILE
========================================================= */

function updateProfile() {

    const user =
        getCurrentUser();

    const profile =
        getStorage(
            STORAGE.profile,
            null
        );


    const name =
        user?.name ||
        profile?.name ||
        "Pengunjung";

    const email =
        user?.email ||
        profile?.email ||
        "Belum login";


    document.getElementById(
        "profileName"
    ).textContent = name;


    document.getElementById(
        "profileEmail"
    ).textContent = email;


    document.getElementById(
        "profileAvatar"
    ).textContent =
        name
            .charAt(0)
            .toUpperCase();


    document.getElementById(
        "profileEditName"
    ).value =
        user?.name ||
        profile?.name ||
        "";


    document.getElementById(
        "profileEditEmail"
    ).value =
        user?.email ||
        profile?.email ||
        "";


    updateProfileStats();
}


function updateProfileStats() {

    const favorites =
        getFavorites();

    const history =
        getHistory();

    const progress =
        getProgress();


    document.getElementById(
        "profileFavoriteCount"
    ).textContent =
        favorites.length;


    document.getElementById(
        "profileReadCount"
    ).textContent =
        history.length;


    if (!history.length) {

        document.getElementById(
            "profileProgress"
        ).textContent = "0%";

        return;
    }


    let total = 0;

    let count = 0;


    history.forEach(item => {

        const book =
            getBookById(item.bookId);

        if (!book) {
            return;
        }

        const page =
            progress[item.bookId] || 1;

        total +=
            Math.round(
                (page / book.pages.length) *
                100
            );

        count++;
    });


    const average =
        count
            ? Math.round(total / count)
            : 0;


    document.getElementById(
        "profileProgress"
    ).textContent =
        `${average}%`;
}


function openProfileModal() {

    updateProfile();

    document
        .getElementById(
            "profileModal"
        )
        .classList.remove(
            "hidden"
        );

    document.body.style.overflow =
        "hidden";
}


function closeProfileModal() {

    document
        .getElementById(
            "profileModal"
        )
        .classList.add(
            "hidden"
        );

    document.body.style.overflow = "";
}


function saveProfile(event) {

    event.preventDefault();


    const name =
        document
            .getElementById(
                "profileEditName"
            )
            .value
            .trim();

    const email =
        document
            .getElementById(
                "profileEditEmail"
            )
            .value
            .trim()
            .toLowerCase();


    if (
        name.length < 2
    ) {

        showToast(
            "Nama tidak valid.",
            "error"
        );

        return;
    }


    const currentUser =
        getCurrentUser();


    if (currentUser) {

        const users =
            getUsers();


        const index =
            users.findIndex(
                user =>
                    user.id ===
                    currentUser.id
            );


        if (index !== -1) {

            users[index].name =
                name;

            users[index].email =
                email;

            saveUsers(users);
        }


        saveCurrentUser({
            ...currentUser,
            name,
            email
        });
    }


    setStorage(
        STORAGE.profile,
        {
            name,
            email
        }
    );


    updateUserInterface();

    closeProfileModal();

    showToast(
        "Profil berhasil diperbarui."
    );
}


/* =========================================================
   DARK MODE
========================================================= */

function loadTheme() {

    const theme =
        localStorage.getItem(
            STORAGE.theme
        );


    if (theme === "dark") {

        document.body.classList.add(
            "dark"
        );

    } else {

        document.body.classList.remove(
            "dark"
        );
    }


    updateThemeIcon();
}


function toggleDarkMode() {

    document.body.classList.toggle(
        "dark"
    );


    const isDark =
        document.body.classList.contains(
            "dark"
        );


    localStorage.setItem(
        STORAGE.theme,
        isDark
            ? "dark"
            : "light"
    );


    updateThemeIcon();
}


function updateThemeIcon() {

    const icon =
        themeBtn.querySelector("i");

    const isDark =
        document.body.classList.contains(
            "dark"
        );


    icon.className =
        isDark
            ? "fa-solid fa-sun"
            : "fa-solid fa-moon";


    themeBtn.setAttribute(
        "aria-label",
        isDark
            ? "Aktifkan mode terang"
            : "Aktifkan mode gelap"
    );
}


/* =========================================================
   MOBILE MENU
========================================================= */

function toggleMobileMenu() {

    const open =
        navMenu.classList.toggle(
            "open"
        );


    mobileMenuBtn.setAttribute(
        "aria-expanded",
        String(open)
    );


    const icon =
        mobileMenuBtn.querySelector("i");


    icon.className =
        open
            ? "fa-solid fa-xmark"
            : "fa-solid fa-bars";
}


function closeMobileMenu() {

    navMenu.classList.remove(
        "open"
    );

    mobileMenuBtn.setAttribute(
        "aria-expanded",
        "false"
    );


    mobileMenuBtn
        .querySelector("i")
        .className =
        "fa-solid fa-bars";
}


/* =========================================================
   BACK TO TOP
========================================================= */

function updateBackToTop() {

    if (window.scrollY > 500) {

        backToTop.classList.add(
            "show"
        );

    } else {

        backToTop.classList.remove(
            "show"
        );
    }
}


/* =========================================================
   EVENT DELEGATION
========================================================= */

function handleBookAction(event) {

    const button =
        event.target.closest(
            "[data-action]"
        );

    if (!button) {
        return;
    }


    const action =
        button.dataset.action;

    const id =
        Number(button.dataset.id);


    if (action === "favorite") {

        toggleFavorite(id);

    } else if (action === "detail") {

        openBookDetail(id);

    } else if (action === "read") {

        openReader(id);
    }
}


/* =========================================================
   NAVIGATION ACTIVE STATE
========================================================= */

function updateActiveNavigation() {

    const sections =
        document.querySelectorAll(
            "main section[id]"
        );

    const links =
        document.querySelectorAll(
            ".nav-link"
        );


    let current =
        "home";


    sections.forEach(section => {

        const rect =
            section.getBoundingClientRect();

        if (
            rect.top <= 150 &&
            rect.bottom >= 150
        ) {
            current =
                section.id;
        }
    });


    links.forEach(link => {

        const href =
            link.getAttribute("href");

        link.classList.toggle(
            "active",
            href === `#${current}`
        );
    });
}


/* =========================================================
   EVENT LISTENERS
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        /* INITIAL */

        loadTheme();

        renderBooks();

        renderFavorites();

        renderHistory();

        updateUserInterface();

        updateProfileStats();


        /* SEARCH */

        heroSearchForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();

                performSearch(
                    heroSearchInput.value
                );
            }
        );


        heroSearchInput.addEventListener(
            "input",
            event => {

                state.search =
                    event.target.value;

                renderBooks();
            }
        );


        /* CATEGORY SELECT */

        categoryFilter.addEventListener(
            "change",
            event => {

                setCategory(
                    event.target.value
                );
            }
        );


        /* SORT */

        sortSelect.addEventListener(
            "change",
            event => {

                state.sort =
                    event.target.value;

                renderBooks();
            }
        );


        /* CATEGORY BUTTONS */

        document
            .querySelectorAll(
                ".category-chip"
            )
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        setCategory(
                            button.dataset.category
                        );

                        document
                            .getElementById(
                                "koleksi"
                            )
                            .scrollIntoView({
                                behavior:
                                    "smooth"
                            });
                    }
                );

            });


        /* BOOK GRID EVENTS */

        booksGrid.addEventListener(
            "click",
            handleBookAction
        );


        favoriteGrid.addEventListener(
            "click",
            handleBookAction
        );


        historyGrid.addEventListener(
            "click",
            handleBookAction
        );


        /* BOOK MODAL */

        bookModal.addEventListener(
            "click",
            event => {

                if (
                    event.target ===
                    bookModal ||
                    event.target.closest(
                        "[data-close-modal]"
                    )
                ) {
                    closeBookModal();
                }
            }
        );


        /* READER */

        closeReaderBtn.addEventListener(
            "click",
            closeReader
        );


        prevPageBtn.addEventListener(
            "click",
            previousPage
        );


        nextPageBtn.addEventListener(
            "click",
            nextPage
        );


        readerFavoriteBtn.addEventListener(
            "click",
            () => {

                if (
                    state.currentBookId
                ) {

                    toggleFavorite(
                        state.currentBookId
                    );
                }
            }
        );


        /* AUTH */

        document
            .querySelectorAll(
                ".auth-tab"
            )
            .forEach(tab => {

                tab.addEventListener(
                    "click",
                    () => {

                        showAuthTab(
                            tab.dataset.authTab
                        );
                    }
                );

            });


        loginForm.addEventListener(
            "submit",
            loginUser
        );


        registerForm.addEventListener(
            "submit",
            registerUser
        );


        document
            .getElementById(
                "loginBtn"
            )
            .addEventListener(
                "click",
                openLogin
            );


        document
            .getElementById(
                "closeAuthBtn"
            )
            .addEventListener(
                "click",
                closeAuth
            );


        /* PROFILE */

        document
            .getElementById(
                "editProfileBtn"
            )
            .addEventListener(
                "click",
                openProfileModal
            );


        document
            .getElementById(
                "profileMiniBtn"
            )
            .addEventListener(
                "click",
                openProfileModal
            );


        document
            .getElementById(
                "closeProfileBtn"
            )
            .addEventListener(
                "click",
                closeProfileModal
            );


        document
            .getElementById(
                "profileForm"
            )
            .addEventListener(
                "submit",
                saveProfile
            );


        /* THEME */

        themeBtn.addEventListener(
            "click",
            toggleDarkMode
        );


        /* MOBILE MENU */

        mobileMenuBtn.addEventListener(
            "click",
            toggleMobileMenu
        );


        document
            .querySelectorAll(
                ".nav-link"
            )
            .forEach(link => {

                link.addEventListener(
                    "click",
                    closeMobileMenu
                );
            });


        /* BACK TO TOP */

        backToTop.addEventListener(
            "click",
            () => {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }
        );


        /* SCROLL */

        window.addEventListener(
            "scroll",
            () => {

                updateBackToTop();

                updateActiveNavigation();
            }
        );


        /* ESCAPE */

        document.addEventListener(
            "keydown",
            event => {

                if (
                    event.key === "Escape"
                ) {

                    if (
                        !bookModal.classList.contains(
                            "hidden"
                        )
                    ) {
                        closeBookModal();
                    }


                    if (
                        !authModal.classList.contains(
                            "hidden"
                        )
                    ) {
                        closeAuth();
                    }


                    const profileModal =
                        document.getElementById(
                            "profileModal"
                        );


                    if (
                        !profileModal.classList.contains(
                            "hidden"
                        )
                    ) {
                        closeProfileModal();
                    }
                }


                /* READER KEYBOARD */

                if (
                    !reader.classList.contains(
                        "hidden"
                    )
                ) {

                    if (
                        event.key ===
                        "ArrowRight"
                    ) {
                        nextPage();
                    }

                    if (
                        event.key ===
                        "ArrowLeft"
                    ) {
                        previousPage();
                    }
                }
            }
        );


        /* MODAL OUTSIDE CLICK */

        authModal.addEventListener(
            "click",
            event => {

                if (
                    event.target ===
                    authModal
                ) {
                    closeAuth();
                }
            }
        );


        document
            .getElementById(
                "profileModal"
            )
            .addEventListener(
                "click",
                event => {

                    if (
                        event.target.id ===
                        "profileModal"
                    ) {
                        closeProfileModal();
                    }
                }
            );

    }
);
