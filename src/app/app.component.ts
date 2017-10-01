import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  currentId = 0;
  modalDisplay = false;

  displayModal(id) {
    this.currentId = id;
    this.modalDisplay = true;
  }
  closeModal() {
    this.modalDisplay = false;
  }
}
