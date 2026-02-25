// Returns success message for UI display
function getMessage() {
  return "Pipeline is working well!";
}
function showMessage() {
  document.getElementById("output").textContent = getMessage();
}
module.exports = { getMessage };