<template>

<footer class="page-footer">
        <div class="container">
            <div class="row">
                <div  class="legal-info">
                    <h3>Boolando s.r.l</h3>
                    <ul class="nav-menu col-flex">
                        <li><a href="#">Informazioni legali</a></li>
                        <li><a href="#">Normativa sulla privacy</a></li>
                        <li><a href="#">Diritto di recesso</a></li>
                    </ul>
                </div>
                <nav class="footer-nav">
                    <h5>Trovaci anche su</h5>
                    <ul class="nav-menu col-flex">
                        <li><a href="#"><img src="" alt="">🐦</a></li>
                        <li><a href="#"><img src="" alt="">&#5556;</a></li>
                        <li><a href="#"><img src="" alt="">&#128247;</a></li>
                        <li><a href="#"><img src="" alt="">&#42834;</a></li>
                        <li><a href="#"><img src="" alt="">▶️</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </footer>

</template>

<style>

.page-footer {
    padding: 30px 0;
}

.page-footer .row {
    justify-content: space-between;
}

:is(.footer-nav, .legal-info) > * {
    padding: 4px 0;
}

.page-footer ul > li {
    padding: 0 4px;
} /* Questo avrei potuto unirlo alla linea che fa la stessa cosa nell'header ma non volevo creare confusione nel css */

.footer-nav {
    text-align: center;
}

.page-footer h3 {
    font-size: 20px;
}

.page-footer h5 {
    font-size: 14px;
}

</style>