// como tipar variavel
//nomeDaVariavel:tipoDaVariael
//colocando interrogação no parâmetro deixa ele opcional
interface Usuario {
    nome:string, email:string, telefone?:string
}



function enviarEmail({email, nome, telefone}: Usuario){
    console.log ('Ola ${nome} seu email é ${email} e seu telefone é ${telefone}');
    //
    //
    //
}

enviarEmail({
    email: "rodrigo@gmail.com",
    nome: "Rodrigo Lopes",
    telefone: "3512131315"
});