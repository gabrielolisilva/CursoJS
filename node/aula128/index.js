const fs = require('fs').promises; //módulo do próprio coração do node, promises pq ele leva um tempo para ler os arquivos
const path = require('path');

async function readdir(rootDir){
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir)
    walk(files, rootDir);
}

//Função que entra em todos os diretórios e le o que ta dentro
async function walk (files, rootDir){
    for(let file of files){
        const fileFullPath = path.resolve(rootDir, file);
        const stats = await fs.stat(fileFullPath);

        if(/\.git/g.test(fileFullPath)) continue //se a pasta for git pula
        if(/node.modules/g.test(fileFullPath)) continue

        if(stats.isDirectory()) {
            readdir(fileFullPath);
            continue;
        };


        console.log(fileFullPath)
    }
}

//barra deve ser para direita
readdir('/Users/Engenharia/Desktop/Arquivos_Gabriel/Lista de Exercício/CursoJS');