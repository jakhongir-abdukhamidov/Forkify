export const state = {
  recipe: {},
};

export const loadRecipe = async function (id) {
  try {
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/get?rId=${id}`
    );

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    const data = await res.json();
    const { recipe } = data;
    state.recipe = {
      id: recipe.recipe_id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      ingredients: recipe.ingredients,
      cookingTime: `${Math.round(Math.random() * (46 - 10) + 10)}`,
      servings: `${Math.ceil(Math.random() * (9 - 2) + 2)}`,
    };
    console.log(state.recipe);
  } catch (err) {
    console.error(err);
  }
};
