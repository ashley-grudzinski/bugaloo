export type Ingredient = {
	quantity: number,
	unit: string,
	displayName: string
}

export type RecipeProps = {
	name: string,
	url: string,
	ingredients: any,
	recipe: any
}