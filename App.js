import { ScrollView, StyleSheet, View } from 'react-native';
import { Recipe } from './components/Recipe';
import { useFonts } from 'expo-font';
import marg from './recipes/margherita.json';
import COLORS from "./colors";

export default function App() {
	useFonts({
		'Koulen-Regular': require('./assets/fonts/Koulen-Regular.ttf'),
		'Lalezar-Regular': require('./assets/fonts/Lalezar-Regular.ttf'),
		'Raleway': require('./assets/fonts/Raleway-VariableFont_wght.ttf')
  });

	const image = require("./images/margFlatbread.png");
	const props = { marg, image };

	return (
		<ScrollView style={{
			paddingTop: 75,
			paddingHorizontal: 20,
			backgroundColor: COLORS.BACKGROUND_BEIGE
			}}>
			<View style={styles.containerWithin}>
				<Recipe props={props} />
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	wholePhone: {
		flex: 1,
		backgroundColor: 'pink',
		alignItems: 'center',
		justifyContent: 'center',
	},
	containerWithin: {
		alignItems: 'top',
		justifyContent: 'top',
		marginBottom: 40
	}
});
