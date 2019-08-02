The slideshow component is standalone and can work without redux. As requested the slideshow infinitely scrolls (loop).

It can be connected to a reducer using react-redux connect method, when it will be passed a dispatch method. If the dispatch method exists it will defer control to the reducer allowing you to sync it to the other slideshows on the page.

The redux part works a little differently:

  - Because the animations will not run if we simply update the app on state changes (b/cos the parent component 're-renders') so instead of passing the current slide to show we pass in an 'initial slide' and a 'direction' (both stored in redux store)
  - After the first render we use the useEffect hook and animate from 'initial slide' in the direction the user clicked, taking us to the correct 'current slide' but giving the appearance of seamless animation from the previous slide.
  - First slide and direction are by default, slide 1 and null for direction.
  - This means we get the animation properly running and the slideshows *stay in sync*
 
 ### note:
 mobile/responsive breakpoint settings are in /src/App.scss

