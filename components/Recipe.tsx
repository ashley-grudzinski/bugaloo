import { Image, StyleSheet, Text, View } from 'react-native';
import marg from '../recipes/margherita.json';
// import CheckBox from 'react-native-check-box'
import { CheckBox } from './Checkbox';
import {useState} from 'react';
import uuid from 'react-native-uuid';

type Ingredient = {
	quantity: number,
	unit: string,
	displayName: string
}

const convertIngredients = (ingredients) => {
	return Object.keys(ingredients).map(ingredientName => ingredients[ingredientName]);
}

const renderItem = (item: Ingredient) => {
	const { quantity, displayName, unit } = item;
	const displayQuantity = typeof quantity !== "number" ? "" : `${quantity} `;
	return (
		<View key={uuid.v4()} style={styles.ingredientListItem}>
			<CheckBox style={{ marginRight: 7 }}/>
			<Text>{`${displayQuantity}${displayName} ${unit ?? ""}`}</Text>
		</View>
	)
};

export const Recipe = () => {
	const image = require("../images/margFlatbread.png");
	const { name } = marg;

	return (
		<View>
			<Text style={styles.title}>{name}</Text>
			<View style={{ height: 220 }}>
				<Image style={styles.image} source={image} />
				<Text style={{fontSize: 22, marginBottom: 10}}>Ingredients</Text>
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
	},
	ingredientListItem: {
		flexDirection: 'row',
		marginBottom: 5
	}
});