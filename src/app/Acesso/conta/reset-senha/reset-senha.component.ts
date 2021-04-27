import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from 'ngx-custom-validators';
import { ActivatedRoute } from '@angular/router';
import { FormBaseComponent } from 'src/app/base-components/form-base.component';
import { Usuario } from '../../autenticacao/models/Usuario';
import { ContaService } from '../services/conta.service';
import { ResetSenha } from '../models/reset-senha';

@Component({
  selector: 'app-reset-senha',
  templateUrl: './reset-senha.component.html',
  styleUrls: ['./reset-senha.component.css']
})
export class ResetSenhaComponent extends FormBaseComponent implements OnInit, AfterViewInit {

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];
  
  errors: any[] = [];
  resetForm: FormGroup;
  resetSenha: ResetSenha = new ResetSenha();
  usuario: Usuario;
  
  constructor(private activatedRouteoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private contaService: ContaService) {

    super();

      this.validationMessages = {
        senha: {
          required: 'Informe a senha',
          rangeLength: 'A senha deve possuir entre 6 e 15 caracteres'
        },
        senhaConfirm: {
          required: 'Informe a senha novamente',
          rangeLength: 'A senha deve possuir entre 6 e 15 caracteres',
          equalTo: 'As senhas não conferem'
        }
      };
  
      super.configurarMensagensValidacaoBase(this.validationMessages);

   }

  ngOnInit() {

    let senha = new FormControl('', [Validators.required/*, CustomValidators.rangeLength([6, 15])*/]);
    let senhaConfirm = new FormControl('', [Validators.required, /*CustomValidators.rangeLength([6, 15]), CustomValidators.equalTo(senha)*/]);
  
      this.resetForm = this.fb.group({
        senha: senha,
        senhaConfirm: senhaConfirm
      });

      this.resetSenha.userId = this.activatedRouteoute.snapshot.queryParams['userId'];
  
      this.resetSenha.token = this.activatedRouteoute.snapshot.queryParams['token'];
  
      
  }

  ngAfterViewInit(): void {
    super.configurarValidacaoFormularioBase(this.formInputElements, this.resetForm);
  }

  mudarSenha() {
    if (this.resetForm.dirty && this.resetForm.valid) {
      this.errors = [];

      this.contaService.resetSenha(this.resetSenha)
        .subscribe(
          sucesso => { this.processarSucesso(sucesso) },
          falha => { this.processarFalha(falha) }
        );

      this.mudancasNaoSalvas = false;
    }
  }

  processarSucesso(response: any) {
    this.resetForm.reset();
    this.errors = [];

    this.router.navigate(['/login']);
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
