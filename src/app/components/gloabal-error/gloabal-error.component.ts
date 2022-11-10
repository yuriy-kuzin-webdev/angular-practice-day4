import { Component, OnInit } from '@angular/core';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-gloabal-error',
  templateUrl: './gloabal-error.component.html',
  styleUrls: ['./gloabal-error.component.scss']
})
export class GloabalErrorComponent implements OnInit {

  constructor(public errorService: ErrorService) { }

  ngOnInit(): void {
  }

}
