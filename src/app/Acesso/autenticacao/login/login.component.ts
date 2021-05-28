import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from 'ngx-custom-validators';
import { FormBaseComponent } from 'src/app/base-components/form-base.component';
import { Registrar } from '../models/Registrar';
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
  usuario: Registrar;

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
          rangeLength: 'A senha deve possuir entre 6 e 100 caracteres',

        }
      };
  
      super.configurarMensagensValidacaoBase(this.validationMessages);
    }

    ngOnInit(): void {
  
      this.loginForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        senha: ['', [Validators.required, CustomValidators.rangeLength([6, 100])]],
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
