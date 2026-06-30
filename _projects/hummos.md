---
layout: project
title: HummOS
date: 2026-06-29
permalink: /projects/hummos/
desc: "My own custom operating system made from assembly."
img: "https://github.com/hummusphere/HummOS/blob/main/preview.png?raw=true"
width: "300"
height: "200"
toc:
  - title: "HummOS"
    id: "top"
  - title: "Description"
    id: "description"
  - title: "Getting Started"
    id: "getting-started"
  - title: "Installing"
    id: "installing"
  - title: "Exeucting Program"
    id: "executing-program"
  - title: "Acknowledgments"
    id: "acknowledgments"
---

# HummOS

My own custom operating system made from assembly. Click below for a demo.

<a href="https://youtu.be/AIzbUgElu74"><img style="border-radius:7px; border: 1px solid var(--border-color);" width="600" height="300" src="https://github.com/hummusphere/HummOS/blob/main/preview.png?raw=true"></a>

## Description
This project took around 40 hours. It has a built-in command line interface, you can use any of the available commands displayed below. HummOS mainly relies on the BIOS's VGA text mode, so the program might look different depending on your software. This entire program fits inside a 1.44MB floppy disk with the kernel using 50 sectors of memory.  

**Available Commands:**

* **help**                  - list of commands         
* **clear**                 - clear terminal           
* **quit**                  - quit system              
* **reboot**                - reboot system            
* **time**                  - display time             
* **info**                  - system info              
* **error**                 - blue screen of death     
* **bits**                  - bits-hex conversion table
* **matrix**                - matrix rain              
* **pong**                  - pong game                
* **snake**                 - snake game               
* **snake-hard**            - snake hard mode          
* **dvd**                   - bouncing dvd screensaver 
* **sps**                   - print sps logo           
* **lion**                  - view lion image          
* **unicorn**               - view unicorn image       
* **2026**                  - class of 2026            
* **credits**               - sources and credits     

## Getting Started 
                    
### Prerequisites
Make sure that you have these programs installed:
* NASM - Assembly compiler
* QEMU - Virtual machine emulator
* Make - building the source code

### Installing
There are two ways of using HummOS. You can either run the makefile and use a virtual machine manager to emulate HummOS or you can load main_floppy.img onto a live USB that has GNU GRUB installed and test it out on real hardware.

### Executing Program
Move into the main folder and run the makefile:
``` 
make
 ```
Then run:
``` 
./run.sh
 ```

## Acknowledgments

### Tutorials
* Mxy's assembly tutorial on youtube (https://www.youtube.com/@MxyAhoy)
* Nanobyte's operating system tutorials on youtube (https://www.youtube.com/@nanobyte-dev/videos)

### ASCII Art Tools / Sources
* Image to ASCII - https://www.asciiart.eu/image-to-ascii
* Text to ASCII - https://patorjk.com/software/taag/
* Lion ASCII - https://asciiart.cc/view/12679
* Unicorn ASCII - cjr - https://www.ascii-art.de/ascii/uvw/unicorn.txt
* Other ASCII - https://www.asciiart.eu/

### Other Software
* GNU GRUB - Free Software Foundation
