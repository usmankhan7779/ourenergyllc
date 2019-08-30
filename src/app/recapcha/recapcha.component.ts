import { Component, OnInit } from '@angular/core';
import { RecapchaService } from './recapcha.service';

@Component({
  selector: 'app-recapcha',
  templateUrl: './recapcha.component.html',
  styleUrls: ['./recapcha.component.scss']
})
export class RecapchaComponent implements OnInit {

  constructor(private recapchaService: RecapchaService) { }
  imgName
  capchaText

  ngOnInit() {
    this.recapchaService.resetImg()
    this.recapchaService.img.subscribe(res => this.imgName = res)
  }

  resetImg() {
    this.recapchaService.resetImg()
    this.recapchaService.img.subscribe(res => this.imgName = res)
  }

  checkChange() {
    this.recapchaService.changeData(this.capchaText)
  }
}