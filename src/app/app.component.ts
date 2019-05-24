import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
 
export class repos {
    id: string;
    name: string;
    html_url: string;
    description: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'httpInterceptor4';

  userName = 'tektutorialshub';
  repos: repos[];
  errorMessage = '';

  constructor(private httpClient: HttpClient) {
  }

  public getRepos() {
      this.errorMessage = '';

      return this.httpClient.get<repos[]>('https://api.github.com/users/' + this.userName + '/repos')
          .subscribe(
              (response) => {
                  this.repos = response;
                  },
              (error) => {
                      this.errorMessage = error.message; 

                      
                  }
          )

          
  }

  
}
