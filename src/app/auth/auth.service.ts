import { Injectable } from '@angular/core';

interface authData{
  userName: String;
  password: String;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
}
