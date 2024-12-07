"use strict";
function getId() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(5);
        }, 1500);
    });
}
function searchEmail(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("anonimo@email.com");
        });
    });
}
function sendEmail(corpo, para) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let deuErro = false;
            if (!deuErro) {
                resolve({ time: 4, to: "anonimo@email.com" });
            }
            else {
                reject("Fila cheia!");
            }
        }, 4000);
    });
}
// resolve -> then
// reject -> catch
// destructuring assignment - unpack values from arrays, or properties from objects
/*
sendEmail("Olá, estou enviando este e-mail para discutir um assunto importante.", "anonimo@email.com").then(({ time, to }) => {
    console.log(`
        Time: ${time}
        -----------------------
        To: ${to}
        `);
}).catch((erro) => {
    console.log("Parece que não sou muito bom em cumprir promessas... " + erro);
});
*/
console.log("Início");
getId().then((id) => {
    searchEmail(id).then((email) => {
        sendEmail("Olá, como vai?", email).then(() => {
            console.log("E-mail enviado com sucesso para o usuário com id: " + id);
        }).catch((err) => {
            console.log(err);
        });
    });
});
console.log("Fim");