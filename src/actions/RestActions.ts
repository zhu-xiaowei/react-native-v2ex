import { Dispatch } from 'redux'
import _ from 'lodash'
import { v2ex } from '../v2ex'
import { v2exOptions } from '../config/v2ex'
import { APP_INIT, APP_INIT_ERROR } from './types'
import { IV2exState } from './../reducers/types'
import { logError } from '../helper/logger'

export const initV2ex = () => {
  v2ex.setOptions(v2exOptions)

  return async (dispatch: Dispatch, _getState: () => IV2exState) => {
    try {
      v2ex.init()
      dispatch({ type: APP_INIT, payload: v2ex })
    } catch (error: any) {
      logError(error)
      dispatch({
        type: APP_INIT_ERROR,
        payload: { errorMessage: error.message }
      })
    }
  }
}
