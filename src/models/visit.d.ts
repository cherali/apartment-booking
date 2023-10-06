import type { Apartment } from './apartment'

export type VisitIdType = number

export interface Visit {
  id: VisitIdType
  apartment: Apartment
  visitDate: string
  note: string
  createdAt: string
}
