export class LocalStorageUtils {

    public obterUsuario() {
        return JSON.parse(localStorage.getItem('SistemaERP.user'));
    }

    public salvarDadosLocaisUsuario(response: any) {
        this.salvarTokenUsuario(response.accessToken);
        this.salvarUsuario(response.usuarioToken);
    }

    public limparDadosLocaisUsuario() {
        localStorage.removeItem('SistemaERP.token');
        localStorage.removeItem('SistemaERP.user');
    }

    public obterTokenUsuario(): string {
        return localStorage.getItem('SistemaERP.token');
    }

    public salvarTokenUsuario(token: string) {
        localStorage.setItem('SistemaERP.token', token);
    }

    public salvarUsuario(user: string) {
        localStorage.setItem('SistemaERP.user', JSON.stringify(user));
    }

}
