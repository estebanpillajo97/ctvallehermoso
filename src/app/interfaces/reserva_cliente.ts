export interface ReservaClientes{
    rc_id?:number;
    res_id:number;
    rc_nombreCliente:string;
    rc_cedula:string;
    rc_celular:string;
    np_id:number;
    rc_fecha:Date;
    rc_hora:string;
    rc_descripcion:string;
    rc_estado:string;
    tc_id:number;
    created_at?:string;
    update_at?:string;
}