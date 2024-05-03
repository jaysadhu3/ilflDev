
function openPdfInNewTab(base64String: string) {
    const prefixIndex = base64String.indexOf(';base64,');
    if (prefixIndex !== -1) {
        base64String.slice(prefixIndex + 8); // Skip prefix and comma
    }
    const binaryString = window.atob(base64String);
    const binaryLen = binaryString.length;
    const bytes = new Uint8Array(binaryLen);

    for (let i = 0; i < binaryLen; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }

    const blob = new Blob([bytes], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);

    // Open PDF in new tab
    window.open(url, '_blank');
  }