import { StyleSheet, View, Text } from 'react-native';
import { CheckBox } from './Checkbox';
import { Ingredient } from './types/Recipe';
import uuid from 'react-native-uuid';

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


export const RecipeList = (props) => {
	const {ingredients} = props;
	return (
		<View>
			{
				ingredients.map(item => renderItem(item))
			}
		</View>
	);
}

const styles = StyleSheet.create({
	ingredientListItem: {
		flexDirection: 'row',
		marginBottom: 5
	}
});