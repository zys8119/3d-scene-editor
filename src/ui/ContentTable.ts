import { ComponentOptions } from "vue"
import {pageConfig} from "../data/ComponentsConfig";
import {AxiosPromise} from "axios";
import { windowCommon } from "../store/request/AxiosClassInterface";
declare const window:windowCommon
interface ContentTable{
    _currentPagination:{
        pageSize:number;// 每页显示数量
        layout:string;// 分页布局
        noPage:boolean;// 是否分页，默认开启分页
        total:number;// 分页总数
    };
    data:any[];
    url:string;
    apiPath:(data:any)=>any|string;
    api:any;
    params:{
        [key:string]:any;
        no_page:boolean
    };
    currentPagination_pageNo:number;
    currentPaginationTotal:number;
    ContentTableData:any[];
    _ContentTable_pagination_getTableData():void;
    _ContentTable_pagination_getTableData_Axios(config:object):AxiosPromise;
    _ContentTable_pagination_currentPaginationChange(pageNo:number):void;
}
export default <ComponentOptions<ContentTable>>{
    data(){
        return {
            ContentTableData:[],
            currentPagination_pageNo:1,
            currentPaginationTotal:0,
        }
    },
    methods:{
        _ContentTable_pagination_currentPaginationChange(pageNo){
            if((this.url || this.apiPath) && this.$refs.contentTable_el_table) {
                this.currentPagination_pageNo = pageNo;
                this._ContentTable_pagination_getTableData(pageNo);
            }else {
                if(this.data && this.$refs.contentTable_el_table){
                    this.$emit("pageChange",{
                        ...this._currentPagination,
                        pageNo:pageNo,
                    });
                }
            }
        },
        _ContentTable_pagination_getTableData_Axios(data){
            if(this.apiPath){
                let apiResult = null;
                if(typeof this.apiPath === 'function'){
                    apiResult = this.apiPath(data);
                }else {
                    eval(`apiResult = this.api.${this.apiPath}(${JSON.stringify(data)})`);
                }
                return apiResult;
            }
            return this.api.otherApi.ContentTable(this.url, data);
        },
        _ContentTable_pagination_getTableData(pageNo){
            this._ContentTable_pagination_getTableData_Axios({
                pageSize:this._currentPagination.pageSize,
                pageNo:this.currentPagination_pageNo,
                no_page:!!this._currentPagination.noPage,
                ...this.params,
            }).then((res)=>{
                this.$emit("pageChange",{
                    pageNo:this.currentPagination_pageNo,
                    ...this._currentPagination,
                });
                this.currentPaginationTotal = res.data.total;
                this.currentPagination_pageNo = pageNo;
                if(this._currentPagination.noPage || this.params?.no_page){
                    this.ContentTableData = res.data;
                    return;
                }
                this.ContentTableData = res.data.list;
            })
        },
        /**
         * 初始化表格 true：不重置 false：重置
         * @param bool
         */
        init(bool){
            this.init_currentPagination_pageNo(bool).then(()=>{
                this.currentPaginationTotal = 0;
                this.ContentTableData = [];
                this._ContentTable_pagination_currentPaginationChange(this.currentPagination_pageNo);
                if(this.data && !((this.url || this.apiPath) && this.$refs.contentTable_el_table)){
                    this.ContentTableData = this.data;
                    this.currentPaginationTotal = this._currentPagination.total;
                }
            })
        },
        init_currentPagination_pageNo(bool){
            return new Promise(resolve => {
                this.$nextTick(function () {
                    let currentPagination_pageNo = this.currentPagination_pageNo;
                    if (bool) {
                        this.currentPagination_pageNo = 1;
                        this.$nextTick(()=>{
                            this.currentPagination_pageNo = currentPagination_pageNo;
                            resolve();
                        });
                    }else {
                        this.currentPagination_pageNo = 1;
                        resolve();
                    }
                });

            })
        }
    },
    watch:{
        data(){
            this.ContentTableData = this.data;
        },
        ContentTableData(){
            try {
                if(Object.keys(this._.attrs).map(e=>e.toLocaleLowerCase()).includes("ondatachange")){
                    this.$emit("dataChange", this.ContentTableData, this.currentPaginationTotal);
                }
            }catch (e){}
        }
    },
    computed:{
        _currentPagination(){
            try {
                return (<any>Object).assign(
                    JSON.parse(JSON.stringify(pageConfig)),
                    JSON.parse(JSON.stringify(this.pageConfig || {}))
                );
            }catch (e) {
                return {}
            }
        }
    },
}