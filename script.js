function downloadFile(filePath) {
    // Create a temporary <a> element
    const a = document.createElement('a');
    a.href = filePath; // File path to the PDF
    a.download = filePath.split('/').pop(); // File name from the path
    document.body.appendChild(a);
    a.click(); // Trigger the download
    document.body.removeChild(a); // Clean up
  }
  