<template>
  <q-layout view="lHh Lpr lFf">
     <q-toolbar class="full-width q-px-md bg-white" unelevated>
      <q-btn flat to='/' class="text-subtitle1 text-bold" style="height: 40px; width: 140px;">
        <q-img src="/assets/melhore2.png" contain></q-img>
      </q-btn>
      <q-space />
      <q-btn icon="keyboard_arrow_left" flat to='/' label="voltar" color="black"/>
    </q-toolbar>

    <q-page-container style="background-color: #F0F0F0">
      <q-page class="column items-center full-width q-pb-xl" style="margin-top: -10px">
        <div class="text-bold text-h6 full-width bg-white q-py-lg text-center"> FEEDBACK </div>
        <div class="bar q-mb-xl"></div>
        <div class="row justify-center full-width q-ml-lg bg-transparent q-pb-md">
          <div class="column" :class="$q.screen.lt.sm? 'col-11 bg-white': $q.screen.md? 'col-11':'col-7'">
            <div class="row justify-center q-mb-sm">
              <div class="column bg-white q-pb-md" :class="$q.screen.lt.sm? 'col-11':'col-7 q-px-md'">
                <div class="text-bold text-h6 q-mt-lg q-mb-sm" style="font-size: 1.1rem"> Empresa </div>
                <q-input outlined placeholder="Qual sua empresa?" v-model="nome" :disable="!novoFeedback"/>
                <q-list bordered class="rounded-borders q-mt-lg q-py-xs" style="border: 1px solid #c2c2c2">
                  <q-expansion-item
                    expand-separator
                    label="Serviços"
                    header-style="font-weight: bold; font-size: 1rem"
                    >
                    <q-card>
                      <q-card-section>
                        <div class="text-subtitle1 text-bold q-mb-sm">Como foi o serviço oferecido pela empresa? </div>
                        <q-option-group
                          :options="options"
                          label="Notifications"
                          type="radio"
                          v-model="servico.comofoi"
                          inline
                          class="q-mt-xs q-mb-md"
                        />

                        <div class="text-subtitle1 q-mt-lg text-bold">Você foi bem tratado? </div>
                        <div class="q-gutter-sm">
                          <q-radio v-model="servico.bemtratado" :val="true" label="Sim" color="positive"/>
                          <q-radio v-model="servico.bemtratado" :val="false" label="Não" color="negative"/>
                        </div>

                        <div class="text-subtitle1 q-mt-lg text-bold q-mb-sm">Ocorreu algo? Escreva seu depoimento: </div>
                        <q-input outlined type="textarea" v-model="servico.depoimento"/>
                      </q-card-section>
                    </q-card>
                  </q-expansion-item>
                </q-list>
                <q-list bordered class="rounded-borders q-mt-lg q-py-xs" style="border: 1px solid #c2c2c2">
                  <q-expansion-item
                    expand-separator
                    label="Vivência como membro da empresa:"
                    header-style="font-weight: bold; font-size: 1rem"
                    >
                    <q-card>
                      <q-card-section>
                        <div class="text-subtitle1 q-mt-sm text-bold">Os funcionários da empresa são amigáveis? </div>
                        <div class="q-gutter-sm">
                          <q-radio v-model="diaadia.funcionariosAmigaveis" :val="true" label="Sim" color="positive"/>
                          <q-radio v-model="diaadia.funcionariosAmigaveis" :val="false" label="Não" color="negative"/>
                        </div>

                        <div class="text-subtitle1 q-mt-lg text-bold">Os funcionários superiores estão aberto para ouvir feedback?</div>
                        <div class="q-gutter-sm">
                          <q-radio v-model="diaadia.superioresAbertosACritica" :val="true" label="Sim" color="positive"/>
                          <q-radio v-model="diaadia.superioresAbertosACritica" :val="false" label="Não" color="negative"/>
                        </div>

                        <div class="text-subtitle1 q-mt-lg text-bold">Além de escutar os feedbacks eles tomam providência ou atitude?</div>
                        <div class="q-gutter-sm">
                          <q-radio v-model="diaadia.superioresTomamProvidencias" :val="true" label="Sim" color="positive"/>
                          <q-radio v-model="diaadia.superioresTomamProvidencias" :val="false" label="Não" color="negative"/>
                        </div>

                        <div class="text-subtitle1 q-mt-lg text-bold q-mb-sm">Ocorreu algum problema? Conte aqui seu depoimento: </div>
                        <q-input outlined type="textarea" v-model="diaadia.depoimento"/>
                      </q-card-section>
                    </q-card>
                  </q-expansion-item>
                </q-list>                
              </div>
              <div class="column bg-white q-px-sm items-center" :class="$q.screen.lt.sm? 'col-11':'col-4 q-ml-md'">
                <q-avatar class="q-pa-none bg-grey-4 q-mt-md" size="100px">
                  <span class="text-caption" v-if="!novoFeedback">{{ empresa.nome }}</span>
                  <q-icon name="add_a_photo" v-else/>
                </q-avatar>
                <div class="text-bold text-h6 q-mt-sm q-ml-sm"> Sentimento </div>
                <q-option-group
                  :options="options"
                  label="Notifications"
                  type="radio"
                  v-model="choose"
                  class="q-pb-md"
                />
              </div>
            </div>
            <div style="width: 300px" class="self-center q-mr-xl q-mt-lg">
              <q-btn class="full-width q-mb-sm" filled rounded style="background-color: #3159A1; color: white" @click="criarEmpresa" :disable="disable">
                <span class="text-subtitle1 text-bold">ENVIAR</span>
              </q-btn>
              <q-btn flat label="Cancelar" class="full-width"/>
            </div>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import Header from '../components/header'

