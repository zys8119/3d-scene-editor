##模块化 ThreeBSP 包

###Vue 中的用法（react 暂时不做示例）

必须在前面先引入 THREE 包

```sh
import * as THREE from 'three'
```

再把 THREE 当作参数传入方可使用

```sh
const ThreeBSP = require('tthreebsp')(THREE)
```

###案例

createMesh 方法

```sh
createMesh(geom) {
  //  创建一个线框纹理
  const wireFrameMat = new THREE.MeshBasicMaterial({
    opacity: 0.5,
    wireframeLinewidth: 0.5
  });
  wireFrameMat.wireframe = true;

  // 创建模型
  const mesh = new THREE.Mesh(geom, wireFrameMat);

  return mesh;
}
```

创建球形几何体

```sh
const sphereGeometry = new THREE.SphereGeometry(50, 20, 20)

const sphere = this.createMesh(sphereGeometry)
```

创建立方体几何体

```sh
const cubeGeometry = new THREE.BoxGeometry(30, 30, 30)

const cube = this.createMesh(cubeGeometry)

cube.position.x = -50
```

生成 ThreeBSP 对象

```sh
const sphereBSP = new ThreeBSP(sphere)

const cubeBSP = new ThreeBSP(cube)
```

以下计算方式取其一即可

进行差集计算（使用该函数可以在第一个几何体中移除两个几何体重叠的部分来创建新的几何体。）

```sh
const resultBSP = sphereBSP.subtract(cubeBSP)
```

进行并集计算（使用该函数可以将两个几何体联合起来创建出一个新的几何体。）

```sh
const resultBSP = sphereBSP.union(cubeBSP)
```

进行交集计算（使用该函数可以基于两个现有几何体的重合的部分定义此几何体的形状。）

```sh
const resultBSP = sphereBSP.intersect(cubeBSP)
```

从 BSP 对象内获取到处理完后的 mesh 模型数据

```sh
const result = resultBSP.toMesh()
```

更新模型的面和顶点的数据

```sh
result.geometry.computeFaceNormals()

result.geometry.computeVertexNormals()
```

重新赋值一个纹理

```sh
const material = new THREE.MeshPhongMaterial({ color: 0x00ffff })

result.material = material
```

将计算出来模型添加到场景当中

```sh
this.scene.add(result)
```
