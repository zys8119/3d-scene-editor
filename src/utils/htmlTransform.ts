import base from '../config/base'

export const htmlTransform = () => {
    return {
        name: 'html-transform',
        transformIndexHtml(html: string) {
            html = html.replace(
                /<title>(.*?)<\/title>/,
                `<title>${base.title}</title>`
            )
            html = html.replace(
                /<html lang="(.*?)">/,
                `<html lang="${base.lang}">`
            )
            html = html.replace(
                /<link rel="icon" href="(.*?)" \/>/,
                `<link rel="icon" href="${base.favicon}" />`
            )
            return html
        }
    }
}