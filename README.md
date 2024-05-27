# 👩‍💻 Developer Portfolio

**⚡ LIVE SITE** --> <a href="https://nikkipinzon.com" target="_blank">https://nikkipinzon.com</a>

## Overview

<img src="https://firebasestorage.googleapis.com/v0/b/portfolio-cd2d0.appspot.com/o/portfolio%20redesign%20screenshot.png?alt=media&token=570b80b9-0244-4868-bfce-c911ae63f2f5" width="900rem"/>
<br /><br />

This is a professional portfolio I built with React to showcase my expertise as a Software Engineer. 

Here are a few key things I learned:

- I learned all about <span style="color: yellow">**SVG paths**</span> and how to draw them in XML. I used my knowledge of arcs and bezier curves to make the AGILE graphic in the hero section. The most **important** thing I learned here is to make sure you **plan out the whole graphic in the same SVG**. I originally thought I could just absolutely position the gear in the middle of the ring in a component but then I ran into an issue where it would move outside the ring on window resize. I was also using translate(-50%, -50%) on the gear to center it, which was messing up the rotation animation. That was when I figured I'd better just draw the gear inside the ring so it always sits in the middle without needing to position it with CSS.
- You can <span style="color: yellow">**animate page sections**</span> on scroll to fly in from the left of the screen ➡ by **adding a useRef** to the target element, **listening to the window height** compared to its position and **making it visible** once the element is in view.
- You can <span style="color: yellow">**stagger list items**</span> so they come in one at a time ➡ by giving each **child element** a slight **delay**.
- <span style="color: yellow">**Third party libraries**</span> can either **save or cost** you **significant development time**. For example, I used the "react-hamburger" library for the collapsable hamburger menu which saved me from having to create my own. But it also doesn't accept custom styles so that would need to be something you consider before taking the time to play around with it.

<!-- TODO: Add a screenshot of the live project.
    1. Link to a 'live demo.'
    2. Describe your overall experience in a couple of sentences.
    3. List a few specific technical things that you learned or improved on.
    4. Share any other tips or guidance for others attempting this or something similar.
 -->

<a href="https://react.dev/" target="_blank">
Built with React.js
<img alt="React.js" width="34px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
</a>

<!-- TODO: List any MAJOR libraries/frameworks (e.g. React, Tailwind) with links to their homepages. -->

## Acknowledgements

### Libraries

<ul>
    <li>
        <a href="https://www.npmjs.com/package/hamburger-react" target="_blank">hamburger-react
        </a> — I picked this for its smooth animation and ease of implementation.
    </li>
    <li>
        <a href="https://react-hook-form.com/" target="_blank">react-hook-form</a> — Easy to set up validation, highly performant, good support.
    </li>
    <li>
        <a href="https://www.emailjs.com/" target="_blank">emailjs</a> — lightweight and easy to set up with free tier.
    </li>
</ul>

### Helpful Links

<ul>
    <li>
        <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths" target="_blank">SVG Paths (MDN web docs)</a>
    </li>
</ul>

<!-- TODO: List any blog posts, tutorials or plugins that you may have used to complete the project. Only list those that had a significant impact. Obviously, we all 'Google' stuff while working on our things, but maybe something in particular stood out as a 'major contributor' to your skill set for this project. -->
