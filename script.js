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

            const defaultEmailBody = `To Whom It May Concern,

We, concerned citizens of Pakistan, are writing to bring to your attention the ongoing misogynistic hate campaign being conducted by Ahmed Noorani, a journalist currently residing in the United States. His actions violate ethical standards and contravene the values and commitments of the United States toward protecting women's rights and well-being, as outlined in its laws and international obligations.

Key Issues:

Targeting Female Family Members of Political Opponents:
Ahmed Noorani has repeatedly attacked the female family members of politicians and public figures, including those who are not part of public life. He has used demeaning and misogynistic language, accusing them of being "prostitutes" and invoking patriarchal stereotypes. These accusations are particularly dangerous in a society like Pakistan, where such claims can result in social ostracism, violence, or even honor killings.
Attacks on Female Journalists and Their Families:
Noorani has also extended his hate campaign to the female family members of other journalists, including those affiliated with internationally respected organizations like the BBC. These women, who have no public roles, are being subjected to defamation and abuse, further endangering their safety in Pakistan.
Endangering Lives Through Online Campaigns:
Noorani’s attacks are not limited to public figures but include his own second wife, whom he secretly married in Pakistan and then abandoned with two children. She has publicly stated that he has refused to provide her with proper divorce papers. Noorani’s associates have launched online harassment campaigns against her, putting her life at significant risk in a country where such stigmatization often leads to violence.
Use of U.S. Soil to Conduct Hate Campaigns:
Noorani is exploiting the safe haven provided by the United States to orchestrate harmful campaigns against vulnerable women in Pakistan. His actions directly undermine women's rights and violate U.S. principles of equality, non-discrimination, and protection from hate-based behavior.
Relevant Legal References:

Violence Against Women Act (VAWA): The U.S. has committed to protecting women from abuse, including psychological harm and online harassment.
International Covenant on Civil and Political Rights (ICCPR): The U.S. is a signatory to this treaty, obliging states to prevent hate speech and protect vulnerable groups, including women.
U.S. Cyberstalking and Harassment Laws: Under 18 U.S. Code § 2261A, using online platforms to harass or intimidate individuals is a federal offense.
Our Request:

We urge U.S. authorities to:

Investigate Ahmed Noorani's activities under relevant U.S. laws addressing hate speech, cyber harassment, and misogynistic behavior.
Reassess his residency or asylum status if his actions are found to contravene U.S. laws and commitments to human rights.
Ensure he ceases all harmful online campaigns targeting women, whether in the United States or abroad.
Allowing such behavior to go unchecked risks providing a platform for hate and endangering the lives of women in vulnerable societies. We trust that U.S. authorities will act swiftly and justly in alignment with their values and legal frameworks to address this matter.

Attachments:

Screenshots of tweets and posts by Ahmed Noorani.
Public statement from his second wife.
Sincerely,

Concerned Citizens of Pakistan`;
            // Display the initial default email body
            emailTextArea.textContent = defaultEmailBody;

            // Concatenate all emails into a single string
            const allEmailAddresses = congressmen.map(congressman => congressman.email).join(',');

            // Add event listener to the send email button
            sendEmailButton.addEventListener("click", function () {
                const mailtoLink = `mailto:${allEmailAddresses}?subject=${encodeURIComponent('Urgent Request for Action Against Misogynistic Hate Campaign by Ahmed Noorani')}&body=${encodeURIComponent(defaultEmailBody)}`;
                
                // Set mailto link and update email content preview in textarea
                sendEmailButton.href = mailtoLink;
                emailTextArea.textContent = defaultEmailBody;
            });
        })
        .catch(error => console.error('Error loading congressman data:', error));
});
