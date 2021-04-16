import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Login } from '../../models';
import { LoginService } from '../../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private service: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.gerarForm();
  }

  gerarForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  logar() {
    if (this.form.invalid) {
      this.snackBar.open(
        "Dados inválidos", "Erro", { duration: 5000 }
      );
      return;
    }

    const login: Login = this.form.value;

    this.service.logar(login)
    .subscribe(
      data => {
        localStorage['token'] = data['data']['token'];
        const usuarioData = JSON.parse(
          atob(data['data']['token'].split('.')[1])
        );
        if (usuarioData['role'] == 'ROLE_ADMIN') {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/funcionario']);
        }
      },
      err => {
        console.log(JSON.stringify(err));
        let msg: string = 'Tente novamente em instantes.';
        if (err['status'] == 401) {
          msg = 'Email/senha inválido(s).';
        }
        this.snackBar.open(msg, 'Erro', { duration: 5000 });
      }
    );

  }
}
