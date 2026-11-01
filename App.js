import { ScrollView, StyleSheet, View } from 'react-native';
import { Recipe } from './components/Recipe';
import { useFonts } from 'expo-font';
import COLORS from "./colors";

export default function App() {
	useFonts({
		'Koulen-Regular': require('./assets/fonts/Koulen-Regular.ttf'),
		'Lalezar-Regular': require('./assets/fonts/Lalezar-Regular.ttf'),
		'Raleway': require('./assets/fonts/Raleway-VariableFont_wght.ttf')
  });

	return (
		<ScrollView style={{
			paddingTop: 75,
			paddingHorizontal: 20,
			backgroundColor: COLORS.BACKGROUND_BEIGE
			}}>
			<View style={styles.containerWithin}>
				<Recipe />
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
