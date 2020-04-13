/* global fetch */

import { all, call, delay, put, take, takeLatest } from 'redux-saga/effects'
import es6promise from 'es6-promise'
import 'isomorphic-fetch'

import {
  actionTypes,
  updateDogSuc
} from './actions'

es6promise.polyfill()

function* initDog() {
  yield take(actionTypes.INIT_DOG)
  const res = yield fetch('https://dog.ceo/api/breeds/image/random')
  const data = yield res.json()
  yield put(updateDogSuc(data.message))
}

function* updateDog() {
  try {
    const res = yield fetch('https://dog.ceo/api/breeds/image/random')
    const data = yield res.json()
    yield put(updateDogSuc(data.message))
  } catch (err) {}
}

function* rootSaga() {
  yield all([
    call(initDog),
    takeLatest(actionTypes.UPDATE_DOG, updateDog)
  ])
}

export default rootSaga
