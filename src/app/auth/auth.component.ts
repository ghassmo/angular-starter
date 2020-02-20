import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ThemeService } from '../theme.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, OnDestroy {
  hide = true;
  isSignUp: boolean;
  isDarkMode: boolean;
  subr: Subscription;

  constructor(private themeSr: ThemeService,
    public dialogRef: MatDialogRef<AuthComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.subr = this.themeSr.isDarkMode.subscribe((v) => {
      this.isDarkMode = v;
    })
  }

  ngOnDestroy(): void {
    this.subr.unsubscribe();
  }


}
