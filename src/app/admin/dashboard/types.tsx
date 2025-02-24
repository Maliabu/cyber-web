export type UserType = {
    id: number
    name: string
    password: string
    email: string
    token: string
    username: string
    profilePicture: string
    userType: string
    decInit: string
    isActive: boolean
    isLoggedIn: boolean
    lastLogin: Date
    createdAt: Date
    updatedAt: Date
}

export type EventType = {
    id: number
    title: string
    description: string
    link: string
    image: string
    startDate: Date
    endDate: Date
    createdAt: Date
    updatedAt: Date
}

export type ArticleType = {
    id: number
    title: string
    content: string
    link: string
    image: string
    writer: string
    createdAt: Date
    updatedAt: Date
}

export type EnrollmentType = {
    id: number
    courseId: number
    email: string
    createdAt: Date
    updatedAt: Date
}
export type subscriptionsType = {
    id: number
    email: string
    createdAt: Date
    updatedAt: Date
}
  
  export type messagesType = {
    id: number
    email: string
    message: string
    createdAt: Date
    updatedAt: Date
}
export type currencyType = {
    id: number
    code: string
    currency: string
    country: string
    country_code: string
    createdAt: Date
    updatedAt: Date
  }
  
  export type courseType = {
    id: number
    title: string
    description: string
    courseOutline: string
    image: string
    mentor: number
    startDate: Date
    endDate: Date
    currency: number
    amount: number
    createdAt: Date
    updatedAt: Date
  }