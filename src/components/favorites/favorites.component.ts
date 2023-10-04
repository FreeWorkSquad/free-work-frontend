import { Component, Input } from '@angular/core';

@Component({
  selector: 'freework-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {
  @Input()
  icon: string = "";
}
