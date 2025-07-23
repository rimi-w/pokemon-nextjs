export async function GET(request, { params }) {
  const { id } = params;

  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
    if (!res.ok) throw new Error("포켓몬 정보를 불러오지 못했어요");

    const data = await res.json();

    const pokeData = {
      id,
      name:
        data.names.find((el) => el.language.name === "ko")?.name ?? data.name,
      description:
        data.flavor_text_entries.find((el) => el.language.name === "ko")
          ?.flavor_text ?? "",
      front: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
      back: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`,
    };

    return Response.json(pokeData);
  } catch (error) {
    return {
      id: pokeId,
      name: "에러",
      description: "불러올 수 없음",
      front: "",
      back: "",
      error: true,
    };
  }
}
