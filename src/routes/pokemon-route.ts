import { Router } from 'express';
import PokemonController from '../controllers/pokemon-controller';

const router = Router();

const pokemonController = new PokemonController();

router.get('/pokemon/:name', (req, res) => pokemonController.getPokemonByName(req, res));
router.get('/pokemon', (req, res) => pokemonController.listAll(req, res));
router.get('/pokemon/:id', (req, res) => pokemonController.getById(req, res));

export default router;