export interface EventoClientes{
    ec_id?:number;
    eve_id:number;
    arr_id:number;
    ec_nombreCliente:string;
    ec_cedula:string;
    ec_celular:string;
    na_id:number;
    nn_id:number;
    ec_fecha:Date;
    ec_hora:string;
    ec_descripcion:string;
    ec_estado:string;
    sm_id:number;
    tc_id:number;
    created_at?:string;
    update_at?:string;
}