import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/features/models/products.product';
import { DesignersService } from 'src/app/features/services/designers.service';

@Component({
  selector: 'app-designer-detail',
  templateUrl: './designer-detail.component.html',
  styleUrls: ['./designer-detail.component.css']
})
export class DesignerDetailComponent {

  @Input() product: Product = {
    id: '',
    name: '',
    description: '',
    imageUrl: '',
    price: 0
  };

  constructor (private route: ActivatedRoute, private designersService: DesignersService) {}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.designersService.get(id).subscribe(designer => this.product = designer);
  }

}
