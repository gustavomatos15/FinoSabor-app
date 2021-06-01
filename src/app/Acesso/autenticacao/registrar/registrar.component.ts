import { group } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from 'ngx-custom-validators';
import { ToastrService } from 'ngx-toastr';
import { FormBaseComponent } from 'src/app/shared/base-components/form-base.component';
import { matchOtherValidator } from 'src/app/shared/utils/confirm-equal-validator.directive';
import { Registrar } from '../models/Registrar';
import { AutenticaoService } from '../services/autenticacao.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent extends FormBaseComponent implements OnInit, AfterViewInit {

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];
  
  errors: any[] = [];
  cadastroForm: FormGroup;
  usuario: Registrar;

  constructor(private fb: FormBuilder,
    private toastr: ToastrService,
    private authService: AutenticaoService,
    private router: Router) {
      
      super();

      this.validationMessages = {
        email: {
          required: 'Informe o e-mail',
          email: 'Email inválido'
        },
        nome: {
          required: 'Informe o nome',
          rangeLength: 'O nome deve possuir entre 2 e 100 caracteres'
        },
        senha: {
          required: 'Informe a senha',
          rangeLength: 'A senha deve possuir entre 6 e 100 caracteres'
        },
        senhaConfirm: {
          required: 'Informe a senha novamente',
          rangeLength: 'A senha deve possuir entre 6 e 100 caracteres',
          equalTo: 'As senhas não conferem'
        }
      };
  
      super.configurarMensagensValidacaoBase(this.validationMessages);
    }
 
    ngOnInit(): void {

      this.cadastroForm = this.fb.group({

        email: ['', [Validators.required, Validators.email]],
        nome: ['', [Validators.required, CustomValidators.rangeLength([2, 60])]],
        senha: ['', [Validators.required, CustomValidators.rangeLength([6, 100])]],
        senhaConfirm: ['', [Validators.required, matchOtherValidator('senha'), CustomValidators.rangeLength([6, 100])]],
      });
    }

    ngAfterViewInit(): void {
      super.configurarValidacaoFormularioBase(this.formInputElements, this.cadastroForm);
    }

    adicionarConta() {
      if (this.cadastroForm.dirty && this.cadastroForm.valid) {
        this.errors = [];
        this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value);
  
        this.authService.registrarUsuario(this.usuario)
          .subscribe(
            sucesso => { this.processarSucesso(sucesso) },
            falha => { this.processarFalha(falha) }
          );
  
        this.mudancasNaoSalvas = false;
      }
    }
  
    processarSucesso(response: any) {
      this.cadastroForm.reset();
      this.errors = [];
  
      this.authService.LocalStorage.salvarDadosLocaisUsuario(response);

      let toast = this.toastr.success('Registro realizado com Sucesso!', 'Bem vindo!!!');
      if (toast) {
        toast.onHidden.subscribe(() => {
          this.router.navigate(['']);
        });
      }
    }
  
    processarFalha(fail: any) {
      this.errors = fail.error.errors;
    }

}
