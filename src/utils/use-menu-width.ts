export function useChangeMenuWidth(width: Number) {
  const r = document.querySelector(':root') as HTMLElement
  r.style.setProperty('--menu-width', width + 'px')
}
