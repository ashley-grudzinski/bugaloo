import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import marg from '../recipes/margherita.json';
// import CheckBox from 'react-native-check-box'
import { RecipeTable } from './RecipeTable'
import { RecipeList } from './RecipeList';
import {useState} from 'react';

export const Recipe = () => {
	const [showList, toggleListView] = useState(true);
	const image = require("../images/margFlatbread.png");
	const { name } = marg;
	const ingredientsList = convertIngredients(marg.ingredients);

	return (
		<View>
			<Text style={styles.title}>{name}</Text>
			<View>
				<Image style={styles.image} source={image} />
				<View style={styles.ingredientsTitle}>
					<Text style={{fontSize: 22}}>Ingredients</Text>
					<Pressable onPress={() => toggleListView(!showList)}>
						<Text>Press me!</Text>
					</Pressable>
				</View>
				{ showList && <RecipeList ingredients={ingredientsList}/> }
				{ !showList && <RecipeTable ingredients={ingredientsList}/> }
			</View>
		</View>
	)
}

const convertIngredients = (ingredients) => {
	return Object.keys(ingredients).map(ingredientName => ingredients[ingredientName]);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'pink',
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 36,
		fontFamily: "PlaywriteCUGuides-Regular",
		color: "#114B5F",
	},
	image: {
		width: "100%",
		height: 220,
		borderRadius: 30,
		marginBottom: 20
	},
	ingredientsTitle: {
		flexDirection: 'row',
		marginBottom: 10
	}
});