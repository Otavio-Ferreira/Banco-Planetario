function encerrarSessao(){
 
  swal({
    title: "Tem certeza que quer encerrar essa sessão?",
    text: "Você terá que iniciar tudo novamente",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      swal("Sessão encerrada!", {
        icon: "success",
      });

      localStorage.removeItem("atividade");
      localStorage.removeItem("Banco-Planetario");
      localStorage.removeItem("Jogador-01");
      localStorage.removeItem("Jogador-02");
      localStorage.removeItem("Jogador-03");
      localStorage.removeItem("Jogador-04");
      localStorage.removeItem("Jogador-05");
      localStorage.removeItem("Jogador-06");
    } else {
      swal("A sessão não foi encerrada!");
    }
    window.onload()
  });
}