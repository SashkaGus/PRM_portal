import { WFMComponent, $ } from 'framework'

class UploadPageComponent extends WFMComponent {
  constructor(config) {
    super(config)
  }

  events() {
    return {
      'click .collapsible': 'onTabClick'
    }
  }
  
  onTabClick({target}) {
    let $target = $(target)
    if (!$target.hasClass('collapsible-header')) return

    this.el.findAll('.js-tab').forEach(e => e.removeClass('active'))
    $target.parent().addClass('active')
  }
}

export const uploadPageComponent = new UploadPageComponent({
  selector: 'app-tabs-page',
  template: `
    <div class="row">
      <div class="col s6 offset-s3">
        <ul class="collapsible popout collapsible-accordion">
          <li class="js-tab">
            <div class="collapsible-header"><i class="material-icons">bookmark</i>Отчет по составу сценариев </div>
            <div class="collapsible-body">
              <input placeholder="Филиалы (MO, KV, NW ...)" id="fll_id" type="text" class="validate">
            <div class="card-action">
              <a class="waves-effect waves-light btn_remark"><i class="material-icons left">book</i>Выполнить</a>
            </div>
            </div>
 
          </li>
          <li class="js-tab">
            <div class="collapsible-header"><i class="material-icons">bookmark</i>Отчёт по выкладке документов на ДП</div>
            <div class="collapsible-body"> 
              <input placeholder="Дата выкладки (DD-MM-YYYY)" id="dwnld_date" type="text" class="validate">
              <input placeholder="Отчётный период (YYYYMM)" id="report_date" type="text" class="validate">
                <div class="card-action">
                  <a class="waves-effect waves-light btn_delete"><i class="material-icons left">archive</i>Выполнить</a>
                </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  `,
  styles: `
    .collapsible-accordion { margin-top: 30px; }
    .collapsible li.active .collapsible-body {
      display: block;
    }
  `
})