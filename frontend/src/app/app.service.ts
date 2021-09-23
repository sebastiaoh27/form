import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserDto} from "../../../backend/dto/user.dto";


@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient) {

  }

  createQuestion(user: UserDto) {
    const headers = {'content-type':'application/json'};
    return this.http.post('/api/user',JSON.stringify(user), {headers});
  }



}
