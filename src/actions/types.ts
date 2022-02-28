/**
 * Created by leon<silenceace@gmail.com> on 22/2/22.
 */

export const APP_INIT = 'v2ex_init'
export const APP_LATEST_VERSION = 'v2ex_latest_version'
export const APP_SITE_INFO = 'v2ex_site_info'
export const APP_SITE_STAT = 'v2ex_site_stat'
export const APP_INIT_ERROR = 'v2ex_init_error'

export const APP_HOME_SWITCH_NODE = 'v2ex_home_switch_node'
export const APP_HOME_LOAD_MORE_TOPICS = 'v2ex_home_load_more_topics'
export const APP_HOME_NODE_TOPICS = 'v2ex_home_node_topics'

export const APP_SETTING_LOCALES = 'v2ex_locales'

export const APP_NOTIFICATION_PULL = 'notification_pull'
export const APP_NOTIFICATION_LATEST = 'notification'
export const APP_NOTIFICATION_REMOVE = 'notification_remove'

export const MEMBER_PROFILE = 'profile'
export const MEMBER_FOLLOW_PEOPLE = 'follow_people'
export const MEMBER_LIKE_TOPICS = 'like_topics'
export const MEMBER_TOKEN = 'member_token'

export const FEEDBACKING = 'feedbacking'
export const FEEDBACK_DONE = 'feedback_done'

export const TOPIC_GET = 'topic_get'
export const TOPIC_REPLIES = 'topic_replies'

export const APP_AUTH = 'v2ex_auth'
export const APP_LOGOUT = 'v2ex_logout'
export const APP_LOGIN_SUCCESS = 'v2ex_login_success'
export const APP_AUTH_ERROR = 'v2ex_auth_error'

export const ActionTypes = {
  APP_INIT,
  APP_LATEST_VERSION,
  APP_SITE_INFO,
  APP_INIT_ERROR,
  APP_HOME_SWITCH_NODE,
  APP_HOME_NODE_TOPICS,
  APP_HOME_LOAD_MORE_TOPICS,
  APP_NOTIFICATION_PULL,
  APP_SETTING_LOCALES,
  APP_NOTIFICATION_LATEST,
  APP_NOTIFICATION_REMOVE,
  MEMBER_PROFILE,
  MEMBER_FOLLOW_PEOPLE,
  MEMBER_LIKE_TOPICS,
  MEMBER_TOKEN,
  FEEDBACKING,
  TOPIC_GET,
  APP_SITE_STAT,
  TOPIC_REPLIES,
  FEEDBACK_DONE,
  APP_AUTH,
  APP_LOGOUT,
  APP_LOGIN_SUCCESS,
  APP_AUTH_ERROR
}

// see https://stackoverflow.com/questions/52393730/typescript-string-literal-union-type-from-enum
export type ActionTypes = typeof ActionTypes[keyof typeof ActionTypes]

/**
 * @description Action Entity
 */
export interface Action {
  type: ActionTypes
  payload: any
}