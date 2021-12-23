import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  filterString: FormControl;
  @Output() filter: EventEmitter<string>;

  constructor() {
    this.filter = new EventEmitter();
    this.filterString = new FormControl('');
    this.filterString.valueChanges.subscribe((res) => {
      this.filter.emit(res);
    });
  }

  ngOnInit(): void {}
}
