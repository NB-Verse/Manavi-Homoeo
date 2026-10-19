/* ====== EDIT THESE TWO LINES ====== */
var CLINIC_WHATSAPP = "910000000000";      // country code + number, no + or spaces
var CLINIC_EMAIL    = "clinic@aalok.co.in";
/* ================================== */

document.getElementById("yr").textContent = new Date().getFullYear();

// Block past dates in the appointment form
var d = document.getElementById("pdate");
if (d) { d.min = new Date().toISOString().split("T")[0]; }

function waLink(text) {
  return "https://wa.me/" + CLINIC_WHATSAPP + "?text=" + encodeURIComponent(text);
}

// Appointment request -> WhatsApp (email as fallback)
document.getElementById("apptForm").addEventListener("submit", function (e) {
  e.preventDefault();
  var v = function (id) { return document.getElementById(id).value.trim(); };
  var text =
    "Appointment request\n" +
    "Name: " + v("pname") + "\n" +
    "Phone: " + v("pphone") + "\n" +
    "Date: " + v("pdate") + "\n" +
    "Time: " + v("ptime") + "\n" +
    "Visit type: " + v("ptype") + "\n" +
    (v("pemail") ? "Email: " + v("pemail") + "\n" : "") +
    "Concern: " + (v("pnote") || "-");
  var mail = "mailto:" + CLINIC_EMAIL + "?subject=" +
    encodeURIComponent("Appointment request - " + v("pname")) +
    "&body=" + encodeURIComponent(text);
  document.getElementById("emailFallback").href = mail;
  document.getElementById("apptMsg").style.display = "block";
  window.open(waLink(text), "_blank");
});

// Feedback -> WhatsApp
document.getElementById("feedbackForm").addEventListener("submit", function (e) {
  e.preventDefault();
  var text =
    "Patient feedback\n" +
    "Name: " + document.getElementById("fname").value.trim() + "\n" +
    "Rating: " + document.getElementById("frating").value + "/5\n" +
    "Feedback: " + document.getElementById("fmsg").value.trim();
  window.open(waLink(text), "_blank");
  e.target.reset();
});
