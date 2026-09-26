/* =====================================================
   DATA BUKU
===================================================== */

const books = [
    {
        id: 1,
        title: "Belajar JavaScript Modern",
        author: "Andi Pratama",
        category: "Teknologi",
        year: 2025,
        rating: 4.8,
        description:
            "Panduan lengkap untuk memahami JavaScript modern dari dasar hingga tingkat lanjut.",
        available: true
    },

    {
        id: 2,
        title: "Pemrograman Web untuk Pemula",
        author: "Budi Santoso",
        category: "Teknologi",
        year: 2024,
        rating: 4.7,
        description:
            "Belajar HTML, CSS, dan JavaScript dengan pendekatan praktis.",
        available: true
    },

    {
        id: 3,
        title: "Sejarah Indonesia",
        author: "Dewi Lestari",
        category: "Sejarah",
        year: 2023,
        rating: 4.6,
        description:
            "Mengenal perjalanan panjang sejarah Indonesia dari masa ke masa.",
        available: true
    },

    {
        id: 4,
        title: "Pengantar Ilmu Sains",
        author: "Rina Wijaya",
        category: "Sains",
        year: 2024,
        rating: 4.5,
        description:
            "Pengenalan konsep dasar sains dengan bahasa yang mudah dipahami.",
        available: true
    },

    {
        id: 5,
        title: "Strategi Bisnis Digital",
        author: "Fajar Nugroho",
        category: "Bisnis",
        year: 2025,
        rating: 4.9,
        description:
            "Strategi membangun dan mengembangkan bisnis di era digital.",
        available: true
    },

    {
        id: 6,
        title: "Membangun Kebiasaan Baik",
        author: "Sinta Maharani",
        category: "Pendidikan",
        year: 2022,
        rating: 4.4,
        description:
            "Buku tentang membangun kebiasaan positif untuk kehidupan sehari-hari.",
        available: true
    },

    {
        id: 7,
        title: "Petualangan di Negeri Awan",
        author: "Maya Putri",
        category: "Anak-anak",
        year: 2024,
        rating: 4.8,
        description:
            "Cerita petualangan penuh imajinasi untuk pembaca muda.",
        available: true
    },

    {
        id: 8,
        title: "Langit Senja",
        author: "Arif Rahman",
        category: "Novel",
        year: 2021,
        rating: 4.7,
        description:
            "Novel tentang persahabatan, keluarga, dan perjalanan menemukan diri sendiri.",
        available: true
    },

    {
        id: 9,
        title: "Rahasia Kota Tua",
        author: "Nadia Permata",
        category: "Fiksi",
        year: 2023,
        rating: 4.5,
        description:
            "Kisah misteri yang terjadi di sebuah kota tua penuh rahasia.",
        available: true
    },

    {
        id: 10,
        title: "Dasar-Dasar Kecerdasan Buatan",
        author: "Rizky Hidayat",
        category: "Teknologi",
        year: 2025,
        rating: 4.9,
        description:
            "Mengenal konsep dasar artificial intelligence dan penerapannya.",
        available: true
    },

    {
        id: 11,
        title: "Matematika Menyenangkan",
        author: "Tina Sari",
        category: "Pendidikan",
        year: 2023,
        rating: 4.3,
        description:
            "Belajar matematika melalui contoh dan latihan yang menyenangkan.",
        available: true
    },

    {
        id: 12,
        title: "Dunia Hewan",
        author: "Agus Setiawan",
        category: "Sains",
        year: 2024,
        rating: 4.6,
        description:
            "Mengenal berbagai jenis hewan dan kehidupan mereka di alam.",
        available: true
    }
];


/* =====================================================
   STATE
===================================================== */

let currentCategory = "Semua";

let currentSearch = "";

let currentSort = "newest";

let favorites =
    JSON.parse(
        localStorage.getItem("favorites")
    ) || [];

let history =
    JSON.parse(
        localStorage.getItem("readingHistory")
    ) || [];


/* =====================================================
   ELEMENTS
===================================================== */

const bookGrid =
    document.getElementById("bookGrid");

const favoriteGrid =
    document.getElementById("favoriteGrid");

const favoriteEmpty =
    document.getElementById("favoriteEmpty");

const historyList =
    document.getElementById("historyList");

const historyEmpty =
    document.getElementById("historyEmpty");

const emptyState =
    document.getElementById("emptyState");

const searchInput =
    document.getElementById("searchInput");

const searchButton =
    document.getElementById("searchButton");

const sortSelect =
    document.getElementById("sortSelect");

