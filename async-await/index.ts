function obterId(): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(5);
        }, 1500)
    })
}

function pesquisarEmail(id: number): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("anonimo@email.com");
        })
    })
}

interface EmailResponse {
    time: number;
    to: string;
}

function mandarEmail(corpo: string, para: string): Promise<EmailResponse> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let deuErro = false;
            if (!deuErro) {
                resolve({time: 4, to: "anonimo@email.com"});
            }
            else {
                reject("Fila cheia!");
            }
        }, 4000);
    });
}

function obterUsers() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {name: 'Beatrice', lang: 'LISP'},
                {name: 'Erika', lang: 'C++'},
                {name: 'Maria', lang: 'Scratch'},
                {name: 'Taylor', lang: 'Swift'}
            ]);
        }, 3000)
    })
}

async function principal() {
    let id = await obterId();
    let email = await pesquisarEmail(id);
    try {
        await mandarEmail("Olá, como vai?", email);
        console.log("E-mail enviado!");
    } catch(erro) {
        console.log(erro);
    }
}

principal();

/*
async function principal() {
    // await bloqueia o fluxo
    let users = await obterUsers();
    // Só são executados depois que o await terminar
    console.log(users);
    console.log("Mensagem de teste!");
}
*/

/*
obterUsers().then((users) => {
    console.log(users);
})
*/

/*
console.log("Início");
obterId().then((id: number) => {
    pesquisarEmail(id).then((email: string) => {
        mandarEmail("Olá, como vai?", email).then(() => {
            console.log("E-mail enviado com sucesso para o usuário com id: " + id);
        }).catch((err) => {
            console.log(err);
        })
    })
})
console.log("Fim");
*/