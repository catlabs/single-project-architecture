import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-second-feature',
  template: `
    <p>
      second-feature works!
    </p>
  `,
  styles: [
  ]
})
export class SecondFeatureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
