import { markRaw } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FIconLoadingA, FIconApps, FIconBlock } from '@fighting-design/fighting-icon'
import { FButton } from '../index'
import { useColor } from '../../_hooks'
import { FIGHTING_SIZE, FIGHTING_TYPE, FIGHTING_TARGET } from '../../_tokens'
import { FSvgIcon } from '../../svg-icon'
import type { ButtonNative } from '../index'
import type { FightingTarget } from '../../_interface'
import type { FightingType, FightingSize } from '../../_interface'

describe('FButton', () => {
  test('class', () => {
    const wrapper = mount(FButton)
    expect(wrapper.classes()).toContain('f-button')
    expect(wrapper.attributes('name')).toContain('f-button')
    expect(wrapper.attributes('tabindex')).toContain('0')
  })

  test('bold', () => {
    const wrapper = mount(FButton, {
      props: { bold: true }
    })
    expect(wrapper.classes()).toContain('f-button__bold')
  })

  test('circle', () => {
    const wrapper = mount(FButton, {
      props: { circle: true }
    })
    expect(wrapper.classes()).toContain('f-button__circle')
  })

  test('round', () => {
    const wrapper = mount(FButton, {
      props: { round: true }
    })
    expect(wrapper.classes()).toContain('f-button__round')
  })

  test('spread', () => {
    const wrapper = mount(FButton, {
      props: { spread: true }
    })
    expect(wrapper.classes()).toContain('f-button__spread')
  })

  test('fontSize', () => {
    const wrapper = mount(FButton, {
      props: { fontSize: '20px' }
    })
    expect(wrapper.attributes('style')).toContain('20px')
  })

  test('fontSize', () => {
    const wrapper = mount(FButton, {
      props: { fontSize: 17 }
    })
    expect(wrapper.attributes('style')).toContain('17px')
  })

  test('fontColor', () => {
    const wrapper = mount(FButton, {
      props: { fontColor: 'red' }
    })
    expect(wrapper.attributes('style')).toContain('red')
  })

  test('size', () => {
    FIGHTING_SIZE.forEach((item: FightingSize) => {
      const wrapper = mount(FButton, {
        props: { size: item }
      })
      expect(wrapper.classes()).toContain(`f-button__${item}`)
    })
  })

  test('block', () => {
    const wrapper = mount(FButton, {
      props: { block: true }
    })
    expect(wrapper.classes()).toContain('f-button__block')
  })

  test('href', () => {
    const wrapper = mount(FButton, {
      props: { href: 'https://tianyuhao.cn' }
    })
    expect(wrapper.attributes('href')).toContain('https://tianyuhao.cn')
  })

  test('target', () => {
    FIGHTING_TARGET.forEach((item: FightingTarget) => {
      const wrapper = mount(FButton, {
        props: { href: 'https://tianyuhao.cn', target: item }
      })
      expect(wrapper.attributes('target')).toContain(item)
    })
  })

  test('loading', () => {
    const wrapper = mount(FButton, {
      props: { loading: true }
    })
    expect(wrapper.findComponent(FSvgIcon).classes()).toContain(
      'f-button__loading-animation'
    )
  })

  test('disabled', () => {
    const wrapper = mount(FButton, {
      props: { disabled: true }
    })
    expect(wrapper.attributes('disabled')).toContain('')
  })

  test('loadingIcon', () => {
    const wrapper = mount(FButton, {
      props: { loading: true, loadingIcon: markRaw(FIconLoadingA) }
    })
    expect(wrapper.findComponent(FIconLoadingA).exists()).toBeTruthy()
  })

  test('type', () => {
    FIGHTING_TYPE.forEach((item: FightingType) => {
      const wrapper = mount(FButton, {
        props: { type: item }
      })
      expect(wrapper.classes()).toContain(`f-button__${item}`)
    })
  })

  test('autofocus', () => {
    const wrapper = mount(FButton, {
      props: { autofocus: true }
    })
    expect(wrapper.attributes('autofocus')).toContain('')
  })

  test('name', () => {
    const wrapper = mount(FButton, {
      props: { name: 'my-button' }
    })
    expect(wrapper.attributes('name')).toContain('my-button')
  })

  test('shadow', () => {
    const wrapper = mount(FButton, {
      props: { shadow: '7px 7px 15px #dcdcdc,-7px -7px 15px #e4e4e4' }
    })
    expect(wrapper.attributes('style')).toContain(
      '--button-shadow: 7px 7px 15px #dcdcdc,-7px -7px 15px #e4e4e4'
    )
  })

  test('text', () => {
    const wrapper = mount(FButton, {
      props: { text: true }
    })
    expect(wrapper.classes()).toContain('f-button__text')
  })

  test('simple', () => {
    const wrapper = mount(FButton, {
      props: { simple: true }
    })
    expect(wrapper.classes()).toContain('f-button__simple')
  })

  test('beforeIcon', () => {
    const wrapper = mount(FButton, {
      props: { beforeIcon: markRaw(FIconApps) }
    })
    expect(wrapper.findComponent(FIconApps).exists()).toBeTruthy()
  })

  test('afterIcon', () => {
    const wrapper = mount(FButton, {
      props: { afterIcon: markRaw(FIconBlock) }
    })
    expect(wrapper.findComponent(FIconBlock).exists()).toBeTruthy()
  })

  test('ripples', () => {
    const wrapper = mount(FButton, {
      props: { ripples: true }
    })
    wrapper.trigger('click')
    expect(wrapper.find('.f-button__ripples').exists()).toBeTruthy()
  })

  test('ripplesColor', () => {
    const wrapper = mount(FButton, {
      props: { ripples: true, ripplesColor: 'green' }
    })
    wrapper.trigger('click')
    expect(wrapper.find('.f-button__ripples').attributes('style')).toContain(
      'background: green'
    )
  })

  test('nativeType', () => {
    const nativeTypes: ButtonNative[] = ['button', 'submit', 'reset']
    nativeTypes.forEach((item: ButtonNative) => {
      const wrapper = mount(FButton, {
        props: { nativeType: item }
      })
      expect(wrapper.attributes('type')).toContain(item)
    })
  })

  test('color', () => {
    const color = '#eeeeee'
    const { getLight, getDark } = useColor(color)
    const light: string = getLight(0.4)
    const dark: string = getDark(0.2)

    const wrapper = mount(FButton, {
      props: { color }
    })
    expect(wrapper.attributes('style')).toContain(`--button-background: ${color}`)
    expect(wrapper.attributes('style')).toContain(`--button-hover: ${light}`)
    expect(wrapper.attributes('style')).toContain(`--button-active: ${dark}`)
  })

  test('default slot', () => {
    const wrapper = mount(FButton, {
      slots: { default: '这是按钮' }
    })
    expect(wrapper.text()).toContain('这是按钮')
  })

  test('on click', async () => {
    const wrapper = mount(FButton, {
      slots: { default: '点击测试' }
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeDefined()
  })

  test('disabled click', async () => {
    const wrapper = mount(FButton, {
      slots: { default: '点击测试' },
      props: { disabled: true }
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })

  test('loading click', async () => {
    const wrapper = mount(FButton, {
      slots: {
        default: '点击测试'
      },
      props: { loading: true }
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })
})
