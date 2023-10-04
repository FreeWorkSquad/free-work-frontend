import { Component, Input } from '@angular/core';

@Component({
  selector: 'freework-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent {
  @Input()
  imagePath: string = "";
  imageFail: string = "Unknown image.";
}
