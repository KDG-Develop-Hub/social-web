import styles from '@/assets/css/modules/ripple.module.css'

type RippleOptions = {
  color?: string
  keys?: string
}

type RippleEvent = MouseEvent | TouchEvent | KeyboardEvent

type RippleHTMLElement = HTMLElement & {
  _ripple: RippleOptions
}

let keyboardRipple = false

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.directive<RippleHTMLElement, RippleOptions>('ripple', {
    mounted(el, options) {
      el.style.setProperty(
        '--material-ripple-color',
        options.value.color || 'black'
      )
      el.addEventListener('mousedown', createRipple)
      el.addEventListener('touchstart', createRipple, { passive: true })
      el.addEventListener('keydown', createRippleByKeydown)
      el.addEventListener('keyup', removeRippleByKeydown)
      el.addEventListener('blur', removeRippleByBlur)
      el.addEventListener('touchend', removeRipple, { passive: true })
      el.addEventListener('touchmove', removeRipple, { passive: true })
      el.addEventListener('mouseleave', removeRipple)
      el.addEventListener('mouseup', removeRipple)
    },
    updated(el, options) {
      if (options.value === options.oldValue)
        el.style.setProperty(
          '--material-ripple-color',
          options.value.color || 'black'
        )
    },
    beforeUnmount(el) {
      el.removeEventListener('mousedown', createRipple)
      el.removeEventListener('touchstart', createRipple)
      el.removeEventListener('keydown', createRippleByKeydown)
      el.removeEventListener('keyup', removeRippleByKeydown)
      el.removeEventListener('blur', removeRippleByBlur)
      el.removeEventListener('touchend', removeRipple)
      el.removeEventListener('touchmove', removeRipple)
      el.removeEventListener('mouseleave', removeRipple)
      el.removeEventListener('mouseup', removeRipple)
    }
  })
})

function removeRipple(event: Event) {
  Array.from(
    (event.currentTarget as HTMLElement).getElementsByClassName(styles.ripple)
  ).forEach(ripple => ripple.classList.add(styles.remove))
}
function removeRippleByKeydown(event: KeyboardEvent) {
  if (![' ', 'Enter'].includes(event.key)) return
  keyboardRipple = false
  removeRipple(event)
}
function createRippleByKeydown(event: KeyboardEvent) {
  if (!keyboardRipple && [' ', 'Enter'].includes(event.key)) {
    keyboardRipple = true
    createRipple(event)
  }
}
function removeRippleByBlur(event: FocusEvent) {
  if (keyboardRipple) {
    keyboardRipple = false
    removeRipple(event)
  }
}

function createRipple(event: RippleEvent) {
  const root = event.currentTarget
  if (!(root instanceof HTMLElement)) throw new Error('Invalid event target')
  const { x, y, diameter } = calculate(event)
  const circle = document.createElement('span')

  root.classList.add(styles['ripple-container'])

  circle.style.width = circle.style.height = `${diameter}px`
  circle.style.left = `${x}px`
  circle.style.top = `${y}px`
  circle.classList.add(styles.ripple)

  circle.addEventListener('transitionend', () => {
    if (!circle.classList.contains(styles.remove)) return
    circle.remove()
  })

  root.appendChild(circle)
}

function calculate(event: RippleEvent): {
  x: number
  y: number
  diameter: number
} {
  if (!(event.currentTarget instanceof HTMLElement))
    throw new Error('Invalid event target')
  const diameter =
    (event.currentTarget.offsetWidth + event.currentTarget.offsetHeight) * 2
  const radius = diameter / 2
  if (event instanceof KeyboardEvent)
    return {
      x: event.currentTarget.offsetWidth / 2 - radius,
      y: event.currentTarget.offsetHeight / 2 - radius,
      diameter
    }
  const { clientX, clientY } =
    event instanceof MouseEvent ? event : event.touches[0]
  return {
    x: clientX - event.currentTarget.getBoundingClientRect().left - radius,
    y: clientY - event.currentTarget.getBoundingClientRect().top - radius,
    diameter
  }
}
