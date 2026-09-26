/* =========================================================
   PERPUSTAKAAN DIGITAL
   Vanilla JavaScript
========================================================= */


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
        available: true,
        description: "Panduan praktis mempelajari JavaScript modern dari dasar hingga konsep lanjutan untuk membangun aplikasi web interaktif.",
        cover: "https://placehold.co/600x800/4f46e5/ffffff?text=JavaScript",
        pages: [
            {
                title: "Memulai Perjalanan JavaScript",
                text: [
                    "JavaScript merupakan salah satu bahasa pemrograman yang paling banyak digunakan dalam pengembangan web modern.",
                    "Bahasa ini memungkinkan sebuah halaman web merespons interaksi pengguna secara dinamis. Dengan JavaScript, kita dapat membuat tombol interaktif, formulir, animasi, aplikasi web, hingga berbagai sistem yang kompleks.",
                    "Pada buku ini kita akan memulai dari konsep paling dasar sebelum secara bertahap mempelajari konsep yang lebih lanjut."
                ]
            },
            {
                title: "Variabel dan Tipe Data",
                text: [
                    "Variabel digunakan untuk menyimpan sebuah nilai di dalam program. JavaScript menyediakan beberapa cara untuk mendeklarasikan variabel, seperti let dan const.",
                    "Tipe data dasar yang sering digunakan antara lain string, number, boolean, null, undefined, object, dan array.",
                    "Memahami tipe data merupakan fondasi penting sebelum mempelajari struktur program yang lebih kompleks."
                ]
            },
            {
                title: "Function",
                text: [
                    "Function atau fungsi merupakan blok kode yang dibuat untuk melakukan pekerjaan tertentu.",
                    "Dengan function, kode dapat dibuat lebih terorganisir, mudah digunakan kembali, dan lebih mudah dirawat.",
                    "Function dapat menerima parameter dan menghasilkan sebuah nilai melalui return."
                ]
            },
            {
                title: "DOM dan Interaksi",
                text: [
                    "Document Object Model atau DOM memungkinkan JavaScript berinteraksi dengan elemen HTML.",
                    "Kita dapat memilih elemen, mengubah teks, mengubah style, membuat elemen baru, dan merespons berbagai aktivitas pengguna.",
                    "Konsep DOM menjadi bagian penting dalam pengembangan aplikasi web interaktif."
                ]
            },
            {
                title: "Penutup",
                text: [
                    "JavaScript memiliki ekosistem yang sangat luas dan dapat digunakan untuk berbagai kebutuhan pengembangan perangkat lunak.",
                    "Kunci untuk menguasai JavaScript adalah latihan secara konsisten dan membangun berbagai proyek nyata.",
                    "Teruslah bereksperimen dan gunakan setiap proyek sebagai kesempatan untuk mempelajari sesuatu yang baru."
                ]
            }
        ]
    },

    {
        id: 2,
        title: "Masa Depan Kecerdasan Buatan",
        author: "Raka Wijaya",
        category: "Teknologi",
        year: 2025,
        rating: 4.9,
        available: true,
        description: "Mengenal perkembangan kecerdasan buatan, penerapannya, serta bagaimana teknologi AI memengaruhi kehidupan manusia.",
        cover: "https://placehold.co/600x800/7c3aed/ffffff?text=AI",
        pages: [
            {
                title: "Mengenal AI",
                text: [
                    "Kecerdasan buatan merupakan bidang teknologi yang berusaha membuat komputer mampu melakukan tugas yang membutuhkan kemampuan kognitif manusia.",
                    "AI telah berkembang dari sistem berbasis aturan sederhana menjadi model pembelajaran mesin yang mampu memproses data dalam jumlah besar.",
                    "Perkembangan ini membuka berbagai peluang baru dalam pendidikan, kesehatan, bisnis, dan berbagai bidang lainnya."
                ]
            },
            {
                title: "Pembelajaran Mesin",
                text: [
                    "Machine learning merupakan salah satu cabang AI yang memungkinkan komputer belajar dari data.",
                    "Model machine learning dapat digunakan untuk klasifikasi, prediksi, rekomendasi, dan berbagai kebutuhan lainnya.",
                    "Kualitas data dan desain model memiliki peranan penting dalam menghasilkan sistem yang bermanfaat."
                ]
            },
            {
                title: "AI dalam Kehidupan",
                text: [
                    "Saat ini AI dapat ditemukan dalam mesin pencari, sistem rekomendasi, penerjemah otomatis, aplikasi produktivitas, dan berbagai layanan digital.",
                    "Pemanfaatan teknologi tersebut perlu disertai pemahaman terhadap keamanan, privasi, dan dampaknya terhadap masyarakat."
                ]
            },
            {
                title: "Masa Depan",
                text: [
                    "Teknologi AI kemungkinan akan terus berkembang seiring meningkatnya kemampuan komputasi dan ketersediaan data.",
                    "Manusia tetap memiliki peranan penting dalam menentukan bagaimana teknologi tersebut digunakan secara bertanggung jawab."
                ]
            },
            {
                title: "Kesimpulan",
                text: [
                    "AI merupakan teknologi yang memiliki banyak kemungkinan penggunaan.",
                    "Pemahaman yang baik akan membantu masyarakat memanfaatkan teknologi dengan lebih bijaksana dan produktif."
                ]
            }
        ]
    },

    {
        id: 3,
        title: "Filosofi Hidup Sederhana",
        author: "Dewi Lestari",
        category: "Fiksi",
        year: 2023,
        rating: 4.6,
        available: true,
        description: "Sebuah buku reflektif tentang menemukan kebahagiaan melalui kesederhanaan, kesadaran, dan hubungan dengan lingkungan sekitar.",
        cover: "https://placehold.co/600x800/059669/ffffff?text=Filosofi",
        pages: [
            {
                title: "Kesederhanaan",
                text: [
                    "Kesederhanaan bukan berarti memiliki lebih sedikit dari orang lain. Kesederhanaan merupakan kemampuan untuk memahami apa yang benar-benar kita butuhkan.",
                    "Dalam kehidupan yang semakin cepat, kemampuan berhenti sejenak dapat membantu kita memahami diri sendiri."
                ]
            },
            {
                title: "Waktu",
                text: [
                    "Waktu merupakan sumber daya yang tidak dapat dikembalikan.",
                    "Menggunakan waktu secara sadar membantu kita memberikan perhatian kepada hal-hal yang benar-benar penting."
                ]
            },
            {
                title: "Hubungan",
                text: [
                    "Hubungan dengan keluarga, sahabat, dan masyarakat memberikan warna dalam perjalanan hidup.",
                    "Mendengarkan dengan tulus sering kali lebih bermakna daripada sekadar memberikan nasihat."
                ]
            },
            {
                title: "Rasa Syukur",
                text: [
                    "Rasa syukur membantu seseorang menghargai hal-hal sederhana yang sering terlewatkan.",
                    "Kebahagiaan tidak selalu berasal dari pencapaian besar."
                ]
            },
            {
                title: "Penutup",
                text: [
                    "Hidup sederhana adalah proses menemukan keseimbangan.",
                    "Setiap orang dapat menentukan bentuk kesederhanaannya sendiri berdasarkan nilai dan kebutuhannya."
                ]
            }
        ]
    },

    {
        id: 4,
        title: "Sejarah Nusantara",
        author: "Budi Santoso",
        category: "Sejarah",
        year: 2022,
        rating: 4.7,
        available: true,
        description: "Mengenal perjalanan panjang sejarah Nusantara dari masa kerajaan hingga perkembangan masyarakat modern.",
        cover: "https://placehold.co/600x800/b45309/ffffff?text=Nusantara",
        pages: [
            {
                title: "Awal Peradaban",
                text: [
                    "Nusantara memiliki sejarah panjang dengan beragam kebudayaan dan masyarakat.",
                    "Letak geografis kepulauan menjadikan wilayah ini sebagai tempat bertemunya berbagai jalur perdagangan dan budaya."
                ]
            },
            {
                title: "Kerajaan",
                text: [
                    "Berbagai kerajaan berkembang di kepulauan Nusantara.",
                    "Peninggalan berupa prasasti, bangunan, karya sastra, dan artefak memberikan informasi penting tentang kehidupan masyarakat masa lalu."
                ]
            },
            {
                title: "Perdagangan",
                text: [
                    "Perdagangan laut memainkan peranan besar dalam perkembangan kota-kota pesisir.",
                    "Pertukaran barang juga membawa pertukaran gagasan dan kebudayaan."
                ]
            },
            {
                title: "Perubahan Sosial",
                text: [
                    "Masyarakat terus mengalami perubahan akibat perkembangan ekonomi, teknologi, dan hubungan antarwilayah.",
                    "Sejarah membantu kita memahami proses perubahan tersebut."
                ]
            },
            {
                title: "Belajar dari Sejarah",
                text: [
                    "Mempelajari sejarah bukan hanya mengingat tanggal dan nama.",
                    "Sejarah dapat membantu kita memahami sebab dan akibat berbagai peristiwa."
                ]
            }
        ]
    },

    {
        id: 5,
        title: "Ensiklopedia Sains untuk Semua",
        author: "Nadia Rahma",
        category: "Sains",
        year: 2024,
        rating: 4.8,
        available: true,
        description: "Penjelasan ringan tentang berbagai fenomena alam, energi, tubuh manusia, bumi, dan luar angkasa.",
        cover: "https://placehold.co/600x800/0284c7/ffffff?text=Sains",
        pages: [
            {
                title: "Apa Itu Sains?",
                text: [
                    "Sains merupakan cara sistematis untuk mempelajari alam melalui pengamatan, pengukuran, dan pengujian.",
                    "Rasa ingin tahu menjadi salah satu pendorong utama perkembangan ilmu pengetahuan."
                ]
            },
            {
                title: "Energi",
                text: [
                    "Energi terdapat dalam berbagai bentuk seperti panas, cahaya, gerak, dan energi kimia.",
                    "Pemahaman mengenai energi membantu manusia mengembangkan berbagai teknologi."
                ]
            },
            {
                title: "Planet Bumi",
                text: [
                    "Bumi merupakan planet yang memiliki kondisi yang mendukung kehidupan.",
                    "Atmosfer, air, dan berbagai proses geologis membentuk lingkungan tempat manusia hidup."
                ]
            },
            {
                title: "Tubuh Manusia",
                text: [
                    "Tubuh manusia tersusun dari berbagai sistem yang bekerja bersama.",
                    "Jantung, paru-paru, sistem saraf, dan organ lainnya memiliki fungsi yang saling berhubungan."
                ]
            },
            {
                title: "Luar Angkasa",
                text: [
                    "Alam semesta memiliki miliaran galaksi dan jumlah bintang yang sangat besar.",
                    "Eksplorasi luar angkasa terus membantu manusia memahami tempat kita di alam semesta."
                ]
            }
        ]
    },

    {
        id: 6,
        title: "Strategi Bisnis Digital",
        author: "Fajar Hidayat",
        category: "Bisnis",
        year: 2025,
        rating: 4.7,
        available: true,
        description: "Panduan memahami strategi bisnis di era digital, mulai dari pemasaran hingga membangun hubungan dengan pelanggan.",
        cover: "https://placehold.co/600x800/ea580c/ffffff?text=Bisnis",
        pages: [
            {
                title: "Bisnis Digital",
                text: [
                    "Perkembangan teknologi mengubah cara perusahaan berinteraksi dengan pelanggan.",
                    "Bisnis digital memanfaatkan teknologi untuk menciptakan nilai dan memberikan layanan yang lebih mudah diakses."
                ]
            },
            {
                title: "Pelanggan",
                text: [
                    "Memahami kebutuhan pelanggan merupakan bagian penting dari strategi bisnis.",
                    "Data dan komunikasi dapat membantu perusahaan memahami pengalaman pengguna."
                ]
            },
            {
                title: "Pemasaran",
                text: [
                    "Pemasaran digital memiliki berbagai kanal seperti mesin pencari, media sosial, email, dan konten.",
                    "Strategi yang baik perlu disesuaikan dengan karakteristik target pengguna."
                ]
            },
            {
                title: "Inovasi",
                text: [
                    "Inovasi tidak selalu berarti menciptakan teknologi baru.",
                    "Perbaikan kecil pada produk dan proses juga dapat memberikan manfaat besar."
                ]
            },
            {
                title: "Kesimpulan",
                text: [
                    "Bisnis digital membutuhkan kemampuan beradaptasi.",
                    "Pemahaman terhadap pelanggan dan kemampuan menggunakan teknologi menjadi faktor penting."
                ]
            }
        ]
    },

    {
        id: 7,
        title: "Petualangan di Hutan Ajaib",
        author: "Maya Putri",
        category: "Anak-anak",
        year: 2021,
        rating: 4.9,
        available: true,
        description: "Cerita petualangan penuh imajinasi tentang persahabatan dan keberanian di sebuah hutan misterius.",
        cover: "https://placehold.co/600x800/16a34a/ffffff?text=Hutan",
        pages: [
            {
                title: "Memasuki Hutan",
                text: [
                    "Pada suatu pagi, Lila menemukan sebuah jalan kecil di belakang rumahnya.",
                    "Jalan tersebut membawa Lila menuju sebuah hutan yang belum pernah ia lihat sebelumnya."
                ]
            },
            {
                title: "Teman Baru",
                text: [
                    "Di dalam hutan, Lila bertemu seekor burung kecil yang dapat berbicara.",
                    "Burung itu bernama Kiko dan ia sedang mencari jalan pulang."
                ]
            },
            {
                title: "Pohon Tua",
                text: [
                    "Mereka menemukan sebuah pohon tua yang menyimpan peta rahasia.",
                    "Peta tersebut menunjukkan jalan menuju sebuah taman tersembunyi."
                ]
            },
            {
                title: "Taman Rahasia",
                text: [
                    "Taman tersebut dipenuhi bunga berwarna-warni dan suara air yang jernih.",
                    "Lila menyadari bahwa keberanian akan semakin kuat ketika seseorang tidak berjalan sendirian."
                ]
            },
            {
                title: "Pulang",
                text: [
                    "Setelah menemukan jalan pulang, Lila berjanji akan menjaga rahasia hutan tersebut.",
                    "Petualangan itu mengajarkannya arti persahabatan dan keberanian."
                ]
            }
        ]
    },

    {
        id: 8,
        title: "Pendidikan di Era Digital",
        author: "Siti Aminah",
        category: "Pendidikan",
        year: 2024,
        rating: 4.6,
        available: true,
        description: "Membahas transformasi pembelajaran dan peluang teknologi digital dalam dunia pendidikan.",
        cover: "https://placehold.co/600x800/0891b2/ffffff?text=Pendidikan",
        pages: [
            {
                title: "Pembelajaran Modern",
                text: [
                    "Teknologi memberikan berbagai cara baru bagi siswa dan pendidik untuk mendapatkan informasi.",
                    "Pembelajaran dapat dilakukan melalui video, aplikasi, buku digital, dan berbagai sumber interaktif."
                ]
            },
            {
                title: "Peran Guru",
                text: [
                    "Guru tetap memiliki peran penting dalam membantu siswa memahami informasi.",
                    "Teknologi sebaiknya menjadi alat pendukung proses pembelajaran."
                ]
            },
            {
                title: "Literasi Digital",
                text: [
                    "Kemampuan menggunakan teknologi harus disertai kemampuan mengevaluasi informasi.",
                    "Literasi digital membantu pengguna memahami kualitas dan keamanan informasi."
                ]
            },
            {
                title: "Akses Pendidikan",
                text: [
                    "Perpustakaan digital dapat membantu memperluas akses terhadap sumber belajar.",
                    "Pengembangan infrastruktur dan kemampuan digital tetap diperlukan agar manfaatnya dapat dirasakan secara luas."
                ]
            },
            {
                title: "Masa Depan Pendidikan",
                text: [
                    "Pendidikan akan terus berubah mengikuti kebutuhan masyarakat.",
                    "Kemampuan belajar sepanjang hayat akan menjadi semakin penting."
                ]
            }
        ]
    },

    {
        id: 9,
        title: "Langit Senja",
        author: "Arif Maulana",
        category: "Novel",
        year: 2020,
        rating: 4.5,
        available: true,
        description: "Novel tentang perjalanan dua sahabat yang menemukan makna keluarga, harapan, dan masa depan.",
        cover: "https://placehold.co/600x800/db2777/ffffff?text=Senja",
        pages: [
            {
                title: "Pertemuan",
                text: [
                    "Senja sore itu membuat langit terlihat berbeda.",
                    "Di sebuah halte kecil, dua orang yang telah lama tidak bertemu kembali berbincang tentang perjalanan hidup mereka."
                ]
            },
            {
                title: "Kenangan",
                text: [
                    "Kenangan masa lalu sering muncul ketika kita kembali mengunjungi tempat yang familiar.",
                    "Namun waktu juga mengajarkan bahwa manusia selalu berubah."
                ]
            },
            {
                title: "Perjalanan",
                text: [
                    "Mereka memutuskan melakukan perjalanan singkat ke kota kecil tempat mereka tumbuh.",
                    "Perjalanan tersebut membawa mereka bertemu kembali dengan banyak cerita lama."
                ]
            },
            {
                title: "Pilihan",
                text: [
                    "Setiap orang memiliki pilihan yang harus diambil.",
                    "Tidak semua pilihan mudah, tetapi setiap keputusan dapat menjadi bagian dari perjalanan hidup."
                ]
            },
            {
                title: "Langit Baru",
                text: [
                    "Matahari akhirnya tenggelam.",
                    "Mereka menyadari bahwa akhir sebuah hari bukanlah akhir dari segalanya, melainkan kesempatan untuk memulai hari berikutnya."
                ]
            }
        ]
    },

    {
        id: 10,
        title: "Dasar-Dasar Astronomi",
        author: "Dimas Nugraha",
        category: "Sains",
        year: 2023,
        rating: 4.7,
        available: true,
        description: "Pengenalan astronomi untuk pembaca umum yang ingin memahami planet, bintang, galaksi, dan alam semesta.",
        cover: "https://placehold.co/600x800/1d4ed8/ffffff?text=Astronomi",
        pages: [
            {
                title: "Melihat Langit",
                text: [
                    "Manusia telah mengamati langit sejak zaman dahulu.",
                    "Bintang dan benda langit digunakan untuk menentukan arah dan waktu."
                ]
            },
            {
                title: "Tata Surya",
                text: [
                    "Tata Surya terdiri dari Matahari dan berbagai benda yang mengorbitnya.",
                    "Planet-planet memiliki karakteristik yang berbeda-beda."
                ]
            },
            {
                title: "Bintang",
                text: [
                    "Bintang merupakan bola gas panas yang menghasilkan energi.",
                    "Matahari adalah salah satu bintang yang paling dekat dengan Bumi."
                ]
            },
            {
                title: "Galaksi",
                text: [
                    "Galaksi merupakan kumpulan besar bintang, gas, debu, dan materi lainnya.",
                    "Bima Sakti adalah galaksi tempat Tata Surya berada."
                ]
            },
            {
                title: "Alam Semesta",
                text: [
                    "Alam semesta sangat luas dan masih menyimpan banyak pertanyaan.",
                    "Astronomi membantu manusia terus mengeksplorasi dan memahami kosmos."
                ]
            }
        ]
    },

    {
        id: 11,
        title: "Seni Berpikir Kreatif",
        author: "Rina Kartika",
        category: "Pendidikan",
        year: 2022,
        rating: 4.6,
        available: true,
        description: "Latihan dan konsep untuk mengembangkan kreativitas dalam belajar, bekerja, dan memecahkan masalah.",
        cover: "https://placehold.co/600x800/9333ea/ffffff?text=Kreatif",
        pages: [
            {
                title: "Apa Itu Kreativitas?",
                text: [
                    "Kreativitas merupakan kemampuan menghasilkan gagasan baru atau melihat sesuatu dari sudut pandang yang berbeda.",
                    "Setiap orang memiliki kemampuan untuk mengembangkan kreativitas."
                ]
            },
            {
                title: "Rasa Ingin Tahu",
                text: [
                    "Pertanyaan sederhana dapat menjadi awal dari sebuah gagasan.",
                    "Rasa ingin tahu membantu kita menemukan hubungan baru antara berbagai hal."
                ]
            },
            {
                title: "Eksperimen",
                text: [
                    "Tidak semua ide akan berhasil.",
                    "Eksperimen memberikan kesempatan untuk belajar dari kegagalan dan memperbaiki pendekatan."
                ]
            },
            {
                title: "Kolaborasi",
                text: [
                    "Bekerja bersama orang lain dapat menghasilkan gagasan yang lebih beragam.",
                    "Perbedaan sudut pandang dapat menjadi sumber inovasi."
                ]
            },
            {
                title: "Latihan",
                text: [
                    "Kreativitas dapat dilatih melalui aktivitas rutin.",
                    "Tuliskan ide, buat sketsa, baca, diskusikan, dan terus mencoba."
                ]
            }
        ]
    },

    {
        id: 12,
        title: "Dunia Tanpa Batas",
        author: "Kevin Aditya",
        category: "Novel",
        year: 2024,
        rating: 4.8,
        available: true,
        description: "Novel inspiratif mengenai perjalanan seorang anak muda mengejar impian dan menemukan arti keberhasilan.",
        cover: "https://placehold.co/600x800/0f766e/ffffff?text=Dunia",
        pages: [
            {
                title: "Impian",
                text: [
                    "Setiap perjalanan besar sering dimulai dari sebuah impian sederhana.",
                    "Bagi sebagian orang, impian tersebut mungkin terlihat terlalu jauh, tetapi keyakinan memberikan keberanian untuk mencoba."
                ]
            },
            {
                title: "Langkah Pertama",
                text: [
                    "Tidak ada perjalanan tanpa langkah pertama.",
                    "Memulai sering kali lebih sulit daripada melanjutkan, tetapi tindakan kecil dapat menghasilkan perubahan besar."
                ]
            },
            {
                title: "Kegagalan",
                text: [
                    "Kegagalan bukan selalu akhir.",
                    "Pengalaman tersebut dapat memberikan pelajaran yang tidak bisa didapatkan hanya dari teori."
                ]
            },
            {
                title: "Perubahan",
                text: [
                    "Dalam perjalanan, tujuan seseorang dapat berubah.",
                    "Perubahan bukan berarti menyerah, melainkan kesempatan untuk memahami apa yang benar-benar penting."
                ]
            },
            {
                title: "Perjalanan",
                text: [
                    "Pada akhirnya, keberhasilan bukan hanya tentang mencapai tujuan.",
                    "Proses belajar, orang-orang yang ditemui, dan pengalaman yang diperoleh merupakan bagian penting dari perjalanan."
                ]
            }
        ]
    }
];


