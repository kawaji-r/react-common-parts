import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import SampleButton from './SampleButton'

it('サンプルボタンテスト', () => {
  // コンポーネントをレンダー
  const handleClick = jest.fn()
  render(<SampleButton label="クリックしてね" onClick={handleClick} />)

  // 要素が存在していることを検証
  const buttonElement = screen.queryByText('クリックしてね')
  expect(buttonElement).toBeInTheDocument()

  // クリックイベント発火後、1回呼び出されたことを検証
  fireEvent.click(buttonElement!)
  expect(handleClick).toHaveBeenCalledTimes(1)

  // aria-label属性の検証
  expect(buttonElement).toHaveAttribute('aria-label', 'クリックしてね')
})
