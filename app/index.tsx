import { View, Text, StyleSheet } from 'react-native'

const Page = () => {
	return (
		<View style={styles.container}>
			<Text>First Page</Text>
		</View>
	)
}

export default Page

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
})
