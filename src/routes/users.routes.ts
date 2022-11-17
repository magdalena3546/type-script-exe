import { UsersController } from '../controllers/users.controller';
import { UsersMockRepository } from '../repositories/users-mock-repository';
import express from 'express';


const repository = new UsersMockRepository();
const controller = new UsersController(repository);

const router = express.Router();

router.post('', (req, res) => {
    try {
        return res.json(controller.addItem(req.body));
    } catch(error) {
        res.status(500).json(error);
    }
});

router.get('', (_, res) => {
    return res.json(controller.getAllItems());
});

router.delete('/:id', (req, res) => {
    try {
        return res.json(controller.deleteItem(req.params.id));
    } catch(error) {
        res.status(500).json(error);
    }
});

router.get('/:id', (req, res) => {
    return res.json(controller.getItemById(req.params.id));
});

router.put('/:id', (req, res) => {
    try {
        return res.json(controller.updateItem(req.params.id, req.body));
    } catch(error) {
        res.status(500).json(error);
    } 
});

router.get('/find/:firstName', (req, res) => {
    return res.json(controller.findUserByFirstName(req.params.firstName));
});

module.exports = router;