var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
  }

ready(() => {
// $(document).ready(function () {
    document.querySelector("#head_button").addEventListener("click", (e) => {
    // $("#section_head_title_button_contact_us").click(function () {
        const el = document.getElementById("Contact");
        el.scrollIntoView(false);
    });

    document.querySelector("#project_form_submit_message").addEventListener("click", (e) => {
        // $("#need_project_submit_send_message").click(function () {
        let flag = true;

        if (project_form_names.value.search("[A-Za-zА-Яа-я]") === -1 || project_form_names.value.length === 0) {
            alert("Ім'я повинно складатись тільки з букв.");
            project_form_names.className = "error__input";
            flag = false;
        } else {
            project_form_names.className = "valid__input";
        }
        if (project_form_email.value.search("[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}") === -1 || project_form_email.value.length === 0) {
            alert("Не вірно вказанний email.");
            project_form_email.className = "error__input";
            flag = false;
        } else {
            project_form_email.className = "valid__input";
        }
        if (project_form_title.value.search("[A-Za-zА-Яа-я]") === -1 || project_form_title.value.length === 0) {
            alert("Назва повинно складатись тільки з букв.");
            project_form_title.className = "error__input-title";
            flag = false;
        } else {
            project_form_title.className = "valid__input-title";
        }

        if (flag) {
            alert("Your Name is " + project_form_names.value + " Your Email is " + project_form_email.value + " Your Title " + project_form_title.value + " Your Comment " + project_form_comment.value);
        }
    });
});
