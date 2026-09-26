/* =====================================================
   RESET
===================================================== */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family:
        Arial,
        Helvetica,
        sans-serif;

    background: #f5f7fb;
    color: #172033;
    line-height: 1.6;
}

body.dark {
    background: #101522;
    color: #f1f5f9;
}

button,
input,
select {
    font: inherit;
}

button {
    cursor: pointer;
}

a {
    color: inherit;
    text-decoration: none;
}

img {
    max-width: 100%;
    display: block;
}


/* =====================================================
   VARIABLES
===================================================== */

:root {

    --primary: #4f46e5;
    --primary-dark: #3730a3;
    --primary-light: #eef2ff;

    --text: #172033;
    --muted: #64748b;

    --background: #f5f7fb;
    --surface: #ffffff;

    --border: #e2e8f0;

    --success: #16a34a;
    --danger: #dc2626;

    --shadow:
        0 10px 30px rgba(15, 23, 42, 0.08);

    --radius: 18px;
}


/* =====================================================
   CONTAINER
===================================================== */

.container {
    width: min(1180px, calc(100% - 40px));
    margin: 0 auto;
}


/* =====================================================
   NAVBAR
===================================================== */

.navbar {
    position: sticky;
    top: 0;
    z-index: 1000;

    background: rgba(255, 255, 255, 0.95);
    border-bottom: 1px solid var(--border);

    backdrop-filter: blur(10px);
}

.dark .navbar {
    background: rgba(16, 21, 34, 0.95);
    border-color: #273247;
}

.navbar-content {
    min-height: 72px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 20px;
}

.logo {
    font-size: 20px;
    font-weight: 800;

    color: var(--primary);

    white-space: nowrap;
}

.nav-menu {
    display: flex;
    align-items: center;
    gap: 24px;
}

.nav-menu a {
    color: var(--muted);
    font-size: 14px;
    font-weight: 600;

    transition: 0.2s;
}

.nav-menu a:hover {
    color: var(--primary);
}

.navbar-actions {
    display: flex;
    align-items: center;
    gap: 10px;
}

.theme-button,
.menu-button {
    width: 42px;
    height: 42px;

    border: 1px solid var(--border);
    border-radius: 10px;

    background: var(--surface);

    display: grid;
    place-items: center;
}

.login-button,
.primary-button {
    border: none;
    border-radius: 10px;

    background: var(--primary);
    color: white;

    padding: 11px 18px;

    font-weight: 700;

    transition: 0.2s;
}

.login-button:hover,
.primary-button:hover {
    background: var(--primary-dark);
    transform: translateY(-1px);
}

.menu-button {
    display: none;
}


/* =====================================================
   HERO
===================================================== */

.hero {
    padding: 80px 0;

    background:
        linear-gradient(
            135deg,
            #eef2ff 0%,
            #ffffff 55%,
            #e0e7ff 100%
        );
}

.dark .hero {
    background:
        linear-gradient(
            135deg,
            #111827,
            #182033
        );
}

.hero-content {
    min-height: 430px;

    display: grid;
    grid-template-columns: 1.2fr 0.8fr;

    align-items: center;

    gap: 60px;
}

.hero-label,
.section-label {
    display: inline-block;

    color: var(--primary);

    font-size: 13px;
    font-weight: 800;

    letter-spacing: 1px;

    margin-bottom: 12px;
}

.hero h1 {
    max-width: 700px;

    font-size: clamp(40px, 6vw, 68px);

    line-height: 1.05;

    margin-bottom: 24px;
}

.hero h1 span {
    color: var(--primary);
}

.hero-text > p {
    max-width: 650px;

    color: var(--muted);

    font-size: 18px;

    margin-bottom: 30px;
}

.search-box {
    max-width: 680px;

    display: flex;

    background: white;

    padding: 8px;

    border-radius: 14px;

    box-shadow: var(--shadow);
}

.dark .search-box {
    background: #1b2435;
}

.search-box input {
    flex: 1;

    min-width: 0;

    border: none;
    outline: none;

    background: transparent;

    padding: 14px 16px;

    color: inherit;
}

.search-box button {
    border: none;

    border-radius: 10px;

    padding: 0 22px;

    background: var(--primary);
    color: white;

    font-weight: 700;
}

.hero-illustration {
    min-height: 350px;

    position: relative;

    display: grid;
    place-items: center;
}

.book-illustration {
    width: 240px;
    height: 240px;

    border-radius: 40px;

    background: white;

    box-shadow:
        0 25px 70px rgba(79, 70, 229, 0.25);

    display: grid;
    place-items: center;

    font-size: 100px;

    transform: rotate(-5deg);
}

.dark .book-illustration {
    background: #1e293b;
}

