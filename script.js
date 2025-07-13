const ramos = [
  // PRIMER AÑO - 1° semestre
  { nombre: "Anatomía y Morfología", id: "anat", desbloquea: ["adulto_mayor", "materna1", "urgencias1"] },
  { nombre: "Procesos Biológicos", id: "proc_bio", desbloquea: ["fisiologia", "farmacologia"] },
  { nombre: "Bioestadística I", id: "bio1", desbloquea: ["bio2", "inv_cuantitativa"] },
  { nombre: "Introducción a la Enfermería", id: "intro_enf", desbloquea: ["fundamentos", "mod_integrador1"] },
  { nombre: "Ciencias Sociales de la Salud", id: "soc_salud", desbloquea: ["educacion_salud", "diagnostico_salud"] },
  { nombre: "Formación General Globalización I", id: "fg1", desbloquea: [] },

  // PRIMER AÑO - 2° semestre
  { nombre: "Fisiología", id: "fisiologia", desbloquea: ["farmacologia", "adulto_mayor"] },
  { nombre: "Fundamentos de Enfermería", id: "fundamentos", desbloquea: ["adulto_mayor", "materna1"] },
  { nombre: "Seguridad Social y Sistemas de Salud", id: "seguridad_social", desbloquea: ["gestion1"] },
  { nombre: "Bioestadística II", id: "bio2", desbloquea: ["inv_cuantitativa"] },
  { nombre: "Módulo Integrador I", id: "mod_integrador1", desbloquea: ["mod_integrador"] },
  { nombre: "Formación General Globalización II", id: "fg2", desbloquea: [] },

  // SEGUNDO AÑO - 3° semestre
  { nombre: "Cuidados en Salud Materno Infantil y Adolescente", id: "materna_base", desbloquea: ["materna1"] },
  { nombre: "Educación en Salud", id: "educacion_salud", desbloquea: [] },
  { nombre: "Microbiología y Parasitología", id: "micro_parasito", desbloquea: ["urgencias1"] },
  { nombre: "Fisiopatología General", id: "fisio_general", desbloquea: ["adulto_mayor", "salud_mental"] },
  { nombre: "Ética y Responsabilidad Social", id: "etica", desbloquea: ["seguridad_cuidados"] },
  { nombre: "Epidemiología", id: "epidemiologia", desbloquea: ["diagnostico_salud"] },
  { nombre: "Formación General Globalización III", id: "fg3", desbloquea: [] },

  // SEGUNDO AÑO - 4° semestre
  { nombre: "Cuidados en el Adulto Mayor", id: "adulto_mayor", desbloquea: ["adulto1"] },
  { nombre: "Autocuidado en Salud Mental", id: "auto_salud_mental", desbloquea: ["salud_mental"] },
  { nombre: "Bases Farmacológicas de Enfermería", id: "farmacologia", desbloquea: ["adulto1"] },
  { nombre: "Módulo Integrador II", id: "mod_integrador", desbloquea: ["materna1", "comunitaria1"] },
  { nombre: "Diagnóstico de Salud Participativo", id: "diagnostico_salud", desbloquea: ["comunitaria1"] },
  { nombre: "Formación General Básica", id: "fg_basica", desbloquea: [] },

  // TERCER AÑO - 5° semestre
  { nombre: "Módulo I Adulto y Adulto Mayor", id: "adulto1", desbloquea: ["adulto2"] },
  { nombre: "Salud Mental y Psiquiatría", id: "salud_mental", desbloquea: [] },
  { nombre: "Gestión en Enfermería I", id: "gestion1", desbloquea: ["gestion2"] },
  { nombre: "Investigación Cualitativa", id: "inv_cualitativa", desbloquea: ["seminario1"] },
  { nombre: "Formación General Electiva", id: "fg_electiva", desbloquea: [] },

  // TERCER AÑO - 6° semestre
  { nombre: "Módulo II Adulto y Adulto Mayor", id: "adulto2", desbloquea: ["urgencias1"] },
  { nombre: "Salud Familiar y Comunitaria I", id: "comunitaria1", desbloquea: ["comunitaria2"] },
  { nombre: "Seguridad y Calidad de los Cuidados", id: "seguridad_cuidados", desbloquea: [] },
  { nombre: "Gestión en Enfermería II", id: "gestion2", desbloquea: [] },
  { nombre: "Investigación Cuantitativa", id: "inv_cuantitativa", desbloquea: ["seminario1"] },
  { nombre: "Módulo III Adulto y Adulto Mayor", id: "adulto3", desbloquea: [] },

  // CUARTO AÑO - 7° semestre
  { nombre: "Módulo I Materna Infantil", id: "materna1", desbloquea: ["materna2"] },
  { nombre: "Módulo Integrado Salud Familiar II", id: "comunitaria2", desbloquea: [] },
  { nombre: "Módulo Integrado Urgencias I", id: "urgencias1", desbloquea: ["urgencias2"] },
  { nombre: "Seminario de Investigación I", id: "seminario1", desbloquea: ["seminario2"] },

  // CUARTO AÑO - 8° semestre
  { nombre: "Módulo II Materna Infantil", id: "materna2", desbloquea: [] },
  { nombre: "Módulo III Materna Infantil", id: "materna3", desbloquea: [] },
  { nombre: "Módulo Integrado Urgencias II", id: "urgencias2", desbloquea: [] },
  { nombre: "Seminario de Investigación II", id: "seminario2", desbloquea: [] },
  { nombre: "Formación General Valórica", id: "fg_valorica", desbloquea: [] },

  // QUINTO AÑO - 9° y 10° semestre
  { nombre: "Internado Rural Interdisciplinario", id: "internado_rural", desbloquea: [] },
  { nombre: "Internado Profesional Nivel Primario Urbano", id: "internado_primario", desbloquea: [] },
  { nombre: "Internado Profesional Secundario y Terciario", id: "internado_terciario", desbloquea: [] },
  { nombre: "Profundización en Enfermería", id: "profundizacion", desbloquea: [] }
];

function cargarMalla() {
  const container = document.getElementById("semestres");
  container.innerHTML = "";

  ramos.forEach((ramo) => {
    const div = document.createElement("div");
    div.className = "ramo";
    div.id = ramo.id;
    div.innerText = ramo.nombre;

    // Estado guardado
    if (localStorage.getItem(ramo.id) === "aprobado") {
      div.classList.add("aprobado");
    }

    div.addEventListener("click", () => {
      div.classList.toggle("aprobado");
      if (div.classList.contains("aprobado")) {
        localStorage.setItem(ramo.id, "aprobado");
      } else {
        localStorage.removeItem(ramo.id);
      }
    });

    container.appendChild(div);
  });
}

window.onload = cargarMalla;
