type LoginFormData = { 
  email: string | undefined,
  password: string | undefined,
}

type RegisterFormData = { 
    email: string | undefined,
    password: string | undefined,
    repeatPassword?: string | undefined
  }
  

export { LoginFormData as LoginForm, RegisterFormData as RegisterForm }