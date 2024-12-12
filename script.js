document.getElementById("cmd").addEventListener("click", function () {
    // Import jsPDF from the CDN or package
    const jsPDF = window.jspdf.jsPDF;

    // Create a new instance of jsPDF
    const pdf = new jsPDF();

    // Fetch the content of the body
    const content = document.body;

    // Use html2canvas for accurate rendering of the HTML content
    html2canvas(content).then(canvas => {
        // Convert the canvas to an image
        const imgData = canvas.toDataURL('image/png');

        // Add the image to the PDF document
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

        // Save the PDF file
        pdf.save("resume.pdf");
    });
});
