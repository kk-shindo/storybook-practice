import { storiesOf } from '@storybook/vue'
import { linkTo } from '@storybook/addon-links'
import { withNotes } from '@storybook/addon-notes'
import { withKnobs, text } from '@storybook/addon-knobs'
import Centered from '@storybook/addon-centered/vue'

import Btn01 from './../components/01_btn/Btn01.vue'
import Btn02 from './../components/01_btn/Btn02.vue'
import Btn03 from './../components/01_btn/Btn03.vue'

storiesOf('01_btn', module)
  .addDecorator(withNotes)
  .addDecorator(withKnobs)
  .addDecorator(Centered)
  .add('c-btn01', () => {
    const label = text('Label', 'BUTTON', 'hogehoge')
    const color = ''
    return {
      components: { Btn01 },
      template: `
        <Btn01
        label="${label}"
        color="${color}"
        ></Btn01>
      `
    }
  })
  .add('c-btn01--color01', () => {
    const label = text('Label', 'BUTTON')
    const color = 'color01'
    return {
      components: { Btn01 },
      template: `
        <div>
          <Btn01
          label="${label}"
          color="${color}"
          ></Btn01>
        </div>
      `
    }
  })
  .add('c-btn01--color02', () => {
    const label = text('Label', 'BUTTON')
    const color = 'color02'
    return {
      components: { Btn01 },
      template: `
        <div>
          <Btn01
          label="${label}"
          color="${color}"
          ></Btn01>
        </div>
      `
    }
  })
  .add('c-btn01--color03', () => {
    const label = text('Label', 'BUTTON')
    const color = 'color03'
    return {
      components: { Btn01 },
      template: `
        <div>
          <Btn01
          label="${label}"
          color="${color}"
          ></Btn01>
        </div>
      `
    }
  })
  .add('c-btn01--download03', () => {
    const label = text('Label', 'BUTTON')
    const color = 'download03'
    return {
      components: { Btn01 },
      template: `
        <div>
          <Btn01
          label="${label}"
          color="${color}"
          ></Btn01>
        </div>
      `
    }
  })
  .add('c-btn02', () => {
    const label = text('Label', 'BUTTON')
    const color = ''
    return {
      components: { Btn02 },
      template: `
        <div>
          <Btn02
          label="${label}"
          color="${color}"
          ></Btn02>
        </div>
      `
    }
  })
  .add('c-btn03', () => {
    const label = text('Label', 'BUTTON')
    const color = ''
    return {
      components: { Btn03 },
      template: `
        <div>
          <Btn03
          label="${label}"
          color="${color}"
          ></Btn03>
        </div>
      `
    }
  })
  .add('c-btn03--color01', () => {
    const label = text('Label', 'BUTTON')
    const color = 'color01'
    return {
      components: { Btn03 },
      template: `
        <div>
          <Btn03
          label="${label}"
          color="${color}"
          ></Btn03>
        </div>
      `
    }
  })
  .add('c-btn03--color02', () => {
    const label = text('Label', 'BUTTON')
    const color = 'color02'
    return {
      components: { Btn03 },
      template: `
        <div>
          <Btn03
          label="${label}"
          color="${color}"
          ></Btn03>
        </div>
      `
    }
  })