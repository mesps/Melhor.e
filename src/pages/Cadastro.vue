<template>
  <q-layout view="lHh Lpr lFf">
    <Header type="2" />
    <!-- <q-header class="text-black bg-transparent" style="height: 40px">
      <q-toolbar class="bg-white full-width q-px-md" unelevated>
        <q-toolbar-title>
          <q-btn stretch flat label="logo" to='/' class="text-subtitle1 text-bold"/>
        </q-toolbar-title>
        <q-space />
        <q-btn icon="clear" flat to='/'/>
      </q-toolbar>
    </q-header> -->

    <q-page-container>
      <q-page class="column items-center full-width q-py-xl" style="margin-top: -10px">
        <div class="text-bold text-h6 q-mb-md"> CADASTRO </div>
        <q-card class="q-mt-md" style="margin-left: 2px" :style="$q.screen.lt.sm? 'width: 300px':'width: 400px'" flat>
          <q-tabs
            v-model="userType"
            dense
            class="q-mb-md"
            active-color="purple-4"
            indicator-color="purple-4"
            align="justify"
            narrow-indicator
          >
            <q-tab name="pessoa">
              <span style="font-size: 1.3em">Pessoa</span>
            </q-tab>
            <q-separator vertical color="grey-6" class="q-my-xs" inset style="width: 1.5px"/>
            <q-tab name="empresa">
              <span style="font-size: 1.3em">Empresa</span>
            </q-tab>
          </q-tabs>

          <q-tab-panels v-model="userType" animated>
            <q-tab-panel name="pessoa" class="full-width">
              <div class="q-mb-md">
                <div class="text-bold q-mb-sm">
                  Nome
                </div>
                <q-input outlined v-model="usuarioPessoa.nome" placeholder="Insira seu nome" />
              </div>
              <div class="q-mb-md">
                <div class="text-bold q-mb-sm">
                  Email
                </div>
                <q-input outlined v-model="usuarioPessoa.email" placeholder="email@dominio.com" />
              </div>
              <div class="q-mb-md">
                <div class="text-bold q-mb-sm">
                  CPF
                </div>
                <q-input outlined v-model="usuarioPessoa.cpf" placeholder="000.000.000-00" mask="###.###.###-##"/>
              </div>
              <div class="q-mb-xl">
                <div class="text-bold q-mb-sm">
                  Senha
                </div>
                <q-input outlined v-model="usuarioPessoa.pass" placeholder="**********" type='password'/>
              </div>
              <div class="ful-width row justify-center">
                <q-btn rounded color="blue-9" style="color: white" label="Cadastrar" class="col-8" @click="criarPessoa()" :disable="!dontPessoa"/>
              </div>
            </q-tab-panel>

            <q-tab-panel name="empresa" class="full-width">
              <div class="q-mb-md">
                <div class="text-bold q-mb-sm">
                  Nome
                </div>
                <q-input outlined v-model="usuarioEmpresa.nome" placeholder="Insira seu nome" />
              </div>
              <div class="q-mb-md">
                <div class="text-bold q-mb-sm">
                  Email
                </div>
                <q-input outlined v-model="usuarioEmpresa.email" placeholder="email@dominio.com" />
              </div>
              <div class="q-mb-md">
                <div class="text-bold q-mb-sm">
                  CNPJ
                </div>
                <q-input outlined v-model="usuarioEmpresa.cnpj" placeholder="XX.XXX.XXX/0001-XX" mask="##.###.###/0001-##"/>
              </div>
              <div class="q-mb-xl">
                <div class="text-bold q-mb-sm">
                  Senha
                </div>
                <q-input outlined v-model="usuarioEmpresa.pass" placeholder="**********" type='password'/>
              </div>
              <div class="ful-width row justify-center">
                <q-btn rounded color='blue-9' label="Cadastrar" class="col-8" @click="criarEmpresa" :disable="!dontEmpresa"/>
              </div>
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import Header from '../components/header.vue'
export default {
    name: 'Cadastro',
    components: {
      Header
    },
    mounted () {
      if (this.logged) this.$router.push('/')
    },
    data () {
      return {
        userType: 'pessoa',
        usuarioPessoa: {
          nome: '',
          email: '',
          cpf: '',
          pass: ''
        },
        usuarioEmpresa: {
          nome: '',
          email: '',
          cnpj: '',
          pass: ''
        }
      }
    },
    computed: {
      logged () {
        return this.$store.state.hackapride.logged
      },
      dontPessoa () {
        return this.usuarioPessoa.nome != '' && this.usuarioPessoa.email != '' && this.usuarioPessoa.cpf.length == 14 && this.usuarioPessoa.pass != '' && this.usuarioPessoa.pass.length > 4
      },
      dontEmpresa () {
        return this.usuarioEmpresa.nome != '' && this.usuarioEmpresa.email != '' && this.usuarioEmpresa.cnpj.length == 18 && this.usuarioEmpresa.pass != '' && this.usuarioEmpresa.pass.length > 4
      }
    },
    methods: {
      criarPessoa () {
        const id = new Date().valueOf()
        this.usuarioPessoa.id = id
        this.usuarioPessoa.type = 'pessoa'
        const ans = this.$store.commit('hackapride/criarUsuario', this.usuarioPessoa)
        if (ans) this.$q.notify('oi')
      },
      criarEmpresa () {
        const id = this.usuarioEmpresa.nome.toLowerCase().replace(' ', '')
        this.usuarioEmpresa.id = id
        this.usuarioEmpresa.type = 'empresa'
        this.usuarioEmpresa.avaliacao = 0
        this.usuarioEmpresa.descricao = 'Serviço'
        const ans = this.$store.commit('hackapride/criarUsuario', this.usuarioEmpresa)
      }
    }
}
</script>

<style>
  .botao {
    width: 130px
  }

</style>