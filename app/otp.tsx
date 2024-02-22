import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import {
	KeyboardAvoidingView,
	Linking,
	Platform,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from 'react-native'
import MaskInput from 'react-native-mask-input'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const OTPPage = () => {
	const [loading, setLoading] = useState(false)
	const [phoneNumber, setPhoneNumber] = useState('')
	const router = useRouter()

	const keyboardVerticalOffset = Platform.OS === 'ios' ? 90 : 0

	const { bottom } = useSafeAreaInsets()

	const openLink = () => {
		Linking.openURL('https://www.wikipedia.org')
	}

	const sendOTP = async () => {}

	const trySignIn = async () => {}

	return (
		<KeyboardAvoidingView style={{ flex: 1 }}>
			<View style={styles.container}>
				<Text style={styles.description}>
					WhatsApp will need to verify your account. Carrier charges
					may apply.
				</Text>
				<View style={styles.list}>
					<View style={styles.listItem}>
						<Text style={styles.listItemText}>Kenya</Text>
						<Ionicons
							name='chevron-forward'
							size={20}
							color={Colors.gray}
						/>
					</View>
					<View style={styles.separator} />
					<MaskInput
						value={phoneNumber}
						keyboardType='numeric'
						style={styles.input}
						onChangeText={(masked, unmasked) => {
							setPhoneNumber(masked)
						}}
						mask={[
							'(',
							'+',
							/\d/,
							/\d/,
							/\d/,
							')',
							'-',
							/\d/,
							/\d/,
							/\d/,
							'-',
							/\d/,
							/\d/,
							/\d/,
							'-',
							/\d/,
							/\d/,
							/\d/
						]}
					/>
				</View>
				<Text style={styles.legal}>
					Read out{' '}
					<Text style={styles.links} onPress={openLink}>
						Privacy Policy
					</Text>{' '}
					.{'Tap "Agree & Continue" to accept the '}
					<Text style={styles.links} onPress={openLink}>
						Terms of Service
					</Text>
				</Text>
				<View style={{ flex: 1 }} />
				<TouchableOpacity
					onPress={sendOTP}
					style={[
						styles.button,
						phoneNumber !== '' ? styles.enabled : null,
						{ marginBottom: bottom }
					]}
					disabled={phoneNumber === ''}
				>
					<Text
						style={[
							styles.buttonText,
							phoneNumber !== '' ? styles.enabled : null
						]}
					>
						Next
					</Text>
				</TouchableOpacity>
			</View>
		</KeyboardAvoidingView>
	)
}

export default OTPPage

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		padding: 20,
		backgroundColor: Colors.background,
		gap: 20
	},
	description: {
		fontSize: 14,
		color: Colors.gray
	},
	list: {
		backgroundColor: '#fff',
		width: '100%',
		borderRadius: 10,
		padding: 10
	},
	listItem: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 6,
		marginBottom: 10
	},
	listItemText: {
		fontSize: 18,
		color: Colors.primary
	},
	separator: {
		width: '100%',
		height: StyleSheet.hairlineWidth,
		backgroundColor: Colors.gray
	},
	legal: {
		fontSize: 12,
		textAlign: 'center',
		color: '#000'
	},
	links: {
		color: Colors.primary
	},
	button: {
		width: '100%',
		alignItems: 'center',
		backgroundColor: Colors.lightGray,
		padding: 10,
		borderRadius: 10
	},
	enabled: {
		backgroundColor: Colors.primary,
		color: '#fff'
	},
	buttonText: {
		color: Colors.gray,
		fontSize: 22,
		fontWeight: '500'
	},
	input: {
		backgroundColor: '#fff',
		width: '100%',
		fontSize: 20,
		padding: 6,
		marginTop: 10
	}
})
