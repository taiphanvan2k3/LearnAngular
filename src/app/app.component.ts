import { Component, OnInit } from '@angular/core';
import { Dog, DogService } from './data-type-example';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  ngOnInit(): void {
    const dogService = new DogService();
    const dog = dogService.findOne() ?? new Dog();
    dog.makeSound();
  }
}
