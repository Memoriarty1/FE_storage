export interface LoginFormDTO {
  email: string;
  password: string;
}

export interface RegistrationFormDTO {
  email: string;
  password: string;
  fullName: string;
}

export interface LoginResponseDTO {
  token: string
}
export interface getAuthUserResponseDTO {
  token: string
}