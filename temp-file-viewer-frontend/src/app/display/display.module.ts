import {NgModule} from '@angular/core';
import {SharedModule} from "../shared/shared.module";
import {MarkdownComponent} from './markdown/markdown.component';
import {DisplayRoutingModule} from "./display.route";
import {HttpClient} from "@angular/common/http";
import {MarkdownModule, MarkdownService, MarkedOptions, MarkedRenderer} from "ngx-markdown";
import {MarkdownModuleConfig} from "ngx-markdown/src/markdown.module";

@NgModule({
  imports: [
    SharedModule,
    DisplayRoutingModule,
    MarkdownModule.forRoot(DisplayModule.markdownConfig()),
  ],
  declarations: [MarkdownComponent]
})
/**
 * 用于展示文件的项目
 */
export class DisplayModule {

  static markdownConfig(): MarkdownModuleConfig {
    return {
      loader: HttpClient, // optional, only if you use [src] attribute
      markedOptions: {
        provide: MarkedOptions,
        useValue: {
          gfm: true,
          tables: true,
          breaks: false,
          pedantic: false,
          sanitize: false,
          smartLists: true,
          smartypants: false,
        }
      }
    }
  }

}

