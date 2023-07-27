<template>
    <div class="Import flex flex-col b-dashed b-#3c3d3e b-1px b-rd-10px p-15px">
        <label class="cursor-pointer">
            <input type="file" hidden @change="change" />
            <div class="text-center lh-40px fw-bold">Import or Drag & Drop</div>
            <div class="grid gap-15px grid-cols-3">
                <div
                    class="bg-#202124 b-rd-5px p-15px flex flex-col justify-center items-center hover:bg-#313237"
                    v-for="(item, key) in list"
                    :key="key"
                >
                    <div
                        class="icon flex justify-center items-center bg-#27282b p-5px text-#7f8081 w-30px h-30px"
                        v-html="item.icon"
                    ></div>
                    <div class="text-#c3c3c4 fw-bold">{{ item.title }}</div>
                    <div class="text-#9d9e9f">{{ item.msg }}</div>
                </div>
            </div>
        </label>
    </div>
</template>

<script setup lang="ts">
import { Layer } from '@/store/modules/3d';
const props = defineProps<{
    destroy: () => void;
}>();
const { three } = $data.provideConfig();
const uploadFile = async (
    file: File,
    isBlobUrl?: boolean,
    isBlob?: boolean
) => {
    return new Promise<any>((resolve) => {
        if (isBlobUrl) {
            return resolve(URL.createObjectURL(file));
        } else {
            const fr = new FileReader();
            fr.onload = (ev) => {
                if (isBlob) {
                    resolve(new Blob([ev.target?.result as any]).stream());
                    return;
                }
                resolve(ev.target?.result);
            };
            fr.onerror = () => {
                resolve('');
            };
            if (isBlob) {
                fr.readAsArrayBuffer(file);
            } else {
                fr.readAsDataURL(file);
            }
        }
    });
};
const loadImage = async (url: string) => {
    return new Promise<HTMLImageElement>((resolve) => {
        const img = new Image();
        img.src = url;
        img.onload = () => {
            resolve(img);
        };
        img.onerror = () => {
            resolve(img);
        };
    });
};
const loadVideo = async (url: any) => {
    return new Promise<HTMLVideoElement>((resolve) => {
        const video = document.createElement('video');
        document.body.appendChild(video);
        video.onloadeddata = () => {
            resolve(video);
        };
        video.onload = () => {
            resolve(video);
        };
        video.onerror = () => {
            resolve(video);
        };
        if (typeof url === 'string') {
            video.src = url;
        } else {
            video.srcObject = url;
        }
        video.muted = true;
        video.autoplay = true;
        video.loop = true;
        video.width = 0;
        video.height = 0;
        video.hidden = true;
        video.play();
    });
};
const loadModel = async (
    extendCallBack?: (layer: Layer) => void | Layer | Promise<Layer>
) => {
    const g = new three.value.THREE.BoxGeometry(100, 100, 100);
    const m = new three.value.THREE.MeshBasicMaterial();
    const ms = new three.value.THREE.Mesh(g, m);
    await $data.createLayers(ms as any, extendCallBack);
    props.destroy();
};
const list = ref([
    {
        title: 'Video',
        msg: 'MP4, GIF',
        icon: '<svg t="1689142992704" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4031" width="200" height="200"><path d="M864.5 516.2c-2.4-4.1-6.2-6.9-10.4-8.3L286.4 159c-8.9-5-20.3-2-25.5 6.6-2.1 3.6-2.8 7.5-2.3 11.3v697.5c-0.5 3.8 0.2 7.8 2.3 11.3 5.2 8.7 16.6 11.6 25.5 6.6l567.7-349c4.2-1.3 8-4.2 10.4-8.3 1.7-3 2.5-6.3 2.4-9.5 0.1-3-0.7-6.3-2.4-9.3z m-569-308.8l517.6 318.3L295.5 844V207.4z" p-id="4032"></path></svg>',
        async rule(file: File) {
            return /video|image\/gif/.test(file.type);
        },
        async change(file: File) {
            try {
                const url = await uploadFile(file);
                const video = await loadVideo(url);
                await loadModel(async () => {
                    const texture = new three.value.THREE.VideoTexture(video);
                    texture.minFilter = three.value.THREE.LinearFilter;
                    texture.magFilter = three.value.THREE.LinearFilter;
                    return {
                        width:
                            video.width > 0 && video.width < 1000
                                ? video.width
                                : 1000,
                        height:
                            video.height > 0 && video.height < 1000
                                ? video.height
                                : 1000,
                        depth: 2,
                        Material: {
                            color: '#ffffff',
                            map: texture,
                        },
                    } as Layer;
                });
            } catch (e) {
                console.log(e);
            }
        },
    },
    {
        title: '3D Model',
        msg: 'GLTF, glb, OBJ',
        icon: '<svg t="1689143111887" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8768" width="200" height="200"><path d="M352.16 630.9m-26.9 0a26.9 26.9 0 1 0 53.8 0 26.9 26.9 0 1 0-53.8 0Z" p-id="8769"></path><path d="M670.93 630.9m-26.9 0a26.9 26.9 0 1 0 53.8 0 26.9 26.9 0 1 0-53.8 0Z" p-id="8770"></path><path d="M849.77 362.37c47-83.28 64.68-246.24 52.68-284.87-1.93-6.25-4.79-10.23-8.73-12.15-28.66-14-183.2 106.94-230.92 191.37a432.34 432.34 0 0 0-42.38 105.21 242.32 242.32 0 0 0-216.94-0.35 431.9 431.9 0 0 0-42.28-104.86c-47.72-84.4-202.08-205.41-230.9-191.37-4 1.92-6.81 5.89-8.76 12.16-12 38.63 5.63 201.59 52.69 284.86A427.68 427.68 0 0 0 285.37 491a241.46 241.46 0 0 0-16.45 87.84v82c-46.13 30.24-73.55 80.63-73.55 136.77 0 89.4 72.73 162.14 162.14 162.14h49.88a111.62 111.62 0 0 0 63.06-19.43 53.32 53.32 0 0 0 82.33 0 111.62 111.62 0 0 0 63.05 19.43h49.88a160.84 160.84 0 0 0 96.45-32 7.93 7.93 0 0 0 5.16-4 163.24 163.24 0 0 0 60.53-127.31v-1-0.33-0.64c-0.66-54.24-27.95-103.75-73.52-133.61v-82A241.46 241.46 0 0 0 738 491.45a427.68 427.68 0 0 0 111.77-129.08z m-661.53-7.91C140.68 270.31 125.63 100.14 137.67 80c22.71 0.57 159.66 96.37 209.54 184.65A414.73 414.73 0 0 1 388.9 369.5a244.22 244.22 0 0 0-47.67 36.65c-21.36-139.73-109.42-229.2-113.31-233.09a8 8 0 0 0-11.36 11.36c0.95 0.94 93.58 95 110.52 236.93a243.38 243.38 0 0 0-35.15 54.37 411.54 411.54 0 0 1-103.69-121.26zM511.6 943.7a37.52 37.52 0 0 1-28.55-13.34 112.7 112.7 0 0 0 28.55-41.14 112.7 112.7 0 0 0 28.55 41.14 37.54 37.54 0 0 1-28.55 13.34z m226.63-278.34v0.81c0 0.09 0 0.33 0.08 0.5s0 0.2 0.06 0.3 0.07 0.31 0.12 0.46 0.05 0.2 0.09 0.3 0.11 0.31 0.17 0.46l0.1 0.26c0.07 0.17 0.16 0.33 0.24 0.5l0.09 0.18c0.1 0.18 0.21 0.36 0.32 0.53l0.07 0.12c0.12 0.18 0.26 0.36 0.39 0.53l0.07 0.09c0.14 0.16 0.28 0.32 0.43 0.48l0.1 0.1c0.14 0.14 0.28 0.26 0.43 0.39l0.17 0.14 0.41 0.3 0.26 0.18 0.16 0.11a145.68 145.68 0 0 1 69.36 115h-83.8a8 8 0 1 0 0 16.07h84.06A145.82 145.82 0 0 1 760 909.06l-45.16-40.37a8 8 0 1 0-10.7 12L747 918.94a145.22 145.22 0 0 1-81.27 24.76h-49.91a95.7 95.7 0 0 1-59-20.28A8 8 0 0 0 555 922a96 96 0 0 1-35.4-74.49v-45.2a39.39 39.39 0 0 0 31.3-38.51 8 8 0 1 0-16.07 0 23.26 23.26 0 1 1-46.52 0 8 8 0 0 0-16.07 0 39.4 39.4 0 0 0 31.3 38.51v45.2a96 96 0 0 1-35.14 74.28l-0.24 0.12a8 8 0 0 0-2 1.7 95.7 95.7 0 0 1-58.76 20.09h-49.9a144.79 144.79 0 0 1-80.5-24.28l43.35-38.75a8 8 0 1 0-10.7-12l-45.76 40.9a147.1 147.1 0 0 1-52.34-106.46H297a8 8 0 1 0 0-16.07h-85.26c3-47.19 28.48-89.67 69.44-115l0.16-0.11 0.26-0.18 0.41-0.3 0.17-0.14c0.15-0.13 0.29-0.26 0.43-0.39l0.1-0.1c0.15-0.15 0.3-0.31 0.43-0.48l0.07-0.08c0.14-0.17 0.27-0.35 0.4-0.53l0.07-0.11c0.11-0.17 0.22-0.35 0.32-0.53l0.09-0.18c0.08-0.16 0.17-0.33 0.24-0.5l0.1-0.26c0.06-0.15 0.12-0.31 0.17-0.46s0.06-0.2 0.09-0.3 0.08-0.31 0.12-0.46 0-0.2 0.06-0.3 0.06-0.33 0.08-0.5 0-0.18 0-0.27v-0.54-86.51a225.66 225.66 0 0 1 55.48-148.39 8.06 8.06 0 0 0 1.88-2.12 226.11 226.11 0 0 1 169.25-76.1c125 0 226.62 101.66 226.62 226.62v86.44s0.05 0.06 0.05 0.1z m-6.73-189.18a243.34 243.34 0 0 0-34.66-54c16.65-142.14 109.69-236.82 110.62-237.76a8 8 0 0 0-11.36-11.36c-3.9 3.89-92.24 93.64-113.42 233.77A244.26 244.26 0 0 0 635 369.91a415.4 415.4 0 0 1 41.8-105.28C726.68 176.34 863.63 80.55 886.34 80c12 20.18-3 190.34-50.57 274.47a411.53 411.53 0 0 1-104.28 121.71z" p-id="8771"></path></svg>',
        async rule(file: File) {
            return /\.(glb|obj|gltf)$/.test(file.name);
        },
        async change(file: File) {
            const url = await uploadFile(file);
            await loadModel((layer) => {
                layer.geometryType = '3DModel';
                layer.modelUrl = url;
                layer.modelFileName = file.name;
                layer.Mesh = {
                    scale: {
                        x: 100,
                        y: 100,
                        z: 100,
                    },
                };
                layer.customMaterial = false;
            });
        },
    },
    {
        title: 'Audio',
        msg: 'MP3, WAV',
        icon: '<svg t="1689143140523" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9785" width="200" height="200"><path d="M842.214259 995.188814 842.214259 995.188814c-19.521612 0-42.230824-5.763261-70.324672-14.394848l-5.14109-2.113127c-132.190695-69.832462-348.580047-182.270277-382.366547-195.101513L263.009647 783.579325c-85.400019 0-154.001443-59.404971-154.001443-135.232984L109.008204 404.267347c0-80.896448 74.29203-154.551982 154.001443-154.551982l119.880321 0c35.06154-16.219403 250.668063-132.538619 384.105145-205.179033l1.332345-0.695848c24.806989-11.904121 46.13883-17.72571 65.22656-17.72571 20.794605 0 38.869263 7.18361 52.236712 20.766976 26.748201 27.167756 25.196869 70.816882 24.909319 89.468684l-0.899486 3.447519 0 767.457136c0 28.122501-4.054339 48.049343-14.611789 62.705134C886.90511 981.459115 871.699804 995.188814 842.214259 995.188814zM791.975041 924.922471c18.219967 5.53097 37.9708 10.948353 50.239218 10.948353l0 0c4.228301 0 5.777587-0.63752 5.951549-0.724501-0.102331-0.027629 4.025687-5.41636 4.025687-27.891234l0.042979-771.859399c0.145309-9.239432 0.594541-37.421284-8.717546-46.893007-0.898463-0.927115-3.012613-3.069919-9.962909-3.069919-6.706749 0-18.856463 2.028193-38.869263 11.55722C405.250232 309.034379 398.226259 309.034379 388.465964 309.034379L263.009647 309.034379c-46.921659 0-94.683453 47.15395-94.683453 95.232968l0 244.076948c0 47.501874 48.977481 75.916017 94.683453 75.916017l125.456317 0C397.28584 724.260312 412.085918 724.260312 791.975041 924.922471z" fill="#272636" p-id="9786"></path><path d="M525.88473 343.733669c-8.196683 0-14.82873-6.632047-14.82873-14.829753 0-7.008624 4.865821-12.888542 11.410887-14.423501 13.685697-5.329379 126.570697-64.995293 195.491393-101.866039 20.261463-9.731642 47.935756-20.825304 68.355831-7.994068 13.814634 8.688893 19.680225 25.604144 19.680225 51.700499l0 52.714596c0 8.197706-6.647397 14.829753-14.829753 14.829753-8.196683 0-14.82873-6.632047-14.82873-14.829753l0-52.714596c0-20.216437-3.809769-25.344225-5.807263-26.588565-2.071172-1.27504-10.752902-4.51892-39.5866 9.326413C535.290961 343.733669 530.490631 343.733669 525.88473 343.733669z" fill="#272636" p-id="9787"></path><path d="M791.164582 398.010853c-8.196683 0-14.82873-6.632047-14.82873-14.82873L776.335852 368.352369c0-8.196683 6.632047-14.829753 14.82873-14.829753 8.182356 0 14.829753 6.633071 14.829753 14.829753l0 14.82873C805.995359 391.378805 799.347962 398.010853 791.164582 398.010853z" fill="#272636" p-id="9788"></path><path d="M390.769426 753.919818c-8.197706 0-14.829753-6.632047-14.829753-14.830777L375.939673 294.204625c0-8.196683 6.632047-14.82873 14.829753-14.82873 8.181333 0 14.82873 6.632047 14.82873 14.82873l0 444.884416C405.598156 747.287771 398.950759 753.919818 390.769426 753.919818z" fill="#272636" p-id="9789"></path></svg>',
        async rule(file: File) {
            return /audio/.test(file.type);
        },
        async change(file: File, config: any) {
            console.log(file, config.title);
        },
    },
    {
        title: 'Vector',
        msg: 'SVG',
        icon: '<svg t="1689143030052" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5244" width="200" height="200"><path d="M37.856 947.584l287.936-272.096 43.968 46.528-287.936 272.096z" fill="#2A2A3B" p-id="5245"></path><path d="M411.84 763.2a128 128 0 1 1 128-128 128 128 0 0 1-128 128z m0-192a64 64 0 1 0 64 64 64 64 0 0 0-64-64zM731.84 538.88a256 256 0 0 1-181.12-436.8L638.08 13.76l362.88 362.24-88.32 88a256 256 0 0 1-180.8 74.88zM640 104.32L596.16 147.2a192 192 0 0 0-56.64 136 192 192 0 0 0 328 135.68l42.88-42.88z" fill="#2A2A3B" p-id="5246"></path><path d="M23.04 1010.24l70.72-619.2 302.4-168 31.04 56-273.6 152-57.28 500.8 547.84-101.12 89.6-239.04 59.84 22.72-102.4 272.96L23.04 1010.24z" fill="#2A2A3B" p-id="5247"></path></svg>',
        async rule(file: File) {
            return /image\/svg\+xml/.test(file.type);
        },
        async change(file: File) {
            const url = await uploadFile(file);
            await loadModel((layer) => {
                layer.geometryType = 'SVG';
                layer.modelUrl = url;
                layer.modelFileName = file.name;
                layer.customMaterial = false;
            });
        },
    },
    {
        title: 'Image',
        msg: 'JPG, PNG',
        icon: '<svg t="1689143184560" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10799" width="200" height="200"><path d="M896 160H128c-17.67 0-32 14.33-32 32v640c0 17.67 14.33 32 32 32h768c17.67 0 32-14.33 32-32V192c0-17.67-14.33-32-32-32z m-32 64v472.01l-227.2-170.4c-16.97-12.72-40.62-12.72-57.59 0l-98.58 73.92L349.2 494.39c-16.47-13.19-39.27-14.19-56.81-2.39L160 581.02V224h704zM160 800V658.16l158.36-106.48 161.02 128.8L608 584l256 192v24H160z" fill="#333333" p-id="10800"></path><path d="M704 480c52.94 0 96-43.06 96-96s-43.06-96-96-96-96 43.06-96 96 43.06 96 96 96z m0-128c17.64 0 32 14.36 32 32s-14.36 32-32 32-32-14.36-32-32 14.36-32 32-32z" fill="#333333" p-id="10801"></path></svg>',
        async rule(file: File) {
            return /image/.test(file.type);
        },
        async change(file: File) {
            const url = await uploadFile(file);
            const img = await loadImage(url);
            await loadModel(() => {
                return {
                    width: img.width > 0 && img.width < 1000 ? img.width : 1000,
                    height:
                        img.height > 0 && img.height < 1000 ? img.height : 1000,
                    depth: 2,
                    Material: {
                        color: '#ffffff',
                        map: url,
                    },
                } as Layer;
            });
        },
    },
    {
        title: 'Scene',
        msg: '.scene',
        icon: '<svg t="1689143223103" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12642" width="200" height="200"><path d="M909.824 272.128L525.824 51.2a30.72 30.72 0 0 0-30.72 0l-384 221.696a30.72 30.72 0 0 0-15.36 25.6V742.4a30.72 30.72 0 0 0 15.36 25.6l384 221.696a30.72 30.72 0 0 0 30.72 0l384-221.696a30.72 30.72 0 0 0 15.36-25.6V298.752a30.72 30.72 0 0 0-15.36-26.624zM510.464 112.64l329.728 190.464-329.728 190.208-329.728-190.208z m-353.28 236.032L484.864 537.6v376.064L157.184 724.48z m378.88 564.992V537.6l327.68-189.184V724.48z" p-id="12643"></path><path d="M417.28 594.944l-172.032-99.328a25.6 25.6 0 0 0-25.6 44.288L391.68 640a25.6 25.6 0 0 0 25.6-44.288z" p-id="12644"></path></svg>',
        async rule(file: File) {
            return /scene/.test(file.type);
        },
        async change(file: File, config: any) {
            console.log(file, config.title);
        },
    },
    {
        title: '地图Json',
        msg: '.json',
        icon: '<svg t="1689143223103" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12642" width="200" height="200"><path d="M909.824 272.128L525.824 51.2a30.72 30.72 0 0 0-30.72 0l-384 221.696a30.72 30.72 0 0 0-15.36 25.6V742.4a30.72 30.72 0 0 0 15.36 25.6l384 221.696a30.72 30.72 0 0 0 30.72 0l384-221.696a30.72 30.72 0 0 0 15.36-25.6V298.752a30.72 30.72 0 0 0-15.36-26.624zM510.464 112.64l329.728 190.464-329.728 190.208-329.728-190.208z m-353.28 236.032L484.864 537.6v376.064L157.184 724.48z m378.88 564.992V537.6l327.68-189.184V724.48z" p-id="12643"></path><path d="M417.28 594.944l-172.032-99.328a25.6 25.6 0 0 0-25.6 44.288L391.68 640a25.6 25.6 0 0 0 25.6-44.288z" p-id="12644"></path></svg>',
        async rule(file: File) {
            return /json/.test(file.type);
        },
        async change(file: File) {
            const url = await uploadFile(file);
            await loadModel((layer) => {
                layer.geometryType = 'Map';
                layer.modelUrl = url;
                layer.modelFileName = file.name;
                layer.customMaterial = false;
            });
        },
    },
]);
const change = async (ev: Event & { target: HTMLInputElement }) => {
    const file = ev.target.files?.[0] as File;
    let isBreak = false;
    for (let i = 0; i < list.value.length; i++) {
        const item = list.value[i];
        if (await item.rule(file)) {
            await item.change(file, item);
            isBreak = true;
            break;
        }
    }
    if (!isBreak) {
        window.$message.error(`文件【${file.name}】无法解析，请上传正确的文件`);
    }
    ev.target.value = '';
};
</script>

<style scoped lang="less">
.Import {
    :deep(.icon) {
        svg,
        path {
            fill: currentColor;
        }
        svg {
            width: 100%;
            height: 100%;
        }
    }
}
</style>
