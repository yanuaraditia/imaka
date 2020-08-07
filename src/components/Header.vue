<template>
    <nav class="navbar is-fixed-top" v-bind:class="{'is-active': isActive}" role="navigation" aria-label="main navigation">
        <div class="container">
            <div class="navbar-brand">
                <g-link to="/" class="navbar-item"><img src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png" width="112"></g-link>
                <button role="button" @click="butter" v-bind:class="{'is-active': isActive}" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </button>
            </div>

            <div id="navbarBasicExample" class="navbar-menu" v-bind:class="{'is-active': isActive}">
                <div class="navbar-end">
                    <g-link to="/anggota" class="navbar-item">Anggota</g-link>
                    <g-link to="/kuisioner" class="navbar-item">Kuisioner</g-link>
                    <g-link to="/join" class="navbar-item">Tentang</g-link>
                    <div class="navbar-item">
                        <div class="buttons">
                            <g-link
                            to="/join"
                            class="button is-primary is-rounded has-text-weight-bold"
                            >Yuh melu!</g-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            isActive: false
        }
    },
    methods: {
        butter() {
            this.isActive ? this.isActive = false : this.isActive = true
        }
    }
}
</script>