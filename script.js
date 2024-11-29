document.addEventListener("DOMContentLoaded", function () {
    // Select the send email button correctly
    const sendEmailButton = document.getElementById('sendEmailButton');
    
    fetch('congressmen.json')
        .then(response => response.json())
        .then(data => {
            const congressmen = data.congressmen;

            // Select the email text area for displaying the default message
            const emailTextArea = document.getElementById('emailText');

            // Default email body 
//             const defaultEmailBody = `British Home Office / British High Commission in Pakistan,
// I am writing to express serious concerns regarding the radicalization of British youth of Pakistani origin, fueled by the political tactics of the Pakistan Tehreek-e-Insaf (PTI) and its leader, Imran Khan. 
// PTI has increasingly used incitement and propaganda to create hostility against those with differing political views, particularly targeting Pakistani dignitaries visiting the UK. 
// This trend undermines British democratic values of tolerance and respect while promoting an atmosphere of intimidation and aggression, which is incompatible with the UK’s principles of free expression and public safety.

// Sincerely,`;

            const defaultEmailBody = `British Home Office / British High Commission in Pakistan,
    I am writing to express serious concerns regarding the radicalization of British youth of Pakistani origin, fueled by the political tactics of the Pakistan Tehreek-e-Insaf (PTI) and its leader, Imran Khan. 
    PTI has increasingly used incitement and propaganda to create hostility against those with differing political views, particularly targeting Pakistani dignitaries visiting the UK. 
    This trend undermines British democratic values of tolerance and respect while promoting an atmosphere of intimidation and aggression, which is incompatible with the UK’s principles of free expression and public safety.
    A recent incident exemplifies this issue: on October 29, PTI supporters verbally abused and physically attacked the vehicle of former Chief Justice of Pakistan, who was visiting London in his new role as a Bencher at Middle Temple. 
    Such incidents are far from isolated; they follow repeated harassment and aggressive demonstrations against figures like former Prime Minister Nawaz Sharif. Videos of these actions are circulated widely on social media by PTI, using public disorder as a campaign tool to energize a populist cult-like following.
    These incidents have escalated into a concerning pattern of radicalization within the British-Pakistani diaspora, whereby youth are encouraged to engage in politically motivated violence under the guise of "supporting democracy." 
    This aggressive, politically-charged behavior mirrors the tactics of fascist movements that historically, as the UK well remembers, led to devastating consequences when left unchecked.
    I urge the British authorities to address this matter promptly by reviewing applicable statutes and provisions against incitement to violence, hate speech, and political interference. 
    Relevant laws under the UK Terrorism Act, the Public Order Act 1986, and international obligations to prevent radicalization, including the EU's counter-radicalization framework, may serve as foundations for preventive measures. 
    Moreover, the UK’s commitment to its own democratic values compels a response to groups that misuse its democratic freedoms to propagate fascism and hate. 
    The situation also warrants a closer examination of foreign influences on diaspora communities under the PREVENT strategy.
    We call upon the UK to take robust steps to counter this wave of radicalization and violence within its borders, uphold its democratic principles, and prevent the misuse of its freedoms for fascist ends. 
    By taking firm action, the UK can continue to set an example for tolerance, peace, and responsible governance.

Sincerely,`;
            // Display the initial default email body
            emailTextArea.textContent = defaultEmailBody;

            // Concatenate all emails into a single string
            const allEmailAddresses = congressmen.map(congressman => congressman.email).join(',');

            // Add event listener to the send email button
            sendEmailButton.addEventListener("click", function () {
                const mailtoLink = `mailto:${allEmailAddresses}?subject=${encodeURIComponent('Urgent Concerns on PTI Radicalization of British-Pakistani Youth and Rising Threats to Visiting Dignitaries')}&body=${encodeURIComponent(defaultEmailBody)}`;
                
                // Set mailto link and update email content preview in textarea
                sendEmailButton.href = mailtoLink;
                emailTextArea.textContent = defaultEmailBody;
            });
        })
        .catch(error => console.error('Error loading congressman data:', error));
});
