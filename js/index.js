function call(){
  
  var validador = localStorage.getItem('atividade')

  if(validador == 1){
    
  }
  else{
    swal("Olá! Seja bem vindo ao B.I.A.A.", "Banco Imobiliario Adaptado a Astronomia", "imgs/logo.jpg")
    localStorage.setItem("atividade", 1)

    //banco
    localStorage.setItem("Banco-Planetario", 200000)
    localStorage.setItem("Jogador-01", 15000)
    localStorage.setItem("Jogador-02", 15000)
    localStorage.setItem("Jogador-03", 15000)
    localStorage.setItem("Jogador-04", 15000)
    localStorage.setItem("Jogador-05", 15000)
    localStorage.setItem("Jogador-06", 15000)
    
  }
}