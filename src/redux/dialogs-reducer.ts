export type DialogType = {
  id: number;
  name: string;
};
export type MessageType = {
  message: string;
  id: number;
};

const initialState = {
  dialogs: [
    { id: 1, name: 'Alex' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Dylan' },
    { id: 4, name: 'Erica' },
    { id: 5, name: 'Felix' },
    { id: 6, name: 'Roman1' },
  ] as Array<DialogType>,
  messages: [
    { id: 1, message: 'Hi!' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'Element =)' },
  ] as Array<MessageType>,
  newMessageBody: '',
};
export type DialogsInitialStateType = typeof initialState;

export const dialogsReducer = (
  state: DialogsInitialStateType = initialState,
  action: ActionsTypes,
): DialogsInitialStateType => {
  switch (action.type) {
    case 'UPDATE-NEW-MESSAGE-BODY': {
      return {
        ...state,
        newMessageBody: action.newMessage,
      };
    }
    case 'SEND-MESSAGE': {
      const body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: '',
        messages: [...state.messages, { id: 6, message: body }],
      };
    }
    default:
      return state;
  }
};

type ActionsTypes =
  | ReturnType<typeof changeNewMessageAC>
  | ReturnType<typeof sendMessageBodyAC>;

export const changeNewMessageAC = (newMessage: string) =>
  ({ type: 'UPDATE-NEW-MESSAGE-BODY', newMessage } as const);
export const sendMessageBodyAC = () => ({ type: 'SEND-MESSAGE' } as const);
