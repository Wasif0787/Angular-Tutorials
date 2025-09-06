import { Component, computed, EventEmitter, input, Input, output, Output, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // state to hold the selected user
  // selectedUser = DUMMY_USERS[randomIndex];
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);
  // Getter method to construct the image path
  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar;
  // }

  // Input property to receive user data from parent component    
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  @Output() select = new EventEmitter<string>();

  // Using signal for output
  // select = output<string>();

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  // Using signal to define input properties
  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => 'assets/users/' + this.avatar());


  onSelectUser() {
    // Value will change using angular zonejs internally
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser = DUMMY_USERS[randomIndex];

    // Updating value using signal
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
    this.select.emit(this.id);
  }
}