const categoryButtons =
    document.querySelectorAll(
        ".category-button"
    );

const bookModal =
    document.getElementById("bookModal");

const bookModalContent =
    document.getElementById(
        "bookModalContent"
    );

const closeBookModal =
    document.getElementById(
        "closeBookModal"
    );

const loginModal =
    document.getElementById("loginModal");

const loginButton =
    document.getElementById("loginButton");

const closeLoginModal =
    document.getElementById(
        "closeLoginModal"
    );

const loginForm =
    document.getElementById("loginForm");

const toast =
    document.getElementById("toast");

const themeButton =
    document.getElementById("themeButton");

const menuButton =
    document.getElementById("menuButton");

const navMenu =
    document.getElementById("navMenu");

const backToTop =
    document.getElementById("backToTop");

const profileFavoriteCount =
    document.getElementById(
        "profileFavoriteCount"
    );

const profileHistoryCount =
    document.getElementById(
        "profileHistoryCount"
    );


/* =====================================================
   INITIALIZATION
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        loadTheme();

        renderBooks();

        renderFavorites();

        renderHistory();

        updateProfileStats();

        setupEvents();

    }
);


/* =====================================================
   EVENTS
===================================================== */

function setupEvents() {

    searchInput.addEventListener(
        "input",
        function () {

            currentSearch =
                this.value
                    .trim()
                    .toLowerCase();

            renderBooks();

        }
    );


    searchButton.addEventListener(
        "click",
        function () {

            currentSearch =
                searchInput.value
                    .trim()
                    .toLowerCase();

            renderBooks();

            document
                .getElementById("koleksi")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }
    );


    sortSelect.addEventListener(
        "change",
        function () {

            currentSort =
                this.value;

            renderBooks();

        }
    );


    categoryButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    categoryButtons.forEach(
                        function (item) {
                            item.classList.remove(
                                "active"
                            );
                        }
                    );

                    this.classList.add(
                        "active"
                    );

                    currentCategory =
                        this.dataset.category;

                    renderBooks();

                }
            );

        }
    );


    closeBookModal.addEventListener(
        "click",
        closeModal
    );


    bookModal.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                bookModal
            ) {
                closeModal();
            }

        }
    );


    loginButton.addEventListener(
        "click",
        openLogin
    );


    closeLoginModal.addEventListener(
        "click",
        closeLogin
    );


    loginModal.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                loginModal
            ) {
                closeLogin();
            }

        }
    );


    loginForm.addEventListener(
        "submit",
        handleLogin
    );


    themeButton.addEventListener(
        "click",
        toggleDarkMode
    );


    menuButton.addEventListener(
        "click",
        function () {

            navMenu.classList.toggle(
                "open"
            );

        }
    );


    backToTop.addEventListener(
        "click",
        function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );


    window.addEventListener(
        "scroll",
        function () {

            if (window.scrollY > 400) {

                backToTop.classList.add(
                    "show"
                );

            } else {

                backToTop.classList.remove(
                    "show"
                );

            }

        }
    );


    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape"
            ) {

                closeModal();

                closeLogin();

            }

        }
    );

}


/* =====================================================
   FILTER + SEARCH + SORT
===================================================== */

function getFilteredBooks() {

    let result =
        [...books];


    if (
        currentCategory !==
        "Semua"
    ) {

        result =
            result.filter(
                function (book) {

                    return (
                        book.category ===
                        currentCategory
                    );

                }
            );

    }


    if (currentSearch) {

        result =
            result.filter(
                function (book) {

                    const text =
                        (
                            book.title +
                            " " +
                            book.author +
                            " " +
                            book.category
                        ).toLowerCase();

                    return text.includes(
                        currentSearch
                    );

                }
            );

    }


    if (
        currentSort ===
        "newest"
    ) {

        result.sort(
            function (a, b) {

                return (
                    b.year -
                    a.year
                );

            }
        );

    }


    if (
        currentSort ===
        "rating"
    ) {

        result.sort(
            function (a, b) {

                return (
                    b.rating -
                    a.rating
                );

            }
        );

    }


    if (
        currentSort ===
        "title"
    ) {

        result.sort(
            function (a, b) {

                return a.title.localeCompare(
                    b.title
                );

            }
        );

    }


    return result;

}


/* =====================================================
   RENDER BOOKS
===================================================== */

