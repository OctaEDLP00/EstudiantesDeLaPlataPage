export interface Partner {
  fullName: string
  name: string
  lastName: string
  nroPartner: number | string
  antique: {
    years: number
    months: number
  }
  partnerType: 'vitalicio' | 'honorario' | 'activos' | string
  partnerImg: string
  dni: number
  email: string
  nroPhone: string | number
  street: string
  birthday: string
}
