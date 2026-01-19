function showSection(sectionId) {
    const sections = document.querySelectorAll(".content");
    sections.forEach(sec => sec.classList.remove("active"));
    document.getElementById(sectionId).classList.add("active");
}

function checkReminder() {
    const selectedDate = new Date(document.getElementById("serviceDate").value);
    const today = new Date();

    if (!selectedDate) {
        document.getElementById("reminderMsg").innerText = "Please select a date.";
        return;
    }

    const diffTime = selectedDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays > 0) {
        document.getElementById("reminderMsg").innerText =
            `⏳ Your vehicle service is in ${diffDays} days.`;
    } else if (diffDays === 0) {
        document.getElementById("reminderMsg").innerText =
            "🚨 Today is your vehicle service day!";
    } else {
        document.getElementById("reminderMsg").innerText =
            "⚠️ Service date has passed. Please schedule immediately!";
    }
}
