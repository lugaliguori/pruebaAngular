export class luminaria {
    public observaciones: string;
    public id_luminaria: string;
    public punto_luz: String;
    public vial: string;
    public numero: string;
    public lado_via: string;
    public distancia_eje: string;
    public s1: string;
    public s2: string;
    public centro_mando: string;
    public circuito: string;
    public operativa: string;
    public altura: string;
    public tipo_soporte: string;
    public marca_soporte: string;
    public modelo_soporte: string;
    public estado_soporte: string;
    public situacion_soporte: string;
    public tamano_brazo: string;
    public longitud_brazo: string;
    public orientacion_brazo: string;
    public tipo_luminaria: string;
    public marca_luminaria: string;
    public modelo_luminaria: string;
    public estado_luminaria: string;
    public tipo_lampara: string;
    public marca_lampara: string;
    public modelo_lampara: string;
    public estado_lampara: string;
    public cantidad_lamparas: string;
    public potencia: string;
    public equipo_auxiliar: string;
    public situacion_equipo_auxiliar: string;
    public orientacion: string;
    public alta: string;
    public usuario_alta: string;
    public fecha_alta: string;
    public modificado: string;
    public usuario_modificado: string;
    public fecha_modificado: string;
    public herramienta: string;
    public numero_registro: string;
    public envio: string;
    public fecha_envio: string;
    public id_centro_mando: string;
    public id_circuito: string
    public id: number;

    constructor(obj?: any) {
        this.id = obj && obj['id']
        this.observaciones = obj && obj['properties']['observaciones']
        this.id_luminaria = obj && obj['properties']['id_luminaria']
        this.punto_luz = obj && obj['properties']['punto_luz']
        this.vial = obj && obj['properties']['vial']
        this.numero = obj && obj['properties']['numero']
        this.lado_via = obj && obj['properties']['lado_via']
        this.distancia_eje = obj && obj['properties']['distancia_eje']
        this.s1 = obj && obj['properties']['s1']
        this.s2 = obj && obj['properties']['s2']
        this.centro_mando = obj && obj['properties']['centro_mando']
        this.circuito = obj && obj['properties']['circuito']
        this.operativa = obj && obj['properties']['operativa']
        this.altura = obj && obj['properties']['altura']
        this.tipo_soporte = obj && obj['properties']['tipo_soporte']
        this.marca_soporte = obj && obj['properties']['marca_soporte']
        this.modelo_soporte = obj && obj['properties']['modelo_soporte']
        this.estado_soporte = obj && obj['properties']['estado_soporte']
        this.situacion_soporte = obj && obj['properties']['situacion_soporte']
        this.tamano_brazo = obj && obj['properties']['tamano_brazo']
        this.longitud_brazo = obj && obj['properties']['longitud_brazo']
        this.tipo_luminaria = obj && obj['properties']['tipo_luminaria']
        this.orientacion_brazo = obj && obj['properties']['orientacion_brazo']
        this.marca_luminaria = obj && obj['properties']['marca_luminaria']
        this.modelo_luminaria = obj && obj['properties']['modelo_luminaria']
        this.estado_luminaria = obj && obj['properties']['estado_luminaria']
        this.tipo_lampara = obj && obj['properties']['tipo_lampara']
        this.marca_lampara = obj && obj['properties']['marca_lampara']
        this.modelo_lampara = obj && obj['properties']['modelo_lampara']
        this.cantidad_lamparas = obj && obj['properties']['cantidad_lamparas']
        this.estado_lampara = obj && obj['properties']['estado_lampara']
        this.potencia = obj && obj['properties']['potencia']
        this.equipo_auxiliar = obj && obj['properties']['equipo_auxiliar']
        this.situacion_equipo_auxiliar = obj && obj['properties']['situacion_equipo_auxiliar']
        this.orientacion = obj && obj['properties']['orientacion']
        this.alta = obj && obj['properties']['alta']
        this.usuario_alta = obj && obj['properties']['usuario_alta']
        this.fecha_alta = obj && obj['properties']['fecha_alta']
        this.modificado = obj && obj['properties']['modificado']
        this.usuario_modificado = obj && obj['properties']['usuario_modificado']
        this.fecha_alta = obj && obj['properties']['fecha_alta']
        this.fecha_modificado = obj && obj['properties']['fecha_modificado']
        this.herramienta = obj && obj['properties']['herramienta']
        this.numero_registro = obj && obj['properties']['numero_registro']
        this.envio = obj && obj['properties']['envio']
        this.fecha_envio = obj && obj['properties']['fecha_envio']
        this.id_centro_mando = obj && obj['properties']['id_centro_mando']
        this.id_circuito = obj && obj['properties']['id_circuito']
    }
        
}