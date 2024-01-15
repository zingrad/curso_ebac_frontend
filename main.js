const alunos = [{nome:"Erick",
nota:7},{nome:"josé",nota:8},{nome:"fernanda", nota :3},{nome:"josué", nota :5}]



const alunosQuePassaram = alunos.filter(function(alunos){
    if(alunos.nota >= 6 ){
       return alunos
    }else{
        console.log(`${alunos.nome} você não passou de ano`)
    }
    
})

function alunosQuePassaram2(){
    alunos.filter(function(alunos){
        if(alunos.nota >= 6 ){
            console.log(`${alunos.nome} você passou de ano com nota: ${alunos.nota}`)
        }else{
            console.log(`${alunos.nome} você não passou de ano`)
        }
    })
}

alunosQuePassaram2()
console.log(alunosQuePassaram)