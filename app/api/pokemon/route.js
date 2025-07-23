import { NextResponse } from "next/server";

export async function GET(request) {
  const fetchPokeDataById = async (maxPokeId) => {
    const pokemonIds = Array.from(
      { length: maxPokeId },
      (_, index) => index + 1
    );

    const pokeFetchApi = async function (pokeId) {
      try {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon-species/${pokeId}/`
        );
        if (!res.ok) throw new Error();
        const data = await res.json();

        const pokeData = {
          id: pokeId,
          name:
            data.names.find((el) => el.language.name === `ko`)?.name ??
            data.name,
          description:
            data.flavor_text_entries.find((el) => el.language.name === `ko`)
              ?.flavor_text ?? "",
          front: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`,
          back: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokeId}.png`,
        };
        return pokeData;
      } catch {
        return {
          id: pokeId,
          name: "에러",
          description: "불러올 수 없음",
          front: "",
          back: "",
          error: true,
        };
      }
    };
    return await Promise.all(pokemonIds.map((id) => pokeFetchApi(id)));
  };

  const pokeData = await fetchPokeDataById(151);

  return NextResponse.json(pokeData);
}
