const { PokemonClient } = require('pokenode-ts');

const api = new PokemonClient();

class PokemonController {
  
 async getPokemonByName(req: any, res: any) {
    try {
      const pokemon = await api.getPokemonByName(req.params.name);
      res.json(pokemon);
      return pokemon;
    } catch (error) {
      res.status(500).send(error);
      return undefined;
    }
  };

  async listAll(req: any, res: any) {
    try {
      const pokemonList = await api.listPokemons(0, 1302);
      res.json(pokemonList.results);
      return pokemonList.results;
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch Pokémon list' });
    }
  }

  async getById(req: any, res: any) {
    try {
      const pokemon = await api.getPokemonById(req.params.id);
      res.json(pokemon);
      return pokemon;
    } catch (error) {
      res.status(500).send(error);
    }
  };
}

export default PokemonController;