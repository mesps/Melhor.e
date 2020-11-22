<template>
  <q-layout view="lHh Lpr lFf">
    <Header type="2"/>

    <q-page-container>
      <q-page class="column items-center full-width q-py-xl" style="margin-top: -10px">
        <div class="text-bold text-h6 q-mb-md q-mt-lg"> 
          SE LIGA
          <q-img src="/assets/star.png" style="height: 40px; width: 40px; margin-top: -5px"></q-img>
        </div>
        <div class="row justify-center" :style="$q.screen.lt.md? '':'width: 700px' ">
          <q-card flat v-for="item in lgbts" :key="item.nome" class="column items-center q-pa-md q-my-md q-mx-md hoverCard" clickable @click="$router.push({ name: 'seligainfo', params: { lgbt: item.url }})">
            <q-avatar class="q-pa-none" size="100px">
              <img :src="`../assets/${item.img}`" class="q-pa-none">
            </q-avatar>
            <span class="text-bold text-subtitle2">{{ item.nome }}</span>
          </q-card>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import Header from '../components/header.vue'
export default {
  name: "SeLiga",
  components: {
    Header
  },
  computed: {
    lgbts () {
      return this.$store.getters['hackapride/lgbt']
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style>
  .hoverCard:hover {
    background-color: rgba(0, 0, 0, 0.1);
    transition: all 0.5;
  }

</style>