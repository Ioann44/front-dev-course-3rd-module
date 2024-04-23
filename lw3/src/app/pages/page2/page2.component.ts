import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.css'
})
export class Page2Component {
  parameter = "";

  constructor(private activateRouter: ActivatedRoute, private router: Router) {
    this.parameter = activateRouter.snapshot.params["parameter"];
  }

  goMain() {
    this.router.navigateByUrl('/');
  }
}
