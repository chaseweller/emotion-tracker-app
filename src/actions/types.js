
import { actionTypes } from 'react-redux-firebase';

export const actionPrefix = '@@reactReduxFirebase'

export const actionTypes = {

  START: `${actionTypes}/START`,
  SET_PROFILE: `${actionTypes}/SET_PROFILE`,
  LOGIN: `${actionTypes}/LOGIN`,
  LOGOUT: `${actionTypes}/LOGOUT`,
  LOGIN_ERROR: `${actionTypes}/LOGIN_ERROR`

}
