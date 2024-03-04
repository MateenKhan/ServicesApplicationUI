import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  public start!: string;
  public end!: string;
  public length!: number;
  public width!: number;
  public depth!: number;
  public total!: number;

  constructor() { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
  calculate() {
    this.total = 0;
    this.total = (2 * (this.length * this.width)) + (2 * (this.width * this.depth)) + (2 * (this.depth * this.length));
  }
}
