export interface User {
  name: string,
  email: string, 
  dob: Date,    
  location: Location,
  favoriteBooks: string[],
}

export interface Location {
  city?: string,
  country?: string
}
