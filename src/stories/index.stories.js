import { storiesOf } from '@storybook/vue'
import { linkTo } from '@storybook/addon-links'
import { withNotes } from '@storybook/addon-notes'
import { withKnobs, text } from '@storybook/addon-knobs'
import Centered from '@storybook/addon-centered/vue'


storiesOf('SomeComponent', module)
  .addDecorator(withNotes)
  .addDecorator(withKnobs)
  .addDecorator(Centered)
  .add('hoge', () => ({
    template: `<div>HOGE</div>`
  }))