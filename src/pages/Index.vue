<template>
  <Layout>
    <section class="hero is-fullheight front-banner has-text-centered-desktop">
      <div class="hero-body">
        <div class="container">
        <h6 class="has-text-primary">MISI UTAMA</h6>
        <h1 class="title is-1">Kami menghangatkan kehangatan selayaknya keluarga di amikom</h1>
        <h3 class="title is-5 has-text-weight-medium">Kami bangga dengan budaya dan bahasa kami, ora ngapak ra kepenak.</h3>
        <p class="home-links">
          <g-link to="/join" class="button is-primary is-medium has-text-weight-bold">Cus melu</g-link>
          <g-link to="/about" class="button has-text-white is-medium">Sejaraeh</g-link>
        </p>
        </div>
      </div>
      <g-image src="~/imaka/banner.png" fill="cover" blur="5" class="banner"></g-image>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Beranda'
  }
}
</script>

<style lang="scss">
.home-links a {
  margin-right: 1rem;
}
.front-banner {
  position: relative;
  @media screen and (min-width: 1024px) {
    .hero-body {
      padding-bottom: 0;
    }
  }
}
</style>