/* =========================================================
   STORAGE
========================================================= */

const STORAGE_KEYS = {
    favorites: "perpus_favorites",
    history: "perpus_history",
    progress: "perpus_progress",
    account: "perpus_account",
    currentUser: "perpus_current_user",
    theme: "perpus_theme"
};


/* =========================================================
   STATE
========================================================= */

let state = {
    selectedCategory: "Semua",
    searchQuery: "",
    sort: "latest",
    currentBook: null,
    currentPage: 0,
    currentReaderBook: null
};


/* =========================================================
   ELEMENTS
========================================================= */

const booksGrid = document.getElementById("booksGrid");
const favoriteGrid = document.getElementById("favoriteGrid");
const historyGrid = document.getElementById("historyGrid");

const categoryFilter = document.getElementById("categoryFilter");
const sortBooks = document.getElementById("sortBooks");
const searchResultInfo = document.getElementById("searchResultInfo");

const heroSearchForm = document.getElementById("heroSearchForm");
const heroSearchInput = document.getElementById("heroSearchInput");

const bookModal = document.getElementById("bookModal");
const bookDetailContent = document.getElementById("bookDetailContent");
const closeBookModal = document.getElementById("closeBookModal");

const authModal = document.getElementById("authModal");
const closeAuthModal = document.getElementById("closeAuthModal");

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

