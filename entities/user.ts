export type BasicUserInfo = {
  avatarUrl: string
  displayName: string
  name: string
}

export type User = BasicUserInfo & {
  bio: string
  birthday: Date
  discord?: string
  email: string
  github?: string
  name: string
  twitter?: string
  website: string
}
