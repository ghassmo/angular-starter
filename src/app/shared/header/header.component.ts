import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ThemeService } from '../../theme.service';
import { AuthDialogComponent } from '../../auth/auth-dialog/auth-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isDarkMode: boolean = false;
  constructor(private themeSr: ThemeService, public dialog: MatDialog) { }


  ngOnInit(): void {

  }
  onChangeMode() {
    this.isDarkMode = !this.isDarkMode;
    this.themeSr.isDarkMode.next(this.isDarkMode);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AuthDialogComponent, {
      width: '350px',
      data: null,
      panelClass: this.isDarkMode ? ["dark-theme"] : null,
    });
  }


}
