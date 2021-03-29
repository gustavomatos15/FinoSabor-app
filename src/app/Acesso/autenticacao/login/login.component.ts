import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormBaseComponent } from 'src/app/base-components/form-base.component';
import { Usuario } from '../models/Usuario';
import { AutenticaoService } from '../services/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  extends FormBaseComponent implements OnInit, AfterViewInit  {

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];
  
  errors: any[]=[];
  loginForm:FormGroup;
  usuario: Usuario;

  constructor(private fb: FormBuilder,
    private authService: AutenticaoService,
    private router: Router) {

      super();

      this.validationMessages = {
        email: {
          required: 'Informe o e-mail',
          email: 'Email inválido'
        },
        senha: {
          required: 'Informe a senha',
          maxLength: 'A senha deve possuir entre 6 e 15 caracteres',
          minLength:'A senha deve possuir entre 6 e 15 caracteres'

        }
      };
  
      super.configurarMensagensValidacaoBase(this.validationMessages);
    }

    ngOnInit(): void {
  
      this.loginForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        senha: ['', [Validators.required, Validators.maxLength(100), Validators.minLength(2)]],
      });
    }

    ngAfterViewInit(): void {
      super.configurarValidacaoFormularioBase(this.formInputElements, this.loginForm);
    }

    login() {
      if (this.loginForm.dirty && this.loginForm.valid) {
        this.errors = [];
        this.usuario = Object.assign({}, this.usuario, this.loginForm.value);
  
        this.authService.login(this.usuario)
          .subscribe(
            sucesso => { this.processarSucesso(sucesso) },
            falha => { this.processarFalha(falha) }
          );
  
        this.mudancasNaoSalvas = false;
      }
    }
  
    processarSucesso(response: any) {
      this.loginForm.reset();
      this.errors = [];
  
      this.authService.LocalStorage.salvarDadosLocaisUsuario(response);
      this.router.navigate(['']);
      /*let toast = this.toastr.success('Registro realizado com Sucesso!', 'Bem vindo!!!');
      if (toast) {
        toast.onHidden.subscribe(() => {
          this.router.navigate(['']);
        });
      }*/
    }
  
    processarFalha(fail: any) {
      this.errors = fail.error.errors;
    }
}
