import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {AuthService} from "../service/auth.service";
import {Observable} from "rxjs";

@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const exclude = 'api/token'
    if(req.url.search(exclude) === -1){
      const token = this.auth.getToken();
      if(token !== null){
        req = req.clone({headers: req.headers.append('Authorization', token)});
      }
    }
    return next.handle(req);
  }


}
