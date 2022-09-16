import { Component, OnInit } from '@angular/core';
import { PresentationalBlockComponent } from '../page-block.component';

@Component({
  selector: 'app-store-line-options-block',
  templateUrl: './store-line-options-block.component.html',
  styleUrls: ['./store-line-options-block.component.scss'],
})
export class StoreLineOptionsBlockComponent
  implements OnInit, PresentationalBlockComponent {
  constructor() {}

  type: 'presentational';
  settings: Settings = null;
  component: string;

  storeGlobalKey = 'ui-store-line-options';
  loading = true;

  setSettings(settings: Settings): void {
    if (!this.isSettingsValid(settings)) return;

    this.settings = settings;

    // console.log('SETTINGS', settings)

    this.initStorePreferences();
  }

  ngOnInit(): void {
    // console.log('StoreLineOptionsBlockComponent', this.settings)
  }

  isSettingsValid(settings: Settings): boolean {
    return this.validateTypesValueOptions(settings);
  }

  validateTypesValueOptions(settings: Settings) {
    const { options, type } = settings;

    return options.every((option) => typeof option.value === type);
  }

  initStorePreferences() {
    const { options } = this.settings;

    if (this.settings.setOptInitValues) {
      this.settings.options = this.settings.setOptInitValues(options);
    }

    this.loading = false;
    // console.log('initStorePreferences', this.settings.options);
  }

  async changeOptStored(optSelected: Option, e) {
    const { store, options } = this.settings;

    const { target } = e;
    const optionsMapped = options.map((optionMap) => {
      if (optionMap.key === optSelected.key) {
        optionMap.value = target.checked;
      }

      return optionMap;
    });

    if (this.settings.onChange) {
      this.loading = true;

      try {
        await this.settings.onChange({ optSelected, options: optionsMapped });
      } catch (error) {
        e.target.checked = !e.target.checked;
        console.error(error);
      }

      this.loading = false;
    }
  }
}

interface Settings {
  store: string;
  type: 'string' | 'boolean' | 'number';
  classes: string;
  options: Option[];
  onChange: Function;
  setOptInitValues: (opts) => Option[];
}

interface Option {
  label: string;
  key: string;
  value: string | boolean | number;
}
