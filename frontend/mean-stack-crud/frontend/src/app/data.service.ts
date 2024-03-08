import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  backendUrl = 'http://localhost:3000/';

  getDataFromServer() {
    return this.http.get(this.backendUrl + 'usres', {
      responseType: 'json',
    });
  }

  submitDataToServer(data: any) {
    return this.http.post(this.backendUrl + 'saveData', data, {
      responseType: 'json',
    });
  }

  deleteDataFromServer(data: any) {
    return this.http.post(this.backendUrl + 'deleteData', data, {
      responseType: 'json',
    });
  }

  UpdateDataToServer(data: any) {
    return this.http.post(this.backendUrl + 'update', data, {
      responseType: 'json',
    });
  }
}
