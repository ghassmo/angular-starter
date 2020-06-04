import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ThemeService } from 'src/app/theme.service';

@Component({
  selector: 'app-auth-content',
  templateUrl: './auth-content.component.html',
  styleUrls: ['./auth-content.component.scss']
})
export class AuthContentComponent implements OnInit, OnDestroy {
  hide = true;
  isSignUp: boolean = false;
  isDarkMode: boolean;
  subr: Subscription;

  isNotMatch: boolean = false;

  authForm: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(6)]),
  });;

  constructor(private themeSr: ThemeService) { }

  ngOnInit(): void {
    this.subr = this.themeSr.isDarkMode.subscribe((v) => {
      this.isDarkMode = v;
    })
  }

  ngOnDestroy(): void {
    this.subr.unsubscribe();
  }

  changeMode(): void {
    this.isSignUp = !this.isSignUp;
    if (this.isSignUp) {
      this.authForm = new FormGroup({
        email: new FormControl("", [Validators.required, Validators.email]),
        password: new FormControl("", [Validators.required, Validators.minLength(6)]),
        cpassword: new FormControl("", [Validators.minLength(6), Validators.required]),
      });
    }
    else {
      this.authForm = new FormGroup({
        email: new FormControl("", [Validators.required, Validators.email]),
        password: new FormControl("", [Validators.required, Validators.minLength(6)]),
      });
    }
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
    } else {
      // login mode
    }
  }
}
