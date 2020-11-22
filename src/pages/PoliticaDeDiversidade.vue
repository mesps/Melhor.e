<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="text-black bg-transparent" style="height: 40px">
      <q-toolbar class="full-width q-px-md bg-black" unelevated>
        <q-btn flat to='/' class="text-subtitle1 text-bold" style="height: 40px; width: 140px;">
          <q-img src="/assets/melhore1.png" contain></q-img>
        </q-btn>
        <q-space />
        <q-btn icon="keyboard_arrow_left" label="voltar" flat :to="`/empresa/${empresa.id}`" color='white'/>
      </q-toolbar>
    </q-header>

    <q-page-container style="background-color: #F0F0F0">
      <q-page class="column items-center full-width q-py-xl">
        <div class="row q-pb-lg full-width bg-black justify-center" style="margin-top: -38px">
          <q-avatar class="q-pa-none bg-grey-4" size="100px"></q-avatar>
          <q-card flat class="q-pt-xs bg-transparent text-white">
            <q-card-section class="q-pt-md q-pb-none">
              <div class="text-bold text-h5"> {{ empresa.nome }} </div>
            </q-card-section>
            <q-card-section class="q-py-none">
              <div class="text-subtitle1"> {{ empresa.descricao }} </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="bar"></div>
        <div class="text-bold text-h6 q-my-xl justify-center"> 
          POLITICA DE DIVERSIDADE
        </div>
        <div class="row full-width justify-center">
          <q-card flat :class="$q.screen.lt.sm? 'col-11':'col-8'" class="q-pa-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet urna lobortis, cursus lacus a, commodo sapien. Vivamus at rhoncus leo. Donec eget aliquet quam. Phasellus et pulvinar arcu. Nulla facilisi. Nullam non tellus sed erat elementum lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            <br />           
            Fusce venenatis libero sit amet tellus aliquam, vitae vestibulum quam congue. Phasellus pulvinar odio id risus pellentesque, quis iaculis magna pharetra. Integer sagittis lorem sit amet volutpat auctor. Nunc mauris ex, condimentum vel congue a, pulvinar nec ante. Quisque tincidunt odio vel est congue, quis pulvinar tellus commodo. Nunc eu ullamcorper nisi, eu dapibus ante. Phasellus enim diam, dapibus eu arcu non, aliquam faucibus elit. Donec ut felis vitae velit posuere vestibulum. Vestibulum tincidunt, felis sit amet accumsan sollicitudin, lacus magna tristique nulla, ac maximus nisi felis id odio. Vestibulum eget feugiat odio, id pretium tortor. Nam semper suscipit nunc, tristique placerat nisi cursus vel. Nullam ut ex elementum, lobortis ipsum sit amet, feugiat dolor.
            <br />
            <br />
            Nam ut accumsan leo. Morbi vitae lacus sit amet lectus elementum finibus vel nec lorem. Vestibulum nec tempor eros. Vivamus dui mauris, consectetur et turpis condimentum, ornare condimentum velit. Ut faucibus gravida vulputate. Nam rhoncus gravida mauris, in molestie libero maximus sit amet. Suspendisse malesuada mauris ac est volutpat, in cursus metus dictum. Aenean interdum eros turpis, sit amet molestie tortor tristique ac. Cras molestie ullamcorper risus vitae finibus. Praesent maximus sagittis tortor, eu gravida massa suscipit viverra.
            <br />
            <br />
            Vivamus non diam nec mi lacinia tincidunt. Aliquam nunc lacus, vestibulum vitae ligula mollis, aliquet dapibus tortor. Nunc faucibus dui quis ex dignissim lobortis. Vestibulum enim arcu, varius at elit vitae, sollicitudin molestie lacus. Nulla hendrerit a magna vitae egestas. Pellentesque eget metus ac libero imperdiet venenatis vel ac elit. Donec a risus et felis commodo pharetra. Mauris malesuada quis odio eget hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
            <br />
            <br />
            Cras tempus tortor diam, et varius nulla feugiat eu. Curabitur aliquet vitae neque quis semper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer et accumsan orci. Integer iaculis, ante eu interdum bibendum, nibh risus facilisis arcu, nec consectetur sem felis ac lectus. Nulla et ultrices erat. Quisque a tortor interdum, auctor erat eget, tincidunt leo. Nulla facilisi. Maecenas laoreet quam nec efficitur aliquet. Nullam non blandit enim, sit amet aliquet nibh. Vivamus finibus commodo venenatis. Vestibulum ac sem elementum, accumsan elit eget, venenatis felis. Cras euismod nisi quam, bibendum ullamcorper dui auctor sit amet. Vivamus finibus consectetur nibh, vitae euismod diam imperdiet vitae.

            nec ante. Quisque tincidunt odio vel est congue, quis pulvinar tellus commodo. Nunc eu ullamcorper nisi, eu dapibus ante. Phasellus enim diam, dapibus eu arcu non, aliquam faucibus elit. Donec ut felis vitae velit posuere vestibulum. Vestibulum tincidunt, felis sit amet accumsan sollicitudin, lacus magna tristique nulla, ac maximus nisi felis id odio. Vestibulum eget feugiat odio, id pretium tortor. Nam semper suscipit nunc, tristique placerat nisi cursus vel. Nullam ut ex elementum, lobortis ipsum sit amet, feugiat dolor.

          </q-card>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import Header from '../components/header.vue'
export default {
  name: 'PoliticaDeDiversidade',
  components: {
      Header
  },
  computed: {
    empresaID () {
      return this.$route.params.id
    },
    empresa () {
      return this.empresas.find(empresa => empresa.id === this.empresaID)
    },
    empresas () {
      return this.$store.state.hackapride.usuarios.filter(u => u.type == "empresa")
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