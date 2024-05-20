import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content/content.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  manuValue: any = null;
  subManuValue: any = null;
  constructor(private contentService: ContentService) {
  }

  ngOnInit(): void {

    this.contentService.GetParentSection().subscribe(res => {
      this.manuValue = res.body;
    });

    this.contentService.GetChildSection(0).subscribe(res => {
      this.subManuValue = res.body;
    });
  }

  subManuList(id: number) {
    this.contentService.GetChildSection(id).subscribe(res => {
      this.subManuValue = res.body;
    });
  }

}
