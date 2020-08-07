<template>
    <Layout>
        <section class="section">
            <div class="container">
                <div class="has-text-centered-desktop">
                    <h1 class="title is-1">Kuisioner</h1>
                    <p>Sudah mengenal imaka dan dikunjungi imaka? isi form berikut sebagai parameter kami dalam data penelusuran minat. Kami tidak akan mempublikasikan data kepada pihak manapun. Selengkapnya baca <g-link to="/privacy-policy">Kebijakan Privasi</g-link> kami.</p>
                </div>
                <div class="form py-5">
                    <div class="columns is-multiline">
                        <div class="column is-6">
                            <b-field label="Nama lengkap">
                                <b-input
                                name="name"
                                required
                                placeholder="Nama Kamu"
                                v-model="name"
                                type="text"
                                minlength=1
                                maxlength=50></b-input>
                            </b-field>
                        </div>
                        <div class="column is-6">
                            <b-field label="Email">
                                <b-input
                                name="email"
                                required
                                placeholder="E-mail"
                                v-model="email"
                                type="email"
                                minlength=1
                                maxlength=30></b-input>
                            </b-field>
                        </div>
                        <div class="column is-6">
                            <b-field label="Nomor telepon">
                                <b-input
                                name="phone"
                                required
                                placeholder="Contoh 08xx"
                                v-model="notel"
                                type="number"
                                minlength=1
                                maxlength=15></b-input>
                            </b-field>
                        </div>
                        <div class="column is-6">
                            <b-field label="Sekolah Asal">
                                <b-select placeholder="Pilih SLTA" loading v-if="sltas == null"></b-select>
                                <b-select placeholder="Pilih SLTA">
                                    <option
                                        v-for="slta in sltas"
                                        :value="slta"
                                        :key="slta">
                                        {{ slta }}
                                    </option>
                                </b-select>
                            </b-field>
                        </div>
                    </div>
                    <div class="field block">
                        <span class="label">Bidangmu saat ini</span>
                        <b-radio v-model="keahlian"
                            name="keahlian"
                            native-value="tk">
                            Teknis
                        </b-radio>
                        <b-radio v-model="keahlian"
                            name="keahlian"
                            native-value="ntk">
                            Non-Teknis
                        </b-radio>
                    </div>
                    <b-field class="is-block">
                        <label class="label is-block">Kemana setelah lulus?</label>
                        <div class="is-block">
                            <b-radio v-model="campus"
                                name="campus"
                                native-value="ptn">
                                Kampus Negeri
                            </b-radio>
                            <b-radio v-model="campus"
                                name="campus"
                                native-value="ptk">
                                Kampus Kedinasan
                            </b-radio>
                            <b-radio v-model="campus"
                                name="campus"
                                native-value="pts">
                                Kampus Swasta
                            </b-radio>
                            <b-radio v-model="campus"
                                name="campus"
                                native-value="mnk">
                                Menikah
                            </b-radio>
                            <b-radio v-model="campus"
                                name="campus"
                                native-value="bkj">
                                Bekerja
                            </b-radio>
                        </div>
                    </b-field>
                    <div class="buttons">
                        <b-button class="is-primary is-medium" v-if="isLoading" loading>Loading</b-button>
                        <button v-else class="button is-primary is-medium has-text-weight-medium">Simpan</button>
                        <button class="button is-outlined is-medium has-text-weight-medium has-text-white" @click="resetData">Reset</button>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
</template>
<script>
import axios from 'axios'
const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}
const qs = require('querystring')
const description = 'Sistem penelusuran minat siswa kami, akan membantu anda untuk pencarian kampus terbaik buat masa depanmu nanti'
const title = 'Ikatan Mahasiswa Kebumen Amikom'
export default {
    metaInfo: {
        title: title,
        description: description
    },
    data() {
        return {
            sltas: null,
            name: null,
            email: null,
            notel: null,
            slta: null,
            gender: null,
            keahlian: null,
            campus: null,
            isLoading: false
        }
    },
    async mounted() {
        try {
            await axios.get('https://api.imaka.or.id/v1/slta')
            .then(res => {
                this.sltas = res.data.slta
            })
        } catch(e) {
            console.log(e)
        }
    },
    computed: {
        filteredDataArray() {
            return this.data.filter((option) => {
                return option
                    .toString()
                    .toLowerCase()
                    .indexOf(this.name.toLowerCase()) >= 0
            })
        },        
    },
    methods: {
        resetData() {
            this.name       = null
            this.notel      = null
            this.campus     = null
            this.gender     = null
            this.keahlian   = null
            this.email      = null
        }
    }
}
</script>