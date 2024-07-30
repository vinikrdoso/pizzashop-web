import { render, screen } from '@testing-library/react'

import { OrderStatus } from './order-status'

describe('OrderStatus', () => {
  test('renders the correct status badge', () => {
    render(<OrderStatus status="pending" />)
    const badgeElement = screen.getByTestId('badge')
    expect(badgeElement).toHaveClass('bg-slate-400')
  })

  test('renders the correct status text', () => {
    render(<OrderStatus status="delivered" />)
    const statusTextElement = screen.getByText('Entregue')
    expect(statusTextElement).toBeInTheDocument()
  })
})
