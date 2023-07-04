import { Attrs } from '@/store/modules/3d/attrs';
import { get, set } from 'lodash';
const config = use3DConfig();

const attrs = [
    {
        title: 'Camera',
        show: false,
        child: [
            'x',
            'y',
            'z',
            'zoom',
            'rotation.x',
            'rotation.y',
            'rotation.z',
            'scale.x',
            'scale.y',
            'scale.z',
        ]
            .map((label) => ({
                label: label.replace(/^./, (m) => m.toUpperCase()),
                config: {
                    type: 'number',
                    cursorGj: 0.05,
                    props: {
                        value: get(config.value.camera, label, 0),
                        'onUpdate:value'(v) {
                            set(config.value.camera, label, v);
                        },
                    },
                },
            }))
            .concat(
                ['grid.x', 'grid.y', 'grid.z'].map((label) => ({
                    label: label.replace(/^./, (m) => m.toUpperCase()),
                    config: {
                        type: 'number',
                        cursorGj: 0.05,
                        props: {
                            value: get(config.value, label, 0),
                            'onUpdate:value'(v) {
                                set(config.value, label, v);
                            },
                        },
                    },
                }))
            ),
    },
] as Attrs;
export default attrs;
