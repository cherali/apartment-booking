export type UserIdType = number // or string

export interface User {
	id: UserIdType
	email: string
	fullName: string
}