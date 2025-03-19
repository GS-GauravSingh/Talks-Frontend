function extractLinksFromTextMessage({ message, type }) {
	// Regular expression to match URLs
	const urlRegex = /(?:https?:\/\/|www\.)[^\s/$.?#].[^\s]*/gi;

	// Replace each URL with an <a> tag
    const linkColor = type === "incoming" ? "#1E90FF" : "#002366"
	const modifiedMessage = message.replace(urlRegex, (link) => {
		return `<a href="${link}" target="_blank" rel="noopener noreferrer" style="text-decoration: underline; color: ${linkColor};">${link}</a>`;
	});

	return modifiedMessage;
}

export default extractLinksFromTextMessage;
