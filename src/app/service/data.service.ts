import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) {
   
   }

   getMusiquitaPro(){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCpfooFFgSOOkjMAGAjFOXk-_1V4lcjnkI8WKePg71oWyUloHQ-pMkid6LKYouGSRlVFJ96ZfAN27G9xhA'
    });
    
     return this.http.get('https://api.spotify.com/v1/browse/new-releases' , { headers });

     }

   }


