module.exports = function() {
    import Btn01 from './Btn01.vue'
    import Btn02 from './Btn02.vue'
    import Btn03 from './Btn03.vue'

    storiesOf('01_btn', module)
      .addDecorator(Centered)
      .addDecorator(withKnobs)
      .add('c-btn01', () => {
        const label = text('Label', 'BUTTON')
        const color = ''
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
}