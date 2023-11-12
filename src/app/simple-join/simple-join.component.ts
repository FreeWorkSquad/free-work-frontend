import {Component} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'freework-simple-join',
  templateUrl: './simple-join.component.html',
  styleUrls: ['./simple-join.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule],
})
export class SimpleJoinComponent {
  value: string = "";
}
