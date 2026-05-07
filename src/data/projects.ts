export type ProjectType = 'Tesis' | 'Backend' | 'Frontend' | 'Mobile' | 'Full stack'

export type ProjectStatus = 'Publicado' | 'En desarrollo' | 'Mantenido'

export type QuickFact = {
  label: string
  value: string
}

export type DemoType =
  | 'seminario'
  | 'innovo-back'
  | 'innovo-front'
  | 'app-innovo'
  | 'pinf'
  | 'claims-backend'
  | 'claims-frontend'

export type DemoStep = {
  title: string
  description: string
}

export type DemoMetadata = {
  type: DemoType
  title: string
  objective: string
  steps: DemoStep[]
}

export type Project = {
  id: string
  name: string
  repository: string
  url: string
  type: ProjectType
  status: ProjectStatus
  stack: string[]
  summary: string
  highlight: string
  tagline: string
  context: string
  contribution: string
  impact: string
  responsibilities: string[]
  features: string[]
  technicalHighlights: string[]
  quickFacts: QuickFact[]
  demo: DemoMetadata
}

export const profile = {
  name: 'Benjamin Morales Carvajal',
  role: 'Desarrollador de software',
  location: 'Chile',
  github: 'https://github.com/SwTzu',
  linkedin: 'https://www.linkedin.com/in/benjamin-morales-462944218/',
  email: 'benjamin.morales.car@gmail.com',
  summary:
    'Portafolio de proyectos seleccionados con foco en aplicaciones web, servicios backend, plataformas de gestion y soluciones moviles.',
}

