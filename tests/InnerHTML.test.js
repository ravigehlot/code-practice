/**
 * @jest-environment jsdom
 */
import { getClassName, getQuerySelector } from '../src/InnerHTML'

test('Get innerHTML from class name', () => {
  getClassName()
})

test('Get innerHTML from query selector', () => {
  getQuerySelector()
})