const showRegisterButton = document.getElementById("showRegisterButton");
const showLoginButton = document.getElementById("showLoginButton");

const authTitle = document.getElementById("authTitle");
const authSubtitle = document.getElementById("authSubtitle");

const profileModal = document.getElementById("profileModal");
const profileForm = document.getElementById("profileForm");
const closeProfileModal = document.getElementById("closeProfileModal");

const editProfileButton = document.getElementById("editProfileButton");

const reader = document.getElementById("reader");
const closeReader = document.getElementById("closeReader");

const readerBookTitle = document.getElementById("readerBookTitle");
const readerBookAuthor = document.getElementById("readerBookAuthor");
const readerContent = document.getElementById("readerContent");
const readerPageNumber = document.getElementById("readerPageNumber");
const readerPageCounter = document.getElementById("readerPageCounter");
const readerProgress = document.getElementById("readerProgress");

const previousPage = document.getElementById("previousPage");
const nextPage = document.getElementById("nextPage");

const toastContainer = document.getElementById("toastContainer");

const themeToggle = document.getElementById("themeToggle");
const readerThemeToggle = document.getElementById("readerThemeToggle");

const backToTop = document.getElementById("backToTop");

const mobileMenuButton = document.getElementById("mobileMenuButton");
const navMenu = document.getElementById("navMenu");

