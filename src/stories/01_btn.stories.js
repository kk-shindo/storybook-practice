import { storiesOf } from '@storybook/vue'
import { linkTo } from '@storybook/addon-links'
import { action } from '@storybook/addon-actions'
import { withNotes } from '@storybook/addon-notes'
import { withKnobs, text, select } from '@storybook/addon-knobs'
import Centered from '@storybook/addon-centered/vue'

import Btn01 from './../components/01_btn/Btn01.vue'
import Btn02 from './../components/01_btn/Btn02.vue'
import Btn03 from './../components/01_btn/Btn03.vue'

storiesOf('01_btn', module)
  .addDecorator(withNotes)
  .addDecorator(withKnobs)
  .addDecorator(Centered)
  .add('c-btn01', () => {
    return {
      components: { Btn01 },
      template: `
        <Btn01
        :class="getClassName"
        >{{ label }}</Btn01>
      `,
      methods: {
        action: action('clicked')
      },
      props: {
        label: {
          default: text('Label', 'BUTTON')
        },
        modifier: {
          default: select('Modifier', {
            Color01: '--color01',
            Color02: '--color02',
            Color03: '--color03',
            Download03: '--download03',
            None: ''
          }, '')
        }
      },
      computed: {
        getClassName() {
          const className = 'c-btn01'
          return className + this.modifier
        }
      }
    }
  })
  .add('c-btn02', () => {
    return {
      components: { Btn02 },
      template: `
        <Btn02
        :class="getClassName"
        >{{ label }}</Btn02>
      `,
      methods: {
        action: action('clicked')
      },
      props: {
        label: {
          default: text('Label', 'BUTTON')
        },
        modifier: {
          default: select('Modifier', {
            None: ''
          }, '')
        }
      },
      computed: {
        getClassName() {
          const className = 'c-btn02'
          return className + this.modifier
        }
      }
    }
  })
  .add('c-btn03', () => {
    return {
      components: { Btn03 },
      template: `
        <Btn03
        :class="getClassName"
        >{{ label }}</Btn03>
      `,
      methods: {
        action: action('clicked')
      },
      props: {
        label: {
          default: text('Label', 'BUTTON')
        },
        modifier: {
          default: select('Modifier', {
            Color01: '--color01',
            Color02: '--color02',
            None: ''
          }, '')
        }
      },
      computed: {
        getClassName() {
          const className = 'c-btn03'
          return className + this.modifier
        }
      }
    }
  })
