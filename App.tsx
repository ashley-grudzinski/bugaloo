import { ScrollView, StyleSheet, View } from 'react-native';
import { Recipe } from './components/Recipe';
import { RecipeDirectory } from './components/RecipeDirectory';
import { useFonts } from 'expo-font';
import recipeObj from './recipes/margherita.json';
import COLORS from "./colors";
import {createStaticNavigation} from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const image = require("./images/margFlatbread.png");

const RootStack = createNativeStackNavigator({
	screens: {
		RecipeDirectory: {
			screen: RecipeDirectory,
		},
		Recipe: {
			screen: Recipe,
			options: { title: 'Welcome' },
		},
	},
	id: ''
});

const Stack = createNativeStackNavigator();

// const Navigation = createStaticNavigation(RootStack as any);

 export default function App() {
	useFonts({
		'Koulen-Regular': require('./assets/fonts/Koulen-Regular.ttf'),
		'Lalezar-Regular': require('./assets/fonts/Lalezar-Regular.ttf'),
		'Raleway': require('./assets/fonts/Raleway-VariableFont_wght.ttf')
  });

	return (
		<NavigationContainer>
			<Stack.Navigator 
				id="root_stack"
				screenOptions={{ 
					headerShown: false // Hides the automatic top header and back button globally
				}}
			>
				<Stack.Screen name="RecipeDirectory" component={RecipeDirectory} />
				<Stack.Screen name="Recipe" component={Recipe} />
			</Stack.Navigator>
		</NavigationContainer>
	)
	
	// return <Navigation />;
	// return (
	// 	<ScrollView style={{
	// 		paddingTop: 75,
	// 		paddingHorizontal: 20,
	// 		backgroundColor: COLORS.BACKGROUND_BEIGE
	// 		}}>
	// 		<View style={styles.containerWithin}>
	// 			{/* <Recipe recipeObj={recipeObj} image={image} /> */}
	// 			{/* <RecipeDirectory /> */}
	// 		</View>
	// 	</ScrollView>
	// );
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