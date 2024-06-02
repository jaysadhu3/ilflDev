import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content/content.service';
import { CommonModule } from '@angular/common';
import { SectionService } from '../../services/section/section.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  menuValue: any = null;
  subMenuValue: any = null;
  constructor(private sectionService: SectionService,
    private spinner: NgxSpinnerService) {
  }

  ngOnInit(): void {

    this.sectionService.GetParentSection().subscribe(res => {
      this.menuValue = res.body;
      this.spinner.hide();
    });

    this.sectionService.GetChildSection(0).subscribe(res => {
      this.subMenuValue = res.body;
      this.spinner.hide();
    });
  }

  changeContent(id: number) {}

}
