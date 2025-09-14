import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  count: number = 0;

  handleCounter(val: string) {
    if (val == 'plus') {
      this.count++;
    } else if (val == 'minus') {
      if (this.count > 0)
        this.count--;
    } else {
      this.count = 0;
    }
  }

  handleEvent(event: Event) {
    console.log("Function called", event.type);
    console.log("value", (event.target as HTMLInputElement).value);
  }
}
