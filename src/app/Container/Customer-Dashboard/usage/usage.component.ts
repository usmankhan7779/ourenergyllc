import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'
import { UsageService } from '../../Store/Services'
import * as Chart from 'chart.js'

@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html',
  styleUrls: ['./usage.component.scss']
})
export class UsageComponent implements OnInit {
  @ViewChild('payChart') chars: ElementRef
  @ViewChild('Save') downloads: ElementRef
  @ViewChild('Saves') saves: ElementRef
  errMsg
  BarChart: any
  PayChart: any
  error
  x
  showSpinner
  constructor(private usage: UsageService) { }

  ngOnInit() {
    window.scrollTo(0, 0)
    this.x = setTimeout(() => {
      this.showSpinner = true
    }, 2000)
    this.usage.getUsageGraph().subscribe(res => {
      if (res['status'] == true) {
        if (res["status"] = true) {
          clearTimeout(this.x)
        }
        this.showSpinner = false
        let usages = []
        let month = []
        let amount = []
        res['message'].map(ele => {
          usages.push(ele.kh_qty)
          month.push(ele.bill_date)
          amount.push(ele.current_charges)
        })

        let paychart = this.chars.nativeElement;

        let usageData = {
          type: 'line',
          label: 'Usage',
          data: usages,
          borderColor: "#a9a9a9",
          pointBorderColor: '#a9a9a9',
          pointBackgroundColor: '#a9a9a9',
          fill: false,
          lineTension: 0.1,
          borderWidth: 3,
          pointWidth: 3,
          yAxisID: "y-axis-density"
        }

        let amountData = {
          type: 'bar',
          label: 'Amount',
          data: amount,
          backgroundColor: "#008ECC",
          borderColor: '#008ECC',
          borderWidth: 2,
          yAxisID: "y-axis-gravity"
        };

        let chartData = {
          labels: month,
          datasets: [usageData, amountData]
        }

        let chartOptions = {
          scales: {
            xAxes: [{
              barPercentage: 1,
              categoryPercentage: 0.6,
              gridLines: { display: false },
              ticks: { fontSize: 14 }
            }],
            yAxes: [
              {
                id: "y-axis-density",
                gridLines: { display: false },
                ticks: { fontSize: 14 }
              },
              {
                id: "y-axis-gravity",
                gridLines: { display: false },
                ticks: { fontSize: 14 }
              }
            ]
          },
          tooltips: {
            mode: 'nearest',
            displayColors: false,
            titleFontSize: 13,
            bodyFontSize: 18,
            bodyFontStyle: 'bold',
            callbacks: {
              label: function (tooltipItem, data) {
                let label = `${tooltipItem['datasetIndex'] == 1 ? `$` : ``}${data['datasets'][tooltipItem['datasetIndex']]['data'][tooltipItem['index']]}${tooltipItem['datasetIndex'] == 0 ? ` kWh` : ``}`
                return label;
              },
              title: function (tooltipItem, data) {
                let title = `${data['labels'][tooltipItem[0]['index']]}`
                return title;
              }
            }
          }
        }

        let usageChart = new Chart(paychart, {
          data: chartData,
          options: chartOptions
        })
      }
      else {
        this.errMsg = res['message']
        this.showSpinner = false
        clearTimeout(this.x)
      }
    }, err => {
      if (err["status"] == 404) {
        this.error = "Not Found"
        clearTimeout(this.x)
        this.showSpinner = false
      }
      if (err["status"] == 400) {
        this.error = "Bad Request"
        clearTimeout(this.x)
        this.showSpinner = false
      }
      if (err["status"] == 0) {
        this.error = "cannot connect to server"
        clearTimeout(this.x)
        this.showSpinner = false
      }
    })
  }

  png() {
    let down = this.downloads.nativeElement
    var context = this.chars.nativeElement.getContext('2d')
    var canvas = context.canvas
    var w = canvas.width
    var h = canvas.height
    var data
    data = context.getImageData(0, 0, w, h)
    var compositeOperation = context.globalCompositeOperation
    context.globalCompositeOperation = "destination-over"
    context.fillStyle = "white"
    context.fillRect(0, 0, w, h)
    var imageData = canvas.toDataURL()
      .replace("image/png", "image/octet-stream")
    down.setAttribute("href", imageData)
    context.clearRect(0, 0, w, h)
    context.putImageData(data, 0, 0)
    context.globalCompositeOperation = compositeOperation
    return imageData
  }

  jpg() {
    let down = this.saves.nativeElement
    var context = this.chars.nativeElement.getContext('2d')
    var canvas = context.canvas
    var w = canvas.width
    var h = canvas.height
    var data
    data = context.getImageData(0, 0, w, h)
    var compositeOperation = context.globalCompositeOperation
    context.globalCompositeOperation = "destination-over"
    context.fillStyle = "white"
    context.fillRect(0, 0, w, h)
    var imageData = canvas.toDataURL("image/jpeg")
      .replace("image/jpeg", "image/octet-stream")
    down.setAttribute("href", imageData)
    context.clearRect(0, 0, w, h)
    context.putImageData(data, 0, 0)
    context.globalCompositeOperation = compositeOperation
    return imageData
  }
}