import { Title } from '@angular/platform-browser';
import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'anms-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
 
  constructor(

  ) {}

  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }

}
