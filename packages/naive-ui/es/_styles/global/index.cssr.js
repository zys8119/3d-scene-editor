import { c } from '../../_utils/cssr';
import commonVariables from '../common/_common';
const { fontSize, fontFamily, lineHeight } = commonVariables;
export default c(
    'body',
    `
 margin: 0;
 font-size: ${fontSize};
 font-family: ${fontFamily};
 line-height: ${lineHeight};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`,
    [
        c(
            'input',
            `
 font-family: inherit;
 font-size: inherit;
 `
        ),
    ]
);
