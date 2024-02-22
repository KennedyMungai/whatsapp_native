import welcomeImage from '@/assets/images/welcome.png'
import { Image, StyleSheet, Text, View } from 'react-native'

const welcome_image = Image.resolveAssetSource(welcomeImage).uri

const Page = () => {
	return (
		<View style={styles.container}>
			<Image source={{ uri: welcome_image }} style={styles.welcome} />
			<Text>First Page</Text>
		</View>
	)
}

export default Page

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		justifyContent: 'center',
		alignItems: 'center'
	},
	welcome: {
		width: '100%',
		height: 300
	}
})
