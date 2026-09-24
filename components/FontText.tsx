import { Text } from 'react-native';
import FONTS from '../fonts';

export const FontText = (props) => {
	const style = { ...props.style, fontFamily: FONTS.LAZLEZAR };
	const { children } = props;
	return <Text style={style}>{children}</Text>
}