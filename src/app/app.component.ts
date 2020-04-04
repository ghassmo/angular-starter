import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngconf';
 
  isDarkMode = false;
  subr: Subscription;
  
  constructor(private themeSr: ThemeService) { }

  ngOnInit(): void {
    this.subr = this.themeSr.isDarkMode.subscribe((v)=>{
      this.isDarkMode = v;
    })
  }
 
  ngOnDestroy(): void {
    this.subr.unsubscribe();
  } 
}
