import { Component, OnInit } from '@angular/core';
import { TimesheetService } from 'app/providers/timesheet.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [TimesheetService]
})
export class HomeComponent implements OnInit {
  title = `App works !`;
  private clockInOut: Boolean;

  constructor(private ts: TimesheetService) { }

  ngOnInit() {
    this.clockInOut = false;
  }

  clock(form: any) {
    console.log(form.valid)
    // this.ts.sendTime(form).subscribe(() => {});
  }

}
