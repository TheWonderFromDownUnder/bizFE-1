import jsonData from "../assets/businesses.json";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable( {
  providedIn: "root",
})
export class DataService {

  pageSize: number = 4;

  constructor(private http: HttpClient) {}

  getBusiness(id: any) {
    let dataToReturn: any[] = [];
    jsonData.forEach( function(business) {
        if (business['_id']['$oid'] == id) {
            dataToReturn.push( business );
        }
    })
    return dataToReturn;
  }

  getBusinesses(page: number) {
    let pageStart = (page - 1) * this.pageSize;
    let pageEnd = pageStart + this.pageSize;
    return jsonData.slice(pageStart, pageEnd);
  }

  getLastPageNumber() {
    return Math.ceil( jsonData.length / this.pageSize);
  }

  getLoremIpsum(paragraphs: number): Observable<any> {

    let API_key = 'kTn9xnr9ooo7hJeQtben/A==S9t4CTzOBc3c8uQ2';
    return this.http.get<any>(
                     'https://api.api-ninjas.com/v1/' +
                     'loremipsum?paragraphs=' + paragraphs,
               { headers: { 'X-Api-Key': API_key } }
    );
  }
}
