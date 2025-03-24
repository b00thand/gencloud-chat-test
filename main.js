document.addEventListener("DOMContentLoaded", function () {
    console.log("Page loaded successfully");

    // Check if Genesys is available
    if (typeof Genesys !== "undefined") {
        Genesys("subscribe", "Messenger.ready", function () {
            console.log("Genesys Messenger is ready");

            // Set custom attributes for web messaging
            Genesys("command", "Database.set", { 
                messaging: { 
                    customAttributes: { 
                        myKey: 'value' 
                    }
                }
            });

            console.log("Custom attribute set successfully");
        });
    } else {
        console.error("Genesys script is not loaded yet.");
    }
});
