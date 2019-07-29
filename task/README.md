Hi

As per advice I didn't do it all because it was the weekend but I can on Monday do the flux/redux part to sync the gallaries.

I'll also tidy up the code a little bit and add any missing useful comments.

The redux part works like this:

  - Because the animations will not run if we simply update the app on state changes then instead we pass in an 'initial slide' and a 'direction' (stored in redux store)
  - On first render these are by default, slide 1 and null for direction.
  - If the slideshow component is wrapped by the react-redux connect function then it will have 
  a dispatch property to update the redux store. 
  - If this is present then on the left/right button clicks the store's value for 'initial slide' and 'direction' are updated.
  - The app then rerenders when the propeties update (rerendering all three slideshows) n.b. this is only a virtual rerender.
  - we use a useEffect hook which runs after render to move the slideshow on in the direction that is stored in the redux store.
  
 *this means we get the animation properly running and the slideshows stay in sync*

James

