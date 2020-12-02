import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-first-feature',
  template: `
    <p>
      first-feature works!
    </p>
    <button mat-flat-button color="secondary">Material button</button>
  `,
  styles: [
  ]
})
export class FirstFeatureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
