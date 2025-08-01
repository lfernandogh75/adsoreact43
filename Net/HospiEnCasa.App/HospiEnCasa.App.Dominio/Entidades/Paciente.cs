namespace HospiEnCasa.App.Dominio
{
    public class Paciente:Persona
    {
      
        public string Direccion { get; set; }
        //coordenadas de la dirección del paciente
        public float Latitud { get; set; }
        public float Longitud{get;set;}
        public string Ciudad { get; set; }
        public DataTime FechaNacimiento{get;set;}
        public FamiliarDesignado Familiar{get;set;}
        public Enfermera Enfermera{get;set;}
        public Medico Medico{get;set;}
        public System.Collections.Generic.List<SignoVital> SignoVitales {get;set;}
        
    }

 }