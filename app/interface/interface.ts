
export interface PostCardProps {
  readonly image: string
  readonly productName: string
  readonly location: string
  readonly price: number | string
}

export interface UserType {
  readonly isLogged: boolean
  readonly signUp: boolean
  readonly data: {
    readonly tokenInfo : {
      readonly grantType? : string
      readonly accessToken : string
    }
    readonly userId : string
  }
}