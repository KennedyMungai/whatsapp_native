import { useRouter } from 'expo-router'
import { useState } from 'react'
import { KeyboardAvoidingView, Linking, Platform, Text } from 'react-native'

const OTPPage = () => {
	const [loading, setLoading] = useState(false)
	const [phoneNumber, setPhoneNumber] = useState('')
	const router = useRouter()

	const keyboardVerticalOffset = Platform.OS === 'ios' ? 90 : 0

	const openLink = () => {
		Linking.openURL('https://www.wikipedia.org')
	}

	return (
		<KeyboardAvoidingView>
			<Text>OTPPage</Text>
		</KeyboardAvoidingView>
	)
}

export default OTPPage
