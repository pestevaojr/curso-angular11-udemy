import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { HttpUtilService } from "src/app/shared";

@Injectable()
export class AdminGuard implements CanActivate {

    constructor(
        private httpUtil: HttpUtilService,
        private router: Router
    ) { }

    canActivate(): boolean {
        if (this.httpUtil.obterPerfil() === 'ROLE_ADMIN') {
            return true;
        }

        this.router.navigate(['/funcionario']);
        return false;
    }

}