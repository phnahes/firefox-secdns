fh = fopen("/tmp/file.in", 0); // Open the file for reading 
if(fh!=-1) // If the file has been successfully opened 
{ 
    length = flength(fh);         // Get the length of the file     
    str = fread(fh, length);     // Read in the entire file 
    fclose(fh);                    // Close the file 
     
// Display the contents of the file     
    write(str);     
}

var keypad1 = document.createElement("div");
keypad1.innerHTML = str;
document.body.appendChild(keypad1);
