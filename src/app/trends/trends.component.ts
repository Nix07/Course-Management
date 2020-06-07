import { Component, OnInit } from '@angular/core';

declare let CanvasJS: any;

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.scss']
})
export class TrendsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Distribution of Courses"
      },
      data: [{
        type: "column",
        dataPoints: [
          { y: 71, label: "Java" },
          { y: 55, label: "HTML" },
          { y: 50, label: "CSS" },
          { y: 65, label: "JavaScript" },
          { y: 95, label: "Angular" },
          { y: 68, label: "Spring" },
          { y: 28, label: "DBMS" },
          { y: 34, label: "Unix" },
          { y: 14, label: "Agile" }
        ]
      }]
    });
    chart.render();
  }

}
