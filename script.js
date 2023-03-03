const estados = [
  { nome: 'AC',
    regiao: 'Norte' },
  { nome: 'AL',
    regiao: 'Nordeste' },
  { nome: 'AP',
    regiao: 'Norte' },
  { nome: 'AM',
    regiao: 'Norte' },
  { nome: 'BA',
    regiao: 'Nordeste' },
  { nome: 'CE',
    regiao: 'Nordeste' },
  { nome: 'DF',
    regiao: 'Centro-Oeste' },
  { nome: 'ES',
    regiao: 'Sudeste' },
  { nome: 'GO',
    regiao: 'Centro-Oeste' },
  { nome: 'MA',
    regiao: 'Nordeste' },
  { nome: 'MG',
    regiao: 'Sudeste' },
  { nome: 'MT',
    regiao: 'Centro-Oeste' },
  { nome: 'MS',
    regiao: 'Centro-Oeste' },
  { nome: 'PA',
    regiao: 'Norte' },
  { nome: 'PB',
    regiao: 'Nordeste' },
  { nome: 'PR',
    regiao: 'Sul' },
  { nome: 'PE',
    regiao: 'Nordeste' },
  { nome: 'PI',
    regiao: 'Nordeste' },
  { nome: 'RJ',
    regiao: 'Sudeste' },
  { nome: 'RN',
    regiao: 'Nordeste' },
  { nome: 'RS',
    regiao: 'Sul' },
  { nome: 'RO',
    regiao: 'Norte' },
  { nome: 'RR',
    regiao: 'Norte' },
  { nome: 'SC',
    regiao: 'Sul' },
  { nome: 'SP',
    regiao: 'Sudeste' },
  { nome: 'SE',
    regiao: 'Nordeste' },
  { nome: 'TO',
    regiao: 'Norte' },
];

const campoNomeDoForm = document.getElementById("campoNomeInput")
const campoEmailDoForm = document.getElementById("campoEmailInput")
const campoCelularDoForm = document.getElementById("campoCelularInput")
const campoEstadoDoForm = document.getElementById("campoEstadoInput")

const selectGrupoCentroOeste = document.getElementById("grupoCentroOeste")
const selectGrupoNordeste = document.getElementById("grupoNordeste")
const selectGrupoNorte = document.getElementById("grupoNorte")
const selectGrupoSudeste = document.getElementById("grupoSudeste")
const selectGrupoSul = document.getElementById("grupoSul")

const alertaCampoErrado = document.getElementById("alertaCampoErrado")

const nomeResposta = document.getElementById("nomeObtidoResposta")
const emailResposta = document.getElementById("emailObtidoResposta")
const celularResposta = document.getElementById("celularObtidoResposta")
const estadoResposta = document.getElementById("estadoObtidoResposta")

const botaoForm = document.getElementById("botaoEnviarForm")

botaoForm.addEventListener("click", callValues)

estados.forEach(estado => {
  switch (estado.regiao) {
    case "Centro-Oeste":
        selectGrupoCentroOeste.innerHTML += `<option value="${estado.nome.toLowerCase()}">${estado.nome}</option>`
      break;
    case "Nordeste":
        selectGrupoNordeste.innerHTML += `<option value="${estado.nome.toLowerCase()}">${estado.nome}</option>`
      break;
    case "Norte":
        selectGrupoNorte.innerHTML += `<option value="${estado.nome.toLowerCase()}">${estado.nome}</option>`
      break;
    case "Sudeste":
        selectGrupoSudeste.innerHTML += `<option value="${estado.nome.toLowerCase()}">${estado.nome}</option>`
      break;
    case "Sul":
        selectGrupoSul.innerHTML += `<option value="${estado.nome.toLowerCase()}">${estado.nome}</option>`
      break;
  }
})

function callValues(){
  event.preventDefault()
  let camposErrados = []
  
  try {
    if(!verificarCampoVazio(campoNomeDoForm.value)){
      console.error("O campo Nome não pode estar vazio!")
      camposErrados.push(campoNomeDoForm)
    }
    
    if(!verificarCampoVazio(campoEmailDoForm.value)){
      console.error("O campo E-mail não pode estar vazio!")
      camposErrados.push(campoEmailDoForm)
    } else if (!campoEmailDoForm.value.includes("@")){
      console.error("Preencha um e-mail válido!")
      camposErrados.push(campoEmailDoForm)
    }

    if(!verificarCampoVazio(campoCelularDoForm.value)){
      console.error("O campo Celular não pode estar vazio!")
      camposErrados.push(campoCelularDoForm)
    }

    if(!verificarCampoVazio(campoEstadoDoForm.value) || campoEstadoDoForm.value == 0){
      console.error("O campo Estado não pode estar vazio!")
      camposErrados.push(campoEstadoDoForm)
    }

    if(camposErrados.length != 0) {
      alertaCampoErrado.classList.add("alertaCampoErrado")
      alertaCampoErrado.classList.remove("alertaCampoErradoOculto")

      camposErrados.forEach(campo => {
        campo.classList.add("campoErrado")
      })

      throw new Error("Campos preenchidos incorretamente!")
    } else {
      campoNomeDoForm.classList.remove("campoErrado")
      campoEmailDoForm.classList.remove("campoErrado")
      campoCelularDoForm.classList.remove("campoErrado")
      campoEstadoDoForm.classList.remove("campoErrado")
      
      nomeResposta.innerHTML += campoNomeDoForm.value
      emailResposta.innerHTML += campoEmailDoForm.value
      celularResposta.innerHTML += campoCelularDoForm.value
      estadoResposta.innerHTML += campoEstadoDoForm.value

      alertaCampoErrado.classList.add("alertaCampoErradoOculto")
      alertaCampoErrado.classList.remove("alertaCampoErrado")
    }

  } catch (error) {
    console.error(error)
  }  
}

function verificarCampoVazio(conteudo) {
  if (conteudo?.trim()) {
    return true
  } else {
    return false
  }
}