import test from 'ava'

import inventory from '../../client/reducers/inventory'
import {addToInv} from '../../client/actions/inventory'

import worldItems from '../../client/reducers/worldItems'
import {deleteItem} from '../../client/actions/worldItems'

import cellLocked from '../../client/reducers/cellLocked'
import {openCell} from '../../client/actions/door'

import currentLog from '../../client/reducers/currentLog'
import {updateLog} from '../../client/actions/currentLog'

import {locChange} from '../../client/actions/door'
import location from '../../client/reducers/location'

import {sendToFunc} from  '../../client/actions/sendToFunction'
import func from '../../client/reducers/function'

import {activateItem, deactivateItem} from '../../client/actions/activeItem'
import activeItem from '../../client/reducers/activeItem'

test('The default state of inventory is an empty array', t => {
  const initialState = inventory(undefined, {})
  t.is(initialState.length, 0)
})

test('Have added an item to the inventory', t => {
  const nextState = inventory([],addToInv(1))
  t.is(nextState.length ,1)
})

test('When a worlditem is clicked it is removed from the worlditems array', t => {
  const initialState = ['skull', 'bucket', 'brick', 'cellDoor']
  const nextState = worldItems(initialState, deleteItem('skull'))
  t.is(nextState.length, 3)
})

test('The door is locked then unlocked', t => {
  const nextState = cellLocked(true, openCell())
  t.is(nextState, false)
})

test('Location change', t => {
  const nextState = location('', locChange('staffroom'))
  t.is(nextState, 'staffroom')
})

test('Current log is updated', t => {
  const nextState = currentLog('', updateLog('I am updated!'))
  t.is(nextState, 'I am updated!')
})

test('Receives function code', t => {
  const nextState = func([], sendToFunc(1))
  t.is(nextState.length, 1)
})

test('An item becomes active when clicked', t => {
  const nextState = activeItem((''), activateItem('bucket'))
  t.is(nextState, 'bucket')
})

test('An item becomes deactivated after it has been used', t => {
  const nextState = activeItem((''), deactivateItem('skull'))
  t.is(nextState, '')
})
