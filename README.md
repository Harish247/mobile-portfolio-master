## Website Performance Optimization portfolio project
### Getting started
1. Check out the repository
2. npm install

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```
3. Open localhost:8080 on a browser.

####Part 1: Optimize PageSpeed Insights score for index.html
1. Optmized the images using grunt-contrib-imagemin.
2. To use the image optimization run 
   ```
   grunt imagemin
   ```

3. Resized the images using [resize image](http://resizeimage.net/)
4. Inline the style.css file.
5. Added print media tag for print.css style.
6. Added async tag to js files.
7. Replace image sources with optimized images.
    
####Part 2: Optimize Frames per Second in pizza.html
1. Moved all document elements from loops to optimize the performance. Created the local variable and reused them.
2. Replaced querySelctor with more specific id and class based selectors.
3. Reducing the size of pizzas in addEvenListener function which are looking fine on screen and helping to imrove the perfomance.

####Part 4: Optimize Time to resize pizzas in pizza.html
1. Replaced all querySelctors with specific by id and by class selectors.
2. Moved dx caluculation out from the loop which is consuming lot of time. Caluculating dx for first pizza element and using it for all pizza elements.

####References
1. Udacitu forums 

