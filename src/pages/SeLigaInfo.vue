<template>
  <q-layout view="lHh Lpr lFf">
    <div class="row" style="position: fixed; width: 45px">
      <div :style="`background-color: #${cor}; height: ${$q.screen.height}`" class="listra col" v-for="cor in item.cores" :key="cor"></div>
    </div>
    <q-toolbar class="bg-transparent row" unelevated style="position: sticky; top: 0px; z-index: 1000;">
      <div style="width: 45px;"></div>
      <div class="bg-white row col q-pt-md col">
        <q-btn flat to='/' class="text-subtitle1 text-bold" style="height: 40px; width: 140px;">
          <q-img src="/assets/melhore2.png" contain></q-img>
        </q-btn>
        <q-space />
        <q-btn icon="keyboard_arrow_left" label="voltar" flat class="bg-white" to='/seliga'/>
      </div>
    </q-toolbar>

    <q-page-container>
      <q-page class="row full-width q-py-xl justify-center" style="margin-top: -10px; padding-left: 60px; padding-right: 40px">
        <div class="column items-center" :class="$q.screen.md? 'col-11': $q.screen.lt.md? 'col-12':'col-9'">
          <div class="text-bold text-h4 q-mb-md q-mt-lg" style="letter-spacing: 10px"> {{ item.nome.toUpperCase() }} </div>
          <div class="q-pl-lg">
            <span class="text-subtitle1 text-grey-7 q-mb-xl">
              {{ item.desc }}
            </span>
            <div class="full-width text-grey-9 text-h6 q-mt-xl q-mb-md">
              O QUE NAO FAZER?
            </div>
            <div :class="$q.screen.lt.sm?  'full-width column':'row justify-center q-gutter-lg q-mb-lg'">
              <div class="col q-mb-lg" v-for="dont in item.dont" :key="dont.title">
                <q-card class="my-card" flat bordered>
                  <q-item>
                    <q-item-section>
                      <q-item-label class="text-subtitle1 text-grey-9">{{ dont.title }}</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-separator />

                  <q-card-section horizontal>
                    <q-card-section class="text-subtitle2 text-grey-8">
                      {{ dont.desc }}
                    </q-card-section>
                  </q-card-section>
                </q-card>
              </div>
            </div>
            <div class="full-width text-grey-9 text-h6 q-mt-xl q-mb-sm">
              O QUE FAZER?
            </div>
            <div :class="$q.screen.lt.md? 'column full-width':'row justify-center q-gutter-lg q-mb-lg'">
              <div class="col q-mb-lg" v-for="dos in item.do" :key="dos.title">
                <q-card class="my-card" flat bordered>
                  <q-item>
                    <q-item-section>
                      <q-item-label class="text-subtitle1 text-grey-9">{{ dos.title }}</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-separator />

                  <q-card-section horizontal>
                    <q-card-section class="text-subtitle2 text-grey-8">
                      {{ dos.desc }}
                    </q-card-section>
                  </q-card-section>
                </q-card>
              </div>
            </div>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout> 
</template>

<script>
import { mapGetters } from 'vuex'
import Header from '../components/header.vue'

export default {
  name: "SeLigaInfo",
  components: {
    Header
  },
  computed: {
    sigla () {
      return this.$route.params.lgbt
    },
    item () {
      const ans = this.$store.state.hackapride.lgbt.find(item => item.url === this.sigla )
      console.log(ans)
      return ans
    }
  }
}
</script>

<style>
  .listra {
    height: 100vh;
  }
</style>