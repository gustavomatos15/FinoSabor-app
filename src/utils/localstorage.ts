export class LocalStorageUtils {

    public obterUsuario() {
        return JSON.parse(localStorage.getItem('Sistema.user'));
    }

    public salvarDadosLocaisUsuario(response: any) {
        this.salvarTokenUsuario(response.accessToken);
        this.salvarUsuario(response);
    }

    public limparDadosLocaisUsuario() {
        localStorage.removeItem('Sistema.token');
        localStorage.removeItem('Sistema.user');
    }

    public obterTokenUsuario(): string {
        return localStorage.getItem('Sistema.token');
    }

    public salvarTokenUsuario(token: string) {
        localStorage.setItem('Sistema.token', token);
    }

    public salvarUsuario(user: string) {
        localStorage.setItem('Sistema.user', JSON.stringify(user));
    }

}
