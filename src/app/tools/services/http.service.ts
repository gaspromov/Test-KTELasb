import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { req } from '../interfaces/req-map';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private url = environment.apiUrl;
  
  constructor(
    private http: HttpClient
  ) { }



  request( reqParams: req, body: any = '', urlParam: string = '', urlQuery: string = '' ): Observable<any>{
    let reqUrl = this.url + reqParams.url;

    reqUrl = reqUrl.replace( ':param', urlParam ) + urlQuery;

    switch ( reqParams.method ){
      case "POST": return this.postHttp( reqUrl, body );
      case "GET": return this.getHttp( reqUrl );
      default: return throwError({ message: 'Method is undefined' })
    }
  }

  private postHttp( url: string, data: Record< string, any > ){
    return this.http.post( url, data );
  }

  private getHttp( url: string ){
    return this.http.get( url );
  }

}
