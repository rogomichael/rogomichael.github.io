document.getElementById('downloadPdfLink').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default action of opening a new tab

  // Create a temporary anchor element
  var link = document.createElement('a');
  link.href = 'downloads/program.pdf'; // Replace 'example.pdf' with the path to your PDF file
  link.download = 'downloads/program.pdf'; // Specify the filename for the downloaded file

  // Append the anchor element to the document body
  document.body.appendChild(link);

  // Trigger a click event on the anchor element
  link.click();

  // Remove the anchor element from the document body
  document.body.removeChild(link);
});
