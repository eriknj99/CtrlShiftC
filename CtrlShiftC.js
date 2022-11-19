console.log("Ctrl+Shift+C Running!")

function getSelectionText(){
    var selectedText = ""
    if (window.getSelection){
        selectedText = window.getSelection().toString()
    }
    return selectedText
}

function updateClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    /* clipboard successfully set */
    console.log("Ctrl+Shift+C Copied: " + text)
  }, () => {
    /* clipboard write failed */
    console.log("Ctrl+Shift+C Failed to copy :(")
  });
}


onkeydown = function(e){
 
  // The key combo is not modifiable because it is
  // literally the name of the extension!
  if(e.shiftKey && e.ctrlKey && e.keyCode == 'C'.charCodeAt(0)){
    
    // Stop dev tools from opening
    e.preventDefault();
    
    // Get the current selection
    var selected = getSelectionText()
    
    // Only copy if something is selected
    if(selected.length > 0)
    {
      // Save the selection to the clipboard
      updateClipboard(selected)
    }
    
  }
}