import { openDb } from "../configDB.js";

export async function createTable(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS Participantes (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, sobre_nome TEXT, email TEXT)');
    })
}
createTable();

export async function insertParticipante(req, res){
    let participante = req.body;
    openDb().then(db=>{

        db.run(
            'INSERT INTO Participantes (nome, sobre_nome, email) VALUES (?,?,?)',[participante.nome, participante.sobre_nome, participante.email]
        )
    });
    res.json({
        "statusCode": 200
    })
}

export async function updateParticipante(req, res){
    let participante = req.body;

    openDb().then(db=>{

        db.run(
            'UPDATE Participantes SET nome=?, sobre_nome=?, email=? WHERE id=?',[participante.nome, participante.sobre_nome, participante.email, participante.id]
        )
    });
    res.json({
        "statusCode": 200
    })
}

export async function selectParticipantes(req, res){
    openDb().then(db=>{
        db.all('SELECT * FROM Participantes').then(participantes=>res.json(participantes))
    });
}
export async function selectParticipante(req, res){
    let id = req.body.id;
    openDb().then(db=>{
        db.get('SELECT * FROM Participantes WHERE id=?', [id]).then(participante=>res.json(participante))
    });
}

export async function deleteParticipante(req, res){
    let id = req.body.id;
    openDb().then(db=>{
        db.get('DELETE FROM Participantes WHERE id=?', [id]).then(participante=>res.json(participante))
    });
}