import { Notify } from 'quasar';

export function success (msg) {
  Notify.create({ position: 'top', color: 'positive', message: msg })
}

export function error (msg) {
  Notify.create({ position: 'top', color: 'negative', message: msg })
};

export function criarUsuario (state, user) {
  if (user.type == "pessoa") {
    if (state.usuarios.find(u => (u.email === user.email) || (u.cpf === user.cpf))) {
      error('Usuário ja existe')
      return
    }
  } else if (user.type == "empresa") {
    if (state.usuarios.find(u => u.id === user.id)) {
      error('Usuário já existe')
      return
    }
  }

  state.usuarios.push(user)
  success('Usuário criado com sucesso')
  this.$router.push('/')
}

export function autenticar (state, user) {
  const usuario = state.usuarios.find(u => (u.email === user.email) && (u.pass === user.pass))
  console.log(usuario)
  if (usuario) {
    state.usuario = {
        ...usuario
    }

    state.logged = true
    success('Entrou na conta com sucesso')
    if (usuario.type === 'pessoa') this.$router.push('/')
    else this.$router.push(`/home/${usuario.id}`)
  } else {
    error('Não foi possível logar.')
  }
}

export function logout (state) {
  state.usuario = null
  state.logged = false
  success('Você foi desconectada')
  this.$router.push('/')
}

export function addFeedback (state, { feedback, id }) {
  state.usuarios.filter(u => u.type == 'empresa').find(e => e.id == id).feedback.push(feedback)
}