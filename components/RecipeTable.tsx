import { StyleSheet, View, Text } from 'react-native';
import { CheckBox } from './Checkbox';
import { Ingredient } from './types/Recipe';
import uuid from 'react-native-uuid';

const renderItem = (item: Ingredient) => {
	const { quantity, displayName, unit } = item;
	const displayQuantity = typeof quantity !== "number" ? "" : `${quantity} `;
	return (
		<View key={uuid.v4()} style={styles.ingredientListItem}>
			<CheckBox style={{ flex: 1, ...styles.rowItem }} />
			<Text style={{ flex: 1, ...styles.rowItem }}>{displayQuantity}</Text>
			<Text style={{ flex: 4, ...styles.rowItem }}>{displayName}</Text>
			<Text style={{ flex: 4, ...styles.rowItem  }}>{unit}</Text>
		</View>
	)
};

export const RecipeTable = (props) => {
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
		alignItems: 'flex-start',
	},
	rowItem: {
		borderWidth: 1,
		fontSize: 16,
		paddingHorizontal: 2,
		paddingVertical: 3
	}
});
