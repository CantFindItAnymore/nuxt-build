export const actionTypes = {
  INIT_DOG: 'INIT_DOG',
  UPDATE_DOG: 'UPDATE_DOG',
  UPDATE_DOG_SUC: 'UPDATE_DOG_SUC',
  TEST4: 'TEST4',
  TEST5: 'TEST5'
}

const initDog = () => {
  return {
    type: actionTypes.INIT_DOG
  }
}

const updateDog = () => {
  return {
    type: actionTypes.UPDATE_DOG
  }
}

const updateDogSuc = (imgUrl) => {
  return {
    type: actionTypes.UPDATE_DOG_SUC,
    imgUrl
  }
}

export {
  initDog,
  updateDog,
  updateDogSuc
}
