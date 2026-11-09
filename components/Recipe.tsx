import { ScrollView, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { RecipeTable } from './RecipeTable'
import { RecipeList } from './RecipeList';
// import { RecipeProps } from './types/Recipe';
import {useState} from 'react';
import FONTS from '../fonts';
import COLORS from '../colors';

export const Recipe = ({ route }) => {
	const { recipeObj, image } = route.params;

	const [showList, toggleListView] = useState(true);
	const { name, recipe } = recipeObj;
	const ingredientsList = convertIngredients(recipeObj.ingredients);

	return (
		<ScrollView style={{
			paddingTop: 75,
			paddingHorizontal: 20,
			backgroundColor: COLORS.BACKGROUND_BEIGE
		}}>
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
						<View
							style={{flexDirection: "row"}}
							key={item.description}
						>
							<Text style={styles.stepNumbers}>{index + 1}</Text>
							<Text style={styles.description}>{item.description}</Text>
						</View>
					))}
				</View>
			</View>
		</ScrollView>
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