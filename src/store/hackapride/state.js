export default function () {
  return {
    logged: false,
    usuario: null,
    usuarios: [
      {
        type: 'empresa',
        nome: "Accenture",
        descricao: 'Serviço',
        id: 'accenture',
        avaliacao: 100,
        feedback: []
      },
      {
        type: 'empresa',
        nome: "Microsoft",
        descricao: 'Serviço',
        id: 'microsoft',
        avaliacao: 98,
        feedback: []
      },
      {
        type: 'empresa',
        nome: "Ambev",
        descricao: 'Serviço',
        id: 'ambev',
        avaliacao: 100,
        feedback: []
      },
      {
        type: 'empresa',
        nome: "Padaria XP",
        descricao: 'Serviço',
        id: 'padariaxp',
        avaliacao: 68,
        feedback: []
      },
      {
        type: 'empresa',
        nome: "Nubank",
        descricao: 'Serviço',
        id: 'nubank',
        avaliacao: 37,
        feedback: []
      },
      {
        type: 'empresa',
        nome: "Citi",
        descricao: 'Serviço',
        id: 'citi',
        avaliacao: 100,
        feedback: []
      },
      {
        type: 'empresa',
        nome: "Exemplo 1",
        descricao: 'Serviço',
        id: 'exemplo1',
        avaliacao: 45,
        feedback: []
      },
      {
        type: 'empresa',
        nome: "Exemplo 2",
        descricao: 'Serviço',
        id: 'exemplo2',
        avaliacao: 70,
        feedback: []
      }
    ],
    lgbt: [
      {
        nome: 'Gay',
        img: 'gay.png',
        url: 'gay',
        cores: ['750787', '004dff', '008026', 'ffed00', 'ff8c00', 'e40303'],
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        dont: [
          {
            title: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit”',
            desc: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          },
          {
            title: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit”',
            desc: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          },
          {
            title: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit”',
            desc: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          }
        ],
        do: [
          {
            title: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit”',
            desc: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          },
          {
            title: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit”',
            desc: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          },
          {
            title: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit”',
            desc: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          }
        ]
      },
      {
        nome: 'Lésbica',
        img: 'lesbica.png',
        url: 'lesbica',
        cores: [ '77220d', 'ad4e55', 'd7aad0', 'eeece8', 'b964a1', 'a2548e', '89015f'],
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        dont: [
          {
            title: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit”',
            desc: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          },
          {
            title: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit”',
            desc: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          },
          {
            title: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit”',
            desc: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          }
        ],
        do: [
          {
            title: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit”',
            desc: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          },
          {
            title: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit”',
            desc: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          },
          {
            title: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit”',
            desc: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          }
        ]
      },
      {
        nome: 'Bissexual',
        img: 'bi.png',
        url: 'bi',
        cores: ['0054ac', '932193', 'e3008e'],
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        dont: [
          {
            title: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit”',
            desc: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          },
          {
            title: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit”',
            desc: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          },
          {
            title: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit”',
            desc: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          }
        ],
        do: [
          {
            title: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit”',
            desc: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          },
          {
            title: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit”',
            desc: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          },
          {
            title: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit”',
            desc: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          }
        ]
      },
      {
        nome: 'Transexual',
        img: 'trans.png',
        url: 'trans',
        cores: ['5BCEFA', 'F5A8B8', 'FFFFFF', 'F5A8B8', '5BCEFA'],
        desc: "As pessoas transgênero são pessoas que não se reconhecem com o gênero que lhes foi designado ao nascer. Para a ciência, especialmente a medicina, por meio do CID - Catálogo Internacional de Doenças (outorgado pela OMS - Organização Mundial de Saúde) e DSM - Manual Estatístico e Diagnóstico de Transtornos Mentais (outorgado pela APA - Associação Norte Americana de Psiquiatria), ainda são consideradas pessoas com transtorno de identidade de gênero e, portanto, precisam de tratamentos hormonais, terapias psicológicas e intervenções cirúrgicas para adequar suas características anatômicas ao gênero com o qual a pessoa se identifica.",
        dont: [
          {
            title: '“ATÉ PARECE HOMEM/MULHER DE VERDADE.”',
            desc: 'Um pensamento transfóbico que considera apenas pessoas cis legitimamente homens ou mulheres. Até porque, parafraseando Simone de Beauvoir e a reflexão de que gênero é uma construção social, “ninguém nasce homem, torna-se”.'
          },
          {
            title: '“VOCÊ PREFERE QUE TE CHAME NO FEMININO OU MASCULINO?”',
            desc:  'Apesar da língua portuguesa definir os artigos feminino e masculino para pessoas e coisas, é possível utilizar uma linguagem mais neutra. Ao questionar se a pessoa prefere masculino ou feminino, há uma tentativa inconsciente de tornar binário o não-binário.'
          },
          {
            title: '“VOCÊ OPEROU? COMO FICA?”',
            desc: 'Ninguém deve sair perguntando como é o genital das pessoas, isso é da intimidade de cada pessoa. Genital não define o gênero de ninguém e não é uma regra pessoas transsexuais passarem por cirurgia de redesignação.'
          }
        ],
        do: [
          {
            title: '“VOCÊ ESTÁ INTERAGINDO COM UMA PESSOA”',
            desc: 'Antes que o fator de gênero te impacte antes de enxergar uma pessoa, você precisa revisar alguns valores. Trate o assunto, respeite o que a pessoa diz, inclua-a no diálogo e haja igualmente com todos'
          },
          {
            title: '“GARANTIR PERTENCIMENTO”',
            desc: 'É dever do ambiente profissional garantir que seus colaboradores estejam preparados para lidar de forma consciente com a diversidade de gênero, como por exemplo, garantir que a pessoa tenha acesso a banheiro condizente com sua identidade de gênero'
          },
          {
            title: '“NÃO SEJA CURIOSO, MAS SEJA EMPÁTICO”',
            desc: 'Na dúvida, a melhor opção é ouvir o que a pessoa tem a te dizer. Considere que talvez ela tenha que ficar se explicando a todo tempo, então evite perguntas como “Qual seu sexo?”, “É homem ou mulher?”, pois são comportamentos preconceituosos. Experimente perguntar “Como eu posso chamar você?”'
          }
        ]
      },
      {
        nome: 'Assexual',
        img: 'assexual.png',
        url: 'assexual',
        cores: ['8736af', 'ffffff', '808080', '000000'],
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        dont: [
          {
            title: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit”',
            desc: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          },
          {
            title: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit”',
            desc: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          },
          {
            title: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit”',
            desc: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          }
        ],
        do: [
          {
            title: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit”',
            desc: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          },
          {
            title: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit”',
            desc: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          },
          {
            title: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit”',
            desc: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          }
        ]
      },
      {
        nome: 'Pansexual',
        img: 'pansexual.png',
        url: 'pan',
        cores: ['21b1ff', 'ffd800', 'ff218c'],
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        dont: [
          {
            title: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit”',
            desc: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          },
          {
            title: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit”',
            desc: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          },
          {
            title: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit”',
            desc: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          }
        ],
        do: [
          {
            title: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit”',
            desc: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          },
          {
            title: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit”',
            desc: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          },
          {
            title: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit”',
            desc: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          }
        ]
      }
    ],
    empresas: [
      {
        nome: "Accenture",
        descricao: 'Serviço',
        id: 'accenture',
        avaliacao: 100,
        feedback: []
      },
      {
        nome: "Microsoft",
        descricao: 'Serviço',
        id: 'microsoft',
        avaliacao: 98,
        feedback: []
      },
      {
        nome: "Ambev",
        descricao: 'Serviço',
        id: 'ambev',
        avaliacao: 100,
        feedback: []
      },
      {
        nome: "Padaria XP",
        descricao: 'Serviço',
        id: 'padariaxp',
        avaliacao: 68,
        feedback: []
      },
      {
        nome: "Nubank",
        descricao: 'Serviço',
        id: 'nubank',
        avaliacao: 37,
        feedback: []
      },
      {
        nome: "Citi",
        descricao: 'Serviço',
        id: 'citi',
        avaliacao: 100,
        feedback: []
      },
      {
        nome: "Exemplo 1",
        descricao: 'Serviço',
        id: 'exemplo1',
        avaliacao: 45,
        feedback: []
      },
      {
        nome: "Exemplo 2",
        descricao: 'Serviço',
        id: 'exemplo2',
        avaliacao: 70,
        feedback: []
      }
    ]
  }
}
