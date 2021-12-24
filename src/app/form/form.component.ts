import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  personForm = this.fb.group({
    id: ['', Validators.required],
    name: ['', Validators.required],
    lastname: ['', Validators.required],
    birthdate: ['', Validators.required],
    childs: this.fb.array([]),
    movies: this.fb.array([])
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  get childs(): FormArray {
    return <FormArray>this.personForm.get('childs');
  }

  get movies(): FormArray {
    return <FormArray>this.personForm.get('movies');
  }

  addChilds() {
    this.childs.push(this.createChild())
  }

  addMovies() {
    this.movies.push(this.createMovie())
  }

  createChild(): FormGroup {
    return this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      birthdate: ['', Validators.required]
    })
  }

  createMovie(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      director: ['', Validators.required],
      year: ['', Validators.required],
      oscar: [false, Validators.required]
    })
  }

  send() {
    console.log(this.personForm.value)
  }

}
