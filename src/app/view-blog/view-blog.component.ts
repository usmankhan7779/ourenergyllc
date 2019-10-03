import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.scss']
})
export class ViewBlogComponent implements OnInit {

  constructor(  private http: Http) { }

  data:any=[];
  ngOnInit() {
    this.profile();
  }
  profile() {

    const headers = new Headers();
 
    headers.append('Content-Type', 'application/json');
    this.http.get('https://devbackend.wattcrm.com/portal/gettingblog_all/')
      .subscribe(Res => {
        this.data = Res.json();
        console.log(this.data)
    //     // this.content= this.data.content1
    //     this.content=Res.json()[0]['content1'];
    //  this.con=(this.content).replace(/<[^>]+>/gm, '')
    //     // $('#myDiv').html(this.content);
    //     console.log(this.content);
        
      });

  }
}
