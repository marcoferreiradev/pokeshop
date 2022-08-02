import { useQuery, gql } from '@apollo/client';

const GET_POKEMONS = gql`
  query GetPokemons {
    pokemon_v2_pokemon(limit: 10, order_by: { name: asc }) {
		id
		name
		pokemon_v2_pokemontypes {
			pokemon_v2_type {
				name
			}
		}
		pokemon_v2_pokemonsprites {
			sprites
		}
	}
  }
`;



export default function GetPokemonsTeste() {
  const { loading, error, data } = useQuery(GET_POKEMONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log('DATAAA 🚀', data); 
  return (
    <div>
      <h2>GET POKEMONS</h2>
    </div>
  );
}