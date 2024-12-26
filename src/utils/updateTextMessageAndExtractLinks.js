function updateTextMessageAndExtractLinks(message, type) {
    // Regex for URLs, Matches URLs starting with http/https.
    const urlRegex = /(https?:\/\/[^\s]+)/g;

    const uniqueUrls = new Set();
    const fontColor = `color: ${type === "incoming" ? "#008B8B;" : "white;"}`;
    const updatedTextMessage = message.replace(urlRegex, function (url) {
        uniqueUrls.add(url);
        return `<a href=${url} target="_blank" rel="noopener noreferrer" style="${fontColor} text-decoration: underline;">${url}</a>`;
    });

    return {
        originalMessage: message,
        updatedMessage: updatedTextMessage,
        urls: [...uniqueUrls],
    };
}

export default updateTextMessageAndExtractLinks;
