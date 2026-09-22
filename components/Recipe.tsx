import { Image, StyleSheet, Text, View } from 'react-native';
import marg from '../recipes/margherita.json';
import CheckBox from 'react-native-check-box'
import {useState} from 'react';

type Ingredient = {
	quantity: Number,
	unit: String,
	displayName: String
}

const convertIngredients = (ingredients) => {
	return Object.keys(ingredients).map(ingredientName => ingredients[ingredientName]);
}

export const Recipe = () => {
	const [isChecked, setIsChecked] = useState(true);
	const image = require("../images/margFlatbread.png");
	const { name } = marg;

	const renderItem = (item: Ingredient) => {
		const { quantity, displayName, unit } = item;
		const displayQuantity = typeof quantity !== "string" ? "" : `${quantity} `;
		return (
			<View>
				<CheckBox
					rightText={`${displayQuantity}${displayName} ${unit ?? ""}`}
					onClick={() => setIsChecked(!isChecked)}
			 		isChecked={isChecked}
				/>
			</View>
		)
	};

	return (
		<View>
			<Text style={styles.title}>{name}</Text>
			<View style={{ height: 220 }}>
				<Image style={styles.image} source={image} />
				{
					convertIngredients(marg.ingredients).map(item => renderItem(item))
				}
			</View>
		</View>
	)
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
	}
});