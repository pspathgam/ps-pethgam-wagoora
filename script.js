/* =======================================================
   Government Primary School Pethgam Wagoora
   MASTER SCRIPT FOR ADMISSION FORM
   ======================================================= */

// OPEN FORM
function openAdmissionForm() {
    document.getElementById("admissionForm").style.display = "block";
    window.scrollTo(0, 0);
}

// CLOSE FORM
function closeAdmissionForm() {
    document.getElementById("admissionForm").style.display = "none";
}

// SUBMIT FORM
function submitAdmissionfmForm(event) {
    event.preventDefault();

    alert("🎉 Admission Form Submitted Successfully!\nYou may download the PDF or take screenshot for your hard copy.");

    document.getElementById("admissionForm").style.display = "none";
    document.getElementById("admissionFormElement").reset();

    return false;
}

// PHOTO PICKER PREVIEW
function previewPhoto(event) {
    const img = document.getElementById("photoPreview");
    img.src = URL.createObjectURL(event.target.files[0]);
}
