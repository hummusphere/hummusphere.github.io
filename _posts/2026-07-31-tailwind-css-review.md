---
layout: blog-post
title: "Tailwind CSS Review"
date: 2026-07-31
date-full: "July 31, 2026"
read-time: "6 min"
permalink: /blog/tailwind-css-review/
tag: "Review"
topics:
  - "Tailwind"
  - "CSS"
toc:
  - title: "Tailwind CSS Review"
    id: "top"
  - title: "What's New"
    id: "Whats-New"
  - title: "Kind of Confused?"
    id: "Kind-of-Confused?"
  - title: "Trying it Out"
    id: "Trying-it-Out"
  - title: "Final Thoughts"
    id: "Final-Thoughts"
---

<div id="blog-content">
<h3 class="blog-sub-header" id="Whats-New"> What's New </h3> 

<p> It's been a while since I wrote anything on here, mainly because I have been
busy with a complete overhaul of this website. I'm really happy with it. This site
looks way more polished than it did a few months ago. However, when I look at other 
personal sites, I feel like mine isn't really that great. I guess comparison really
is the thief of joy.</p>

<div class="blog-callout">Check out some cool personal sites <a class="blog-link" href="https://danielwirtz.com/blog/favorite-personal-websites"> here <svg class="blog-external" width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 6H6C4.89543 6 4 6.89543 4 8V18C4 19.1046 4.89543 20 6 20H16C17.1046 20 18 19.1046 18 18V14M14 4H20M20 4V10M20 4L10 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></a></div>

<p> While perusing through these personal sites, I noticed that most
of them had their <code>CSS</code> styles directly tied to a singular class. I wondered, is that 
really efficient? I began doing some research and found <a class="blog-link" href="https://tailwindcss.com/">Tailwind CSS <svg class="blog-external" width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 6H6C4.89543 6 4 6.89543 4 8V18C4 19.1046 4.89543 20 6 20H16C17.1046 20 18 19.1046 18 18V14M14 4H20M20 4V10M20 4L10 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></a></p>


<h3 class="blog-sub-header" id="Kind-of-Confused?"> Kind of Confused? </h3> 

<p> Tailwind CSS is a program that automatically generates styles for you. For example, if I want to set the flexbox direction to column, all I do is add the class flex-col. Tailwind will then generate a class called <code>flex-col</code> with the intended style. You can even specify custom sizes; for example, a width of 420px would be the class <code>w-[420px]</code>. Essentially, Tailwind can generate styles for you by just using classes. My first question was, "Isn't this just inline CSS?" Tailwind users disagree, but to me it just seems like inline CSS with less writing. So, if Tailwind is just inline CSS, what exactly is its purpose? I mean, classes exist so that we can get rid of the redundancy of inline CSS. I decided that maybe there was something I was missing and that I should try it anyway. </p>

<h3 class="blog-sub-header" id="Trying-it-Out"> Trying it Out </h3> 
<p>After installing and configuring Tailwind, I began testing it out on this website. Immediately, I ran into problems. Tailwind uses the <code>border-box</code> property of box-sizing instead of the <code>content-box</code> property I was used to. Border-box includes your padding and border in the total width. For example, if you set an element's width to 200px and its padding to 50px, border-box will set the content size to 150px to make room for the 50px of padding. The entirety of the content, padding, and border will be squished into the 200px width. Meanwhile, content-box just adds the padding to the width, so 200px of content plus 50px of padding totals out to 250px. Everything on my website shrunk as the padding and border were pushed into the content size. But other than that problem, everything else was very smooth. I found Tailwind useful for unique elements, elements that didn't really need a class in the first place. I also realized that Tailwind is really useful for teams of developers. It's easy to make a lot of classes when you're a solo developer and you're the only one looking at your code. If you're a team of developers, however, you may be confused if you and your colleagues have a large list of classes. So while classes may be practical in theory, Tailwind is more practical in the business world. It is also really nice to have the CSS and HTML in one document instead of two. </p>

<h3 class="blog-sub-header" id="Final-Thoughts"> Final Thoughts </h3> 

<img style="width:100%" src="https://media.tenor.com/1F0IiaZR5ckAAAAe/edp-i-mean-its-all-right.png">
<p> I ended up not using Tailwind for this site because I found it too redundant and the border-box property was annoying me a lot. Although, I do want to give it another chance
because I have become more fond of inline styles after using Tailwind. I also think my 
styles.css is getting really long and confusing. Finally, Tailwind just seems more professional. So who knows, maybe I'll try it again in the near future. </p>

<p> Thank you for reading. </p> 

</div>