const loginButton = document.getElementById("loginButton");
const loginButtonText = document.getElementById("loginButtonText");


/* =========================================================
   LOCAL STORAGE HELPERS
========================================================= */

function getStorage(key, fallback) {
    try {
        const data = localStorage.getItem(key);

        if (data === null) {
            return fallback;
        }

        return JSON.parse(data);
    } catch (error) {
        console.error("Storage error:", error);
        return fallback;
    }
}

function setStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error("Storage save error:", error);
    }
}


/* =========================================================
   FAVORITES
========================================================= */

function getFavorites() {
    return getStorage(STORAGE_KEYS.favorites, []);
}

function saveFavorites(favorites) {
    setStorage(STORAGE_KEYS.favorites, favorites);
}

function isFavorite(bookId) {
    return getFavorites().includes(bookId);
}

function addToFavorite(bookId) {
    const favorites = getFavorites();

    if (!favorites.includes(bookId)) {
        favorites.push(bookId);
        saveFavorites(favorites);

        showToast("Buku berhasil ditambahkan ke favorit.", "success");
    }

    renderAll();
}

function removeFromFavorite(bookId) {
    let favorites = getFavorites();

    favorites = favorites.filter(id => id !== bookId);

    saveFavorites(favorites);

    showToast("Buku dihapus dari favorit.", "success");

    renderAll();
}

