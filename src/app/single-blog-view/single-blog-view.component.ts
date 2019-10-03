import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-single-blog-view',
  templateUrl: './single-blog-view.component.html',
  styleUrls: ['./single-blog-view.component.scss']
})
export class SingleBlogViewComponent implements OnInit {

  constructor( private route: ActivatedRoute,private http: Http) { }
  private sub: any;
  CatName;
  data:any=[];
  ngOnInit() {
    this.sub = this.route
        .queryParams
        .subscribe(params => {
          // Defaults to 0 if no query param provided.
          this.CatName = params['ProID'] || '0';
        })
        // alert(this.CatName)
        this.profile();

  }
  profile() {

    const headers = new Headers();
 
    headers.append('Content-Type', 'application/json');
    this.http.get('https://devbackend.wattcrm.com/portal/gettingblog_html/' +this.CatName +'/')
      .subscribe(Res => {
        this.data = Res.json();
        console.log(this.data)
    //     // this.content= this.data.content1
    //     this.content=Res.json()[0]['content1'];
    //  this.con=(this.content).replace(/<[^>]+>/gm, '')
    //  $('#myDiv').html(data.);
    //     console.log(this.content);
        
      });

  }
}
