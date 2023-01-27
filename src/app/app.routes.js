import { homePageComponent } from './pages/home-page.component'
import { tabsPageComponent } from './pages/tabs-page.component'
import { notFound } from './shared/not-found.component'
import { uploadPageComponent} from './pages/upload-page.component'


export const appRoutes = [
  { path: '', component: homePageComponent },
  { path: 'tabs', component: tabsPageComponent },
  { path: 'upload', component: uploadPageComponent},
  { path: '**', component: notFound }
]