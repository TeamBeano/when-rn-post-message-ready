function whenRNPostMessageReady(cb) {
  if (window.postMessage.length === 1) {
    cb();
  } else {
    setTimeout(function() {
      whenRNPostMessageReady(cb)
    }, 200);
  }
}

module.exports = whenRNPostMessageReady
