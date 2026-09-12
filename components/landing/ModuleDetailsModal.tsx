'use client'

import { useEffect, useRef } from 'react'
import { ButtonLink, CarIllustration, Icon } from './shared'

export type ModuleKey = 'fleet' | 'reservations' | 'contracts' | 'finance'

const modules = {
  fleet: {
    eyebrow: '01 / FLOTA',
    title: 'Flota bajo control.',
    description:
      'Consulta en segundos qué vehículos están disponibles, rentados o en mantenimiento y toma decisiones con información actualizada.',
    features: ['Expediente y tarifas por vehículo', 'Disponibilidad por sucursal', 'Mantenimientos y alertas operativas'],
  },
  reservations: {
    eyebrow: '02 / RESERVAS',
    title: 'Reservas sin cruces.',
    description:
      'Una agenda centralizada para detectar conflictos, organizar entregas y convertir cada reserva en una renta sin repetir trabajo.',
    features: ['Calendario con disponibilidad real', 'Conflictos de fechas visibles', 'Estados y seguimiento de cada solicitud'],
  },
  contracts: {
    eyebrow: '03 / CONTRATOS',
    title: 'Contratos que dejan evidencia.',
    description:
      'Genera contratos PDF y documenta la entrega con fotos, kilometraje, combustible y firmas para proteger cada operación.',
    features: ['Inspección de salida y devolución', 'Firmas y documentos en un solo lugar', 'Cargos adicionales respaldados'],
  },
  finance: {
    eyebrow: '04 / FINANZAS',
    title: 'Finanzas para decidir.',
    description:
      'Visualiza cobros, gastos y pendientes para entender el rendimiento de tu rentadora y planificar el siguiente paso.',
    features: ['Cobros y saldos pendientes', 'Gastos por operación o sucursal', 'Reportes y conexión DTE*'],
  },
} as const

type Props = { moduleKey: ModuleKey | null; onClose: () => void }

export function ModuleDetailsModal({ moduleKey, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const returnFocusRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (moduleKey) {
      returnFocusRef.current = document.activeElement as HTMLElement
      if (!dialog.open) dialog.showModal()
    } else if (dialog.open) {
      dialog.close()
    }
  }, [moduleKey])

  useEffect(() => {
    if (moduleKey) return
    returnFocusRef.current?.focus?.()
  }, [moduleKey])

  if (!moduleKey) return <dialog ref={dialogRef} className="r-module-dialog" aria-hidden="true" />
  const item = modules[moduleKey]

  return (
    <dialog
      ref={dialogRef}
      className="r-module-dialog"
      aria-labelledby="module-dialog-title"
      onCancel={(event) => {
        event.preventDefault()
        onClose()
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div className="r-module-dialog-card">
        <header className="r-module-dialog-header">
          <span className="r-eyebrow"><span /> {item.eyebrow}</span>
          <button className="r-module-dialog-close" type="button" onClick={onClose} aria-label="Cerrar detalle">
            <Icon name="close" size={20} />
          </button>
        </header>
        <div className="r-module-dialog-body">
          <div className="r-module-dialog-copy">
            <h2 id="module-dialog-title">{item.title}</h2>
            <p>{item.description}</p>
            <ul>{item.features.map((feature) => <li key={feature}><Icon name="check" size={16} /> {feature}</li>)}</ul>
            <ButtonLink>Agendar una demo</ButtonLink>
          </div>
          <ModuleAnimation moduleKey={moduleKey} />
        </div>
        {moduleKey === 'finance' && <small className="r-module-dialog-note">*DTE sujeto a configuración del proveedor fiscal.</small>}
      </div>
    </dialog>
  )
}

function ModuleAnimation({ moduleKey }: { moduleKey: ModuleKey }) {
  if (moduleKey === 'fleet') return <div className="r-module-animation r-module-fleet-animation"><div className="r-module-status-row"><span><i /> Disponible</span><b>3 vehículos listos</b></div><div className="r-module-car-track"><CarIllustration color="#c0cede" /></div><div className="r-module-track-line"><i /><i /><i /></div><strong>Toyota RAV4 · Sucursal central</strong></div>
  if (moduleKey === 'reservations') return <div className="r-module-animation r-module-reservation-animation"><div className="r-module-calendar-head"><Icon name="calendar" size={18} /><b>Septiembre 2026</b><span>›</span></div><div className="r-module-calendar-grid">{['L','M','M','J','V','S','D', '12','13','14','15','16','17','18'].map((day, index) => <span key={`${day}-${index}`} className={index === 10 ? 'is-selected' : index > 7 && index < 12 ? 'is-booked' : ''}>{day}</span>)}</div><div className="r-module-reservation-bar"><Icon name="car" size={14} /> Toyota Corolla · Ana M.</div><div className="r-module-reservation-bar is-second"><Icon name="car" size={14} /> Kia Sportage · Carlos R.</div></div>
  if (moduleKey === 'contracts') return <div className="r-module-animation r-module-contract-animation"><div className="r-module-paper"><div><span>RENTORA / CONTRATO</span><Icon name="document" size={18} /></div><i /><i /><i /><div className="r-module-signature">Ana Martínez <span><Icon name="check" size={13} /> Firmado</span></div></div><span className="r-module-photo-chip"><Icon name="check" size={14} /> Inspección completa</span></div>
  return <div className="r-module-animation r-module-finance-animation"><div className="r-module-finance-total"><span>Cobrado este mes</span><strong>$8,450</strong><small>+18.4% vs. mes anterior</small></div><div className="r-module-finance-bars"><i style={{ height: '48%' }} /><i style={{ height: '72%' }} /><i style={{ height: '58%' }} /><i style={{ height: '88%' }} /><i style={{ height: '66%' }} /><i style={{ height: '96%' }} /></div><div className="r-module-finance-labels"><span>JUN</span><span>JUL</span><span>AGO</span></div></div>
}
