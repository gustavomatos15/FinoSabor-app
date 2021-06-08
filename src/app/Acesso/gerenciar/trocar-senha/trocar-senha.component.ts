import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from 'ngx-custom-validators';
import { ActivatedRoute } from '@angular/router';
import { FormBaseComponent } from 'src/app/shared/base-components/form-base.component';
import { Registrar } from '../../autenticacao/models/Registrar';
import { ToastrService } from 'ngx-toastr';
import { MudarSenha } from '../models/MudarSenha';
import { GerenciarService } from '../services/gerenciar.service';
import { matchOtherValidator } from 'src/app/shared/utils/confirm-equal-validator.directive';

@Component({
  selector: 'app-trocar-senha',
  templateUrl: './trocar-senha.component.html',
  styleUrls: ['./trocar-senha.component.css']
})
export class TrocarSenhaComponent extends FormBaseComponent implements OnInit, AfterViewInit {

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

  errors: any[] = [];
  mudarSenhaForm: FormGroup;
  mudarSenha: MudarSenha = new MudarSenha();
  
  constructor(private activatedRouteoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private gerenciarService: GerenciarService) {

    super();

      this.validationMessages = {
        senhaAtual: {
          required: 'Informe a senha',
          rangeLength: 'A senha deve possuir entre 6 e 100 caracteres'
        },
        novaSenha: {
          required: 'Informe a senha',
          rangeLength: 'A senha deve possuir entre 6 e 100 caracteres'
        },
        novaSenhaConfirm: {
          required: 'Informe a senha novamente',
          rangeLength: 'A senha deve possuir entre 6 e 100 caracteres',
          equalTo: 'As senhas não conferem'
        }
      };
  
      super.configurarMensagensValidacaoBase(this.validationMessages);

   }

   ngOnInit() {

    this.mudarSenhaForm = this.fb.group({
      senhaAtual: ['', [Validators.required, CustomValidators.rangeLength([6, 100])]],
      novaSenha: ['', [Validators.required, CustomValidators.rangeLength([6, 100])]],
      novaSenhaConfirm: ['', [Validators.required, matchOtherValidator('novaSenha'), CustomValidators.rangeLength([6, 100])]],
    });    
    
  }

  ngAfterViewInit(): void {
    super.configurarValidacaoFormularioBase(this.formInputElements, this.mudarSenhaForm);
  }

  MudarSenha() {
    if (this.mudarSenhaForm.dirty && this.mudarSenhaForm.valid) {
      this.errors = [];
      this.mudarSenha = Object.assign({}, this.mudarSenha, this.mudarSenhaForm.value);

      this.gerenciarService.mudarSenha(this.mudarSenha)
        .subscribe(
          sucesso => { this.processarSucesso(sucesso) },
          falha => { this.processarFalha(falha) }
        );

      this.mudancasNaoSalvas = false;
    }
  }

  processarSucesso(response: any) {
    this.mudarSenhaForm.reset();
    this.errors = [];

    let toast = this.toastr.success('Senha alterada com Sucesso!, faça o login no sistema', 'Sucesso');
   
  }

  processarFalha(fail: any) {
    this.errors = fail.error.errors;
  }

}
