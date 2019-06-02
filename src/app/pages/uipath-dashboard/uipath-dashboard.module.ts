import { NgModule } from '@angular/core';

import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { UipathDashboardComponent } from './uipath-dashboard.component';
import { StatusCardComponent } from './status-card/status-card.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { TemperatureDraggerComponent } from './temperature/temperature-dragger/temperature-dragger.component';
import { ElectricityComponent } from './electricity/electricity.component';
import { ElectricityChartComponent } from './electricity/electricity-chart/electricity-chart.component';
import { WeatherComponent } from './weather/weather.component';
import { SmartTableComponent } from './tables/smart-table/smart-table.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    StatusCardComponent,
    TemperatureDraggerComponent,
    TemperatureComponent,
    ElectricityComponent,
    ElectricityChartComponent,
    WeatherComponent,
    UipathDashboardComponent,
    SmartTableComponent,
  ],
})
export class UipathDashboardModule { }
