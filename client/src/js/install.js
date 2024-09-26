const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// Added an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  // Store the event for later use
  window.deferredPrompt = event;
  // Make the install button visible
  butInstall.style.display = "block";
});

// Implemented a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
    // No prompt event stored, exit the function
    return;
  }

  // Show the prompt
  promptEvent.prompt();
  // Wait for the user's response
  const result = await promptEvent.userChoice;

  if (result.outcome === "accepted") {
    console.log("User accepted the install prompt");
    showFeedback("PWA installed successfully!");
  } else {
    console.log("User dismissed the install prompt");
    showFeedback("PWA installation dismissed.");
  }

  // Clear the stored prompt since it's been used
  window.deferredPrompt = null;
  // Hide the install button after the prompt
  butInstall.style.display = "none";
});

// Added a handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  console.log("PWA has been installed");
  // Optionally hide the install button after installation
  butInstall.style.display = "none";
});
