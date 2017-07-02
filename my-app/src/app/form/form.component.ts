import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  rForm :FormGroup;
  post: any;
  title :string;
  category :string;
  releaseYear :number;
  poster :string;
  actors :string;
  directors :string;
  synopsis :string;
  rate :string;
  lastViewDate :string;
  price :number;

  constructor(private fb: FormBuilder) {
    this.rForm = fb.group({
      'title': [null, Validators.required],
      'category': [null, Validators.required],
      'releaseYear': [null, Validators.required],
      'poster': [null, Validators.required],
      'actors': [null, Validators.required],
      'directors': [null, Validators.required],
      'synopsis': [null, Validators.required],
      'rate': [null, Validators.required],
      'lastViewDate': [null, Validators.required],
      'price': [null, Validators.required]
    });
  }

  ngOnInit() {
  }

  addPost(post) {
    this.title = post.title;
    this.category = post.category;
    this.releaseYear = post.releaseYear;
    this.poster = post.poster;
    this.actors = post.actors;
    this.directors = post.directors;
    this.synopsis = post.synopsis;
    this.rate = post.rate;
    this.lastViewDate = post.lastViewDate;
    this.price = post.price;
  }
}
