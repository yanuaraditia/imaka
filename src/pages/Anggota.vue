<template>
    <Layout>
        <section class="section">
            <div class="container">
                <div class="columns is-flex-mobile is-multiline" v-if="busy">
                    <div class="column is-6-mobile is-3-desktop" v-for="item in dummies" :key="item">
                        <div class="card people has-text-centered has-text-white py-3">
                            <div class="card-image">
                                <div class="dummy is-image"></div>
                            </div>
                            <div class="card-content px-0">
                                <h4 class="title is-5 dummy is-text">Fetching Data</h4>
                                <h5 class="subtitle is-6 has-text-weight-bold dummy is-text">Please Wait</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="columns is-flex-mobile is-gapless is-multiline" v-else>
                    <div class="column is-6-mobile is-3-desktop" v-for="people in peoples" :key="people.id">
                        <div class="card people has-text-centered has-text-white py-3">
                            <div class="card-image">
                                <g-link :to="'/a/'+people.id+'/'">
                                    <img :src="people.image_link" :alt="people.name" class="is-rounded" width="80px" height="80px">
                                </g-link>
                            </div>
                            <div class="card-content px-0">
                                <h4 class="title is-5">{{people.name}}</h4>
                                <h5 class="subtitle is-6 has-text-weight-bold">
                                    <a :href="'//instagram.com/'+people.soc_fb" v-if="people.soc_fb">@{{people.soc_fb}}</a>
                                    <g-link v-else :to="'/a/'+people.id+'/'">See biography</g-link>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
</template>

<script>
import axios from 'axios'

const url = 'https://dev.imaka.or.id/api/anggota'

export default {
    data() {
        return {
            busy: false,
            peoples: [],
            limit: 12,
            dummies: [1,2,3,4,5,6,7,8,9,10,11,12]
        }
    },
    methods: {
        getUser() {
            this.busy = true
            axios
            .get(url)
            .then(res => {
                this.peoples     = res.data.data
                this.busy  = false
            })
            .catch(err => console.log(err))
        }
    },
    created() {
        this.getUser()
    },
    mounted() {
        this.getUser()
    }
}
</script>