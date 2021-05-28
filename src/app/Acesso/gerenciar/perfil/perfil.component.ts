import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from 'ngx-custom-validators';
import { ActivatedRoute } from '@angular/router';
import { FormBaseComponent } from 'src/app/base-components/form-base.component';
import { ToastrService } from 'ngx-toastr';
import { MudarSenha } from '../models/MudarSenha';
import { GerenciarService } from '../services/gerenciar.service';
import { Usuario } from '../models/Usuario';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent extends FormBaseComponent implements OnInit, AfterViewInit {

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

  errors: any[] = [];
  usuarioForm: FormGroup;
  usuario: Usuario ;

  constructor(private activatedRouteoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private gerenciarService: GerenciarService) {

    super();

      this.validationMessages = {
        nome: {
          required: 'Informe a senha',
          rangeLength: 'A senha deve possuir entre 6 e 100 caracteres'
        },
        email: {
          required: 'Informe a senha',
          rangeLength: 'A senha deve possuir entre 6 e 100 caracteres'
        },
        cpf: {
          required: 'Informe a senha novamente',
          rangeLength: 'A senha deve possuir entre 6 e 100 caracteres',
          equalTo: 'As senhas não conferem'
        },
        data_nascimento: {
          required: 'Informe a senha',
          rangeLength: 'A senha deve possuir entre 6 e 100 caracteres'
        },
        rua: {
          required: 'Informe a senha',
          rangeLength: 'A senha deve possuir entre 6 e 100 caracteres'
        },
        numero: {
          required: 'Informe a senha',
          rangeLength: 'A senha deve possuir entre 6 e 100 caracteres'
        },
        complemento: {
          required: 'Informe a senha',
          rangeLength: 'A senha deve possuir entre 6 e 100 caracteres'
        },
        cep: {
          required: 'Informe a senha',
          rangeLength: 'A senha deve possuir entre 6 e 100 caracteres'
        },
        bairro: {
          required: 'Informe a senha',
          rangeLength: 'A senha deve possuir entre 6 e 100 caracteres'
        },
        cidade: {
          required: 'Informe a senha',
          rangeLength: 'A senha deve possuir entre 6 e 100 caracteres'
        },
        estado: {
          required: 'Informe a senha',
          rangeLength: 'A senha deve possuir entre 6 e 100 caracteres'
        },

      };
  
      super.configurarMensagensValidacaoBase(this.validationMessages);

     
      

   }

   ngOnInit() {

    this.usuarioForm = this.fb.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      data_nascimento: ['', [Validators.required]],
      rua: ['', [Validators.required]],
      numero: ['', [Validators.required]],
      complemento: ['', [Validators.required]],
      cep: ['', [Validators.required]],
      bairro: ['', [Validators.required]],
      cidade: ['', [Validators.required]],
      estado: ['', [Validators.required]],
    });    
    
    this.preencherForm();

  }

  preencherForm() {

    this.gerenciarService.obterUsuario().subscribe(
      sucesso => {

        this.usuarioForm.patchValue({
          nome: sucesso.nome,
          email: sucesso.email,
          cpf: sucesso.cpf,
          data_nascimento: sucesso.data_nascimento,
          rua: sucesso.rua,
          numero: sucesso.numero,
          complemento: sucesso.complemento,
          cep: sucesso.cep,
          bairro: sucesso.bairro,
          cidade: sucesso.cidade,
          estado: sucesso.estado
        });

      }
    );
    

    // this.cnpj().setValidators([Validators.required, NgBrazilValidators.cnpj]);
   
  }

  ngAfterViewInit(): void {
    super.configurarValidacaoFormularioBase(this.formInputElements, this.usuarioForm);
  }

  EditarPerfil() {
    if (this.usuarioForm.dirty && this.usuarioForm.valid) {
      this.errors = [];
      this.usuario = Object.assign({}, this.usuario, this.usuarioForm.value);

      this.gerenciarService.editarPerfil(this.usuario)
        .subscribe(
          sucesso => { this.processarSucesso(sucesso) },
          falha => { this.processarFalha(falha) }
        );

      this.mudancasNaoSalvas = false;
    }
  }

  processarSucesso(response: any) {
    this.errors = [];

    let toast = this.toastr.success('Alerações feitas com sucesso', 'Sucesso');
   
  }

  processarFalha(fail: any) {
    this.errors = fail.error.errors;
  }


}
