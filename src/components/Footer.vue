<template>
    <section class="section footer-section">
        <div class="container">
            <div class="columns is-multiline is-flex-mobile is-gapless">
                <div class="column is-4-desktop is-12-mobile">
                    <h5 class="has-text-weight-medium">Organisasi</h5>
                    <ul>
                        <li><g-link to="/anggota">Anggota</g-link></li>
                        <li><a href="mailto:imaka@outlook.co.id">Bantuan</a></li>
                        <li><g-link to="/privacy-policy">Kebijakan Privasi</g-link></li>
                        <li><g-link to="/pengurus">Kepengurusan</g-link></li>
                        <li><g-link to="/about">Tentang Kami</g-link></li>
                    </ul>
                </div>
                <div class="column is-4-desktop is-12-mobile">
                    <h5 class="has-text-weight-medium">Relasi</h5>
                    <ul>
                        <li><a href="//instagram.com/imakta">IMAKTA</a></li>
                        <li><a href="//instagram.com/kebumencampusfestival">Kebumen Campus Festival</a></li>
                        <li><a href="//kebumenkab.go.id">Pemkab Kebumen</a></li>
                        <li><a href="//instagram.com/permata.amikom">Permata Amikom</a></li>
                    </ul>
                </div>
                <div class="column is-4-desktop is-12-mobile">
                    <h5 class="has-text-weight-medium">Tautan Penting</h5>
                    <ul>
                        <li><a href="//pmb.amikom.ac.id">PMB Amikom</a></li>
                        <li><g-link to="/kuisioner">Kuisioner</g-link></li>
                        <li><a href="//itc.amcc.or.id">ITC Amikom</a></li>
                        <li><a href="https://www.facebook.com/pantiasih182/">PA Assalam Istiqomah</a></li>
                    </ul>
                </div>
            </div>
            <hr class="has-background-transparent"/>
            <div class="columns is-gapless">
                <div class="column is-6-desktop is-12-mobile has-text-grey-light">
                    <span>Copyright &copy; {{ new Date().getFullYear() }} Some Inc. All right reserved.</span>
                </div>
            </div>
        </div>
    </section>
</template>