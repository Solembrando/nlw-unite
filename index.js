let participantes = [
  {
    nome: "Alec Matos",
    email: "alecmatos@gmail.com",
    dataInscricao: 
    new Date(2024,3,13,20,00),
    dataCheckIn: null
  },
  {
    nome: "Rachel Santos",
    email: "rachel@gmail.com",
    dataInscricao: 
    new Date(2024,3,11,19,30),
    dataCheckIn: null
  },
  
];

const criarNovoParticipante =(participante) => {
  
  const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao)

  let dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn)
  
  if(participante.dataCheckIn == null) {
    dataCheckIn = `
    <button 
    data-email="${participante.email}"
    onclick="fazerCheckIn(event)" 
  >
      Confirmar check-in
    </button>
   `
  }

  return `
 <tbody>
  <tr>
   <td>
    <strong>
     ${participante.nome}
    </strong>
    <br>
    <small>
     ${participante.email}
    </small>
   </td>
   <td>
   ${dataInscricao}
   </td>
   <td>
   ${dataCheckIn}
   </td>
  </tr>
 </tbody>
  `
}

const atualizarLista = (participantes) => {
let output = ""

for(let participante of participantes)
 {
  output = output + criarNovoParticipante(participante)
 }
  document.
  querySelector('tbody')
  .innerHTML = output
}

atualizarLista(participantes)

const adicionarParticipante = (event) => {
  event.preventDefault()
const formData = new FormData(event.target)

const participante = {
  nome: formData.get('nome'),
  email: formData.get('email'),
  dataInscricao: new Date(),
  dataCheckIn: null
  }
const participanteExiste = participantes.find((p) => p.email == participante.email
)
if(participanteExiste) {
  alert('Email já cadastrado')
  return
}

  participantes = [participante, ...participantes]
  atualizarLista(participantes)

  event.target.querySelector('[name="nome"]').value = ""
  event.target.querySelector('[name="email"]').value = ""
}

const fazerCheckIn = (event) =>
{
 const mensagemConfirmacao = 'Tem certeza que deseja realizar o check-in?'
  if(confirm(mensagemConfirmacao) == false) {return}
  
 const participante = participantes.find((p) => p.email == event.target.dataset.email
  )
 participante.dataCheckIn = new Date()
 atualizarLista(participantes)
}
