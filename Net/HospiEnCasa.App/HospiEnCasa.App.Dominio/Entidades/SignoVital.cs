namespace HospiEnCasa.App.Dominio
{
    public class SignoVital
    {
        public int Id{get;set;}
        public DataTime FechaHora { get; set; }
        public float Valor { get; set; }
        public TipoSigno Signo{get;set;}
 
        
    }

 }