import Colors from '@/constants/Colors'
import { Stack, useLocalSearchParams } from 'expo-router'
import { useState, useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {
	CodeField,
	Cursor,
	useBlurOnFulfill,
	useClearByFocusCell
} from 'react-native-confirmation-code-field'

const PhoneNumberPage = () => {
	const { phone, signin } = useLocalSearchParams<{
		phone: string
		signin: string
	}>()
	const [code, setCode] = useState('')

	useEffect(() => {
		if (code.length === 6) {
			console.log('Code', code)
			// TODO: Verify code
		}
	}, [code])

	const verifyCode = async () => {}

	const verifySignIn = async () => {}

	const resendCode = async () => {}

	return (
		<View style={styles.container}>
			<Stack.Screen options={{ headerTitle: phone }} />
			<Text style={styles.legal}>
				We have sent you an SMS with a code to the number above.
			</Text>
			<Text style={styles.legal}>
				To complete your phone number verification, please enter the
				6-digit activation code.
			</Text>

			<TouchableOpacity style={styles.button} onPress={verifyCode}>
				<Text style={styles.buttonText}>Verify Button</Text>
			</TouchableOpacity>
		</View>
	)
}

export default PhoneNumberPage

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		alignItems: 'center',
		backgroundColor: Colors.background,
		gap: 20
	},
	loading: {
		backgroundColor: 'rgba(0,0,0,0.5)',
		alignItems: 'center',
		justifyContent: 'center'
	},
	legal: {
		fontSize: 14,
		textAlign: 'center',
		color: '#000'
	},
	button: {
		width: '100%',
		alignItems: 'center'
	},
	buttonText: {
		color: Colors.primary,
		fontSize: 18
	},
	links: {
		color: Colors.primary
	}
})
