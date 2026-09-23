import { Image, Pressable, StyleSheet, View } from 'react-native';
import {useState} from 'react';

export const CheckBox = (props) => {
	const [isChecked, setIsChecked] = useState(false);
	const uncheckedImage = require("../images/unchecked.png");
	const checkedImage = require("../images/checked.png")

	return (
		<View style={props.style}>
			<Pressable onPress={() => setIsChecked(!isChecked)}>
				<Image
					style={styles.checkbox}
					source={isChecked ? checkedImage : uncheckedImage}
				/>
			</Pressable>
		</View>
	)
}

const styles = StyleSheet.create({
	checkbox: {
		width: 20,
		height: 20
	}
});