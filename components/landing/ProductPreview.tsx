'use client'

import { useState } from 'react'
import { CarIllustration, Icon } from './shared'

const tabs = [
  { id: 'fleet', label: 'Mi flota', icon: 'car' },
  { id: 'bookings', label: 'Reservas', icon: 'calendar' },
  { id: 'income', label: 'Ingresos', icon: 'chart' },
]
const cars = [
  {
    name: 'Toyota RAV4',
    category: 'SUV · Automático',
    color: '#b8c0ce',
    status: 'Disponible',
  },
  {
    name: 'Kia Sportage',
    category: 'SUV · Automático',
    color: '#dfd8c8',
    status: 'En renta',
  },
  {
    name: 'Toyota Corolla',
    category: 'Sedán · Automático',
    color: '#b8cbd5',
    status: 'Disponible',
  },
]

export function ProductPreview() {
  const [tab, setTab] = useState('fleet')
  return (
    <div className="r-preview-wrap" id="demo">
      <div className="r-orbit r-orbit-one" />
      <div className="r-orbit r-orbit-two" />
      <div className="r-product-window">
        <div className="r-window-bar">
          <div className="r-window-dots">
            <i />
            <i />
            <i />
          </div>
          <span>
            <Icon name="shield" size={11} /> Tu rentadora, conectada
          </span>
          <span className="r-window-avatar">AC</span>
        </div>
        <div className="r-product-body">
          <div className="r-product-title">
            <div>
              <span>MI RENTADORA</span>
              <h3>Todo listo para un gran día.</h3>
            </div>
            <span className="r-date">
              <Icon name="calendar" size={13} /> 12 sep
            </span>
          </div>
          <div className="r-preview-stats">
            <div>
              <span>Vehículos</span>
              <strong>
                24 <Icon name="car" size={20} />
              </strong>
            </div>
            <div>
              <span>Rentas activas</span>
              <strong>
                18 <span className="r-stat-tag">En ruta</span>
              </strong>
            </div>
            <div>
              <span>Ocupación</span>
              <strong>
                75<span className="r-percent">%</span>
                <span className="r-mini-bars">
                  <i />
                  <i />
                  <i />
                  <i />
                </span>
              </strong>
            </div>
          </div>
          <div
            className="r-preview-tabs"
            role="tablist"
            aria-label="Explorar vista ilustrativa"
          >
            {tabs.map((item) => (
              <button
                key={item.id}
                id={`preview-tab-${item.id}`}
                role="tab"
                aria-selected={tab === item.id}
                aria-controls="preview-panel"
                tabIndex={tab === item.id ? 0 : -1}
                onClick={() => setTab(item.id)}
                onKeyDown={(event) => {
                  const index = tabs.findIndex((t) => t.id === tab)
                  const next =
                    event.key === 'ArrowRight'
                      ? (index + 1) % tabs.length
                      : event.key === 'ArrowLeft'
                        ? (index + tabs.length - 1) % tabs.length
                        : event.key === 'Home'
                          ? 0
                          : event.key === 'End'
                            ? tabs.length - 1
                            : -1
                  if (next >= 0) {
                    event.preventDefault()
                    setTab(tabs[next].id)
                    document
                      .getElementById(`preview-tab-${tabs[next].id}`)
                      ?.focus()
                  }
                }}
              >
                <Icon name={item.icon} size={15} />
                {item.label}
              </button>
            ))}
          </div>
          <div
            id="preview-panel"
            role="tabpanel"
            aria-labelledby={`preview-tab-${tab}`}
            tabIndex={0}
            className="r-preview-panel"
          >
            {tab === 'fleet' && (
              <div className="r-fleet-cards">
                {cars.map((car) => (
                  <div key={car.name} className="r-fleet-card">
                    <span
                      className={`r-status ${car.status === 'En renta' ? 'is-rented' : ''}`}
                    >
                      <i />
                      {car.status}
                    </span>
                    <CarIllustration color={car.color} />
                    <strong>{car.name}</strong>
                    <span className="r-car-category">{car.category}</span>
                    <div className="r-car-rate">
                      <b>
                        $45 <small>/ día</small>
                      </b>
                      <Icon name="diagonal" size={15} />
                    </div>
                  </div>
                ))}
              </div>
            )}
            {tab === 'bookings' && (
              <div className="r-calendar-demo">
                <div className="r-calendar-days">
                  <span>Vehículo</span>
                  {['Lun', 'Mar', 'Mié', 'Jue', 'Vie'].map((day) => (
                    <span key={day}>{day}</span>
                  ))}
                </div>
                {cars.map((car, i) => (
                  <div className="r-calendar-row" key={car.name}>
                    <strong>{car.name}</strong>
                    <div>
                      <span
                        style={{
                          marginLeft: `${i * 13}%`,
                          width: `${75 - i * 9}%`,
                        }}
                      >
                        <Icon name="calendar" size={13} />
                        {
                          [
                            'Renta confirmada',
                            'Entrega programada',
                            'Reserva de Ana',
                          ][i]
                        }
                      </span>
                    </div>
                  </div>
                ))}
                <p>
                  <Icon name="shield" size={14} /> Fechas organizadas. Sin
                  reservas cruzadas.
                </p>
              </div>
            )}
            {tab === 'income' && (
              <div className="r-income-demo">
                <div>
                  <span>Ingresos de la semana</span>
                  <strong>
                    $3,240<span>USD</span>
                  </strong>
                </div>
                <div className="r-chart">
                  {[35, 58, 43, 74, 60, 95, 79].map((height, i) => (
                    <div key={i}>
                      <i style={{ height: `${height}%` }} />
                      <span>{['L', 'M', 'M', 'J', 'V', 'S', 'D'][i]}</span>
                    </div>
                  ))}
                </div>
                <p>
                  <Icon name="wallet" size={14} /> Cobros, gastos y balance en
                  un solo lugar.
                </p>
              </div>
            )}
          </div>
          <div className="r-product-bottom">
            <span>
              <i /> Operación organizada
            </span>
            <span>Vista ilustrativa · Datos de ejemplo</span>
          </div>
        </div>
      </div>
      <div className="r-floating-notice">
        <span className="r-notice-icon">
          <Icon name="check" size={18} />
        </span>
        <div>
          <strong>¡Una nueva reserva!</strong>
          <span>Tu próximo viaje empieza aquí.</span>
        </div>
        <span className="r-notice-time">Ahora</span>
      </div>
      <div className="r-floating-chip">
        <Icon name="shield" size={17} /> Cada vehículo, bajo control.
      </div>
    </div>
  )
}
