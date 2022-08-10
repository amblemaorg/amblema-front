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
  component: string

  storeGlobalKey = 'ui-store-line-options'

  setSettings(settings: Settings): void {
    if (!this.isSettingsValid(settings)) return

    this.settings = settings

    // console.log('SETTINGS', settings)

    this.initStorePreferences()
  }

  ngOnInit(): void {
    // console.log('StoreLineOptionsBlockComponent', this.settings)
  }

  isSettingsValid(settings: Settings): boolean {
    return this.validateTypesValueOptions(settings)
  }

  validateTypesValueOptions(settings: Settings) {
    const { options, type } = settings

    return options.every((option) => typeof option.value === type)
  }

  private getOptSectionsStored() {
    return localStorage.getItem(this.storeGlobalKey)
      ? JSON.parse(localStorage.getItem(this.storeGlobalKey))
      : {}
  }

  initStorePreferences() {
    const { store, options } = this.settings

    if (options.length === 0) return

    let optionSectionsStored = this.getOptSectionsStored()

    optionSectionsStored[`${store}`] = optionSectionsStored[`${store}`]
      ? optionSectionsStored[`${store}`]
      : options

    this.settings.options = optionSectionsStored[`${store}`]

    localStorage.setItem(
      this.storeGlobalKey,
      JSON.stringify(optionSectionsStored),
    )
  }

  changeOptStored(optSelected: Option, { target }) {
    const { store, options } = this.settings

    const optionsMapped = options.map((optionMap) => {
      if (optionMap.key === optSelected.key) {
        optionMap.value = target.checked
      }

      return optionMap
    })

    let optionSectionsStored = this.getOptSectionsStored()

    optionSectionsStored[`${store}`] = optionsMapped

    localStorage.setItem(
      this.storeGlobalKey,
      JSON.stringify(optionSectionsStored),
    )
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