export default {
  name: "Feedback",
  components: {
    Header
  },
  data () {
    return {
      choose: null,
      options: [
        { label: 'Ótimo', value: 5, color: 'green-9' },
        { label: 'Bom', value: 4, color: 'green' },
        { label: 'Médio', value: 3, color: 'grey' },
        { label: 'Ruim', value: 2, color: 'red' },
        { label: 'Pessimo', value: 1, color: 'red-9' }
      ],
      nome: '',
      servico: {
        comofoi: '',
        bemtratado: null,
        depoimento: ''
      },
      diaadia: {
        funcionariosAmigaveis: null,
        superioresAbertosACritica: null,
        superioresTomamProvidencias: null,
        depoimento: ''
      }
    }
  },
  mounted () {
    if (!this.novoFeedback) this.nome = this.empresa.nome
    if (!this.logged) this.$router.push('/')
  },
  computed: {
    empresa () {
      return this.empresas.find(e => e.id === this.$route.params.id)
    },
    empresas () {
      return this.$store.state.hackapride.usuarios.filter(u => u.type == 'empresa')
    },
    novoFeedback () {
      return this.$route.name == 'feedbacknovo'
    },
    logged () {
      return this.$store.state.hackapride.logged
    },
    disable () {
      let ans = false

      for (const s in this.servico) {
        if (this.servico[s] != '' && this.servico[s] != null) ans = true
      }

      for (const d in this.diaadia) {
        if (this.diaadia[d] != '' && this.diaadia[d] != null) ans = true
      }

      return this.choose == null || this.nome == '' || !ans
    }
  },
  methods: {
    criarEmpresa () {
      if (this.novoFeedback) {
        const empresa = {}
        empresa.nome = this.nome
        empresa.id = this.nome.toLowerCase().replace(' ', '')
        empresa.descricao = 'Serviço'
        empresa.email = ''
        empresa.senha = null
        empresa.avaliacao = this.choose
        empresa.type = 'empresa'
        empresa.feedback = []
        empresa.feedback.push({
          servico: this.servico,
          diaadia: this.diaadia,
          sentimento: this.choose
        })
  
        this.$store.commit('hackapride/criarUsuario', empresa)
      } else {
        const feedback = {
          servico: this.servico,
          diaadia: this.diaadia,
          sentimento: this.choose
        }
        const id = this.empresas.find(e => e.nome === this.nome).id
        this.$store.commit('hackapride/addFeedback', { feedback, id })
      }
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