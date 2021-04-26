import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from 'ngx-custom-validators';
import { FormBaseComponent } from 'src/app/base-components/form-base.component';
import { ContaService } from '../services/conta.service';

@Component({
  selector: 'app-esqueceu-senha',
  templateUrl: './esqueceu-senha.component.html',
  styleUrls: ['./esqueceu-senha.component.css']
})
export class EsqueceuSenhaComponent extends FormBaseComponent implements OnInit, AfterViewInit{

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

  errors: any[] = [];
  email: string;
  esqueceuSenhaForm: FormGroup;
  
  constructor(private fb: FormBuilder,
    private contaService: ContaService) { 

      super();

      this.validationMessages = {
        email: {
          required: 'Informe o e-mail',
          email: 'Email inválido'
        }
      };
      super.configurarMensagensValidacaoBase(this.validationMessages);
    }

    ngAfterViewInit(): void {
      super.configurarValidacaoFormularioBase(this.formInputElements, this.esqueceuSenhaForm);
    }

  ngOnInit() {

    this.esqueceuSenhaForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
      
    });
  }
  public esqueceuSenha(){
    this.errors = [];
    this.contaService.esqueceSenha(this.email)
        .subscribe(
          sucesso => { this.processarSucesso(sucesso) },
          falha => { this.processarFalha(falha) }
        );
  }

  processarSucesso(response: any) {

    // email enviado com sucesso
  }

  processarFalha(fail: any) {
    this.errors = fail.error.errors;
    // this.toastr.error('Ocorreu um erro!', 'Opa :(');
  }

}
