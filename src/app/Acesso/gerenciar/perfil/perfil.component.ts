import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from 'ngx-custom-validators';
import { ActivatedRoute } from '@angular/router';
import { FormBaseComponent } from 'src/app/shared/base-components/form-base.component';
import { ToastrService } from 'ngx-toastr';
import { utilsBr } from 'js-brasil';
import { GerenciarService } from '../services/gerenciar.service';
import { Usuario } from '../models/Usuario';
import { StringUtils } from 'src/app/shared/utils/string-utils';
import { applySourceSpanToExpressionIfNeeded } from '@angular/compiler/src/output/output_ast';
import { CepConsulta } from '../models/CepConsulta';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent extends FormBaseComponent implements OnInit, AfterViewInit {

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

  errors: any[] = [];
  usuarioForm: FormGroup;
  usuario: Usuario;

  MASKS = utilsBr.MASKS;

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
      telefone: {
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
        required: 'Informe o rua',
      },
      numero: {
        required: 'Informe o Número',
      },
      complemento: {
        required: 'Informe a senha',
        rangeLength: 'A senha deve possuir entre 6 e 100 caracteres'
      },
      bairro: {
        required: 'Informe o Bairro',
      },
      cep: {
        required: 'Informe o CEP',
        cep: 'CEP em formato inválido',
        rangeLength: 'O CEP deve possuir 8 caracteres'
      },
      cidade: {
        required: 'Informe a Cidade',
      },
      estado: {
        required: 'Informe o Estado',
      }

    };

    super.configurarMensagensValidacaoBase(this.validationMessages);




  }

  ngOnInit() {

    this.usuarioForm = this.fb.group({
      nome: ['', [Validators.required]],
      telefone: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      data_nascimento: ['', [Validators.required]],
      rua: ['', [Validators.required]],
      numero: ['', [Validators.required]],
      complemento: ['', ],
      cep: ['', [Validators.required, CustomValidators.rangeLength([8, 8])]],
      bairro: ['', [Validators.required]],
      cidade: ['', [Validators.required]],
      estado: ['', [Validators.required]],
    });

    this.preencherForm();

  }

removedateTime(datetime)
{
  return datetime.substr(0, datetime.search("T"));
}

  preencherForm() {

    this.gerenciarService.obterUsuario().subscribe(
      sucesso => {

        this.usuarioForm.patchValue({
          nome: sucesso.nome,
          telefone: sucesso.telefone,
          cpf: sucesso.cpf,
          data_nascimento: this.removedateTime(sucesso.data_nascimento),
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


  buscarCep(cep: string) {

    cep = StringUtils.somenteNumeros(cep);
    if (cep.length < 8) return;

    this.gerenciarService.consultarCep(cep)
      .subscribe(
        cepRetorno => this.preencherEnderecoConsulta(cepRetorno),
        erro => this.errors.push(erro));
  }

  preencherEnderecoConsulta(cepConsulta: CepConsulta) {
    if (cepConsulta.logradouro) {

      this.usuarioForm.patchValue({
        rua: cepConsulta.logradouro,
        bairro: cepConsulta.bairro,
        cidade: cepConsulta.localidade,
        estado: cepConsulta.uf
      });

    }
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

    console.log("sucesso");
    this.toastr.success('Alerações feitas com sucesso', 'Sucesso');

  }

  processarFalha(fail: any) {
    this.errors = fail.error.errors;
  }


}
