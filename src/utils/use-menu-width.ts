export function useChangeMenuWidth(width: number) {
    const r = document.querySelector(":root") as HTMLElement;
    r.style.setProperty("--menu-width", width + "px");
}
