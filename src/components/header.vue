<template>
  <q-header class="text-black bg-transparent" style="height: 40px">
    <div class="bar"></div>
    <q-toolbar class="full-width q-px-md" unelevated :class="type == 1? 'bg-black':'bg-white'">
      <q-btn flat to='/' class="text-subtitle1 text-bold" style="height: 40px; width: 140px;">
        <q-img v-if="type == 1" src="/assets/melhore1.png" contain></q-img>
        <q-img v-if="type == 2" src="/assets/melhore2.png" contain></q-img>
      </q-btn>
      <q-space />
      <q-btn icon="keyboard_arrow_left" label="voltar" flat @click="$router.go(-1)" :color="type == 1? 'white':'black'"/>
    </q-toolbar>
  </q-header>
</template>

<script>
export default {
  name: "Header",
  props: ['type'],
  mounted() {
    console.log(this.type)
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