.floating-card {
    position: absolute;

    background: white;

    padding: 14px 18px;

    border-radius: 12px;

    box-shadow: var(--shadow);

    font-weight: 700;

    animation: floating 3s ease-in-out infinite;
}

.dark .floating-card {
    background: #1e293b;
}

.card-one {
    top: 35px;
    right: 20px;
}

.card-two {
    bottom: 40px;
    left: 10px;
}

@keyframes floating {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-8px);
    }
}


/* =====================================================
   STATISTICS
===================================================== */

.statistics {
    margin-top: -35px;
    position: relative;
    z-index: 2;
}

.statistics-grid {
    display: grid;

    grid-template-columns:
        repeat(4, 1fr);

    gap: 16px;
}

.stat-card {
    background: white;

    border: 1px solid var(--border);

    border-radius: var(--radius);

    padding: 22px;

    display: flex;
    align-items: center;

    gap: 16px;

    box-shadow: var(--shadow);
}

.dark .stat-card {
    background: #182033;
}

.stat-icon {
    width: 50px;
    height: 50px;

    border-radius: 14px;

    background: var(--primary-light);

    display: grid;
    place-items: center;

    font-size: 24px;
}

.stat-card strong {
    display: block;

    font-size: 20px;
}

.stat-card span {
    color: var(--muted);

    font-size: 13px;
}


/* =====================================================
   SECTION
===================================================== */

.section {
    padding: 90px 0;
}

.alternate-section {
    background: #eef2ff;
}

.dark .alternate-section {
    background: #131b2b;
}

.section-header {
    display: flex;

    justify-content: space-between;
    align-items: end;

    gap: 30px;

    margin-bottom: 30px;
}

.section-header h2 {
    font-size: 36px;

    margin-bottom: 8px;
}

.section-header p {
    color: var(--muted);
}

.sorting {
    display: flex;
    align-items: center;
    gap: 10px;
}

.sorting label {
    color: var(--muted);

    font-size: 14px;
}

.sorting select {
    padding: 10px 14px;

    border: 1px solid var(--border);

    border-radius: 10px;

    background: white;

    color: inherit;

    outline: none;
}

.dark .sorting select {
    background: #1b2435;
}


/* =====================================================
   CATEGORY
===================================================== */

.category-filter {
    display: flex;

    flex-wrap: wrap;

    gap: 10px;

    margin-bottom: 30px;
}

.category-button {
    border: 1px solid var(--border);

    background: white;

    color: var(--muted);

    border-radius: 30px;

    padding: 9px 16px;

    font-weight: 600;

    transition: 0.2s;
}

.dark .category-button {
    background: #1b2435;
}

.category-button:hover,
.category-button.active {
    background: var(--primary);

    color: white;

    border-color: var(--primary);
}


/* =====================================================
   BOOK GRID
===================================================== */

.book-grid {
    display: grid;

    grid-template-columns:
        repeat(4, 1fr);

    gap: 22px;
}

.book-card {
    overflow: hidden;

    background: white;

    border: 1px solid var(--border);

    border-radius: var(--radius);

    box-shadow: 0 5px 20px rgba(15, 23, 42, 0.05);

    transition: 0.25s;

    animation: cardAppear 0.4s ease both;
}

.dark .book-card {
    background: #182033;
}

.book-card:hover {
    transform: translateY(-5px);

    box-shadow: var(--shadow);
}

