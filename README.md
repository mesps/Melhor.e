# Melhor.e

### Descrição
Queremos com nossa plataforma tornar o consumo, acesso aos serviços e o clima por detrás da empresa um hábito consciente e político a causa de pessoas minorizadas diversas: como pessoas LGBTQIA+, PCDs, Mulheres, negros, dentre outros. Sonhando por um dia por tratamentos iguais a todes. Sem piadinhas e constrangimento. Enquanto esse dia não chega, então MELHOR.E e faça sua voz ser ouvida!

Essa solução surgiu como uma forma de tentar solucionar a problemática levantada pelo Hackapride 2020 sobre a baixa inclusão de pessoas LGBTQIA+ no mercado de trabalho.

### Documentação

#### Tipo de software
A plataforma foi implementada pensando principalmente na sua utilização na WEB, porém, sua implementação utilizando Vue.js e Quasar possibilita, em um futuro, que a solução seja adaptada e utilizada em outras plataformas, visto que o Quasar viabiliza a construção de aplicativos multiplataforma.

#### Banco de dados
Como o banco de dados físico não chegou a ser implementado, usamos o vuex para dar uma sensação de banco de dados, tornando possível que o usuário se cadastre como pessoa física ou empresa e seja capaz de olhar as múltiplas funcionalidades da plataforma.

### Sobre o futuro da plataforma, queremos, em uma próxima versão da plataforma:
- Implementar o banco de dados, a fim de tornar a plataforma 100% funcional.
- Utilizar Python e Django para implementá-lo, porque essa dupla é conhecida por trazer velocidade e uso reduzido de códigos quando comparado com seus concorrentes. Além de python ser uma lingua amplamente utilizada para o processamento de dados.
- Implementar as funções da plataforma que faltaram ser implementadas
- Criar novas funcionalidades e melhorar as já existentes, para assim, nossa plataforma sempre evoluir e impactar mais pessoas.
- Utilizar a funcionalidade multiplataforma do Quasar, para que possamos estar presentes em todas as plataformas

### Como compilar a plataforma: um guia
Primeiro, é preciso que você baixe o quasar cli e o vue cli no seu computador, utilizando o npm ou yarn, segue abaixo:
  QuasarCLI: `npm install -g @quasar/cli` ou `yarn global add @quasar/cli`
  VueCLI: `npm install -g @vue/cli` ou `yarn global add @vue/cli`
  
 Segundo, é preciso baixar as dependências para o código, no terminal, abra a pasta do Melhor.e, e rode o seguinte comando:
 `npm install`
 
 Em seguida, rode o seguinte comando para desfrutar das funcionalidades da nossa plataforma WEB:
 `quasar dev`
 

