import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  isDarkMode: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  
  constructor() { }
}
