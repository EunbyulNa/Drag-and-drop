# Drag-and-drop

# 1. How it works
Drag the transportation items into the correct box, only you can drop it, when you put an item into the right box. <br>
When they are matching, the dropbox background colour will change to the drag item colour, and the drag item colour will change to white. <br>
Once everything is done, the final message will show up "Yay, well done!".

# 2. What I learned 
 * HTML Drag and drop API <br>
    -First, you need to make an HTML element dragable, set the dragable attribute to 'true'.
 * What to drag <br>
    -Specify what should happen when the element is dragged, so put the dragstart event to the drag item. <br>
   Data transfer.setData() method sets the data type, and the value of the dragged data. In this case, <br>
  datatype is "text" and the value is the id of the drag item.<br>
 * where to drop <br>
   -Add drop event to the drop boxes. <br>
   - dragenter : Call preventDefault() to prevent browser default handling, and add classList to change the dropbox style. <br>
   - dragover <br>
   - dragleave : When the user leaves, remove the dropbox styling classList so that it can be back to the original styling.<br>
   - drop: I want to drop function vailed, only when the user puts an item into the correct box, <br>
     so I put if statement to check whether is matches or not. if drag item data is equal to dropbox data, then append the drag item into the dropbox. <br>
     I also want to add the final message, so I counted numbers from the beginning, and only the number increased when they are matching.once the number reaches 4, then show the final message.


