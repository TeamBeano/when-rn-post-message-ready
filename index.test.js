const whenRNPostMessageReady = require('./index')
jest.useFakeTimers()

test('it periodically checks if postmessage is ready and calls a callback function when so', () => {
  const callback = jest.fn()

  whenRNPostMessageReady(callback)
  expect(callback).not.toBeCalled()

  jest.advanceTimersByTime(800)
  expect(setTimeout).toHaveBeenCalledTimes(5)

  // overwrite postmessage as react native does
  window.postMessage = (foo) => foo

  jest.advanceTimersByTime(200)
  expect(callback).toBeCalled()
})
