import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding-demo',
  templateUrl: './data-binding-demo.component.html',
  styleUrl: './data-binding-demo.component.css'
})
export class DataBindingDemoComponent {
  // One-way binding (Interpolation)
  title: string = 'Angular Data Binding Demo';

  // One-way binding (Property binding)
  imageUrl: string = 'assets/fimg.jpg';

  // Two-way binding
  inputText: string = 'enter';

  // Event binding
  count: number = 0;

  incrementCount() {
    this.count++;
  }
}
