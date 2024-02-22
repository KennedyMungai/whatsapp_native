import welcomeImage from '@/assets/images/welcome.png'
import Colors from '@/constants/Colors'
import { Image, StyleSheet, Text, View } from 'react-native'

const welcome_image = Image.resolveAssetSource(welcomeImage).uri

const Page = () => {
	return (
		<View style={styles.container}>
			<Image source={{ uri: welcome_image }} style={styles.welcome} />
			<Text style={styles.headline}>Welcome to WhatsApp Native</Text>
		</View>
	)
}

export default Page

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff'
	},
	welcome: {
		width: '100%',
		height: 300,
		marginBottom: 80
	},
	headline: {
		fontSize: 24,
		fontWeight: 'bold',
		marginVertical: 20
	},
	description: {},
	links: {
		color: Colors.gray
	}
})
