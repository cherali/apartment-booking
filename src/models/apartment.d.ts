import type { UserIdType } from './user'

export type ApartmentIdType = number

export interface Apartment {
	id: ApartmentIdType
  userId: UserIdType
  title: string
  price: number
  createdAt: string
}
