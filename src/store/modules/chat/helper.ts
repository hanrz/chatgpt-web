import { ss } from '@/utils/storage'

const LOCAL_NAME = 'chatStorage'

export function defaultState(): Chat.ChatState {
<<<<<<< HEAD
  const uuid = Date.now()
  return { active: uuid, history: [{ uuid, title: '新对话', isEdit: false }], chat: [{ uuid, data: [] }] }
=======
  const uuid = 1002
  return {
    active: uuid,
    usingContext: true,
    history: [{ uuid, title: 'New Chat', isEdit: false }],
    chat: [{ uuid, data: [] }],
  }
>>>>>>> 9bd88eac844625d4f743838e84c8923cd8c42cf3
}

export function getLocalState(): Chat.ChatState {
  const localState = ss.get(LOCAL_NAME)
  return { ...defaultState(), ...localState }
}

export function setLocalState(state: Chat.ChatState) {
  ss.set(LOCAL_NAME, state)
}
