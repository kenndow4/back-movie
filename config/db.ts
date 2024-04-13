import mongoose from 'mongoose';
import 'dotenv/config'

export const db = async () => {
	try {
		if (!process.env.DATABASE_URL) {
			console.log(['DATABASE_URL not found'])
		}
		await mongoose.connect(process.env.DATABASE_URL as string)
		console.log(['DATABASE CONNECTED'])
	} catch (e) {
		console.log('DATABASE ERROR: ', e)
	}
}