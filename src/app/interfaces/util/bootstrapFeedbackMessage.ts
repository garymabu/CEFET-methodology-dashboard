interface IFeedbackMessage {
  type:FeedbackType,
  message: string,
}

type FeedbackType = 'valid'|'invalid'

export default IFeedbackMessage;