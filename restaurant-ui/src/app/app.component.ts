import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector:    'app-root',
  templateUrl: './app.component.html',
  styleUrls:   ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'restaurant-ui';
  public data: any[] = [];

  constructor(private http: HttpClient) {
  }

  public ngOnInit(): void {
    this.callStrapi();
  }

  public callStrapi(): void {
    this.http.get('http://localhost:1337/restaurants').subscribe(data => this.data = data as any[]);
  }
}
