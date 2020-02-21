import { Component, OnInit, OnDestroy } from '@angular/core';
import { ThemeService } from '../theme.service';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { AuthComponent } from '../auth/auth.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  email: String;
  username: String;
  isDarkMode: boolean = false;
  constructor(private themeSr: ThemeService, public dialog: MatDialog) { }


  ngOnInit(): void {

  }
  onChangeMode() {
    this.isDarkMode = !this.isDarkMode;
    this.themeSr.isDarkMode.next(this.isDarkMode);
  }

  openDialog(): void {

    const dialogRef = this.dialog.open(AuthComponent, {
      width: '350px',
      data: null,
      panelClass: this.isDarkMode ? ["dark-theme"] : null,
    });
  }


}
