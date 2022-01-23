import { Component } from '@angular/core';
import { Country } from './Country';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  countries: Country[] = [
    new Country("Shrekadonia", "English", "Flag3.jpg", "Shrek", ["green, orange, blue"]),
    new Country("Icantastan", "Icantaneese", "Flag1.png", "Jim", ["blue", "yellow"]),
    new Country("Roman Empire", "Latin", "Flag2.png", "Julius Caesar", ["red", "white"])
  ];
}
