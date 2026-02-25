// Returns success message for UI display
function getMessage(customMessage) {
  return customMessage || "Pipeline is working perfectly!";
}
function showMessage() {
  document.getElementById("output").textContent = getMessage();
}
module.exports = { getMessage };