// @ts-ignore
import {EChartsOption,SeriesOption$1,DataItem} from "echarts"
export default {
    line:data=>{
        return <EChartsOption>{
            title: {
            },
            tooltip: {
                formatter(params){
                    console.log(params)
                    return "asda"
                }
            },
            legend:{
                type:"scroll",
                data:(<DataItem[]>data.legend_data).map(e=>{
                    return {
                        name:e,
                        icons:"asd"
                    }
                })
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                axisLabel: {
                },
                data: data.x_data,
            },
            yAxis: {
                type: 'value'
            },
            series:(<SeriesOption$1[]>data.series).map((e,index)=>({
                ...e,
                type:"line",
                symbol: 'circle',
                symbolSize: 10,
                stack: (index+1).toString(),
                itemStyle:{
                    color:['#B097F3','#528FEF'][parseInt((Math.random()*2).toString())]
                },
            }))
        }
    },
}
