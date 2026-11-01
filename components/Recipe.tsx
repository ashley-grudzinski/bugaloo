import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import marg from '../recipes/margherita.json';
import { RecipeTable } from './RecipeTable'
import { RecipeList } from './RecipeList';
import {useState} from 'react';
import FONTS from '../fonts';
import COLORS from '../colors';

export const Recipe = () => {
	const [showList, toggleListView] = useState(true);
	const image = require("../images/margFlatbread.png");
	const { name, recipe } = marg;
	const ingredientsList = convertIngredients(marg.ingredients);

	return (
		<View style={styles.container}>
			<Text style={styles.title}>{name}</Text>
			<View>
				<Image style={styles.image} source={image} />
				<View style={styles.ingredientsTitleContainer}>
					<Text style={styles.ingredientsTitle}>Ingredients</Text>
					<Pressable onPress={() => toggleListView(!showList)}>
						<Text>Press me!</Text>
					</Pressable>
				</View>
				{ showList && <RecipeList ingredients={ingredientsList}/> }
				{ !showList && <RecipeTable ingredients={ingredientsList}/> }
				<Text style={{...styles.ingredientsTitle, marginTop: 10}}>Recipe</Text>
				{recipe.map((item, index) => (
					<View style={{flexDirection: "row"}}>
						<Text style={styles.stepNumbers}>{index + 1}</Text>
						<Text style={styles.description}>{item.description}</Text>
					</View>
				))}
			</View>
		</View>
	)
}

const convertIngredients = (ingredients) => {
	return Object.keys(ingredients).map(ingredientName => ingredients[ingredientName]);
}

const styles = StyleSheet.create({
	container: {
		margin: 6
	},
	title: {
		fontSize: 36,
		fontFamily: FONTS.KOULEN,
		color: COLORS.DARK_BLUE,
	},
	image: {
		width: "100%",
		height: 220,
		borderRadius: 30,
		marginBottom: 20
	},
	ingredientsTitleContainer: {
		flexDirection: 'row'
	},
	ingredientsTitle: {
		fontSize: 22,
		fontFamily: FONTS.LAZLEZAR,
		color: COLORS.DARK_BLUE
	},
	stepNumbers: {
		marginStart: 10,
		paddingEnd: 8,
		fontSize: 17,
		fontFamily: FONTS.LAZLEZAR,
		color: COLORS.BLUE
	},
	description: {
		marginEnd: 20,
		marginBottom: 10,
		paddingTop: 2,
		fontFamily: FONTS.RALEWAY,
		color: COLORS.TEXT_BEIGE,
		fontWeight: "bold"
	}
});