"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function obterId() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(5);
        }, 1500);
    });
}
function pesquisarEmail(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("anonimo@email.com");
        });
    });
}
function mandarEmail(corpo, para) {
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
function obterUsers() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { name: 'Beatrice', lang: 'LISP' },
                { name: 'Erika', lang: 'C++' },
                { name: 'Maria', lang: 'Scratch' },
                { name: 'Taylor', lang: 'Swift' }
            ]);
        }, 3000);
    });
}
function principal() {
    return __awaiter(this, void 0, void 0, function* () {
        let id = yield obterId();
        let email = yield pesquisarEmail(id);
        try {
            yield mandarEmail("Olá, como vai?", email);
            console.log("E-mail enviado!");
        }
        catch (erro) {
            console.log(erro);
        }
    });
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