export const projects: Project[] = [
  {
    id: 'seminario',
    name: 'Seminario',
    repository: 'Tesis-ana/seminario',
    url: 'https://github.com/Tesis-ana/seminario',
    type: 'Tesis',
    status: 'Publicado',
    stack: ['Next.js', 'Express', 'Sequelize', 'MySQL', 'JWT', 'Python'],
    summary:
      'Plataforma academica para validar flujos de sistema con backend, frontend y scripts cientificos.',
    highlight: 'Arquitectura full stack para pruebas end-to-end con imagenes y calculo PWAT.',
    tagline: 'Validacion tecnica de una plataforma clinica/academica con flujos end-to-end.',
    context:
      'Proyecto de seminario orientado a preparar pruebas de sistema sobre una plataforma con usuarios, pacientes, profesionales, imagenes, segmentaciones y puntajes PWAT.',
    contribution:
      'Se trabajo sobre una base full stack documentada para que los componentes criticos quedaran entendibles: API REST, autenticacion, frontend y ejecucion de scripts cientificos.',
    impact:
      'Facilita revisar la arquitectura y los requisitos operativos sin levantar todo el repositorio, dejando claro que el sistema integra software web con procesamiento cientifico.',
    responsibilities: [
      'Documentar arquitectura, dependencias y condiciones necesarias para pruebas de sistema.',
      'Ordenar el recorrido entre frontend, backend, base de datos y scripts Python.',
      'Identificar rutas protegidas, variables de entorno y preparacion de datos iniciales.',
    ],
    features: [
      'Servicios REST para usuarios, pacientes, profesionales, imagenes y segmentaciones.',
      'Frontend Next.js que consume API con token de autorizacion.',
      'Carga de imagenes, generacion de mascaras y calculo de puntajes PWAT.',
      'Checklist operativo para ejecutar pruebas end-to-end.',
    ],
    technicalHighlights: [
      'Backend Express con Sequelize y MySQL.',
      'Autenticacion JWT en rutas protegidas.',
      'Scripts Python ejecutados desde el backend para procesamiento PWAT.',
      'Pruebas con Bun en backend y frontend.',
    ],
    quickFacts: [
      { label: 'Rol visible', value: 'Documentacion tecnica y validacion de sistema' },
      { label: 'Arquitectura', value: 'Next.js + Express + MySQL + Python' },
      { label: 'Foco', value: 'Pruebas de sistema y flujo clinico/academico' },
    ],
    demo: {
      type: 'seminario',
      title: 'Prueba de segmentacion y PWAT',
      objective:
        'Simular el flujo de seleccion de paciente, carga de imagen, segmentacion automatica y resumen de validacion clinica.',
      steps: [
        {
          title: 'Paciente',
          description: 'Seleccionar un caso clinico con imagen pendiente de analisis.',
        },
        {
          title: 'Imagen',
          description: 'Preparar una carga simulada y validar que el archivo cumple requisitos.',
        },
        {
          title: 'PWAT',
          description: 'Ejecutar una segmentacion ficticia y calcular puntajes de evolucion.',
        },
        {
          title: 'Reporte',
          description: 'Revisar el resultado final y el estado de la validacion end-to-end.',
        },
      ],
    },
  },
  {
    id: 'innovo-back',
    name: 'InnovoBack',
    repository: 'Innovo-Servicios/InnovoBack',
    url: 'https://github.com/Innovo-Servicios/InnovoBack',
    type: 'Backend',
    status: 'Mantenido',
    stack: ['Express', 'MongoDB', 'Socket.io', 'Firebase', 'Excel', 'Gmail bot'],
    summary:
      'Backend operacional para Innovo con APIs de asignacion, clientes, rutas, lecturas y automatizacion de correos.',
    highlight: 'Servicios backend para una solucion organizacional real.',
    tagline: 'Motor backend para operaciones en terreno, datos de clientes y automatizacion.',
    context:
      'Servicio backend para coordinar informacion operacional: asignaciones, clientes, sectores, rutas, lecturas, trabajadores, novedades y notificaciones.',
    contribution:
      'Se integro una base de servicios de negocio con procesamiento de planillas, automatizacion Gmail y soporte para tiempo real mediante sockets.',
    impact:
      'Reduce tareas manuales y centraliza datos operacionales que el frontend y la app movil pueden consumir de forma consistente.',
    responsibilities: [
      'Modelar endpoints para entidades operacionales como clientes, direcciones, rutas y trabajadores.',
      'Preparar automatizacion para descargar adjuntos de Gmail y extraer datos utiles desde planillas.',
      'Conectar integraciones de notificaciones, sockets y servicios externos de apoyo.',
    ],
    features: [
      'Gestion de asignaciones por dia, mes, sector y trabajador.',
      'CRUD operacional para clientes, direcciones, medidores, sectores y rutas.',
      'Notificaciones individuales o masivas y registro de vistas.',
      'Bot Gmail para procesar adjuntos XLS de atenciones especiales.',
    ],
    technicalHighlights: [
      'Express con MongoDB/Mongoose.',
      'Socket.io para comunicacion en tiempo real.',
      'Firebase Admin para integraciones de notificacion.',
      'ExcelJS/SheetJS para procesar planillas.',
    ],
    quickFacts: [
      { label: 'Rol visible', value: 'Backend e integraciones operacionales' },
      { label: 'Datos', value: 'Clientes, rutas, sectores, lecturas y trabajadores' },
      { label: 'Automatizacion', value: 'Bot Gmail con adjuntos XLS' },
    ],
    demo: {
      type: 'innovo-back',
      title: 'Consola de operacion y bot Gmail',
      objective:
        'Simular una ejecucion backend que revisa asignaciones, procesa un correo con adjunto y emite una notificacion operacional.',
      steps: [
        {
          title: 'Asignaciones',
          description: 'Revisar sectores, trabajadores y lecturas pendientes.',
        },
        {
          title: 'Correo',
          description: 'Procesar un adjunto XLS ficticio recibido por Gmail.',
        },
        {
          title: 'Extraccion',
          description: 'Extraer medidores y atenciones especiales desde la planilla.',
        },
        {
          title: 'Notificacion',
          description: 'Generar un evento de notificacion para el equipo operativo.',
        },
      ],
    },
  },
  {
    id: 'innovo-front',
    name: 'InnovoFront',
    repository: 'Innovo-Servicios/InnovoFront',
    url: 'https://github.com/Innovo-Servicios/InnovoFront',
    type: 'Frontend',
    status: 'Mantenido',
    stack: ['Next.js', 'HeroUI', 'Tailwind', 'Leaflet', 'Charts', 'TypeScript'],
    summary:
      'Frontend web de Innovo para visualizar operaciones, consumir APIs y apoyar decisiones del equipo.',
    highlight: 'Aplicacion web orientada a experiencia de usuario y productividad.',
    tagline: 'Interfaz web para operar y supervisar datos de Innovo desde un panel moderno.',
    context:
      'Aplicacion Next.js que presenta datos operacionales de Innovo y consume la API para gestionar asignaciones, clientes, mapas, tablas y reportes.',
    contribution:
      'Se construyo una experiencia de usuario orientada a operacion diaria, con componentes reutilizables, visualizacion de datos y flujos conectados al backend.',
    impact:
      'Permite revisar informacion compleja en una interfaz navegable, con herramientas para supervision, analisis y gestion de trabajo.',
    responsibilities: [
      'Crear pantallas y componentes para flujos operacionales.',
      'Conectar formularios, tablas, mapas y graficos con servicios backend.',
      'Mantener una interfaz consistente usando HeroUI y utilidades de estilos.',
    ],
    features: [
      'Paneles con tablas, filtros y visualizacion de informacion operacional.',
      'Integracion con mapas para datos geograficos y rutas.',
      'Graficos y reportes para revisar indicadores.',
      'Autenticacion y consumo de endpoints de la plataforma Innovo.',
    ],
    technicalHighlights: [
      'Next.js con TypeScript.',
      'HeroUI y Tailwind para sistema visual.',
      'Leaflet/Mapbox para mapas.',
      'Chart.js/ECharts para visualizacion de datos.',
    ],
    quickFacts: [
      { label: 'Rol visible', value: 'Frontend de panel operacional' },
      { label: 'UI', value: 'HeroUI, tablas, mapas y graficos' },
      { label: 'Foco', value: 'Supervision y gestion de datos' },
    ],
    demo: {
      type: 'innovo-front',
      title: 'Dashboard operacional Innovo',
      objective:
        'Simular un panel web para revisar KPIs, filtrar asignaciones, consultar mapa y ver detalle de ruta.',
      steps: [
        {
          title: 'KPIs',
          description: 'Revisar indicadores principales del dia.',
        },
        {
          title: 'Sector',
          description: 'Filtrar asignaciones por sector y estado.',
        },
        {
          title: 'Mapa',
          description: 'Visualizar una ruta mock con puntos de trabajo.',
        },
        {
          title: 'Gestion',
          description: 'Confirmar acciones y resumen operativo.',
        },
      ],
    },
  },
  {
    id: 'app-innovo',
    name: 'appInnovo',
    repository: 'Innovo-Servicios/appInnovo',
    url: 'https://github.com/Innovo-Servicios/appInnovo',
    type: 'Mobile',
    status: 'Publicado',
    stack: ['Expo', 'React Native', 'Expo Router', 'Google Maps', 'Camera', 'Notifications'],
    summary:
      'App movil Innovo para trabajo en terreno con mapa, ubicacion, camara, notificaciones y conexion a API.',
    highlight: 'Extension movil de la plataforma Innovo.',
    tagline: 'Aplicacion movil para apoyar rutas, atenciones especiales y trabajo en terreno.',
    context:
      'App Expo/React Native para usuarios en terreno, con rutas de lector, mapa, ubicacion actual y detalle de atenciones especiales.',
    contribution:
      'Se estructuro una experiencia movil conectada al ecosistema Innovo, priorizando navegacion rapida, uso de sensores del dispositivo y consumo de datos operacionales.',
    impact:
      'Acerca la operacion al equipo de campo, permitiendo consultar puntos, ubicacion y tareas desde el dispositivo movil.',
    responsibilities: [
      'Implementar pantallas moviles con Expo Router.',
      'Integrar ubicacion, mapas, camara, notificaciones y almacenamiento seguro.',
      'Conectar la app con la API de Innovo sin exponer configuraciones sensibles.',
    ],
    features: [
      'Mapa con ubicacion actual y marcadores de atenciones especiales.',
      'Pantallas de ruta para usuarios lectores.',
      'Uso de camara, permisos de ubicacion y notificaciones.',
      'Conexion con API remota y almacenamiento seguro para datos de sesion.',
    ],
    technicalHighlights: [
      'Expo 52 y React Native.',
      'Expo Router para navegacion.',
      'react-native-maps con proveedor Google.',
      'Socket.io client y Secure Store para integraciones de app.',
    ],
    quickFacts: [
      { label: 'Rol visible', value: 'Mobile para operacion en terreno' },
      { label: 'Dispositivo', value: 'Ubicacion, camara y notificaciones' },
      { label: 'Plataforma', value: 'Android/iOS con Expo' },
    ],
    demo: {
      type: 'app-innovo',
      title: 'Ruta movil de lector',
      objective:
        'Simular la experiencia movil de un trabajador en terreno revisando ruta, mapa, atenciones y reporte.',
      steps: [
        {
          title: 'Ruta',
          description: 'Abrir la ruta asignada y ver tareas pendientes.',
        },
        {
          title: 'Mapa',
          description: 'Ubicar al lector y mostrar puntos cercanos.',
        },
        {
          title: 'Atencion',
          description: 'Revisar detalle de una atencion especial.',
        },
        {
          title: 'Reporte',
          description: 'Registrar una accion completada desde el telefono.',
        },
      ],
    },
  },
  {
    id: 'pinf',
    name: 'Pinf',
    repository: 'SwTzu/Pinf',
    url: 'https://github.com/SwTzu/Pinf',
    type: 'Full stack',
    status: 'Publicado',
    stack: ['Next.js', 'Express', 'Sequelize', 'MySQL', 'JWT', 'Puppeteer'],
    summary:
      'Sistema full stack universitario para gestion de practicas, con frontend, backend y configuracion por entorno.',
    highlight: 'Proyecto propio destacado para demostrar trabajo full stack.',
    tagline: 'Sistema web para gestionar procesos de practicas universitarias.',
    context:
      'Proyecto PracticasINF desarrollado por estudiantes de la Universidad de Valparaiso, con frontend y backend separados para administrar flujos de practica.',
    contribution:
      'Se participo en un sistema full stack donde la coordinacion entre frontend, backend, variables de entorno y equipo de desarrollo era clave para entregar una aplicacion funcional.',
    impact:
      'Muestra experiencia trabajando en un producto colaborativo con configuracion real, capas separadas y despliegue local reproducible.',
    responsibilities: [
      'Colaborar en una aplicacion full stack con equipo universitario.',
      'Integrar frontend y backend mediante variables de entorno y contratos de API.',
      'Mantener estructura de instalacion y ejecucion documentada para nuevos integrantes.',
    ],
    features: [
      'Frontend Next.js para interfaz de gestion.',
      'Backend Express con Sequelize y MySQL.',
      'Autenticacion, sesiones y envio de correos.',
      'Configuracion separada para frontend y backend mediante archivos de entorno.',
    ],
    technicalHighlights: [
      'Arquitectura frontend/backend independiente.',
      'Sequelize como ORM sobre MySQL.',
      'JWT, sesiones y Nodemailer en backend.',
      'Puppeteer para automatizaciones o generacion de contenido.',
    ],
    quickFacts: [
      { label: 'Rol visible', value: 'Desarrollo full stack colaborativo' },
      { label: 'Contexto', value: 'Proyecto universitario PracticasINF' },
      { label: 'Arquitectura', value: 'Next.js + Express + MySQL' },
    ],
    demo: {
      type: 'pinf',
      title: 'Portal de practicas universitarias',
      objective:
        'Simular un flujo de gestion de practica desde seleccion de estudiante hasta revision documental y estado final.',
      steps: [
        {
          title: 'Estudiante',
          description: 'Seleccionar una postulacion activa.',
        },
        {
          title: 'Practica',
          description: 'Revisar empresa, tutor y periodo comprometido.',
        },
        {
          title: 'Documentos',
          description: 'Validar documentos y requisitos pendientes.',
        },
        {
          title: 'Gestion',
          description: 'Cerrar la revision academica con un resumen.',
        },
      ],
    },
  },
  {
    id: 'claims-backend',
    name: 'claims_platform Backend',
    repository: 'MrDyslexia/claims_platform',
    url: 'https://github.com/MrDyslexia/claims_platform/tree/Backend',
    type: 'Backend',
    status: 'En desarrollo',
    stack: ['Bun', 'TypeScript', 'Express', 'Sequelize', 'MySQL', 'RBAC'],
    summary:
      'API para canal de denuncias con autenticacion, roles, auditoria, migraciones y flujo de resolucion.',
    highlight: 'Backend separado por rama para una plataforma de reclamos.',
    tagline: 'API segura para gestionar denuncias, seguimiento, roles y auditoria.',
    context:
      'Backend MVC para una plataforma de denuncias, construido con Express, TypeScript, Sequelize y Bun sobre una base MySQL.',
    contribution:
      'Se organizo una API con rutas clave, autenticacion JWT, control de permisos, migraciones SQL y mecanismos de auditoria para trazabilidad.',
    impact:
      'Permite sostener un canal de denuncias con flujos formales: registro, consulta publica, asignacion, resolucion y exportacion auditada.',
    responsibilities: [
      'Estructurar API y servicios para denuncias y seguimiento.',
      'Aplicar autenticacion JWT, sesiones y control de permisos por rol.',
      'Preparar migraciones SQL, seed de datos y validacion de tablas.',
    ],
    features: [
      'Registro, login y logout con JWT.',
      'Consulta publica de denuncias mediante numero y clave.',
      'Creacion, asignacion, comentarios y resolucion de denuncias.',
      'Auditoria de requests y exportaciones.',
    ],
    technicalHighlights: [
      'Express 5 con TypeScript y Bun.',
      'Sequelize conectado a MySQL.',
      'RBAC para permisos como crear, resolver, reasignar y exportar.',
      'Migraciones SQL con triggers, vistas y datos base.',
    ],
    quickFacts: [
      { label: 'Rol visible', value: 'Backend de plataforma de denuncias' },
      { label: 'Seguridad', value: 'JWT, sesiones y RBAC' },
      { label: 'Datos', value: 'MySQL, migraciones y auditoria' },
    ],
    demo: {
      type: 'claims-backend',
      title: 'API de denuncias y auditoria',
      objective:
        'Simular el ciclo backend de una denuncia: crear caso, autenticar rol, asignar, resolver y auditar.',
      steps: [
        {
          title: 'Denuncia',
          description: 'Crear una denuncia con numero y clave simulada.',
        },
        {
          title: 'Rol',
          description: 'Autenticar un perfil interno con permisos.',
        },
        {
          title: 'Asignacion',
          description: 'Asignar el caso y registrar comentario operativo.',
        },
        {
          title: 'Auditoria',
          description: 'Resolver y revisar eventos generados por la API.',
        },
      ],
    },
  },
  {
    id: 'claims-frontend',
    name: 'claims_platform Frontend',
    repository: 'MrDyslexia/claims_platform',
    url: 'https://github.com/MrDyslexia/claims_platform/tree/Frontend',
    type: 'Frontend',
    status: 'En desarrollo',
    stack: ['Next.js', 'HeroUI', 'Tailwind', 'TypeScript', 'Forms', 'Recharts'],
    summary:
      'Frontend para canal de denuncias con formulario guiado, seguimiento, mensajes de confianza y experiencia publica.',
    highlight: 'Frontend separado por rama para completar la experiencia de plataforma.',
    tagline: 'Experiencia web publica para ingresar y seguir denuncias de forma confidencial.',
    context:
      'Frontend Next.js para una plataforma de denuncias, con foco en claridad, confianza, confidencialidad y seguimiento en linea.',
    contribution:
      'Se desarrollo una pantalla principal orientada a usuarios finales, con formulario guiado, contenido institucional, seguimiento y senales visuales de seguridad.',
    impact:
      'Reduce friccion para reportar denuncias o reclamos y permite que usuarios no tecnicos entiendan el flujo antes de enviar informacion.',
    responsibilities: [
      'Construir experiencia publica de denuncia con componentes claros.',
      'Disenar llamadas a la accion para crear denuncia y hacer seguimiento.',
      'Preparar contexto de autenticacion de desarrollo para probar roles internos.',
    ],
    features: [
      'Formulario guiado para ingresar denuncias.',
      'Seguimiento de denuncia mediante codigo.',
      'Mensajes de confidencialidad, anonimato y seguridad.',
      'Componentes de UI con HeroUI y soporte para roles de desarrollo.',
    ],
    technicalHighlights: [
      'Next.js con app directory.',
      'HeroUI, Tailwind y Framer Motion.',
      'Lucide icons para senales visuales.',
      'Componentes de formulario y seguimiento conectables al backend.',
    ],
    quickFacts: [
      { label: 'Rol visible', value: 'Frontend de experiencia publica' },
      { label: 'Usuario', value: 'Denunciante o persona que hace seguimiento' },
      { label: 'Foco', value: 'Confianza, claridad y conversion del formulario' },
    ],
    demo: {
      type: 'claims-frontend',
      title: 'Formulario publico de denuncia',
      objective:
        'Simular el ingreso publico de una denuncia, la confirmacion con codigo y el seguimiento del estado.',
      steps: [
        {
          title: 'Inicio',
          description: 'Revisar el contexto y comenzar el formulario.',
        },
        {
          title: 'Formulario',
          description: 'Completar datos ficticios y evidencias resumidas.',
        },
        {
          title: 'Codigo',
          description: 'Recibir numero de seguimiento para consulta posterior.',
        },
        {
          title: 'Seguimiento',
          description: 'Consultar el estado y ver la siguiente accion.',
        },
      ],
    },
  },
]
