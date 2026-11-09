import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Recipe } from './components/Recipe';
import { RecipeDirectory } from './components/RecipeDirectory';

const Stack = createNativeStackNavigator();
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
					headerShown: false
				}}
			>
				<Stack.Screen name="RecipeDirectory" component={RecipeDirectory} />
				<Stack.Screen name="Recipe" component={Recipe} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}