import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ThemeService } from '../theme.service';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { validateBasis } from '@angular/flex-layout';
import { authData } from './authData';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, OnDestroy {
  hide = true;
  isSignUp: boolean = false;
  isDarkMode: boolean;
  subr: Subscription;
  
  isNotMatch: boolean = false;


  authForm: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(6)]),
    cpassword: new FormControl("", [Validators.minLength(6),]),
  }, );

  constructor(private themeSr: ThemeService,
    public dialogRef: MatDialogRef<AuthComponent>) { }

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

  checkPass(): boolean {
    if (this.authForm.get("password").value === this.authForm.get("cpassword").value) {
      return true;
    }
    return false;
  }

  onSubmit() {
    if (this.isSignUp) {
      if (!this.checkPass()) { 
        this.isNotMatch = true;
        return;
       }
    }
    this.onNoClick();
  }


}
