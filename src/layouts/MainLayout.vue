<template>
  <q-layout view="lHh Lpr lFf">
    <div class="bar"></div>

    <q-page-container>
      <Index />
    </q-page-container>
  </q-layout>
</template>

<script>
import Index from 'pages/Index'

export default {
  name: 'MainLayout',
  components: { Index },
  computed: {
    logged () {
      return this.$store.state.hackapride.logged
    },
    usuario () {
      return this.$store.state.hackapride.usuario
    }
  },
  mounted () {
    if (this.usuario != null && this.usuario.type == 'empresa' && this.logged) {
      this.$router.push(`home/${this.usuario.id}`)
    }
  }
}
</script>

<style>
  .bar {
    width: 100%;
    height: 8px;
    left: 0px;
    top: 0px;

    background: linear-gradient(90deg, #FF3332 0%, #F88C1F 19.79%, #F8E316 39.58%, #47B538 60.94%, #3159A1 80.21%, #C02B93 100%);
  }
</style>