function renderBooks() {

    const filteredBooks =
        getFilteredBooks();


    bookGrid.innerHTML = "";


    if (
        filteredBooks.length ===
        0
    ) {

        emptyState.classList.remove(
            "hidden"
        );

        return;

    }


    emptyState.classList.add(
        "hidden"
    );


    filteredBooks.forEach(
        function (book) {

            const card =
                createBookCard(book);

            bookGrid.appendChild(
                card
            );

        }
    );

}


/* =====================================================
   CREATE BOOK CARD
===================================================== */

function createBookCard(book) {

    const article =
        document.createElement(
            "article"
        );

    article.className =
        "book-card";


    const isFavorite =
        favorites.includes(
            book.id
        );


    article.innerHTML = `

        <div class="book-cover">
            📖
        </div>

        <div class="book-info">

            <h3 class="book-title">
                ${escapeHTML(book.title)}
            </h3>

            <p class="book-author">
                ${escapeHTML(book.author)}
            </p>

            <div class="book-meta">

                <span class="book-category">
                    ${escapeHTML(book.category)}
                </span>

                <span class="rating">
                    ⭐ ${book.rating}
                </span>

            </div>

            <div class="book-actions">

                <button
                    type="button"
                    class="read-button"
                    data-action="read"
                >
                    Baca
                </button>

                <button
                    type="button"
                    class="detail-button"
                    data-action="detail"
                >
                    Detail
                </button>

                <button
                    type="button"
                    class="favorite-button ${
                        isFavorite
                            ? "active"
                            : ""
                    }"
                    data-action="favorite"
                    aria-label="Favorit"
                >
                    ${
                        isFavorite
                            ? "♥"
                            : "♡"
                    }
                </button>

            </div>

        </div>
    `;


    article
        .querySelector(
            '[data-action="read"]'
        )
        .addEventListener(
            "click",
            function () {

                readBook(book.id);

            }
        );


    article
        .querySelector(
            '[data-action="detail"]'
        )
        .addEventListener(
            "click",
            function () {

                openBookDetail(
                    book.id
                );

            }
        );


    article
        .querySelector(
            '[data-action="favorite"]'
        )
        .addEventListener(
            "click",
            function () {

                toggleFavorite(
                    book.id
                );

            }
        );


    return article;

}


/* =====================================================
   FAVORITE
===================================================== */

function toggleFavorite(bookId) {

    const index =
        favorites.indexOf(
            bookId
        );


    if (index === -1) {

        favorites.push(
            bookId
        );

        showToast(
            "❤️ Buku ditambahkan ke favorit"
        );

    } else {

        favorites.splice(
            index,
            1
        );

        showToast(
            "Buku dihapus dari favorit"
        );

    }


    localStorage.setItem(
        "favorites",
        JSON.stringify(
            favorites
        )
    );


    renderBooks();

    renderFavorites();

    updateProfileStats();

}


function renderFavorites() {

    favoriteGrid.innerHTML = "";


    const favoriteBooks =
        books.filter(
            function (book) {

                return favorites.includes(
                    book.id
                );

            }
        );


    if (
        favoriteBooks.length ===
        0
    ) {

        favoriteEmpty.classList.remove(
            "hidden"
        );

        return;

    }


    favoriteEmpty.classList.add(
        "hidden"
    );


    favoriteBooks.forEach(
        function (book) {

            favoriteGrid.appendChild(
                createBookCard(book)
            );

        }
    );

}


/* =====================================================
   BOOK DETAIL
===================================================== */

function openBookDetail(bookId) {

    const book =
        books.find(
            function (item) {

                return item.id ===
                    bookId;

            }
        );


    if (!book) {
        return;
    }


    bookModalContent.innerHTML = `

        <div class="detail-layout">

            <div class="detail-cover">
                📖
            </div>

            <div class="detail-information">

                <span class="section-label">
                    ${escapeHTML(book.category)}
                </span>

                <h2 id="modalBookTitle">
                    ${escapeHTML(book.title)}
                </h2>

                <p class="author">
                    Oleh ${escapeHTML(book.author)}
                </p>

                <div class="detail-meta">

                    <span>
                        Tahun ${book.year}
                    </span>

                    <span>
                        ⭐ ${book.rating}
                    </span>

                    <span>
                        ${
                            book.available
                                ? "Tersedia"
                                : "Tidak tersedia"
                        }
                    </span>

                </div>

                <p class="detail-description">
                    ${escapeHTML(
                        book.description
                    )}
                </p>

                <div class="book-actions">

                    <button
                        type="button"
                        class="read-button"
                        id="modalReadButton"
                    >
                        📖 Baca Sekarang
                    </button>

                    <button
                        type="button"
                        class="detail-button"
                        id="modalFavoriteButton"
                    >
                        ❤️ Favorit
                    </button>

                </div>

            </div>

        </div>
    `;


    bookModal.classList.remove(
        "hidden"
    );


    document
        .getElementById(
            "modalReadButton"
        )
        .addEventListener(
            "click",
            function () {

                closeModal();

                readBook(book.id);

            }
        );


    document
        .getElementById(
            "modalFavoriteButton"
        )
        .addEventListener(
            "click",
            function () {

                toggleFavorite(
                    book.id
                );

            }
        );

}


