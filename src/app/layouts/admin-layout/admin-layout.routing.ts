import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';


import { ProfilingComponent } from '../../pages/profiling/profiling.component';
import { DealComponent } from '../../pages/deal/deal.component';
import { BrandComponent } from '../../pages/brand/brand.component';
import { CategoryComponent } from '../../pages/category/category.component';
import { ProductComponent } from '../../pages/product/product.component';
import { VideoComponent } from '../../pages/video/video.component';
import { ArticleComponent } from '../../pages/article/article.component';
import { UserComponent } from '../../pages/user/user.component';
import { ClinicComponent } from '../../pages/clinic/clinic.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'profiling',      component: ProfilingComponent },
    { path: 'deal',           component: DealComponent },
    { path: 'brand',          component: BrandComponent },
    { path: 'category',       component: CategoryComponent },
    { path: 'product',        component: ProductComponent },
    { path: 'video',          component: VideoComponent },
    { path: 'article',        component: ArticleComponent },
    { path: 'user',           component: UserComponent },
    { path: 'clinic',         component: ClinicComponent },
];
