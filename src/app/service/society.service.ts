import { Injectable } from '@angular/core';
import { Society } from '../models/society.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class SocietyService {
  static data(data: any) {
    throw new Error('Method not implemented.');
  }
  societymodel: Society[] = [];

  constructor(private http: HttpClient) {}

  addSociety(data: Society) {
    return new Promise((resolve, reject) => {
      this.societymodel.push(data);
      resolve(true);

      this.http
        .post(environment.apiUrl + 'societies/create', data)
        .subscribe((res) => {
          console.log(res);
        });
    });
  }
}