function closeModal() {

    bookModal.classList.add(
        "hidden"
    );

}


/* =====================================================
   READ BOOK
===================================================== */

function readBook(bookId) {

    const book =
        books.find(
            function (item) {

                return item.id ===
                    bookId;

            }
        );


    if (!book) {
        return;
    }


    let readingData =
        JSON.parse(
            localStorage.getItem(
                "readingProgress"
            )
        ) || {};


    const currentPage =
        readingData[bookId] || 1;


    const pages = [

        `Selamat datang di buku "${book.title}". Halaman ini berisi pengantar dan informasi awal mengenai buku.`,

        `Pada halaman ini kita mulai membahas topik utama. Buku ini ditulis oleh ${book.author} dan termasuk kategori ${book.category}.`,

        `Pembahasan selanjutnya memberikan wawasan yang lebih mendalam kepada pembaca. Gunakan tombol berikutnya untuk melanjutkan.`,

        `Terima kasih telah membaca buku ini melalui Perpustakaan Digital. Semoga pengetahuan yang diperoleh bermanfaat.`

    ];


    let page =
        Math.min(
            currentPage,
            pages.length
        );


    const reader =
        document.createElement(
            "div"
        );

    reader.className =
        "modal";


    reader.innerHTML = `

        <div class="modal-content">

            <button
                type="button"
                class="modal-close"
                id="closeReader"
                aria-label="Tutup reader"
            >
                ×
            </button>

            <span class="section-label">
                DIGITAL READER
            </span>

            <h2>
                ${escapeHTML(book.title)}
            </h2>

            <p>
                ${escapeHTML(book.author)}
            </p>

            <div
                id="readerText"
                style="
                    margin-top:25px;
                    padding:25px;
                    min-height:250px;
                    border-radius:15px;
                    background:var(--primary-light);
                    line-height:2;
                    font-size:18px;
                "
            >
            </div>

            <div
                class="progress"
                style="margin-top:20px;"
            >
                <div
                    class="progress-bar"
                    id="readerProgress"
                ></div>
            </div>

            <div
                style="
                    display:flex;
                    justify-content:space-between;
                    align-items:center;
                    gap:10px;
                    margin-top:20px;
                "
            >

                <button
                    type="button"
                    class="detail-button"
                    id="previousPage"
                >
                    ← Sebelumnya
                </button>

                <strong id="pageNumber"></strong>

                <button
                    type="button"
                    class="read-button"
                    id="nextPage"
                >
                    Berikutnya →
                </button>

            </div>

        </div>
    `;


    document.body.appendChild(
        reader
    );


    const readerText =
        reader.querySelector(
            "#readerText"
        );

    const pageNumber =
        reader.querySelector(
            "#pageNumber"
        );

    const progressBar =
        reader.querySelector(
            "#readerProgress"
        );

    const previousButton =
        reader.querySelector(
            "#previousPage"
        );

    const nextButton =
        reader.querySelector(
            "#nextPage"
        );


    function updatePage() {

        readerText.textContent =
            pages[page - 1];

        pageNumber.textContent =
            `Halaman ${page} dari ${pages.length}`;

        progressBar.style.width =
            `${
                (page / pages.length) *
                100
            }%`;


        previousButton.disabled =
            page === 1;

        nextButton.disabled =
            page === pages.length;


        saveReadingProgress(
            bookId,
            page,
            pages.length
        );

    }


    previousButton.addEventListener(
        "click",
        function () {

            if (page > 1) {

                page--;

                updatePage();

            }

        }
    );


    nextButton.addEventListener(
        "click",
        function () {

            if (
                page <
                pages.length
            ) {

                page++;

                updatePage();

            }

        }
    );


    reader
        .querySelector(
            "#closeReader"
        )
        .addEventListener(
            "click",
            function () {

                reader.remove();

            }
        );


    reader.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                reader
            ) {

                reader.remove();

            }

        }
    );


    updatePage();

    showToast(
        "📖 Buku berhasil dibuka"
    );

}


