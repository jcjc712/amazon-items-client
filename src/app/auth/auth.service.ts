import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {AppService} from "../app.service";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import {Router} from "@angular/router";
import {LoadingPageService} from "../tools/loading-page/loading-page.service";

@Injectable()
export class AuthService {
    private token: string = null;
    constructor(private http: Http,
                private appService: AppService,
                private router: Router,
                private loadingPage: LoadingPageService,
                ){
    }

    signup(username: string, email: string, password: string){
        return this.http.post(this.appService.getServerDomain()+'/api/user/signup',
            {name: username, email: email, password: password},
            {headers:
                new Headers({'Accept':'application/json','Content-Type':'application/json'}),
            })
            .do(
                (response) => {
                }
            );
    }

    signin(email: string, password: string){
        return this.http.post(this.appService.getServerDomain()+'/oauth/token',
            {
                grant_type: 'password',
                client_id: 1,
                client_secret: this.appService.getClientSecret(),
                username: email,
                password: password,
                scope: ''
            },
            {headers: new Headers({'Accept':'application/json','Content-Type':'application/json'})})
            .map(
                (response: Response) => {
                    const token = response.json();
                    return {token: token, decoded: JSON.stringify(token)};
                }
            )
            .do(
                (tokenData) => {
                    localStorage.setItem('token', tokenData.decoded);
                    /*Get token*/
                    this.token = 'Bearer ' + tokenData.token.access_token;
                    this.router.navigate(["/wishlist"]);
                }
            );
    }

    getToke(){
        if(localStorage.getItem('token')){
            this.token = 'Bearer ' + JSON.parse(localStorage.getItem('token')).access_token;
        }
        return this.token;
    }

    isAuthenticated(){
        return this.token != null;
    }

    logout(){
        this.loadingPage.callComponentMethod(true);
        this.http.post(this.appService.getServerDomain()+'/api/user/logout',
            {},
            {headers: new Headers({'Accept':'application/json','Content-Type':'application/json','Authorization': this.token})})
            .subscribe(
                (respose) => {
                    localStorage.removeItem('token');
                    this.token = null;
                    this.loadingPage.callComponentMethod(false);
                    this.router.navigate(["/"]);
                    console.log(respose);
                },
                (error) => {
                    this.loadingPage.callComponentMethod(false);
                    console.log(error);
                }
            );
    }

    activation(token: string){
        return this.http.post(this.appService.getServerDomain()+'/api/user/activation',
            {token: token},
            {headers: new Headers({'Accept':'application/json','Content-Type':'application/json'})})
            .map(
                (response: Response) => {
                    const token = response.json();
                    return {token: token, decoded: JSON.stringify(token)};
                }
            )
            .do(
                (tokenData) => {
                    localStorage.setItem('token', tokenData.decoded);
                    /*Get token*/
                    this.token = 'Bearer ' + tokenData.token.access_token;
                    console.log('token:'+this.token);
                    //this.router.navigate(["/"]);
                }
            );
    }
}