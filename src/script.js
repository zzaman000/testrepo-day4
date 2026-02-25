// Returns success message for UI display
function getMessage(customMessage) {
  if (typeof customMessage === "string" && customMessage.trim().length > 0) {
    return customMessage;
  }
  return "Pipeline is working from Branch A!";
}
function showMessage() {
  document.getElementById("output").textContent = getMessage();
}
module.exports = { getMessage };