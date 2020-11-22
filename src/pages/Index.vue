<template>
  <q-page class="column justify-start items-center full-width">
    <div class="bgHome column justify-start items-center full-width q-pt-sm" :style="logged? 'height: 250px':'height: 400px'">
      <q-toolbar class="bg-transparent full-width row justify-end q-gutter-xs q-mb-lg" unelevated>
        <template v-if="!logged">
          <q-btn flat round class="q-pa-none" :to="{ name: 'seliga' }">
            <q-avatar class="q-pa-none" :size="$q.screen.lt.sm? 'md':''">
              <img :src="'../assets/gay.png'" class="q-pa-none">
            </q-avatar>
          </q-btn>
          <q-btn flat color="white" label="Cadastro" to="/cadastrar" :size="$q.screen.lt.sm? '12px':''"/>
          <q-btn outline rounded color="white" label="Login" @click="alert = !alert" :size="$q.screen.lt.sm? '12px':''"/>
        </template>
        <template v-else>
          <q-toolbar-title>
            <q-btn stretch flat to='/' class="text-subtitle1 text-bold" style="height: 35px; width: 120px; margin-top: -16px">
              <q-img src="/assets/melhore1.png" contain></q-img>
            </q-btn>
          </q-toolbar-title>
          <q-btn flat color="white" :label="usuario.nome" to="/usuario" :size="$q.screen.lt.sm? '12px':''"/>
          <q-avatar class="q-pa-none bg-grey-5" :size="$q.screen.lt.sm? 'md':'lg'">
            <q-icon name="person" />
          </q-avatar>
          <q-btn flat round class="q-pa-none q-ml-md" :to="{ name: 'seliga' }">
            <q-avatar class="q-pa-none" :size="$q.screen.lt.sm? 'md':'36px'">
              <img :src="'../assets/gay.png'" class="q-pa-none">
            </q-avatar>
          </q-btn>
        </template>
      </q-toolbar>
      <div v-if="!logged" class="text-h3 text-bold q-mb-md text-white" style="height: 50px; width: 220px">
        <q-img src="/assets/melhore1.png" contain></q-img>
      </div>
      <div v-if="!logged" class="text-h5 q-mb-xl text-center text-white">Acredite no melhor para todos</div>
      <div class="row full-width justify-center pesquisa q-mt-lg q-mb-md" style="">
        <q-select v-model="pesquisar" color="grey-9" bg-color="grey-2" rounded outlined use-input input-debounce="0" :options="options" option-label="nome" label="Pesquisar empresa ou cargo" @filter="filterFn" :class="$q.screen.lt.sm? 'col-9':'col-5'">
          <template v-slot:no-option>
            <q-item>
              <q-item-section class="text-grey">
                Sem resultados
              </q-item-section>
            </q-item>
          </template>
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
        </q-select>
      </div>
      <q-btn flat style="color: #f9e046; margin-top: -20x" to="/feedback/novo" class="q-py-none"><span class="text-caption">Não encontrou a empresa? Clique aqui para cria-la e começar sua avaliação!</span></q-btn>
    </div>
    <div :class="$q.screen.xs? 'q-mx-sm col-12 row no-wrap':'q-mx-sm col-12 row no-wrap q-mb-md'" v-if="!logged">
      <q-btn icon="arrow_left" dense rounded flat size="md" class="q-ma-none q-pa-none" :color="slide > 1? 'purple-4':'grey-7'" :disable="slide <= 1" @click="slide = slide - 1"/>
      <q-carousel
        v-model="slide"
        transition-prev="slide-right"
        transition-next="slide-left"
        prev-icon="arrow_left"
        next-icon="arrow_right"
        swipeable
        animated
        control-color="purple-4"
        navigation
        class="bg-transparent full-width"
        height="auto"
        style="padding: 0px 0px 35px 0px"
        v-if="empresas.length > 0"
      >
      <q-carousel-slide v-for="(empresas, index) in empresasCarousel" :name="index+1" :key="`c-${index}`" class="column no-wrap" style="padding: 16px 0px">
        <div class="row items-center no-wrap">
          <div v-for="e in empresas" :key="`m-${e.nome}`" :class="`col-${12/screenSize} full-height` + (empresas.length < screenSize)? 'q-mx-md':''">
            <empresaCard :empresa="e"/>
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
    <q-btn icon="arrow_right" dense rounded flat size="md" class="q-ma-none q-pa-none" :color="slide < empresasCarousel.length? 'purple-4':'grey-7'" :disable="slide >= empresasCarousel.length" @click="slide = slide + 1" style="cursor:auto !important"/>
  </div>
  <div class="row full-width justify-center q-mt-lg">
    <div :class="$q.screen.xs? 'col-12 row justify-center':'q-mx-sm col-8 row q-mb-md justify-center'" v-if="logged">
      <div v-for="e in empresas" :key="`m-${e.nome}`">
        <empresaCard :empresa="e"/>
      </div>
    </div>
  </div>
  <q-dialog v-model="alert">
      <q-card style="width: 400px" class="q-pb-xl q-px-sm">
        <q-card-section>
          <div class="text-h6 text-center q-mb-md">Login</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-bold q-mb-sm">
            Email
          </div>
          <q-input outlined v-model="email" placeholder="Insira seu nome" />
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-bold q-mb-sm">
            Senha
          </div>
          <q-input v-model="pass" outlined="" :type="isPwd ? 'password' : 'text'" placeholder="***************">
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
        </q-card-section>

        <q-card-actions class="row full-width justify-center">
            <q-btn unelevated rounded color="primary" label="entrar" style="width: 200px" @click="login"/>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import empresaCard from '../components/empresaCard'

export default {
  name: 'PageIndex',
  components: {
    empresaCard
  },
  data () {
    return {
      options: [],
      pesquisar: '',
      slide: 1,
      alert: false,
      email: '',
      pass: '',
      isPwd: true
    }
  },
  mounted () {
    this.options = [...this.empresas]
  },
  computed: {
    logged () {
      return this.$store.state.hackapride.logged
    },

    usuario () {
      return this.$store.state.hackapride.usuario
    },

    empresas () {
      return this.$store.state.hackapride.usuarios.filter(u => u.type == "empresa")
    },
    
    empresasCarousel () {
      const arr = []
      let helpArray = []

      for (const empresa of this.empresas) {
        helpArray.push(empresa)
        if (helpArray.length === this.screenSize) {
          arr.push(helpArray)
          helpArray = []
        }
      }

      if (helpArray.length > 0) arr.push(helpArray)
      console.log(this.empresas)
      return arr
    },

    screenSize () {
      return this.$q.screen.gt.md ? 4 : this.$q.screen.md ? 3 : this.$q.screen.sm ? 2 : 1
    },
  },
  methods: {
    filterFn (val, update, abort) {
      update(() => {
        const needle = val.toLowerCase()
        this.options = this.empresas.filter(v => {
          const normalizedNeedle = needle.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
          return v.nome.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').indexOf(normalizedNeedle) > -1
        })
      })
    },
    login () {
      const user = { email: this.email, pass: this.pass}
      const ans = this.$store.commit('hackapride/autenticar', user)
      if (ans) this.$q.notify('oi')
    }
  },
  watch: {
    pesquisar () {
      this.$router.push(`empresa/${this.pesquisar.id}`)
    }
  }
}
</script>

<style scoped>
  .bgHome {
    background-image: url('/assets/bgHome.png');
    background-size:cover;
    height: 400px;
    width: 100%;
  }
</style>