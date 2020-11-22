<template>
  <q-layout view="lHh Lpr lFf">
    <Header type="2"/>

    <q-page-container style="background-color: #F0F0F0">
      <q-page class="column items-center full-width q-pm-xl" style="margin-top: 15px">
        <div class="text-bold text-h6 q-py-md bg-white full-width text-center">
          PERFIL
          <q-img src="/assets/star2.png" style="height: 40px; width: 40px; margin-top: -5px"></q-img>
        </div>
        <div class="full-width q-mb-lg row justify-end q-pr-sm">
          <q-btn label="sair" color="black" flat @click="logout"/>
        </div>
        <q-avatar class="q-pa-none bg-grey-5" :size="$q.screen.lt.sm? '100px':'120px'">
          <q-icon name="person" />
        </q-avatar>
        <div class="text-bold text-h6 q-mb-lg q-mt-lg"> 
          {{ usuario.nome }}
          <q-icon name="settings"/>
        </div>
        <div class="row justify-center full-width" :class="$q.screen.lt.sm? '':'q-px-xl'">
          <div :class="$q.screen.lt.sm? 'col-12 justify-center':'col-8 q-col-gutter-md justify-between'" class="row">
            <div class="column" :class="$q.screen.lt.sm? 'col-11':'col-6'">
              <template v-if="usuario.type == 'pessoa'">
                <q-card class="bg-white q-mb-md">
                  <q-card-section class="text-bold q-pb-none">
                    Feedbacks anônimos realizados
                  </q-card-section>
                  <q-card-section class="text-grey-8 text-caption full-width">
                    350
                  </q-card-section>
                </q-card>
              </template>
              <template v-else>
                <q-card class="bg-white q-mb-md">
                  <q-card-section class="text-bold q-pb-none">
                    Dados bancários
                  </q-card-section>
                  <q-card-section class="text-grey-8 text-caption full-width">
                    15.1511165
                  </q-card-section>
                </q-card>
              </template>
            </div>
            <div class="column full-height" :class="$q.screen.lt.sm? 'col-11':'col-6'">
              <template v-if="usuario.type == 'pessoa'">
                <q-card class="bg-white q-mb-md">
                  <q-card-section class="text-bold q-pb-none">
                    Notificações
                  </q-card-section>
                  <q-card-section class="text-grey-8 text-caption full-width">
                    lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore
                  </q-card-section>
                </q-card>
              </template>
              <template v-else>
                <q-card class="bg-white q-mb-md">
                  <q-card-section class="text-bold q-pb-none">
                    Melhorias em andamento
                  </q-card-section>
                  <q-card-section class="text-grey-8 text-caption full-width row">
                    <q-avatar rounded size="36px" class="q-mr-md">
                      <img :src="`../assets/selo1.png`" class="q-pa-none">
                    </q-avatar>
                    <q-avatar rounded size="36px" class="q-mr-md">
                      <img :src="`../assets/selo2.png`" class="q-pa-none">
                    </q-avatar>
                    <q-avatar rounded size="36px">
                      <img :src="`../assets/selo3.png`" class="q-pa-none">
                    </q-avatar>
                  </q-card-section>
                </q-card>
              </template>
            </div>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import Header from '../components/header.vue'
export default {
  name: "Usuario",
  components: {
    Header
  },
  computed: {
    usuario () {
      return this.$store.state.hackapride.usuario
    }
  },
  methods: {
    logout () {
      this.$store.commit('hackapride/logout')
    }
  }
}
</script>

<style>
  #progressbar {
      background-color: rgb(218, 218, 218);
      border-radius: 9.4px; /* (height of inner div) / 2 + padding */
      padding: 0px;
      height: 18px;
      border: 2px solid grey;
      box-sizing: border-box;
    }
    
    #progressbar > div {
       width: 40%; /* Adjust with JavaScript */
       height: 98%;
       border-radius: 10px;
       background-color: rgb(0, 255, 0)
    }
</style>