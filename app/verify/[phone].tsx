import { useLocalSearchParams } from 'expo-router'
import { useState, useEffect } from 'react'
import { Text, View } from 'react-native'
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

	return (
		<View>
			<Text>{phone}</Text>
		</View>
	)
}

export default PhoneNumberPage
