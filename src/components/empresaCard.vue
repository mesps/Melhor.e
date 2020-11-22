<template>
  <q-card flat class="column justify-center items-center q-pa-lg q-my-md q-mx-md" style="width: 200px; background-color: #F0F0F0" :class="$q.screen.lt.sm? '':'q-mr-lg'" clickable @click="$router.push(`/empresa/${empresa.id}`)">
    <q-avatar size="70px" font-size="32px" text-color="white" icon="psychology" style="border-radius: 100%; background-color: #fd6554"/>
    <q-card-section class="text-bold text-h6 q-ma-none q-pa-none">{{ empresa.nome }}</q-card-section>
    <q-card-section class="text-subtitle1 q-mb-sm q-pa-none">{{ empresa.descricao }}</q-card-section>
    <q-card-section class="avaliacao">
      <div id="progressbar">
        <div :style="`width: ${empresa.avaliacao}%`"></div>
      </div>
      <div class="text-subtitle1 text-grey-9 full-width text-center">Nota: {{ (empresa.avaliacao/10).toFixed(2) }}</div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
    name: "empresaCard",
    props: ['empresa']
}
</script>

<style scoped>
  .avaliacao {
    width: 120px;
  }
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
       background-color: #66d643
    }
</style>