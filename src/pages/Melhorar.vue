<template>
  <q-layout view="lHh Lpr lFf">
    <q-toolbar class="bg-white full-width q-px-md" unelevated>
      <q-btn flat to='/' class="text-subtitle1 text-bold" style="height: 40px; width: 140px;">
        <q-img src="/assets/melhore2.png" contain></q-img>
      </q-btn>
      <q-space />
      <q-btn flat color="grey-9" :label="usuario.nome" to="/usuario" :size="$q.screen.lt.sm? '12px':''"/>
      <q-avatar class="q-pa-none bg-grey-5" :size="$q.screen.lt.sm? 'md':'lg'">
        <q-icon name="person" />
      </q-avatar>
      <q-btn flat round class="q-pa-none q-ml-md" :to="{ name: 'seliga' }">
        <q-avatar class="q-pa-none" :size="$q.screen.lt.sm? 'md':'36px'">
          <img :src="'../assets/gay.png'" class="q-pa-none">
        </q-avatar>
      </q-btn>
    </q-toolbar>
    <q-page-container style="background-color: #f0f0f0">
      <q-page class="column items-center full-width q-pm-xl">
        <div class="text-bold text-h6 q-py-md bg-white full-width text-center"> MELHORIAS PARA VOCÊ </div>
        <div class="bar q-mb-xl"></div>
        <div class="row justify-center full-width" :class="$q.screen.lt.md? '':'q-px-xl'" style="height: auto">
          <div :class="$q.screen.lt.md? 'col-12 justify-center':'col-8 q-col-gutter-md justify-center'" class="row">
            <div class="column" :class="$q.screen.lt.sm? 'col-11 items-center':'col-4'">
              <div class="card row items-center justify-start q-px-md" :class="panel == 1? 'bg-black text-white':'bg-white text-black'" @click="panel = 1">
                <q-avatar rounded size="80px" class="q-mr-md">
                  <img :src="`../assets/selo8.png`" class="q-pa-none">
                </q-avatar>
                <span class="text-h6 text-bold"> Empresa<br/>Diversidade</span>
              </div>
              <div class="card row items-center justify-start q-px-md no-wrap" :class="panel == 2? 'bg-black text-white':'bg-white text-black'" @click="panel = 2">
                <q-avatar rounded size="80px" class="q-mr-md">
                  <img :src="`../assets/selo7.png`" class="q-pa-none">
                </q-avatar>
                <span class="text-h6 text-bold">Satisfação do<br/>Funcionário</span>
              </div>
              <div class="card row items-center justify-start q-px-md" :class="panel == 3? 'bg-black text-white':'bg-white text-black'" @click="panel = 3">
                <q-avatar rounded size="80px" class="q-mr-md">
                  <img :src="`../assets/selo6.png`" class="q-pa-none">
                </q-avatar>
                <span class="text-h6 text-bold"> Empresa<br/>Acolhedora</span>
              </div>
              <div class="card row items-center justify-start q-px-md" :class="panel == 4? 'bg-black text-white':'bg-white text-black'" @click="panel = 4">
                <q-avatar rounded size="80px" class="q-mr-md">
                  <img :src="`../assets/selo5.png`" class="q-pa-none">
                </q-avatar>
                <span class="text-h6 text-bold">Combate ao<br/>Preconceito</span>
              </div>
            </div>
            <div class="column" :class="$q.screen.lt.md? 'col-11':'col q-ml-sm'" :style="$q.screen.lt.sm? '':'height: 100%'">
              <q-tab-panels v-model="panel" animated class="shadow-2 rounded-borders column justify-between" :style="$q.screen.lt.md? '':'height: 98%'">
                <q-tab-panel :name="1">
                  <div class="text-h6 text-bold">Benefícios</div>
                    Donec ultricies, metus ut luctus pulvinar
                    turpis ante auctor lacus
                    feugiat ultrices purus leo ut mauris
                    Nam finibus, nisl ut fringilla imperdiet
                    <br/>
                    <br/>
                  <div class="text-h6 text-bold">O que você vai ter?</div>
                    Donec ultricies, metus ut luctus pulvinar, turpis ante auctor lacus, feugiat ultrices purus leo ut mauris. Nam finibus, nisl ut fringilla imperdiet, diam tellus sollicitudin purus, non pretium dui tellus vitae massa. Sed a neque sit amet velit cursus posuere. Maecenas quis dui sit amet orci ultricies rhoncus eu eu ligula. Proin non risus fermentum, dapibus leo vel, gravida orci. Ut ac commodo odio. Curabitur nec faucibus ex, a fermentum felis. Aliquam vel vehicula arcu.
                    <br/>
                    <br/>
                  <div class="text-h6 text-bold">Investimento</div>
                    R$ 35,90
                    <br/>
                    <br/>
                  <div class="full-width row justify-center q-mt-md">
                    <q-btn class="q-px-md" label="Adquirir" text-color="white" style="background-color: #C02B93"/> 
                  </div>
                </q-tab-panel>

                <q-tab-panel :name="2">
                  <div class="text-h6 text-bold">Benefícios</div>
                    Donec ultricies, metus ut luctus pulvinar
                    turpis ante auctor lacus
                    feugiat ultrices purus leo ut mauris
                    Nam finibus, nisl ut fringilla imperdiet
                    <br/>
                    <br/>
                  <div class="text-h6 text-bold">O que você vai ter?</div>
                    Donec ultricies, metus ut luctus pulvinar, turpis ante auctor lacus, feugiat ultrices purus leo ut mauris. Nam finibus, nisl ut fringilla imperdiet, diam tellus sollicitudin purus, non pretium dui tellus vitae massa. Sed a neque sit amet velit cursus posuere. Maecenas quis dui sit amet orci ultricies rhoncus eu eu ligula. Proin non risus fermentum, dapibus leo vel, gravida orci. Ut ac commodo odio. Curabitur nec faucibus ex, a fermentum felis. Aliquam vel vehicula arcu.
                    <br/>
                    <br/>
                  <div class="text-h6 text-bold">Investimento</div>
                    R$ 35,90
                    <br/>
                    <br/> 
                  <div class="full-width row justify-center q-mt-md">
                    <q-btn class="q-px-md" label="Adquirir" text-color="white" style="background-color: #C02B93"/> 
                  </div>
                </q-tab-panel>

                <q-tab-panel :name="3">
                  <div class="text-h6 text-bold">Benefícios</div>
                    Donec ultricies, metus ut luctus pulvinar
                    turpis ante auctor lacus
                    feugiat ultrices purus leo ut mauris
                    Nam finibus, nisl ut fringilla imperdiet
                    <br/>
                    <br/>
                  <div class="text-h6 text-bold">O que você vai ter?</div>
                    Donec ultricies, metus ut luctus pulvinar, turpis ante auctor lacus, feugiat ultrices purus leo ut mauris. Nam finibus, nisl ut fringilla imperdiet, diam tellus sollicitudin purus, non pretium dui tellus vitae massa. Sed a neque sit amet velit cursus posuere. Maecenas quis dui sit amet orci ultricies rhoncus eu eu ligula. Proin non risus fermentum, dapibus leo vel, gravida orci. Ut ac commodo odio. Curabitur nec faucibus ex, a fermentum felis. Aliquam vel vehicula arcu.
                    <br/>
                    <br/>
                  <div class="text-h6 text-bold">Investimento</div>
                    R$ 35,90
                    <br/>
                    <br/>
                  <div class="full-width row justify-center q-mt-md">
                    <q-btn class="q-px-md" label="Adquirir" text-color="white" style="background-color: #C02B93"/> 
                  </div> 
                </q-tab-panel>

                <q-tab-panel :name="4">
                  <div class="text-h6 text-bold">Benefícios</div>
                    Donec ultricies, metus ut luctus pulvinar
                    turpis ante auctor lacus
                    feugiat ultrices purus leo ut mauris
                    Nam finibus, nisl ut fringilla imperdiet
                    <br/>
                    <br/>
                  <div class="text-h6 text-bold">O que você vai ter?</div>
                    Donec ultricies, metus ut luctus pulvinar, turpis ante auctor lacus, feugiat ultrices purus leo ut mauris. Nam finibus, nisl ut fringilla imperdiet, diam tellus sollicitudin purus, non pretium dui tellus vitae massa. Sed a neque sit amet velit cursus posuere. Maecenas quis dui sit amet orci ultricies rhoncus eu eu ligula. Proin non risus fermentum, dapibus leo vel, gravida orci. Ut ac commodo odio. Curabitur nec faucibus ex, a fermentum felis. Aliquam vel vehicula arcu.
                    <br/>
                    <br/>
                  <div class="text-h6 text-bold">Investimento</div>
                    R$ 35,90
                    <br/>
                    <br/> 
                  <div class="full-width row justify-center q-mt-md">
                    <q-btn class="q-px-md" label="Adquirir" text-color="white" style="background-color: #C02B93"/> 
                  </div>
                </q-tab-panel>
              </q-tab-panels>
            </div>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "Melhorar",
  computed: {
    usuario () {
      return this.$store.state.hackapride.usuario
    },
    empresa () {
      return this.empresas.find(e => e.id == this.$route.params.id)
    },
    empresas () {
      return this.$store.state.hackapride.usuarios.filter(u => u.type == "empresa")
    }
  },
  data () {
    return {
      panel: 1
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

  .card {
    width: 260px;
    height: 120px;
    margin-bottom: 12px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 7px;
  }
  .card:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
</style>