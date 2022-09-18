import {Router} from 'express';
import { createTable ,insertParticipante, updateParticipante, selectParticipante, selectParticipantes, deleteParticipante} from './controllers/participante_controller.js';

const router = Router();

router.get('/', function(req, res){
    res.json({
        "statusCode": 200,
        "msg":"API Rodando"
    })
})

router.get('/participantes', selectParticipantes);
router.get('/participante', selectParticipante);
router.post('/participante', insertParticipante);
router.put('/participante', updateParticipante);
router.delete('/participante', deleteParticipante);

export default router;