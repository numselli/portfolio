---
title: '2004 Prius upgraded SQ audio setup'
date: 2025-06-03
description: 'Documenation of my SQ audio build in a 2004 Prius'
---

# Intro
When I was very young my dad was quite involved in the car audio scene, he brought me to car audio meetups and entered me in some of the competitions. For the most part it was one of his interests that he involved me in, up until senior year of high school when the thoughts of getting a driver's license and car became more meaningful. From listening to my dads truck and other cars, I knew that I would not be happy with the stock sound system in the car I got.

Well, on 2023/09/07 I bought a second generation Toyota Prius (2004-2009). After buying the car my suspicion that I would not like the stock sound system was confirmed after I drove it back home. While it did have the JBL audio upgrade, it was not much of an upgrade over the base system. I wanted to be able to play from a streaming service from my phone or ideally have access to the streaming service without needing a companion device . The only inputs the car had were AM/FM radio, tape and CD, no AUX in or bluetooth connectivity. I also noticed that the noise floor  was quite high, when setting the volume to 0 or off, I could hear a fair amount of static that should not have been audible. It had Low dynamic range, when turned up it was hard to differentiate out the different instruments, lastly it had a low clipping point, clipping is distortion from the amplifier when the volume is turned up.

Three hours after I got the car home I took everything in the trunk out and was planning where to put the amplifiers, subwoofer, and computer. When I was looking at aftermarket head units I realized that even with the top of the line head units I would not be able to achieve the quality and user experience that I wanted. The easy way would be to use Android Auto on an aftermarket screen, however I use GrapheneOS which does not support Android Auto. Even if I went with the top of the line aftermarket head unit, I would not get the maps and streaming service integration that I wanted. So I decided to put in a computer and a touch screen as my head unit instead of buying a pre-existing head unit. A blog post about my custom head unit is in the works as I make progress on this project.


# Planning
My must haves:
- Streaming services on the head unit itself 
- 32bit audio (I know it's above the range of human hearing but if I am going through the effort, I might as well)
- Low budget - primarily use my dad’s “spare parts”. I just spent all my money on a car I don't have much money to spend on the sound system
- Stealth install want to keep as much trunk space as possible and maintain a stock look

The most common install layout that I have seen on this car is, head unit driving rear speakers, amplifier under passenger seat (stock location) driving the fronts, sub box in trunk, sub amp on the sub box. It's a decent layout for a lot of people, but for me, it's not what I want.

The placements that I came up with:
- Sub box where spare tire normally goes
- A shelf on either side of the sub box for the amplifiers and power distribution
- Passive crossovers under the passenger seat where the stock amp was
- Computer in the cavity where the stock head unit was
- Supporting components sprinkled wherever necessary or they fit



# Building 
Running the wires
I took out the rear and passenger seats, B-pillar, stock amp, center console, trunk sides, hybrid battery floor cover, trunk floor, under trunk storage, and spare tire. With all the trim pieces removed I ran my wires from back to front. I ran more wiring than I felt necessary because I did not know how I would change the setup over time.
The wires I ran:
- Ethernet, initially ran for networking on the head unit, later repurposed for USB over ethernet, then abandoned after.
- SPDIF, intended to be used for higher quality audio to a DSP, was never used, later removed.
- RCA, used to carry audio signals from the computer to the amplifiers. 
Two lines of speaker wire to where the stock amp was, under the passenger seat
- Five pairs of power lines: 
  - One to the upper right corner of the windshield for a dash cam. Never used, later pulled back to the fuse box
  - One for the computer
  - One for the computer screen
  - One intended for a DAC, never used, later pulled back to the fuse box
  - One too the clock to use as an ACC signal, to know when the car is on or off

# Head unit
I took out the stock head unit, A process that I would very quickly learn and get fast at. The process is taking off the left vent, lower steering wheel cover, upper cover, middle left vent, middle right vent, storage pocket cover, and Multi-Function Display. I then discovered that the climate control system would not work without the stock head unit. Bypassing this was fairly simple, a 68Ω resistor between pins 9 and 10 on the large connector with 5 wires. I then modified the stock head unit bracket to mount the computer to. I then mounted the computer to the bracket and added a mounting plate with a nut welded on to it. I then threaded an adjustable camera mount to the nut, that will then hold the display. Lastly I installed an AUX in port and two USB-C ports in the center of the car, behind that the DAC for the head unit.

# Sub box
My dad has designed and built some custom sub boxes for his vehicles in the past, so he is the person I turned to for advice. I was debating what type of box to build, I was leaning towards a sealed box because it has better sound accuracy. When I looked up the required internal volume required for my sub and inputted that into a box size calculator, the box would be too big for where I wanted to put it. I was not willing to compromise on my stealth install so I started to look into ported boxes. A ported box has a number of benefits in this situation: It is louder, requires less internal volume, and the sub is designed to be in a ported install. I gave my findings to my dad so we could design the box. Instead of working together to come up with a configuration that fits the car while staying as close to the ideal measurements, he decided to eyeball it. This of course made me very nervous, because I had sunk a fair amount of resources into the project and really wanted a result I would be happy with. To make the nervousness even worse I would not be able to tell if it's what I wanted until the project is complete and at that point it's too late to change it. In the end I was very happy with the results.



# Amp rack
The layout I settled on: 
- On the left, low amperage distribution block, amplifier for sub 
- In the center the sub
- On the right panel, amp for the front, timer relay, ground distro block, and positive fuse block

The wiring for this amp rack is fairly standard for aftermarket accessory wiring, 0 gauge wire from the battery to the positive and negative distro blocks, then 4 gauge from distro blocks to the amplifiers. The accessory line is where the wiring deviates from a typical install. I tapped into the car's accessory line from the car's clock and wired it into a relay (ACC-rly). This relay allows me to electrically isolate the accessory signal. Isolating the accessory line has a few benefits, mainly protecting the car and allowing the sound system to run independently from the car with a jumper wire. The output of ACC-rly triggers two things, the accessory tigger on the amplifiers and a timer relay. The timer relay is a unique part of this system, it is set up to power off after 1 minute of the car being off. The timer relay controls another relay (that probably should be a contactor) this relay controls the low amperage fuse block. The reason for this delay is so that the computer has time to do a safe shutdown before the power is cut. 


# Concusion
Overall I am very happy with the setup, it meets my requirements wonderfully. Just like everything there are some things that could be improved upon. Some of the things I would like to improve, add a DSP for time alignment and to get a sub line out, improve the mounting for the passive crossovers, and lastly various aspects of the head unit. 

I have put together a [photo album of my build log ](https://photos.numselli.xyz/share/CHDtHnVhA8n4riWA1SO8e-oKaGeHZ6sxuSOSCcY0EILz8uJAnEb10-lgUy_jZ8Qr8rw) along side a [video walkthrough of the set up](https://www.youtube.com/watch?v=stM5aUjB7Fs). Future revisions of the setup will likely get a video rather than a blog post due it being an easier form for this content.