function toggleFavorite(bookId) {
    if (isFavorite(bookId)) {
        removeFromFavorite(bookId);
    } else {
        addToFavorite(bookId);
    }
}


/* =========================================================
   HISTORY
========================================================= */

function getHistory() {
    return getStorage(STORAGE_KEYS.history, []);
}

function saveHistory(history) {
    setStorage(STORAGE_KEYS.history, history);
}

function addToHistory(bookId) {
    let history = getHistory();

    history = history.filter(item => item.bookId !== bookId);

    history.unshift({
        bookId,
        lastRead: Date.now()
    });

    history = history.slice(0, 20);

    saveHistory(history);
}

function getProgress() {
    return getStorage(STORAGE_KEYS.progress, {});
}

function saveProgress(bookId, page) {
    const progress = getProgress();

    progress[bookId] = page;

    setStorage(STORAGE_KEYS.progress, progress);
}

function getBookProgress(bookId) {
    const progress = getProgress();
    return Number(progress[bookId] || 0);
}


/* =========================================================
   FILTERING & SORTING
========================================================= */

function getFilteredBooks() {
    let filtered = [...books];

    if (state.selectedCategory !== "Semua") {
        filtered = filtered.filter(
            book => book.category === state.selectedCategory
        );
    }

    if (state.searchQuery.trim()) {
        const query = state.searchQuery.toLowerCase().trim();

        filtered = filtered.filter(book => {
            return (
                book.title.toLowerCase().includes(query) ||
                book.author.toLowerCase().includes(query) ||
                book.category.toLowerCase().includes(query)
            );
        });
    }

    if (state.sort === "latest") {
        filtered.sort((a, b) => b.year - a.year);
    }

    if (state.sort === "rating") {
        filtered.sort((a, b) => b.rating - a.rating);
    }

    if (state.sort === "title") {
        filtered.sort((a, b) =>
            a.title.localeCompare(b.title, "id")
        );
    }

    return filtered;
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
                    src="${book.cover}"
                    alt="Sampul buku ${book.title}"
                    loading="lazy"
                >

                <button
                    class="favorite-button ${favorite ? "active" : ""}"
                    data-action="favorite"
                    data-id="${book.id}"
                    aria-label="${favorite ? "Hapus dari favorit" : "Tambah ke favorit"}"
                    title="${favorite ? "Hapus dari favorit" : "Tambah ke favorit"}"
                >
                    <i class="${favorite ? "fa-solid" : "fa-regular"} fa-heart"></i>
                </button>
            </div>

            <div class="book-info">

                <span class="book-category">
                    ${book.category}
                </span>

                <h3 class="book-title">
                    ${book.title}
                </h3>

                <p class="book-author">
                    ${book.author}
                </p>

                <div class="book-meta">

                    <span class="book-rating">
                        <i class="fa-solid fa-star"></i>
                        ${book.rating}
                    </span>

                    <span class="book-status ${book.available ? "" : "unavailable"}">
                        <i class="fa-solid fa-circle"></i>
                        ${book.available ? "Tersedia" : "Dipinjam"}
                    </span>

                </div>

                <div class="book-actions">

                    <button
                        data-action="read"
                        data-id="${book.id}"
                    >
                        <i class="fa-solid fa-book-open"></i>
                        Baca
                    </button>

                    <button
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
   RENDER BOOKS
========================================================= */

function renderBooks() {
    const filteredBooks = getFilteredBooks();

    if (filteredBooks.length === 0) {
        booksGrid.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-book-open"></i>
                <h3>Tidak ada buku yang ditemukan</h3>
                <p>Coba gunakan kata kunci atau kategori lainnya.</p>
            </div>
        `;
    } else {
        booksGrid.innerHTML = filteredBooks
            .map(createBookCard)
            .join("");
    }

    if (state.searchQuery) {
        searchResultInfo.textContent =
            `${filteredBooks.length} buku ditemukan untuk "${state.searchQuery}"`;
    } else {
        searchResultInfo.textContent = "";
    }
}


/* =========================================================
   RENDER FAVORITES
========================================================= */

function renderFavorites() {
    const favoriteIds = getFavorites();

    const favoriteBooks = books.filter(book =>
        favoriteIds.includes(book.id)
    );

    if (favoriteBooks.length === 0) {
        favoriteGrid.innerHTML = `
            <div class="empty-state">
                <i class="fa-regular fa-heart"></i>
                <h3>Belum ada buku favorit</h3>
                <p>Klik ikon hati pada buku untuk menambahkannya.</p>
            </div>
        `;

        return;
    }

    favoriteGrid.innerHTML = favoriteBooks
        .map(createBookCard)
        .join("");
}


/* =========================================================
   RENDER HISTORY
========================================================= */

function renderHistory() {
    const history = getHistory();

    const historyBooks = history
        .map(item => {
            const book = books.find(book => book.id === item.bookId);

            if (!book) {
                return null;
            }

            return {
                ...book,
                lastRead: item.lastRead
            };
        })
        .filter(Boolean);

    if (historyBooks.length === 0) {
        historyGrid.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-clock-rotate-left"></i>
                <h3>Belum ada riwayat bacaan</h3>
                <p>Buku yang Anda baca akan muncul di sini.</p>
            </div>
        `;

        return;
    }

    historyGrid.innerHTML = historyBooks.map(book => {

        const currentPage = getBookProgress(book.id);
        const totalPages = book.pages.length;

        const progress =
            Math.round((currentPage / totalPages) * 100);

        return `
            <article class="history-card">

                <div class="history-cover">
                    <img
                        src="${book.cover}"
                        alt="Sampul ${book.title}"
                        loading="lazy"
                    >
                </div>

                <div class="history-info">

                    <h3>${book.title}</h3>

                    <p>
                        ${book.author} · ${book.category}
                    </p>

                    <div class="progress-wrapper">

                        <div class="progress-track">
                            <div
                                class="progress-fill"
                                style="width:${progress}%"
                            ></div>
                        </div>

                        <div class="progress-text">
                            <span>Progress membaca</span>
                            <span>${progress}%</span>
                        </div>

                    </div>

                </div>

                <button
                    class="btn btn-primary"
                    data-action="continue"
                    data-id="${book.id}"
                >
                    <i class="fa-solid fa-play"></i>
                    Lanjutkan
                </button>

            </article>
        `;
    }).join("");
}


/* =========================================================
   PROFILE
========================================================= */

function getAccount() {
    return getStorage(STORAGE_KEYS.account, null);
}

function getCurrentUser() {
    return getStorage(STORAGE_KEYS.currentUser, null);
}

function updateProfile() {
    const account = getAccount();

    const profileName = document.getElementById("profileName");
    const profileEmail = document.getElementById("profileEmail");
    const profileAvatar = document.getElementById("profileAvatar");

    if (account) {
        profileName.textContent = account.name;
        profileEmail.textContent = account.email;

        profileAvatar.textContent =
            account.name.charAt(0).toUpperCase();
    } else {
        profileName.textContent = "Pengunjung";
        profileEmail.textContent =
            "Silakan masuk untuk mengelola profil.";
        profileAvatar.textContent = "A";
    }

    const favorites = getFavorites();
    const history = getHistory();

    document.getElementById("profileFavoriteCount").textContent =
        favorites.length;

    document.getElementById("profileHistoryCount").textContent =
        history.length;

    const progress = getProgress();

    const progressValues = Object.keys(progress).map(id => {
        const book = books.find(book => book.id === Number(id));

        if (!book) {
            return 0;
        }

        return Math.round(
            (progress[id] / book.pages.length) * 100
        );
    });

    const averageProgress = progressValues.length
        ? Math.round(
            progressValues.reduce((sum, value) => sum + value, 0) /
            progressValues.length
        )
        : 0;

    document.getElementById("profileProgress").textContent =
        `${averageProgress}%`;

    updateLoginButton();
}

function updateLoginButton() {
    const account = getAccount();

    if (account) {
        loginButtonText.textContent = "Keluar";
    } else {
        loginButtonText.textContent = "Masuk";
    }
}


/* =========================================================
   BOOK DETAIL
========================================================= */

function openBookDetail(bookId) {
    const book = books.find(book => book.id === bookId);

    if (!book) {
        return;
    }

    state.currentBook = book;

    bookDetailContent.innerHTML = `
        <div class="book-detail">

            <div class="detail-cover">
                <img
                    src="${book.cover}"
                    alt="Sampul ${book.title}"
                >
            </div>

            <div class="detail-info">

                <span class="book-category">
                    ${book.category}
                </span>

                <h2>${book.title}</h2>

                <p class="detail-author">
                    oleh <strong>${book.author}</strong>
                </p>

                <div class="detail-meta">
                    <span>
                        <i class="fa-solid fa-calendar"></i>
                        ${book.year}
                    </span>

                    <span>
                        <i class="fa-solid fa-star"></i>
                        ${book.rating}
                    </span>

                    <span>
                        <i class="fa-solid fa-circle"></i>
                        ${book.available ? "Tersedia" : "Dipinjam"}
                    </span>
                </div>

                <p class="detail-description">
                    ${book.description}
                </p>

                <div class="detail-actions">

                    <button
                        class="btn btn-primary"
                        id="detailReadButton"
                    >
                        <i class="fa-solid fa-book-open"></i>
                        Baca Sekarang
                    </button>

                    <button
                        class="btn btn-outline"
                        id="detailFavoriteButton"
                    >
                        <i class="${isFavorite(book.id) ? "fa-solid" : "fa-regular"} fa-heart"></i>
                        ${isFavorite(book.id) ? "Hapus Favorit" : "Favorit"}
                    </button>

                </div>

            </div>

        </div>
    `;

    document.getElementById("detailReadButton")
        .addEventListener("click", () => {
            closeModal(bookModal);
            openReader(book.id);
        });

    document.getElementById("detailFavoriteButton")
        .addEventListener("click", () => {
            toggleFavorite(book.id);
            openBookDetail(book.id);
        });

    openModal(bookModal);
}


/* =========================================================
   MODAL
========================================================= */

function openModal(modal) {
    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function closeModal(modal) {
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}


/* =========================================================
   DIGITAL READER
========================================================= */

function openReader(bookId) {
    const book = books.find(book => book.id === bookId);

    if (!book) {
        return;
    }

    state.currentReaderBook = book;

    const savedPage = getBookProgress(book.id);

    state.currentPage = Math.min(
        savedPage,
        book.pages.length - 1
    );

    readerBookTitle.textContent = book.title;
    readerBookAuthor.textContent = book.author;

    addToHistory(book.id);

    renderReaderPage();

    reader.classList.add("show");
    reader.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";

    showToast(`Membuka "${book.title}"`, "success");

    renderAll();
}

function renderReaderPage() {
    const book = state.currentReaderBook;

    if (!book) {
        return;
    }

    const page = book.pages[state.currentPage];

    readerContent.innerHTML = `
        <h2>${page.title}</h2>

        ${page.text.map(paragraph => `
            <p>${paragraph}</p>
        `).join("")}
    `;

    readerPageNumber.textContent =
        `Halaman ${state.currentPage + 1}`;

    readerPageCounter.textContent =
        `${state.currentPage + 1} / ${book.pages.length}`;

    const progress =
        ((state.currentPage + 1) / book.pages.length) * 100;

    readerProgress.style.width = `${progress}%`;

    previousPage.disabled =
        state.currentPage === 0;

    nextPage.disabled =
        state.currentPage === book.pages.length - 1;

    saveProgress(book.id, state.currentPage);
}

function nextReaderPage() {
    const book = state.currentReaderBook;

    if (!book) {
        return;
    }

    if (state.currentPage < book.pages.length - 1) {
        state.currentPage++;
        renderReaderPage();
        renderAll();
    } else {
        showToast("Anda sudah sampai di halaman terakhir.", "success");
    }
}

function previousReaderPage() {
    const book = state.currentReaderBook;

    if (!book) {
        return;
    }

    if (state.currentPage > 0) {
        state.currentPage--;
        renderReaderPage();
        renderAll();
    }
}

function closeReaderView() {
    reader.classList.remove("show");
    reader.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";

    renderAll();
}


/* =========================================================
   SEARCH
========================================================= */

function searchBooks(query) {
    state.searchQuery = query;

    state.selectedCategory = "Semua";

    document.querySelectorAll(".category-button")
        .forEach(button => {
            button.classList.toggle(
                "active",
                button.dataset.category === "Semua"
            );
        });

    renderBooks();

    document.getElementById("koleksi")
        .scrollIntoView({
            behavior: "smooth"
        });
}


/* =========================================================
   SORT
========================================================= */

function sortBooks() {
    state.sort = sortBooks.value;

    renderBooks();
}


/* =========================================================
   DARK MODE
========================================================= */

function loadTheme() {
    const savedTheme =
        localStorage.getItem(STORAGE_KEYS.theme);

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
    }

    updateThemeIcons();
}

function toggleDarkMode() {
    document.body.classList.toggle("dark");

    const isDark =
        document.body.classList.contains("dark");

    localStorage.setItem(
        STORAGE_KEYS.theme,
        isDark ? "dark" : "light"
    );

    updateThemeIcons();
}

function updateThemeIcons() {
    const isDark =
        document.body.classList.contains("dark");

    const icon = isDark
        ? "fa-solid fa-sun"
        : "fa-solid fa-moon";

    themeToggle.innerHTML =
        `<i class="${icon}"></i>`;

    readerThemeToggle.innerHTML =
        `<i class="${icon}"></i>`;
}


/* =========================================================
   AUTHENTICATION DEMO
========================================================= */

function openLogin() {
    authTitle.textContent = "Selamat Datang";
    authSubtitle.textContent =
        "Masuk untuk menikmati pengalaman membaca.";

    loginForm.classList.remove("hidden");
    registerForm.classList.add("hidden");

    openModal(authModal);
}

function openRegister() {
    authTitle.textContent = "Buat Akun";
    authSubtitle.textContent =
        "Daftar untuk menyimpan koleksi dan riwayat bacaan.";

    loginForm.classList.add("hidden");
    registerForm.classList.remove("hidden");

    openModal(authModal);
}

function handleRegister(event) {
    event.preventDefault();

    const name =
        document.getElementById("registerName").value.trim();

    const email =
        document.getElementById("registerEmail").value.trim();

    const password =
        document.getElementById("registerPassword").value;

    const confirmPassword =
        document.getElementById("registerConfirmPassword").value;

    if (password.length < 6) {
        showToast(
            "Password minimal terdiri dari 6 karakter.",
            "error"
        );
        return;
    }

    if (password !== confirmPassword) {
        showToast(
            "Konfirmasi password tidak cocok.",
            "error"
        );
        return;
    }

    const account = {
        name,
        email,
        password
    };

    setStorage(STORAGE_KEYS.account, account);
    setStorage(STORAGE_KEYS.currentUser, {
        email
    });

    closeModal(authModal);

    registerForm.reset();

    updateProfile();

    showToast(
        "Akun berhasil dibuat. Selamat datang!",
        "success"
    );
}

function handleLogin(event) {
    event.preventDefault();

    const email =
        document.getElementById("loginEmail").value.trim();

    const password =
        document.getElementById("loginPassword").value;

    const account = getAccount();

    if (!account) {
        showToast(
            "Akun belum ditemukan. Silakan daftar terlebih dahulu.",
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

    setStorage(STORAGE_KEYS.currentUser, {
        email
    });

    closeModal(authModal);

    loginForm.reset();

    updateProfile();

    showToast(
        `Selamat datang kembali, ${account.name}!`,
        "success"
    );
}

function logout() {
    localStorage.removeItem(STORAGE_KEYS.currentUser);

    updateProfile();

    showToast(
        "Anda telah keluar dari akun.",
        "success"
    );
}


/* =========================================================
   PROFILE EDIT
========================================================= */

function openProfileEditor() {
    const account = getAccount();

    if (!account) {
        showToast(
            "Silakan masuk terlebih dahulu.",
            "error"
        );

        openLogin();
        return;
    }

    document.getElementById("profileEditName").value =
        account.name;

    document.getElementById("profileEditEmail").value =
        account.email;

    openModal(profileModal);
}

function handleProfileUpdate(event) {
    event.preventDefault();

    const account = getAccount();

    if (!account) {
        return;
    }

    account.name =
        document.getElementById("profileEditName").value.trim();

    account.email =
        document.getElementById("profileEditEmail").value.trim();

    setStorage(STORAGE_KEYS.account, account);

    setStorage(STORAGE_KEYS.currentUser, {
        email: account.email
    });

    closeModal(profileModal);

    updateProfile();

    showToast(
        "Profil berhasil diperbarui.",
        "success"
    );
}


/* =========================================================
   TOAST
========================================================= */

function showToast(message, type = "success") {
    const toast = document.createElement("div");

    toast.className = `toast ${type}`;

    const icon =
        type === "error"
            ? "fa-circle-exclamation"
            : "fa-circle-check";

    toast.innerHTML = `
        <i class="fa-solid ${icon}"></i>
        <span>${message}</span>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateX(20px)";

        setTimeout(() => {
            toast.remove();
        }, 300);

    }, 3000);
}


/* =========================================================
   RENDER ALL
========================================================= */

function renderAll() {
    renderBooks();
    renderFavorites();
    renderHistory();
    updateProfile();
}


/* =========================================================
   EVENT: BOOK GRID
========================================================= */

function handleBookActions(event) {
    const button =
        event.target.closest("[data-action]");

    if (!button) {
        return;
    }

    const action = button.dataset.action;
    const bookId = Number(button.dataset.id);

    if (action === "favorite") {
        toggleFavorite(bookId);
    }

    if (action === "detail") {
        openBookDetail(bookId);
    }

    if (action === "read") {
        openReader(bookId);
    }

    if (action === "continue") {
        openReader(bookId);
    }
}

booksGrid.addEventListener(
    "click",
    handleBookActions
);

favoriteGrid.addEventListener(
    "click",
    handleBookActions
);

historyGrid.addEventListener(
    "click",
    handleBookActions
);


/* =========================================================
   EVENT: CATEGORY
========================================================= */

categoryFilter.addEventListener("click", event => {
    const button =
        event.target.closest(".category-button");

    if (!button) {
        return;
    }

    state.selectedCategory =
        button.dataset.category;

    state.searchQuery = "";

    heroSearchInput.value = "";

    document.querySelectorAll(".category-button")
        .forEach(item => {
            item.classList.remove("active");
        });

    button.classList.add("active");

    renderBooks();
});


/* =========================================================
   EVENT: SORT
========================================================= */

sortBooks.addEventListener(
    "change",
    sortBooks
);


/* =========================================================
   EVENT: HERO SEARCH
========================================================= */

heroSearchForm.addEventListener("submit", event => {
    event.preventDefault();

    searchBooks(heroSearchInput.value);
});


/* =========================================================
   REALTIME SEARCH
========================================================= */

heroSearchInput.addEventListener("input", () => {
    state.searchQuery =
        heroSearchInput.value;

    state.selectedCategory = "Semua";

    document.querySelectorAll(".category-button")
        .forEach(button => {
            button.classList.toggle(
                "active",
                button.dataset.category === "Semua"
            );
        });

    renderBooks();
});


/* =========================================================
   POPULAR SEARCH
========================================================= */

document.querySelectorAll(".search-tag")
    .forEach(tag => {

        tag.addEventListener("click", () => {

            const query =
                tag.dataset.search;

            heroSearchInput.value = query;

            searchBooks(query);
        });

    });


/* =========================================================
   AUTH EVENTS
========================================================= */

loginButton.addEventListener("click", () => {

    const account = getAccount();

    if (account) {
        logout();
    } else {
        openLogin();
    }

});

loginForm.addEventListener(
    "submit",
    handleLogin
);

registerForm.addEventListener(
    "submit",
    handleRegister
);

showRegisterButton.addEventListener(
    "click",
    openRegister
);

showLoginButton.addEventListener(
    "click",
    openLogin
);


/* =========================================================
   MODAL EVENTS
========================================================= */

closeBookModal.addEventListener(
    "click",
    () => closeModal(bookModal)
);

closeAuthModal.addEventListener(
    "click",
    () => closeModal(authModal)
);

closeProfileModal.addEventListener(
    "click",
    () => closeModal(profileModal)
);

bookModal.addEventListener("click", event => {

    if (event.target === bookModal) {
        closeModal(bookModal);
    }

});

authModal.addEventListener("click", event => {

    if (event.target === authModal) {
        closeModal(authModal);
    }

});

profileModal.addEventListener("click", event => {

    if (event.target === profileModal) {
        closeModal(profileModal);
    }

});

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        closeModal(bookModal);
        closeModal(authModal);
        closeModal(profileModal);

        if (reader.classList.contains("show")) {
            closeReaderView();
        }

    }

});


/* =========================================================
   PROFILE EVENTS
========================================================= */

editProfileButton.addEventListener(
    "click",
    openProfileEditor
);

profileForm.addEventListener(
    "submit",
    handleProfileUpdate
);


/* =========================================================
   READER EVENTS
========================================================= */

closeReader.addEventListener(
    "click",
    closeReaderView
);

nextPage.addEventListener(
    "click",
    nextReaderPage
);

previousPage.addEventListener(
    "click",
    previousReaderPage
);

readerThemeToggle.addEventListener(
    "click",
    toggleDarkMode
);


/* =========================================================
   READER KEYBOARD NAVIGATION
========================================================= */

document.addEventListener("keydown", event => {

    if (!reader.classList.contains("show")) {
        return;
    }

    if (event.key === "ArrowRight") {
        nextReaderPage();
    }

    if (event.key === "ArrowLeft") {
        previousReaderPage();
    }

});


/* =========================================================
   THEME
========================================================= */

themeToggle.addEventListener(
    "click",
    toggleDarkMode
);


/* =========================================================
   MOBILE MENU
========================================================= */

mobileMenuButton.addEventListener("click", () => {

    const isOpen =
        navMenu.classList.toggle("show");

    mobileMenuButton.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

    mobileMenuButton.innerHTML = isOpen
        ? `<i class="fa-solid fa-xmark"></i>`
        : `<i class="fa-solid fa-bars"></i>`;

});

document.querySelectorAll(".nav-link")
    .forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("show");

            mobileMenuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            mobileMenuButton.innerHTML =
                `<i class="fa-solid fa-bars"></i>`;

        });

    });


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll("main section");

const navLinks =
    document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            current = section.id;
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {
            link.classList.add("active");
        }

    });

});


/* =========================================================
   BACK TO TOP
========================================================= */

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================================================
   INITIALIZATION
========================================================= */

function initializeApp() {

    loadTheme();

    renderAll();

    console.log(
        "Perpustakaan Digital berhasil dimuat."
    );

}

initializeApp();
