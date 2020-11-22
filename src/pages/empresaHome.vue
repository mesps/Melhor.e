<template>
  <q-page class="column items-center full-width q-py-xl" style="margin-top: -30px">
    <div class="row q-mb-md">
      <q-avatar class="q-pa-none bg-grey-4" size="100px"></q-avatar>
      <q-card flat class="q-pt-xs">
        <q-card-section class="q-pt-md q-pb-none">
          <div class="text-bold text-h5"> {{ empresa.nome }} </div>
        </q-card-section>
        <q-card-section class="q-py-xs">
          <div class="text-subtitle2"> {{ empresa.descricao }} </div>
        </q-card-section>
      </q-card>
    </div>
    <div :class="$q.screen.lt.sm? 'column':'row q-mt-lg justify-between'">
      <div class="row items-start q-mx-lg q-mb-md">
        <q-btn color="grey-7" v-if="usuario == null || usuario.type == 'pessoa'">
          Escrever <br/>
          Feedback
        </q-btn>
      </div>
      <q-card class="row justify-center items-center bg-grey-4 q-mr-lg q-mb-md" style="width: 250px" :class="$q.screen.lt.sm? 'col-12':''">
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
      <div class="column items-start q-mb-md q-mx-lg full-height" style="width: auto" v-if="">
        <div class="text-caption">POLÍTICAS DE DIVERSIDADE</div>
        <q-card class="full-width bg-grey-3 full-height">
          <div class="bg-grey-3 row justify-center">
            <q-img src="/assets/outing.png" contain style="width: 100px; heigth: 100px"/>
          </div>
        </q-card>
      </div>
      <div class="column items-start q-mx-sm q-mb">
        <div class="text-caption">AVALIAÇÃO</div>
        <div style="width: 110px">
          <div id="progressbar">
            <div :style="`width: ${empresa.avaliacao}%`"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="row q-gutter-lg no-wrap q-mt-lg" style="max-width: 900px">
      <q-card style="background-color: rgb(239,11,11,0.12)">
        <q-card-section>
          <div class="feedbackRuim">
            Só tem discurso bonito, mas
            caga pras gays e trans
          </div>
          <div class="feedbackRuim">
            Piadinhas de duplo sentido, 
            algumas situações chatas, eles precisam melhorar ...
          </div>
          <div class="feedbackRuim">
            Só faltaram dar um tiro na minha cara, porque de resto... Horrível!
          </div>
        </q-card-section>
      </q-card>
      <q-card style="background-color: rgb(96,252,1,0.22)">
        <q-card-section>
          <div class="feedbackBom">
            Eu achei bem acolhedor! O time sempre me acolheu bem e me  senti parte de...
          </div>
          <div class="feedbackBom">
            Quanto mulher trans foi ok, 
            conseguia usar o banheiro 
            feminino sem problema
          </div>
          <div class="feedbackBom">
            Alô, alô! Você sabe quem eu sou? Amei a accenture, ambiente bem bacanenha..
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
    nome: "EmpresaIndex",
    prop: ['home','id'],
    computed: {
      empresaID () {
        return this.id
      },
      empresa () {
        console.log(this.id)
        return this.empresas.find(empresa => empresa.id === this.empresaID)
      },
      usuario () {
        return this.$store.state.hackapride.usuario
      },
      empresas () {
        return this.$store.state.hackapride.usuarios.filter(u => u.type == "empresa")
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
       background-color: rgb(0, 255, 0)
    }

    .feedbackRuim {
      background: #F0F0F0;
      border: 1.5px solid #E40B0B;
      box-sizing: border-box;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 7px;
      padding: 20px 10px;
      margin-bottom: 20px
    }

    .feedbackBom {
      background: #F0F0F0;
      border: 1.5px solid #60FC01;
      box-sizing: border-box;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 7px;
      padding: 20px 10px;
      margin-bottom: 20px
    }
</style>