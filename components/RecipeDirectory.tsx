import {useNavigation} from '@react-navigation/native';
import { ScrollView, Image, Pressable, StyleSheet, Text, View } from 'react-native';

import FONTS from '../fonts';
import COLORS from '../colors';

import marg from '../recipes/margherita.json';
import teriyaki from '../recipes/chicken_teriyaki.json';

const image = require("../images/margFlatbread.png");
// import * as FileSystem from 'expo-file-system';


export const RecipeDirectory = () => {
	const navigation = useNavigation<any>();

	const images = {
		marg: require("../images/margFlatbread.png"),
		teriyaki: require("../images/chickenTeriyaki.png")
	}

	const items = [
		{
			name: marg.name,
			image: images[marg.nickname]
		},
		{
			name: teriyaki.name,
			image: images[teriyaki.nickname]
		}
	];

	return (
		<ScrollView style={{
			paddingTop: 75,
			paddingHorizontal: 20,
			backgroundColor: COLORS.BACKGROUND_BEIGE
		}}>
			<View style={styles.container}>
				{items.map((item) => (
					<Pressable
						style={styles.recipeGroup}
						onPress={() =>
							navigation.navigate('Recipe', {recipeObj: marg, image})
						}
						key={item.name}
					>
						<Image style={styles.image} source={item.image} />
						<Text style={styles.recipeText}>{item.name}</Text>
					</Pressable>
				))}
			</View>
		</ScrollView>
	)
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	recipeGroup: {
		width: "47%"
	},
	image: {
		width: "100%",
		height: 110,
		borderRadius: 30,
	},
	recipeText: {
		color: COLORS.DARK_BLUE,
		fontFamily: FONTS.KOULEN,
		fontSize: 20
	}
});