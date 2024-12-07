const mensagemCallback = (time: number, erro: unknown) => {
    if (erro == undefined) { // OK
        console.log("E-mail enviado!");
    } else {
        console.log(erro);
    }
    console.log(`Tempo: ${time}ms`);
}

const enviarEmail = (corpo: string, para: string, callback: Function) => {
    setTimeout(() => {
        // ... Lógica

        let deuErro = false;

        if (deuErro) {
            mensagemCallback(8000, "O envio do e-mail falhou.");
        } else {
            mensagemCallback(8000, undefined);
        }
    }, 8000);
}

console.log("Iniciando o envio do e-mail...")
enviarEmail("Olá, como você está?", "anonimo@email.com", mensagemCallback);