@keyframes cardAppear {

    from {
        opacity: 0;
        transform: translateY(10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.book-cover {
    height: 230px;

    display: grid;
    place-items: center;

    background:
        linear-gradient(
            135deg,
            #4f46e5,
            #7c3aed
        );

    color: white;

    font-size: 70px;
}

.book-info {
    padding: 18px;
}

.book-title {
    font-size: 18px;
    font-weight: 800;

    margin-bottom: 5px;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    overflow: hidden;
}

.book-author {
    color: var(--muted);

    font-size: 14px;

    margin-bottom: 10px;
}

.book-meta {
    display: flex;

    align-items: center;
    justify-content: space-between;

    gap: 10px;

    margin-bottom: 15px;
}

.book-category {
    color: var(--primary);

    font-size: 12px;

    font-weight: 700;
}

.rating {
    color: #f59e0b;

    font-size: 13px;

    font-weight: 700;
}

.book-actions {
    display: grid;

    grid-template-columns: 1fr auto auto;

    gap: 7px;
}

.read-button,
.detail-button,
.favorite-button {
    border: none;

    border-radius: 9px;

    min-height: 38px;
}

.read-button {
    background: var(--primary);

    color: white;

    font-weight: 700;
}

.detail-button {
    background: var(--primary-light);

    color: var(--primary);

    font-weight: 700;

    padding: 0 12px;
}

.favorite-button {
    width: 38px;

    background: #fef2f2;

    color: #ef4444;

    font-size: 18px;
}

.favorite-button.active {
    background: #fee2e2;
}


/* =====================================================
   EMPTY STATE
===================================================== */

.empty-state {
    text-align: center;

    padding: 60px 20px;

    color: var(--muted);
}

.empty-state > div {
    font-size: 55px;

    margin-bottom: 10px;
}

.empty-state h3 {
    color: var(--text);

    margin-bottom: 5px;
}

.dark .empty-state h3 {
    color: white;
}

.hidden {
    display: none !important;
}


/* =====================================================
   HISTORY
===================================================== */

.history-list {
    display: grid;

    gap: 15px;
}

.history-item {
    background: white;

    border: 1px solid var(--border);

    border-radius: var(--radius);

    padding: 18px;

    display: flex;

    align-items: center;

    gap: 18px;
}

.dark .history-item {
    background: #182033;
}

.history-cover {
    width: 70px;
    height: 90px;

    flex-shrink: 0;

    border-radius: 8px;

    background: var(--primary);

    display: grid;
    place-items: center;

    font-size: 30px;
}

.history-info {
    flex: 1;
}

.history-info h3 {
    margin-bottom: 3px;
}

.history-info p {
    color: var(--muted);

    font-size: 14px;
}

.progress {
    height: 7px;

    background: #e2e8f0;

    border-radius: 20px;

    overflow: hidden;

    margin-top: 10px;
}

.progress-bar {
    height: 100%;

    background: var(--primary);

    border-radius: inherit;
}


/* =====================================================
   PROFILE
===================================================== */

.profile-card {
    max-width: 850px;

    margin: 0 auto;

    background: white;

    border: 1px solid var(--border);

    border-radius: 24px;

    padding: 35px;

    display: flex;

    align-items: center;

    gap: 30px;

    box-shadow: var(--shadow);
}

.dark .profile-card {
    background: #182033;
}

.profile-avatar {
    width: 130px;
    height: 130px;

    border-radius: 50%;

    background: var(--primary-light);

    display: grid;
    place-items: center;

    font-size: 65px;

    flex-shrink: 0;
}

.profile-information {
    flex: 1;
}

.profile-information h2 {
    font-size: 30px;

    margin-bottom: 2px;
}

.profile-information > p {
    color: var(--muted);

    margin-bottom: 20px;
}

.profile-stats {
    display: flex;

    gap: 30px;

    margin-bottom: 20px;
}

.profile-stats strong,
.profile-stats span {
    display: block;
}

.profile-stats strong {
    font-size: 24px;
}

.profile-stats span {
    color: var(--muted);

    font-size: 13px;
}


/* =====================================================
   MODAL
===================================================== */

.modal {
    position: fixed;

    inset: 0;

    z-index: 2000;

    background: rgba(15, 23, 42, 0.65);

    display: grid;

    place-items: center;

    padding: 20px;
}

.modal-content {
    width: min(850px, 100%);

    max-height: 90vh;

    overflow-y: auto;

    position: relative;

    background: white;

    color: var(--text);

    border-radius: 22px;

    padding: 30px;

    box-shadow: 0 30px 100px rgba(0, 0, 0, 0.3);
}

.dark .modal-content {
    background: #182033;

    color: white;
}

.modal-close {
    position: absolute;

    top: 15px;
    right: 15px;

    width: 40px;
    height: 40px;

    border: none;

    border-radius: 50%;

    background: #f1f5f9;

    font-size: 25px;

    z-index: 2;
}

.dark .modal-close {
    background: #273247;

    color: white;
}

.detail-layout {
    display: grid;

    grid-template-columns: 220px 1fr;

    gap: 30px;

    padding-top: 15px;
}

.detail-cover {
    height: 300px;

    border-radius: 14px;

    background:
        linear-gradient(
            135deg,
            #4f46e5,
            #7c3aed
        );

    display: grid;
    place-items: center;

    font-size: 80px;
}

.detail-information h2 {
    font-size: 32px;

    margin-bottom: 5px;
}

.detail-information .author {
    color: var(--muted);

    margin-bottom: 20px;
}

.detail-description {
    color: var(--muted);

    margin: 20px 0;
}

.detail-meta {
    display: flex;

    flex-wrap: wrap;

    gap: 10px;
}

.detail-meta span {
    background: var(--primary-light);

    color: var(--primary);

    padding: 7px 12px;

    border-radius: 20px;

    font-size: 13px;

    font-weight: 700;
}


/* =====================================================
   AUTH
===================================================== */

.auth-modal {
    width: min(450px, 100%);
}

.auth-modal h2 {
    font-size: 30px;

    margin-bottom: 5px;
}

.auth-modal > p {
    color: var(--muted);

    margin-bottom: 25px;
}

.form-group {
    margin-bottom: 18px;
}

.form-group label {
    display: block;

    font-weight: 700;

    margin-bottom: 7px;
}

.form-group input {
    width: 100%;

    padding: 13px 14px;

    border: 1px solid var(--border);

    border-radius: 10px;

    outline: none;

    background: white;

    color: #172033;
}

.dark .form-group input {
    background: #101522;

    color: white;
}

.form-group input:focus {
    border-color: var(--primary);

    box-shadow:
        0 0 0 3px
        rgba(79, 70, 229, 0.15);
}

.full-width {
    width: 100%;
}

.auth-switch {
    text-align: center;

    margin-top: 20px;
}

.auth-switch button {
    border: none;

    background: transparent;

    color: var(--primary);

    font-weight: 700;
}


/* =====================================================
   TOAST
===================================================== */

.toast {
    position: fixed;

    right: 25px;
    bottom: 25px;

    z-index: 3000;

    background: #172033;

    color: white;

    padding: 14px 20px;

    border-radius: 10px;

    box-shadow: var(--shadow);

    transform:
        translateY(100px);

    opacity: 0;

    pointer-events: none;

    transition: 0.3s;
}

.toast.show {
    transform:
        translateY(0);

    opacity: 1;
}


/* =====================================================
   BACK TO TOP
===================================================== */

.back-to-top {
    position: fixed;

    right: 25px;
    bottom: 25px;

    width: 45px;
    height: 45px;

    border: none;

    border-radius: 50%;

    background: var(--primary);

    color: white;

    font-size: 20px;

    opacity: 0;

    pointer-events: none;

    transition: 0.3s;

    z-index: 900;
}

.back-to-top.show {
    opacity: 1;

    pointer-events: auto;
}


/* =====================================================
   FOOTER
===================================================== */

.footer {
    background: #111827;

    color: white;

    padding: 45px 0;
}

.footer-content {
    display: flex;

    justify-content: space-between;

    align-items: center;

    gap: 20px;
}

.footer p {
    color: #94a3b8;
}


/* =====================================================
   DARK MODE
===================================================== */

.dark {
    --text: #f1f5f9;

    --muted: #94a3b8;

    --background: #101522;

    --surface: #182033;

    --border: #273247;
}

.dark body {
    background: #101522;
}


/* =====================================================
   RESPONSIVE
===================================================== */

@media (max-width: 1100px) {

    .book-grid {
        grid-template-columns:
            repeat(3, 1fr);
    }

    .nav-menu {
        gap: 14px;
    }

    .hero-content {
        gap: 30px;
    }

}


@media (max-width: 900px) {

    .nav-menu {
        position: absolute;

        top: 72px;
        left: 20px;
        right: 20px;

        padding: 20px;

        background: white;

        border: 1px solid var(--border);

        border-radius: 15px;

        box-shadow: var(--shadow);

        display: none;

        flex-direction: column;

        align-items: stretch;
    }

    .dark .nav-menu {
        background: #182033;
    }

    .nav-menu.open {
        display: flex;
    }

    .menu-button {
        display: grid;
    }

    .hero-content {
        grid-template-columns: 1fr;
    }

    .hero-illustration {
        display: none;
    }

    .statistics-grid {
        grid-template-columns:
            repeat(2, 1fr);
    }

    .book-grid {
        grid-template-columns:
            repeat(2, 1fr);
    }

}


@media (max-width: 600px) {

    .container {
        width:
            min(
                100% - 24px,
                1180px
            );
    }

    .navbar-content {
        min-height: 64px;
    }

    .logo {
        font-size: 16px;
    }

    .login-button {
        display: none;
    }

    .hero {
        padding: 55px 0;
    }

    .hero h1 {
        font-size: 42px;
    }

    .search-box {
        flex-direction: column;

        gap: 8px;
    }

    .search-box button {
        min-height: 48px;
    }

    .statistics {
        margin-top: 0;

        padding-top: 20px;
    }

    .statistics-grid {
        grid-template-columns: 1fr;
    }

    .section {
        padding: 60px 0;
    }

    .section-header {
        flex-direction: column;

        align-items: flex-start;
    }

    .sorting {
        width: 100%;
    }

    .sorting select {
        flex: 1;
    }

    .book-grid {
        grid-template-columns: 1fr;
    }

    .profile-card {
        flex-direction: column;

        text-align: center;

        padding: 25px;
    }

    .profile-stats {
        justify-content: center;
    }

    .detail-layout {
        grid-template-columns: 1fr;
    }

    .detail-cover {
        height: 220px;
    }

    .history-item {
        align-items: flex-start;
    }

    .footer-content {
        flex-direction: column;

        text-align: center;
    }

}
