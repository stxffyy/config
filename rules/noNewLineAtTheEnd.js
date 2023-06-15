function noNewLineAtTheEnd(code) {
  const lines = code.split('\n');
  return { isRuleCompleted: code.endsWith('\n'), lineNumber: lines.length }
}

module.exports = noNewLineAtTheEnd
