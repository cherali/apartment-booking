import type { ApartmentIdType } from './apartment'
import type { UserIdType } from './user'

export interface Visit {
  id: number
	apartId: ApartmentIdType
  userId: UserIdType
	visitDate: string
	note: string
	createdAt: string
}