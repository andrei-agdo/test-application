import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'aplicacao-teste';

  constructor(private router: Router, private route: ActivatedRoute) {}

  gotoPage1() {
    this.router.navigate([{ outlets: { page1: ['page1'] } }], {
      relativeTo: this.route.parent,
      skipLocationChange: true,
    });
  }
  gotoPage2() {
    this.router.navigate([{ outlets: { page2: ['page2'] } }], {
      relativeTo: this.route.parent,
      skipLocationChange: true,
    });
  }
  gotoPage3() {
    this.router.navigate([{ outlets: { page1: ['page2'] } }], {
      relativeTo: this.route.parent,
      skipLocationChange: true,
    });
  }
  gotoPage4() {
    this.router.navigate([{ outlets: { page2: ['page1'] } }], {
      relativeTo: this.route.parent,
      skipLocationChange: true,
    });
  }
}
