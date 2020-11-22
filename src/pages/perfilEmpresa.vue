<template>
  <q-layout view="lHh Lpr lFf">
    <q-toolbar class="bg-black full-width q-px-md" unelevated :style="$route.name == 'perfilempresa'? 'margin':''" style="z-index: 2">
      <q-btn flat to='/' class="text-subtitle1 text-bold" style="height: 40px; width: 140px;">
        <q-img src="/assets/melhore1.png" contain></q-img>
      </q-btn>
      <q-space />
      <q-btn v-if="!(usuario == null || usuario.type == 'pessoa')" flat color="white" :label="usuario.nome" to="/usuario" :size="$q.screen.lt.sm? '12px':''"/>
      <q-avatar v-if="!(usuario == null || usuario.type == 'pessoa')" class="q-pa-none bg-grey-5" :size="$q.screen.lt.sm? 'md':'lg'">
        <q-icon name="person" />
      </q-avatar>
      <q-btn v-if="!(usuario == null || usuario.type == 'pessoa')" flat round class="q-pa-none q-ml-md" :to="{ name: 'seliga' }">
        <q-avatar class="q-pa-none" :size="$q.screen.lt.sm? 'md':'36px'">
          <img :src="'../assets/gay.png'" class="q-pa-none">
        </q-avatar>
      </q-btn>
      <q-btn v-if="usuario == null || usuario.type == 'pessoa'" icon="clear" flat to='/' color="white"/>
    </q-toolbar>

    <q-page-container>
      <q-page class="column items-center full-width q-py-xl" style="margin-top: -48px">
        <div class="row q-pb-lg full-width bg-black justify-center">
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
        <div :class="$q.screen.lt.md? 'column items-center':'row justify-between full-width no-wrap'" style="background-color: #F0F0F0; width: 100%" :style="$q.screen.lt.sm? '':'padding: 20px 180px 0px 180px'">
          <div :class="$q.screen.lt.sm? 'column items-center q-mt-md':''">
            <div class="text-caption text-grey-8 full-width text-center">SELOS</div>
            <q-card class="row justify-center items-center bg-white q-mb-md" style="width: 250px" :class="$q.screen.lt.sm? 'col-12':'q-mr-lg '">
              <div class="q-pa-none q-mx-xs" size="52px">
                <img :src="`../assets/selo1.png`" class="q-pa-none">
              </div>
              <div class="q-pa-none q-mx-xs" size="52px">
                <img :src="`../assets/selo2.png`" class="q-pa-none">
              </div>
              <div class="q-pa-none q-mx-xs" size="52px">
                <img :src="`../assets/selo3.png`" class="q-pa-none">
              </div>
              <div class="q-pa-none q-mx-xs" size="52px">
                <img :src="`../assets/selo4.png`" class="q-pa-none">
              </div>
              <div class="q-pa-none q-mx-xs" size="52px">
                <img :src="`../assets/selo1.png`" class="q-pa-none">
              </div>
              <div class="q-pa-none q-mx-xs" size="52px">
                <img :src="`../assets/selo2.png`" class="q-pa-none">
              </div>
              <div class="q-pa-none q-mx-xs" size="52px">
                <img :src="`../assets/selo3.png`" class="q-pa-none">
              </div>
              <div class="q-pa-none q-mx-xs" size="52px">
                <img :src="`../assets/selo4.png`" class="q-pa-none">
              </div>
            </q-card>
          </div>
          <div class="column items-center q-mb-md q-mx-lg full-height" style="width: auto" v-if="usuario == null || usuario.type == 'pessoa'">
            <div class="text-caption text-grey-8">POLÍTICAS DE DIVERSIDADE</div>
            <q-card class="bg-white full-height" style="width: 200px" clickable @click="$router.push(`/empresa/${empresa.id}/politica`)">
              <div class="bg-white row justify-center">
                <q-img src="/assets/outing.png" contain style="width: 100px; heigth: 100px"/>
              </div>
            </q-card>
          </div>
          <div class="column items-center q-mb-md q-mx-lg full-height" style="width: auto" v-else>
            <div class="text-caption text-grey-8">POLÍTICAS DE DIVERSIDADE</div>
            <q-card class="bg-white full-height" style="width: 200px" clickable @click="$router.push(`/${empresa.id}/politica`)">
              <div class="bg-white row justify-center">
                <q-img src="/assets/outing.png" contain style="width: 100px; heigth: 100px"/>
              </div>
            </q-card>
          </div>
          <div class="column items-center q-mx-sm q-mb-lg">
            <div class="text-caption q-mb-sm text-grey-8">AVALIAÇÃO</div>
            <div class="q-pt-md">
              <div style="width: 110px">
                <div id="progressbar">
                  <div :style="`width: ${empresa.avaliacao}%`"></div>
                </div>
              </div>
              <div class="text-subtitle1 text-grey-8 full-width text-center">Nota: {{ (empresa.avaliacao/10).toFixed(2) }}</div>
            </div>
          </div>
          <div class="column items-center q-mx-sm" v-if="usuario == null || usuario.type == 'pessoa'" style="margin-top: -2px">
            <div class="text-caption q-mb-sm text-grey-8">CONTRIBUA</div>
            <q-btn style="background-color: #8e61f7" text-color="white" :to="`/empresa/${empresa.id}/feedback`">
              Avalie <br/>
              Aqui
            </q-btn>
          </div>
          <div class="column items-center q-mx-sm" style="margin-top: -2px" v-if="logged && usuario.type == 'empresa'">
            <div class="text-caption q-mb-sm text-grey-8">CONFIRA</div>
            <q-btn style="background-color: #8e61f7" text-color="white" :to="`/melhorar/${$route.params.id}`" align="left" class="q-py-sm">
              Quero melhorar!<br/>
              Ver serviços!
            </q-btn>
          </div>
        </div>
        <div class="full-width row justify-center">
          <div class="row q-mt-lg justify-center" :class="$q.screen.lt.sm? 'col-12': $q.screen.md? 'col-11' : 'col-9'">
            <q-card style="background-color: #fd6554; min-width: 250px" class="q-mb-md" :class="$q.screen.gt.sm? 'col-5':'col-12'">
              <q-card-section>
                <div class="column">
                  <div class="full-width row justify-center">
                    <q-avatar class="q-pa-none bg-grey-4" size="60px">
                      <img :src="`../assets/gay.png`" class="q-pa-none">
                    </q-avatar>
                  </div>
                  <div class="feedbackRuim q-mt-md" style="margin-top: -18px">
                    Só tem discurso bonito, mas
                    caga pras gays e trans
                  </div>
                </div>
                <div class="column">
                  <div class="full-width row justify-center">
                    <q-avatar class="q-pa-none bg-grey-4" size="60px">
                      <img :src="`../assets/trans.png`" class="q-pa-none">
                    </q-avatar>
                  </div>
                  <div class="feedbackRuim q-mt-md" style="margin-top: -18px">
                    Piadinhas de duplo sentido, 
                    algumas situações chatas, eles precisam melhorar ...
                  </div>
                </div>
                <div class="column">
                  <div class="full-width row justify-center">
                    <q-avatar class="q-pa-none bg-grey-4" size="60px">
                      <img :src="`../assets/bi.png`" class="q-pa-none">
                    </q-avatar>
                  </div>
                  <div class="feedbackRuim q-mt-md" style="margin-top: -18px">
                    Só faltaram dar um tiro na minha cara, porque de resto... Horrível!
                  </div>
                </div>
              </q-card-section>
            </q-card>
            <q-card style="background-color:  #7ddb61" :class="$q.screen.gt.sm? 'q-ml-lg col-5' : ''">
              <q-card-section>
                <div class="column">
                  <div class="full-width row justify-center">
                    <q-avatar class="q-pa-none bg-grey-4" size="60px">
                      <img :src="`../assets/assexual.png`" class="q-pa-none">
                    </q-avatar>
                  </div>
                  <div class="feedbackBom q-mt-md" style="margin-top: -18px">
                    Eu achei bem acolhedor! O time sempre me acolheu bem e me  senti parte de...
                  </div>
                </div>
                <div class="column">
                  <div class="full-width row justify-center">
                    <q-avatar class="q-pa-none bg-grey-4" size="60px">
                      <img :src="`../assets/lesbica.png`" class="q-pa-none">
                    </q-avatar>
                  </div>
                  <div class="feedbackBom q-mt-md" style="margin-top: -18px">
                    Quanto mulher trans foi ok, 
                    conseguia usar o banheiro 
                    feminino sem problema
                  </div>
                </div>
                <div class="column">
                  <div class="full-width row justify-center">
                    <q-avatar class="q-pa-none bg-grey-4" size="60px">
                      <img :src="`../assets/pansexual.png`" class="q-pa-none">
                    </q-avatar>
                  </div>
                  <div class="feedbackBom q-mt-md" style="margin-top: -18px">
                    Alô, alô! Você sabe quem eu sou? Amei a empresa, ambiente bem bacanenha..
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import Header from '../components/header.vue'
export default {
    nome: "PerfilEmpresa",
    prop: ['home','id'],
    components: {
      Header
    },
    mounted () {
      // console.log(this.$route.name)
      if (this.$route.name == 'homeempresa' && (this.usuario == null || this.usuario.type == 'pessoa')) this.$router.push('/')
    },
    computed: {
      empresaID () {
        if (this.id) return this.id
        return this.$route.params.id
      },
      empresa () {
        // console.log(this.empresas)
        return this.empresas.find(empresa => empresa.id === this.empresaID)
      },
      usuario () {
        return this.$store.state.hackapride.usuario
      },
      empresas () {
        return this.$store.state.hackapride.usuarios.filter(u => u.type == "empresa")
      },
      logged () {
        return this.$store.state.hackapride.logged
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
       height: 98%;
       border-radius: 10px;
       background-color: #66d643
    }

    .feedbackRuim {
      background: #F0F0F0;
      border: 2px solid #d33b3e21;
      box-sizing: border-box;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 7px;
      padding: 20px 10px;
      margin-bottom: 20px
    }

    .feedbackBom {
      background: #F0F0F0;
      border: 1.5px solid hsl(106, 63%, 62%);
      box-sizing: border-box;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 7px;
      padding: 20px 10px;
      margin-bottom: 20px
    }
</style>