import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Recipe } from './components/Recipe';
import { useFonts } from 'expo-font';

export default function App() {
	useFonts({
		'Koulen-Regular': require('./assets/fonts/Koulen-Regular.ttf'),
		'Lalezar-Regular': require('./assets/fonts/Lalezar-Regular.ttf')
  });

	return (
		<ScrollView style={{
			paddingTop: 75,
			paddingHorizontal: 20
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
		// backgroundColor: '#F8F7F4',
		backgroundColor: 'green',
		alignItems: 'center',
		justifyContent: 'center',
	},
	containerWithin: {
		height:  200,
		alignItems: 'top',
		justifyContent: 'top',
	}
});
