<template>
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div class="container">
            <div class="navbar-brand">
                <g-link to="/" class="navbar-item"><img src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png" width="112"></g-link>
                <button role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </button>
            </div>

            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-end">
                    <g-link to="/anggota" class="navbar-item">Anggota</g-link>
                    <g-link to="/about" class="navbar-item">Tentang Kami</g-link>
                    <g-link to="/about" class="navbar-item">About</g-link>
                    <g-link to="/about" class="navbar-item">About</g-link>
                    <div class="navbar-item">
                        <div class="buttons">
                            <g-link
                            to="/join"
                            class="button is-primary is-rounded has-text-weight-bold"
                            >Get a Quote</g-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>