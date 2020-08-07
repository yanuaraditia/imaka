<template>
  <Layout>
    <section class="hero is-medium has-text-centered-desktop">
      <div class="hero-body">
        <div class="container">
        <h6 class="has-text-primary">OUR MISSION</h6>
        <h1 class="title is-1">We enable developers to build and publish wonderful things</h1>
        <h3 class="title is-5 has-text-weight-medium">We build products for developers and designers. And those who aspire to become one.</h3>
        <p class="home-links">
          <g-link to="/about" class="button is-primary is-medium has-text-weight-bold">About Us</g-link>
          <g-link to="/about" class="button has-text-white is-medium">See the Story</g-link>
        </p>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
