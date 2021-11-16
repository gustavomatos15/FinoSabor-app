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
import { cepconsulta } from '../models/CepConsulta';
import { MASKS, NgBrazilValidators } from 'ng-brazil';

@Component({
  selector: 'app-perfil-editar',
  templateUrl: './perfil-editar.component.html',
  styleUrls: ['./perfil-editar.component.css']
})
export class PerfilEditarComponent extends FormBaseComponent implements OnInit, AfterViewInit {

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

  errors: any[] = [];
  usuarioForm: FormGroup;
  usuario: Usuario;

  public MASKS = MASKS;

  constructor(private activatedRouteoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private gerenciarService: GerenciarService) {

    super();

    this.validationMessages = {
      nome: {
        required: 'Informe o nome',
        rangeLength: 'O nome deve possuir entre 4 e 100 caracteres'
      },
      telefone: {
        required: 'Informe o seu telefone',
        rangeLength: 'O telfone deve possuir entre 10 e 12 caracteres'
      },
      cpf: {
        required: 'Informe o seu CPF',
        rangeLength: 'O CPF deve possuir 11 caracteres',
        cpf: 'CPF em formato inválido'
      },
      data_nascimento: {
        required: 'Informe a data de nascimento',
        rangeLength: 'A senha deve possuir entre 6 e 100 caracteres'
      },
      rua: {
        required: 'Informe a rua',
      },
      numero: {
        required: 'Informe o Número',
      },
      complemento: {
        rangeLength: 'O complemento deve possuir entre 3 e 40 caracteres'
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
      nome: ['', [Validators.required, CustomValidators.rangeLength([4, 100])]],
      telefone: ['', [Validators.required, NgBrazilValidators.telefone]],
      cpf: ['', [Validators.required, NgBrazilValidators.cpf]],
      data_nascimento: ['', [Validators.required]],
      rua: ['', [Validators.required]],
      numero: ['', [Validators.required]],
      complemento: ['', ],
      cep: ['', [Validators.required, NgBrazilValidators.cep]],
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

  preencherEnderecoConsulta(cepConsulta: cepconsulta) {
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
    this.toastr.success('Alerações feitas com sucesso', 'Sucesso');

  }

  processarFalha(fail: any) {
    this.errors = fail.error.errors;
  }

}
