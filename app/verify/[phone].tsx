import { useLocalSearchParams } from 'expo-router'
import { useState } from 'react'
import { Text, View } from 'react-native'

const PhoneNumberPage = () => {
	const { phone, signin } = useLocalSearchParams<{ phone: string, signin: string }>()
    const [code, setCode] = useState('')

	return (
		<View>
			<Text>{phone}</Text>
		</View>
	)
}

export default PhoneNumberPage
