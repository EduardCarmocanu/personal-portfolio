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

    // Stops the background from scrolling when modal is open;
    document.querySelector('body').style.overflow = 'hidden';
  }
  closeModal() {
    this.modalDisplay = false;
  }
}
