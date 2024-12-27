const express = require('express');
const { PokemonClient } = require('pokenode-ts');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;
const api = new PokemonClient();

app.use(cors({
  origin: '*',
}));

app.get('/pokemon/:name', async (req: any, res: any) => {
  try {
    const pokemon = await api.getPokemonByName(req.params.name);
    res.json(pokemon);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get('/pokemon', async (req: any, res: any) => {
    try {
      const pokemonList = await api.listPokemons(0, 1302);
      res.json(pokemonList.results);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch Pokémon list' });
    }
});

app.get('/pokemon/:id', async (req: any, res: any) => {
  try {
    const pokemon = await api.getPokemonById(req.params.id);
    res.json(pokemon);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});