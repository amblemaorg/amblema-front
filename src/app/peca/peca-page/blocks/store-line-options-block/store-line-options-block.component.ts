import { Component, OnInit } from '@angular/core'
import { PresentationalBlockComponent } from '../page-block.component'

@Component({
  selector: 'app-store-line-options-block',
  templateUrl: './store-line-options-block.component.html',
  styleUrls: ['./store-line-options-block.component.scss'],
})
export class StoreLineOptionsBlockComponent
  implements OnInit, PresentationalBlockComponent {
  constructor() {}

  type: 'presentational'
  settings: Settings = null
  name?: string
  component: string
  viewMode?: string

  storeGlobalKey = 'ui-store-line-options'

  setSettings(settings: any): void {
    if (!this.isSettingsValid(settings)) return

    this.settings = settings

    const optionsLocation = localStorage.getItem(this.storeGlobalKey)
      ? JSON.parse(localStorage.getItem(this.storeGlobalKey))
      : null

    this.settings.options =
      optionsLocation[this.settings.store] || this.settings.options
  }
  setData?(data: any): void {
    throw new Error('Method not implemented.')
  }
  setFetcherUrls?(urls: object): void {
    throw new Error('Method not implemented.')
  }

  ngOnInit(): void {
    console.log('StoreLineOptionsBlockComponent', this.settings)
  }

  isSettingsValid(settings: Settings): boolean {
    return this.validateTypesValueOptions(settings)
  }

  validateTypesValueOptions(settings: Settings) {
    const { options, type } = settings

    return options.every((option) => typeof option.value === type)
  }

  storePreferences(opSelected: Option, { target }) {
    const preferences: any = localStorage.getItem(this.storeGlobalKey)
      ? JSON.parse(localStorage.getItem(this.storeGlobalKey))
      : {}

    const { store, options } = this.settings

    const optionsMapped = options.map((optionMap) => {
      if (optionMap.key === opSelected.key) {
        optionMap.value = target.checked
      }

      return optionMap
    })

    preferences[`${store}`] = optionsMapped
    localStorage.setItem(this.storeGlobalKey, JSON.stringify(preferences))
  }
}

interface Settings {
  store: string
  type: 'string' | 'boolean' | 'number'
  classes: string
  options: Option[]
}

interface Option {
  label: string
  key: string
  value: string | boolean | number
}
