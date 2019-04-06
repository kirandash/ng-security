import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-security';
  harmfulCode = 'Some text here <script>alert("This is some really harmful code!")</script> <i>Some itallic text to check html</i>';
}
