import { Component } from '@angular/core';

interface Form {
  sex: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-demo';
  public formData: Form = {
    sex: '',
  };

  getData = () => {
    console.log(this.formData);
  };
}
