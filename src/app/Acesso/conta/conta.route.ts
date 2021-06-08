import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmarEmailComponent } from './confirmar-email/confirmar-email.component';
import { ContaAppComponent } from './conta.app.component';
import { EsqueceuSenhaComponent } from './esqueceu-senha/esqueceu-senha.component';
import { ResetSenhaComponent } from './reset-senha/reset-senha.component';

const contaRouterConfig: Routes = [
    {
        path: '', component: ContaAppComponent,
        children: [
            { path: 'confirmar-email', component: ConfirmarEmailComponent },
            { path: 'esqueceu-senha', component: EsqueceuSenhaComponent },
            { path: 'reset-senha', component: ResetSenhaComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(contaRouterConfig)
    ],
    exports: [RouterModule]
})
export class ContaRoutingModule { }