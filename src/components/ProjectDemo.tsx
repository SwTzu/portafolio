import { useState } from 'react'
import type { DemoType, Project } from '../data/projects'

type ProjectDemoModalProps = {
  project: Project
  onClose: () => void
}

type TableColumn = {
  key: string
  label: string
}

type TableRow = Record<string, string>

function DemoMetric({ label, value, tone = 'neutral' }: { label: string; value: string; tone?: string }) {
  return (
    <div className={`demo-metric ${tone}`}>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  )
}

function DemoTable({ columns, rows }: { columns: TableColumn[]; rows: TableRow[] }) {
  return (
    <div className="demo-table-wrap">
      <table className="demo-table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>{column.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={`${row[columns[0].key]}-${index}`}>
              {columns.map((column) => (
                <td key={column.key}>{row[column.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function StatusPill({ children, tone = 'info' }: { children: string; tone?: string }) {
  return <span className={`demo-pill ${tone}`}>{children}</span>
}

function DemoNotice({ children }: { children: string }) {
  return <p className="demo-notice">{children}</p>
}

function DemoMap({ points = 5, active = 2 }: { points?: number; active?: number }) {
  return (
    <div className="demo-map" aria-label="Mapa simulado">
      {Array.from({ length: points }).map((_, index) => (
        <span
          className={index === active ? 'map-point active' : 'map-point'}
          key={`point-${index}`}
          style={{
            left: `${16 + ((index * 17) % 68)}%`,
            top: `${20 + ((index * 23) % 58)}%`,
          }}
        />
      ))}
      <div className="map-route" />
    </div>
  )
}

function ProgressLine({ value }: { value: number }) {
  return (
    <div className="progress-line" aria-label={`Progreso ${value}%`}>
      <span style={{ width: `${value}%` }} />
    </div>
  )
}

function ApiBlock({ title, body, tone = 'neutral' }: { title: string; body: string; tone?: string }) {
  return (
    <div className={`api-block ${tone}`}>
      <span>{title}</span>
      <code>{body}</code>
    </div>
  )
}

function renderSeminarioDemo(step: number) {
  const patientRows = [
    { patient: 'Paciente A-104', status: 'Imagen pendiente', risk: 'Medio' },
    { patient: 'Paciente B-220', status: 'Control semanal', risk: 'Alto' },
    { patient: 'Paciente C-018', status: 'Validado', risk: 'Bajo' },
  ]

  if (step === 0) {
    return (
      <>
        <div className="demo-metrics-grid">
          <DemoMetric label="Pacientes" value="3" />
          <DemoMetric label="Imagenes listas" value="2" />
          <DemoMetric label="Pendiente" value="1 caso" tone="warning" />
        </div>
        <DemoTable
          columns={[
            { key: 'patient', label: 'Paciente' },
            { key: 'status', label: 'Estado' },
            { key: 'risk', label: 'Riesgo' },
          ]}
          rows={patientRows}
        />
      </>
    )
  }

  if (step === 1) {
    return (
      <div className="demo-split">
        <div className="mock-upload">
          <span className="upload-icon">JPG</span>
          <strong>herida_control_104.jpg</strong>
          <p>Archivo simulado validado: formato correcto, peso aceptado y paciente asociado.</p>
        </div>
        <div className="demo-card-stack">
          <DemoMetric label="Validacion" value="OK" tone="success" />
          <DemoMetric label="Token JWT" value="Presente" />
          <DemoMetric label="Destino" value="/imagenes" />
        </div>
      </div>
    )
  }

  if (step === 2) {
    return (
      <div className="analysis-panel">
        <div className="scan-preview">
          <span />
          <span />
          <span />
        </div>
        <div>
          <StatusPill tone="success">Segmentacion completada</StatusPill>
          <h3>Resultado PWAT simulado</h3>
          <ProgressLine value={78} />
          <div className="demo-metrics-grid compact">
            <DemoMetric label="Necrosis" value="1/4" />
            <DemoMetric label="Exudado" value="2/4" />
            <DemoMetric label="Total" value="9 pts" tone="warning" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="demo-result">
      <StatusPill tone="success">Reporte listo</StatusPill>
      <h3>Validacion end-to-end finalizada</h3>
      <p>
        La prueba demuestra autenticacion, carga de imagen, ejecucion de procesamiento y entrega de
        resultado clinico/academico en una experiencia conectada.
      </p>
      <DemoNotice>Esta demo no procesa imagenes reales ni ejecuta Python.</DemoNotice>
    </div>
  )
}

function renderInnovoBackDemo(step: number) {
  if (step === 0) {
    return (
      <>
        <div className="demo-metrics-grid">
          <DemoMetric label="Sectores" value="4" />
          <DemoMetric label="Lecturas" value="128" />
          <DemoMetric label="ATE" value="12" tone="warning" />
        </div>
        <DemoTable
          columns={[
            { key: 'sector', label: 'Sector' },
            { key: 'worker', label: 'Trabajador' },
            { key: 'status', label: 'Estado' },
          ]}
          rows={[
            { sector: 'Ruta 11', worker: 'Camila R.', status: 'Asignada' },
            { sector: 'Ruta 12', worker: 'Diego P.', status: 'En terreno' },
            { sector: 'Ruta 14', worker: 'Sofia M.', status: 'Pendiente' },
          ]}
        />
      </>
    )
  }

  if (step === 1) {
    return (
      <div className="mail-console">
        <ApiBlock title="Inbox" body="Asunto: Atenciones Especiales / adjunto: ate_2026_05_07.xls" />
        <ApiBlock title="Filtro" body="BOT_EMAIL_SUBJECT=Atenciones Especiales" tone="info" />
        <ApiBlock title="Estado" body="Adjunto descargado en storage simulado" tone="success" />
      </div>
    )
  }

  if (step === 2) {
    return (
      <DemoTable
        columns={[
          { key: 'meter', label: 'Medidor' },
          { key: 'address', label: 'Direccion' },
          { key: 'action', label: 'Accion' },
        ]}
        rows={[
          { meter: '42478', address: 'Av. Principal 120', action: 'Crear ATE' },
          { meter: '98104', address: 'Los Aromos 45', action: 'Actualizar ruta' },
          { meter: '77321', address: 'Pasaje Norte 8', action: 'Notificar' },
        ]}
      />
    )
  }

  return (
    <div className="demo-result">
      <StatusPill tone="success">Evento emitido</StatusPill>
      <h3>Notificacion operacional creada</h3>
      <p>
        La prueba recorre asignaciones, lectura de correo, extraccion de medidores y emision de
        una notificacion ficticia para el equipo.
      </p>
      <ApiBlock title="socket:event" body="ate.created -> sector 11 -> 3 medidores" tone="success" />
    </div>
  )
}

function renderInnovoFrontDemo(step: number) {
  if (step === 0) {
    return (
      <div className="demo-metrics-grid">
        <DemoMetric label="Lecturas hoy" value="312" />
        <DemoMetric label="ATE abiertas" value="18" tone="warning" />
        <DemoMetric label="Cumplimiento" value="84%" tone="success" />
        <DemoMetric label="Trabajadores" value="9" />
      </div>
    )
  }

  if (step === 1) {
    return (
      <>
        <div className="filter-preview">
          <StatusPill>Sector 11</StatusPill>
          <StatusPill tone="success">Fecha actual</StatusPill>
          <StatusPill tone="warning">Con ATE</StatusPill>
        </div>
        <DemoTable
          columns={[
            { key: 'route', label: 'Ruta' },
            { key: 'worker', label: 'Trabajador' },
            { key: 'progress', label: 'Avance' },
          ]}
          rows={[
            { route: '11-A', worker: 'Camila R.', progress: '72%' },
            { route: '11-B', worker: 'Diego P.', progress: '66%' },
            { route: '11-C', worker: 'Sofia M.', progress: '91%' },
          ]}
        />
      </>
    )
  }

  if (step === 2) {
    return (
      <div className="demo-split map-layout">
        <DemoMap points={7} active={3} />
        <div className="demo-card-stack">
          <DemoMetric label="Ruta seleccionada" value="11-B" />
          <DemoMetric label="Puntos" value="28" />
          <DemoMetric label="Incidencias" value="3" tone="warning" />
        </div>
      </div>
    )
  }

  return (
    <div className="demo-result">
      <StatusPill tone="success">Gestion actualizada</StatusPill>
      <h3>Vista operativa lista para decision</h3>
      <p>
        La demo muestra como el frontend resume datos, permite filtrar por sector, ubica rutas y
        entrega una lectura rapida del estado operacional.
      </p>
    </div>
  )
}

function renderAppInnovoDemo(step: number) {
  const phoneStatus = ['Ruta asignada', 'Ubicacion activa', 'ATE seleccionada', 'Reporte enviado']

  return (
    <div className="phone-demo-wrap">
      <div className="phone-frame">
        <div className="phone-topbar">
          <strong>Innovo App</strong>
          <span>{phoneStatus[step]}</span>
        </div>
        {step === 0 && (
          <div className="phone-screen">
            <DemoMetric label="Ruta" value="Lector 11-B" />
            <div className="route-list">
              <span>Medidor 42478 - Pendiente</span>
              <span>Medidor 98104 - En ruta</span>
              <span>Medidor 77321 - ATE</span>
            </div>
          </div>
        )}
        {step === 1 && (
          <div className="phone-screen">
            <DemoMap points={5} active={1} />
            <StatusPill tone="success">GPS activo</StatusPill>
          </div>
        )}
        {step === 2 && (
          <div className="phone-screen">
            <h3>Atencion especial</h3>
            <p>Direccion con medidor inaccesible. Se requiere fotografia y comentario.</p>
            <div className="camera-box">Camara simulada</div>
          </div>
        )}
        {step === 3 && (
          <div className="phone-screen">
            <StatusPill tone="success">Sincronizado</StatusPill>
            <h3>Reporte enviado</h3>
            <p>Foto, comentario y ubicacion fueron guardados localmente en esta simulacion.</p>
          </div>
        )}
      </div>
      <div className="demo-card-stack">
        <DemoMetric label="Permisos" value="GPS / Camara / Notificaciones" />
        <DemoMetric label="API" value="Conexion simulada" />
        <DemoMetric label="Modo" value="Datos ficticios" tone="warning" />
      </div>
    </div>
  )
}

function renderPinfDemo(step: number) {
  if (step === 0) {
    return (
      <div className="student-card">
        <h3>Valentina Rojas</h3>
        <p>Practica profesional - Ingenieria Civil Informatica</p>
        <div className="demo-metrics-grid compact">
          <DemoMetric label="Estado" value="En revision" tone="warning" />
          <DemoMetric label="Avance" value="68%" />
          <DemoMetric label="Periodo" value="2026-1" />
        </div>
      </div>
    )
  }

  if (step === 1) {
    return (
      <div className="timeline">
        <span className="done">Postulacion recibida</span>
        <span className="done">Empresa validada</span>
        <span className="active">Tutor pendiente</span>
        <span>Informe final</span>
      </div>
    )
  }

  if (step === 2) {
    return (
      <DemoTable
        columns={[
          { key: 'doc', label: 'Documento' },
          { key: 'owner', label: 'Responsable' },
          { key: 'status', label: 'Estado' },
        ]}
        rows={[
          { doc: 'Carta de aceptacion', owner: 'Empresa', status: 'Aprobado' },
          { doc: 'Seguro escolar', owner: 'Escuela', status: 'Aprobado' },
          { doc: 'Plan de trabajo', owner: 'Estudiante', status: 'Pendiente' },
        ]}
      />
    )
  }

  return (
    <div className="demo-result">
      <StatusPill tone="success">Revision lista</StatusPill>
      <h3>Practica preparada para seguimiento</h3>
      <p>
        La mini app muestra el flujo de gestion academica: postulacion, estado de practica,
        documentos y avance de revision.
      </p>
    </div>
  )
}

function renderClaimsBackendDemo(step: number) {
  if (step === 0) {
    return (
      <div className="mail-console">
        <ApiBlock title="POST /denuncias" body="{ tipo: etica, canal: web, anonima: true }" />
        <ApiBlock title="201 Created" body="{ numero: DNC-2407, clave: ***-simulada }" tone="success" />
      </div>
    )
  }

  if (step === 1) {
    return (
      <div className="demo-split">
        <ApiBlock title="POST /auth/login" body="{ rol: supervisor, permiso: DENUNCIA_REASIGNAR }" />
        <div className="demo-card-stack">
          <DemoMetric label="JWT" value="Emitido" tone="success" />
          <DemoMetric label="Sesion" value="jti activo" />
          <DemoMetric label="Permisos" value="4" />
        </div>
      </div>
    )
  }

  if (step === 2) {
    return (
      <DemoTable
        columns={[
          { key: 'event', label: 'Evento' },
          { key: 'role', label: 'Rol' },
          { key: 'result', label: 'Resultado' },
        ]}
        rows={[
          { event: 'Asignar caso', role: 'Supervisor', result: 'Analista asignado' },
          { event: 'Comentario', role: 'Analista', result: 'Solicita antecedentes' },
          { event: 'Resolucion', role: 'Resolver', result: 'En revision' },
        ]}
      />
    )
  }

  return (
    <div className="demo-result">
      <StatusPill tone="success">Auditoria registrada</StatusPill>
      <h3>Caso resuelto y trazado</h3>
      <ApiBlock title="audit_log" body="denuncia.resuelta -> export_auditoria -> request_logger" />
      <p>La prueba muestra control de permisos, trazabilidad y flujo backend completo.</p>
    </div>
  )
}

function renderClaimsFrontendDemo(step: number) {
  if (step === 0) {
    return (
      <div className="public-flow">
        <StatusPill tone="success">100% confidencial</StatusPill>
        <h3>Canal de denuncias</h3>
        <p>Inicio publico con mensajes de confianza, anonimato y seguimiento en linea.</p>
      </div>
    )
  }

  if (step === 1) {
    return (
      <div className="fake-form">
        <label>
          Tipo
          <span>Conducta irregular</span>
        </label>
        <label>
          Relato
          <span>Descripcion resumida con antecedentes ficticios.</span>
        </label>
        <label>
          Evidencia
          <span>2 archivos simulados adjuntos</span>
        </label>
      </div>
    )
  }

  if (step === 2) {
    return (
      <div className="demo-result">
        <StatusPill tone="success">Denuncia recibida</StatusPill>
        <h3>Codigo DNC-2407</h3>
        <p>El usuario recibe un codigo ficticio para consultar el estado sin crear una cuenta.</p>
      </div>
    )
  }

  return (
    <div className="tracking-card">
      <h3>Seguimiento</h3>
      <div className="timeline">
        <span className="done">Recibida</span>
        <span className="done">Asignada</span>
        <span className="active">En investigacion</span>
        <span>Resuelta</span>
      </div>
      <DemoNotice>El seguimiento usa datos ficticios y no consulta una API real.</DemoNotice>
    </div>
  )
}

function renderDemo(type: DemoType, step: number) {
  switch (type) {
    case 'seminario':
      return renderSeminarioDemo(step)
    case 'innovo-back':
      return renderInnovoBackDemo(step)
    case 'innovo-front':
      return renderInnovoFrontDemo(step)
    case 'app-innovo':
      return renderAppInnovoDemo(step)
    case 'pinf':
      return renderPinfDemo(step)
    case 'claims-backend':
      return renderClaimsBackendDemo(step)
    case 'claims-frontend':
      return renderClaimsFrontendDemo(step)
  }
}

export function ProjectDemoModal({ project, onClose }: ProjectDemoModalProps) {
  const [step, setStep] = useState(0)
  const isLastStep = step === project.demo.steps.length - 1

  const goNext = () => {
    setStep((current) => Math.min(current + 1, project.demo.steps.length - 1))
  }

  const goPrevious = () => {
    setStep((current) => Math.max(current - 1, 0))
  }

  const resetDemo = () => {
    setStep(0)
  }

  return (
    <div
      className="modal-backdrop demo-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose()
        }
      }}
    >
      <article
        aria-describedby={`demo-objective-${project.id}`}
        aria-labelledby={`demo-title-${project.id}`}
        aria-modal="true"
        className="project-modal demo-modal"
        role="dialog"
      >
        <header className="modal-header demo-modal-header">
          <div>
            <p className="repo-name">{project.repository}</p>
            <h2 id={`demo-title-${project.id}`}>{project.demo.title}</h2>
            <p className="modal-tagline" id={`demo-objective-${project.id}`}>
              {project.demo.objective}
            </p>
          </div>
          <button className="close-button" type="button" onClick={onClose} aria-label="Cerrar demo">
            Cerrar
          </button>
        </header>

        <DemoNotice>Demo simulada con datos ficticios. No usa APIs, credenciales ni bases reales.</DemoNotice>

        <div className="demo-layout">
          <aside className="demo-stepper" aria-label="Pasos de la demo">
            {project.demo.steps.map((demoStep, index) => (
              <button
                className={index === step ? 'active' : index < step ? 'done' : ''}
                key={demoStep.title}
                type="button"
                onClick={() => setStep(index)}
              >
                <span>{index + 1}</span>
                <strong>{demoStep.title}</strong>
                <small>{demoStep.description}</small>
              </button>
            ))}
          </aside>

          <section className="demo-workspace">
            <div className="demo-workspace-header">
              <div>
                <p className="modal-section-label">Paso {step + 1}</p>
                <h3>{project.demo.steps[step].title}</h3>
              </div>
              <StatusPill tone={isLastStep ? 'success' : 'info'}>
                {isLastStep ? 'Demo completada' : 'En progreso'}
              </StatusPill>
            </div>
            {renderDemo(project.demo.type, step)}
          </section>
        </div>

        <footer className="modal-footer demo-footer">
          <button className="secondary-demo-action" type="button" onClick={resetDemo}>
            Reiniciar demo
          </button>
          <div className="demo-nav-actions">
            <button type="button" onClick={goPrevious} disabled={step === 0}>
              Anterior
            </button>
            <button type="button" onClick={goNext} disabled={isLastStep}>
              Siguiente
            </button>
          </div>
        </footer>
      </article>
    </div>
  )
}
