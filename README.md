#PRIORITIZR

##A Simple Web App to Prioritize Your Life, according to Covey's Four Quadrants

###Urgent

###Important


###Features

- Users can type items in
- Users can rearrange (drag and drop) items between quadrants
- Items can be passed between quadrants and become members of that quadrant's collection
- Items can be dragged to a certain position in a list
- Item inputs are wide enough for 72 chars of text
- User can click an item's text to edit it
- Edit box should not add any styling to item box (should just have cursor and white background)

- Quadrants have height (1/4 page)
- User can see 2x2 grid with "Urgent" and "Important" labels

Users can save their items (as cookie, in DB)
Users can drag-and-drop an item to the recycle bin in lower-right corner to remove it

Quadrants have watermarks of roman numerals I, II, III, and IV in background (perhaps no quadrant lines either)
Quadrants have "Urgent" "Important" "Urgent" "Not Important" watermarks in background (perhaps without quadrant lines as well)

Quadrants are styled with light blue/cerulean borders, 1/2" thick and textured (circular grained)
Dragged boxes are highlighted with light-blue/cerulean dot border
Item boxes are styled with a border

Mobile view: 
  Items can be dragged and dropped
  4 quadrants display on page (shrunk # of items? a flip-to-view each quadrant like the iOS safari browser pages?)

Users can click items 1-2-3 times to change the box's color (red-yellow-green-0)
Users can double-click an item to trigger a removal dialog
Users can shift-click an item to grey it out

Items are default 64-pt font

Items are responsive font (items grow and shrink according to window size)
Items are responsive font (items grow and shrink according to how many items are on page - page has a max width and height (media queries))

Users can toggle the "Urgent/Important" labels/handrails on/off

How to handle overflow? (Scroll sucks) - perhaps limit number shown and allow rest to be shown on popover? Or raise an error message like "too many items in quadrant. Complete some items or add to icebox" - and then implement a trash can and an icebox icon in corner? Perhaps some use/usage testing will show

Overflow on items generates a scrollable - or simply refuses to add (or adds to a backlog that pops in as desired (we only display the top 5))

Add bootstrap progress bars that compares number of items in your quadrant to 0 (ie "Time Til 0" progress - if 5 items, shows 20% complete)

Pop-up alerts on item completion ("Good job!" or even "Good job! You completed an item in Quadrant II - the most important Quadrant to focus on!")

Feature that tells you what to prioritize next ("The last 5 items you completed were QII... do 1 in Q1..." etc.)