/* =====================================================
   READING PROGRESS
===================================================== */

function saveReadingProgress(
    bookId,
    page,
    totalPages
) {

    const progressData =
        JSON.parse(
            localStorage.getItem(
                "readingProgress"
            )
        ) || {};


    progressData[bookId] =
        page;


    localStorage.setItem(
        "readingProgress",
        JSON.stringify(
            progressData
        )
    );


    let found =
        history.find(
            function (item) {

                return item.id ===
                    bookId;

            }
        );


    const progress =
        Math.round(
            (page / totalPages) *
            100
        );


    if (found) {

        found.progress =
            progress;

    } else {

        history.unshift({
            id: bookId,
            progress: progress,
            date: Date.now()
        });

    }


    localStorage.setItem(
        "readingHistory",
        JSON.stringify(
            history
        )
    );


    renderHistory();

    updateProfileStats();

}


/* =====================================================
   HISTORY
===================================================== */

function renderHistory() {

    historyList.innerHTML = "";


    if (
        history.length ===
        0
    ) {

        historyEmpty.classList.remove(
            "hidden"
        );

        return;

    }


    historyEmpty.classList.add(
        "hidden"
    );


    history.forEach(
        function (item) {

            const book =
                books.find(
                    function (book) {

                        return book.id ===
                            item.id;

                    }
                );


            if (!book) {
                return;
            }


            const element =
                document.createElement(
                    "div"
                );

            element.className =
                "history-item";


            element.innerHTML = `

                <div class="history-cover">
                    📖
                </div>

                <div class="history-info">

                    <h3>
                        ${escapeHTML(
                            book.title
                        )}
                    </h3>

                    <p>
                        ${escapeHTML(
                            book.author
                        )}
                    </p>

                    <div class="progress">

                        <div
                            class="progress-bar"
                            style="
                                width:
                                ${item.progress}%;
                            "
                        ></div>

                    </div>

                    <small>
                        ${item.progress}% selesai
                    </small>

                </div>

                <button
                    type="button"
                    class="read-button"
                >
                    Lanjutkan
                </button>
            `;


            element
                .querySelector(
                    ".read-button"
                )
                .addEventListener(
                    "click",
                    function () {

                        readBook(
                            book.id
                        );

                    }
                );


            historyList.appendChild(
                element
            );

        }
    );

}


/* =====================================================
   LOGIN
===================================================== */

function openLogin() {

    loginModal.classList.remove(
        "hidden"
    );

}


function closeLogin() {

    loginModal.classList.add(
        "hidden"
    );

}


function handleLogin(event) {

    event.preventDefault();


    const email =
        document
            .getElementById(
                "loginEmail"
            )
            .value
            .trim();


    const password =
        document
            .getElementById(
                "loginPassword"
            )
            .value;


    if (
        !email ||
        !password
    ) {

        showToast(
            "Email dan password harus diisi."
        );

        return;

    }


    const account =
        JSON.parse(
            localStorage.getItem(
                "account"
            )
        );


    if (
        account &&
        account.email === email &&
        account.password === password
    ) {

        localStorage.setItem(
            "loggedIn",
            "true"
        );

        showToast(
            "✅ Login berhasil."
        );

        closeLogin();

    } else {

        showToast(
            "Email atau password salah."
        );

    }

}


/* =====================================================
   DARK MODE
===================================================== */

function toggleDarkMode() {

    document.body.classList.toggle(
        "dark"
    );


    const isDark =
        document.body.classList.contains(
            "dark"
        );


    localStorage.setItem(
        "darkMode",
        isDark
            ? "true"
            : "false"
    );


    themeButton.textContent =
        isDark
            ? "☀️"
            : "🌙";

}


function loadTheme() {

    const isDark =
        localStorage.getItem(
            "darkMode"
        ) === "true";


    if (isDark) {

        document.body.classList.add(
            "dark"
        );

        themeButton.textContent =
            "☀️";

    }

}


/* =====================================================
   PROFILE
===================================================== */

function updateProfileStats() {

    profileFavoriteCount.textContent =
        favorites.length;

    profileHistoryCount.textContent =
        history.length;

}


/* =====================================================
   TOAST
===================================================== */

let toastTimer;


function showToast(message) {

    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        toastTimer
    );


    toastTimer =
        setTimeout(
            function () {

                toast.classList.remove(
                    "show"
                );

            },
            2500
        );

}


/* =====================================================
   ESCAPE HTML
===================================================== */

function escapeHTML(value) {

    return String(value)
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );

}
