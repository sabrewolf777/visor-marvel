import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsumeService {

  constructor(private _http: HttpClient) { }

  private _hostPortalClienteService = `${environment.uri._hostPortalVisorService}`;


  private _getAllCharacters         = `${this._hostPortalClienteService}/characters/getAllCharacters`;

  private _getAllBitacoras         = `${this._hostPortalClienteService}/bitacoras/getAllBitacoras`;


  getLstPersonajes() : Observable<any> {
    return this._http
    .get(`${this._getAllCharacters}`,{responseType: 'json'})
    .pipe(catchError(this.handleError));
  }

  getBitacora() : Observable<any> {
    return this._http
    .get(`${this._getAllBitacoras}`,{responseType: 'json'})
    .pipe(catchError(this.handleError));
  }

  handleError(error: any) {
    console.log(error);
    return throwError(error || 'Server error');
  }

}
